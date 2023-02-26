import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../utils/firebase";

export default function login(data) {
  signInWithEmailAndPassword(auth, data.email, data.password)
    .then(() => {
      // Signed in
      console.log("succesfull");
      navigate("/");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
}
