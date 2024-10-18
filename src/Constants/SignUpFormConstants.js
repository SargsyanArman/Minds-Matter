import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { setUser } from "../Store/Slices/UserSlices";
import { parsePhoneNumberFromString } from "libphonenumber-js";
import firebase from "firebase/compat/app";

const prefix = "Sign up page";

export const validatePhoneNumber = (phoneNumber, countryCode) => {
  try {
    const phoneNumberObject = parsePhoneNumberFromString(
      phoneNumber,
      countryCode,
    );
    return phoneNumberObject?.isValid() ?? false;
  } catch (error) {
    console.error("Error validating phone number:", error);
    return false;
  }
};

export const handlePhoneChange =
  (setPhoneNumber, setCountryCode) => (value, country) => {
    setPhoneNumber(value);
    setCountryCode(country?.iso2?.toUpperCase() || "AM");
  };

export const handleGenderChange = (setGender) => (event) => {
  setGender(event.target.value);
};

export const handleDateOfBirthChange = (setDateOfBirth) => (event) => {
  setDateOfBirth(event.target.value);
};

export const handleSubmit =
  (handleRegister, validatePhoneNumber, setError, phoneNumber, countryCode, t) =>
    async (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      const email = data.get("email");
      const password = data.get("password");
      const firstName = data.get("firstName");
      const lastName = data.get("lastName");
      const gender = data.get("gender");
      const dateOfBirth = data.get("dateOfBirth");

      const isValid = validatePhoneNumber(phoneNumber, countryCode);
      if (isValid) {
        await handleRegister(
          email,
          password,
          firstName,
          lastName,
          gender,
          dateOfBirth,
          phoneNumber,
        );
      } else {
        setError(t(`${prefix}.invalid phone`));
      }
    };

export const handleRegister = async (
  auth,
  db,
  dispatch,
  navigate,
  t,
  email,
  password,
  firstName,
  lastName,
  gender,
  dateOfBirth,
  phoneNumber
) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    await sendEmailVerification(user, {
      handleCodeInApp: true,
      url: `https://${import.meta.env.VITE_FIREBASE_AUTH_DOMAIN}/verify-email`
    });
    alert('Verification email sent');

    await setDoc(doc(db, 'users', user.uid), {
      email: user.email,
      id: user.uid,
      firstName,
      lastName,
      gender,
      dateOfBirth,
      phoneNumber,
      orders: [],
      favorites: [],
      paymentMethod: []
    });

    dispatch(
      setUser({
        email: user.email,
        id: user.uid,
        token: user.accessToken,
      }),
    );

    navigate("/");
  } catch (error) {
    console.error("Registration failed:", error);
    alert(t(`${prefix}.fail`));
  }
};