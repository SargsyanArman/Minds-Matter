import React from "react";
import { updateDoc, arrayUnion, doc } from "firebase/firestore";
import { db } from "../../../fireBase";
import { useAuth } from "../../../Hooks/use-auth";
import { Box, Button, IconButton, Modal, Typography } from "@mui/material";
import { AddCard } from "@mui/icons-material";
import SharedInput from "../../../Components/Shared/SharedInput";
import { useContext } from "react";
import { LangContext } from "../../../Contexts/LangContext";

export default function ModalAddCard({ onCardAdded }) {
	const [open, setOpen] = React.useState(false);
	const [cardNumber, setCardNumber] = React.useState("");
	const [expiryDate, setExpiryDate] = React.useState("");
	const [cvv, setCvv] = React.useState("");
	const [errors, setErrors] = React.useState({});
	const { id } = useAuth();
    const { t } = useContext(LangContext);
    const prefix = "Profile";

	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const style = {
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		width: { xs: 310, sm: 400 },
		height: { xs: 'auto', sm: 400 },
		bgcolor: "background.paper",
		border: "2px solid #000",
		boxShadow: 24,
		p: 4,
	};

	const validateCardNumber = (number) =>
		/^\d{4} \d{4} \d{4} \d{4}$/.test(number);
	const validateExpiryDate = (date) =>
		/^(0[1-9]|1[0-2])\/[0-9]{2}$/.test(date);
	const validateCvv = (cvv) => /^\d{3,4}$/.test(cvv);

	const formatCardNumber = (number) => {
		let digits = number.replace(/\D/g, "");
		if (digits.length > 16) {
			digits = digits.slice(0, 16);
		}
		return digits
			.replace(/(\d{4})(\d{1,4})/, "$1 $2")
			.replace(/(\d{4} \d{4})(\d{1,4})/, "$1 $2")
			.replace(/(\d{4} \d{4} \d{4})(\d{1,4})/, "$1 $2")
			.trim();
	};

	const formatExpiryDate = (date) => {
		return date.replace(/\D/g, "").replace(/(\d{2})(\d{1,2})/, "$1/$2");
	};

	const handleAddCard = async () => {
		let valid = true;
		const newErrors = {};

		if (!validateCardNumber(cardNumber)) {
			valid = false;
			newErrors.cardNumber =
				t(`${prefix}.number error`);
		}
		if (!validateExpiryDate(expiryDate)) {
			valid = false;
			newErrors.expiryDate = t(`${prefix}.date error`);
		}
		if (!validateCvv(cvv)) {
			valid = false;
			newErrors.cvv = t(`${prefix}.cvv error`);
		}

		if (valid) {
			try {
				const userDocRef = doc(db, "users", id);
				await updateDoc(userDocRef, {
					paymentMethod: arrayUnion({
						cardNumber,
						expiryDate,
						cvv,
					}),
				});
				console.log("Card added successfully");
				onCardAdded();
				handleClose();
			} catch (error) {
				console.error("Error adding card: ", error);
			}
		} else {
			setErrors(newErrors);
		}
	};

	return (
		<>
			<IconButton
				color="primary"
				aria-label="add to bank card"
				onClick={handleOpen}
			>
				<AddCard style={{ fontSize: "40px" }} />
			</IconButton>
			<Typography color="primary">{t(`${prefix}.attach title`)}</Typography>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							gap: "20px",
						}}
					>
						<Typography
							id="modal-modal-title"
							variant="h5"
							component="h2"
						>
							{t(`${prefix}.attach title`)}
						</Typography>
						<img
							src="https://mythslegendscollection.com/wp-content/uploads/2020/04/visa-mastercard-american-express-png-6.png"
							style={{ height: "85px" }}
							alt="bank card logos"
						/>

						<SharedInput
							value={cardNumber}
							onChange={(e) =>
								setCardNumber(formatCardNumber(e.target.value))
							}
							placeholder={t(`${prefix}.number placeholder`)}
							style={{ width: "100%" }}
							error={!!errors.cardNumber}
							helperText={errors.cardNumber}
						/>

						<div style={{ display: "flex", gap: "20px" }}>
							<SharedInput
								value={expiryDate}
								onChange={(e) =>
									setExpiryDate(
										formatExpiryDate(e.target.value),
									)
								}
								placeholder={t(`${prefix}.date placeholder`)}
								style={{ width: "48%" }}
								error={!!errors.expiryDate}
								helperText={errors.expiryDate}
							/>
							<SharedInput
								value={cvv}
								onChange={(e) => setCvv(e.target.value)}
								placeholder={t(`${prefix}.cvv placeholder`)}
								style={{ width: "48%" }}
								error={!!errors.cvv}
								helperText={errors.cvv}
							/>
						</div>

						<Button
							onClick={handleAddCard}
							variant="contained"
							color="primary"
						>
							{t(`${prefix}.attach button`)}
						</Button>
					</div>
				</Box>
			</Modal>
		</>
	);
}
