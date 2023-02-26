import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "../../utils/firebase";
import { doc, setDoc } from "firebase/firestore";

export default function registerUser(data) {
  createUserWithEmailAndPassword(auth, data.email, data.password)
    .then(() => {
      setDoc(doc(db, "users", auth.currentUser.uid), {
        displayName: data.username,
        email: data.email,
      })
        .then(() => {
          console.log("succesfull database");
        })
        .then(() => {
          updateProfile(auth.currentUser, {
            displayName: data.username,
          })
            .then(() => {
              // Profile updated!
              navigate("/");
              // ...
            })
            .catch((error) => {
              // An error occurred
              // ...
            });
        });
    })
    .catch((error) => {
      console.error(error);
    });
}
