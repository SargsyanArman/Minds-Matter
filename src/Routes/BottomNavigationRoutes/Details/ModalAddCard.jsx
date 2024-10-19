import React, { useState } from "react";
import { updateDoc, arrayUnion, doc } from "firebase/firestore";
import { db } from "../../../fireBase";
import { useAuth } from "../../../Hooks/use-auth";
import { Box, Button, IconButton, Modal, Typography } from "@mui/material";
import { AddCard } from "@mui/icons-material";
import SharedInput from "../../../Components/Shared/SharedInput";
import { useContext } from "react";
import { LangContext } from "../../../Contexts/LangContext";
import { DETAILS_MODAL_BOX_STYLES, DETAILS_MODAL_INPUT_BOX_STYLES, DETAILS_MODAL_STYLES, MODAL_INPUT_STYLES } from '../../../Constants/ProfileNavigationConstants';

export default function ModalAddCard({ onCardAdded }) {
	const [open, setOpen] = useState(false);
	const [cardData, setCardData] = useState({
		cardNumber: "",
		expiryDate: "",
		cvv: ""
	});
	const [errors, setErrors] = useState({});
	const { id } = useAuth();
	const { t } = useContext(LangContext);
	const prefix = "Profile";

	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const validateCardNumber = (number) => /^\d{4} \d{4} \d{4} \d{4}$/.test(number);
	const validateExpiryDate = (date) => /^(0[1-9]|1[0-2])\/[0-9]{2}$/.test(date);
	const validateCvv = (cvv) => /^\d{3,4}$/.test(cvv);

	const formatCardNumber = (number) => {
		let digits = number.replace(/\D/g, "").slice(0, 16);
		return digits
			.replace(/(\d{4})(\d{1,4})/, "$1 $2")
			.replace(/(\d{4} \d{4})(\d{1,4})/, "$1 $2")
			.replace(/(\d{4} \d{4} \d{4})(\d{1,4})/, "$1 $2")
			.trim();
	};

	const formatExpiryDate = (date) => date.replace(/\D/g, "").replace(/(\d{2})(\d{1,2})/, "$1/$2");

	const handleAddCard = async () => {
		let valid = true;
		const newErrors = {};

		if (!validateCardNumber(cardData.cardNumber)) {
			valid = false;
			newErrors.cardNumber = t(`${prefix}.number error`);
		}
		if (!validateExpiryDate(cardData.expiryDate)) {
			valid = false;
			newErrors.expiryDate = t(`${prefix}.date error`);
		}
		if (!validateCvv(cardData.cvv)) {
			valid = false;
			newErrors.cvv = t(`${prefix}.cvv error`);
		}

		if (valid) {
			try {
				const userDocRef = doc(db, "users", id);
				await updateDoc(userDocRef, {
					paymentMethod: arrayUnion(cardData)
				});
				onCardAdded();
				handleClose();
			} catch (error) {
				console.error("Error adding card: ", error);
			}
		} else {
			setErrors(newErrors);
		}
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setCardData((prev) => ({ ...prev, [name]: value }));
		if (name === "cardNumber") setCardData((prev) => ({ ...prev, cardNumber: formatCardNumber(value) }));
		if (name === "expiryDate") setCardData((prev) => ({ ...prev, expiryDate: formatExpiryDate(value) }));
	};

	return (
		<>
			<IconButton color="primary" aria-label="add to bank card" onClick={handleOpen}>
				<AddCard style={{ fontSize: "40px" }} />
			</IconButton>
			<Typography color="primary">{t(`${prefix}.attach title`)}</Typography>
			<Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
				<Box sx={DETAILS_MODAL_STYLES}>
					<div style={DETAILS_MODAL_BOX_STYLES}>
						<Typography id="modal-modal-title" variant="h5" component="h2">
							{t(`${prefix}.attach title`)}
						</Typography>
						<img src="https://mythslegendscollection.com/wp-content/uploads/2020/04/visa-mastercard-american-express-png-6.png" style={{ height: "85px" }} alt="bank card logos" />
						<SharedInput
							name="cardNumber"
							value={cardData.cardNumber}
							onChange={handleChange}
							placeholder={t(`${prefix}.number placeholder`)}
							style={{ width: "100%" }}
							error={!!errors.cardNumber}
							helperText={errors.cardNumber}
						/>
						<div style={DETAILS_MODAL_INPUT_BOX_STYLES}>
							<SharedInput
								name="expiryDate"
								value={cardData.expiryDate}
								onChange={handleChange}
								placeholder={t(`${prefix}.date placeholder`)}
								style={MODAL_INPUT_STYLES}
								error={!!errors.expiryDate}
								helperText={errors.expiryDate}
							/>
							<SharedInput
								name="cvv"
								value={cardData.cvv}
								onChange={handleChange}
								placeholder={t(`${prefix}.cvv placeholder`)}
								style={MODAL_INPUT_STYLES}
								error={!!errors.cvv}
								helperText={errors.cvv}
							/>
						</div>
						<Button onClick={handleAddCard} variant="contained" color="primary">
							{t(`${prefix}.attach button`)}
						</Button>
					</div>
				</Box>
			</Modal>
		</>
	);
}
