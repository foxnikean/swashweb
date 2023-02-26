import { updateProfile } from "firebase/auth";
import { auth, storage } from "../../utils/firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const handleUpload = (file,navigate) => {
  if (!file) {
    alert("Lütfen önce bir resim ekleyin.");
  }
  const storageRef = ref(storage, `/users/${auth.currentUser.uid}`); // progress can be paused and resumed. It also exposes progress updates. // Receives the storage reference and the file to upload.
  const uploadTask = uploadBytesResumable(storageRef, file);
  uploadTask.on(
    (err) => console.log(err),
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then((url) => {
        console.log(url);
        updateProfile(auth.currentUser, {
          photoURL: url,
        })
          .then(() => {
            console.log("pp added");
          })
          .catch((error) => {
            // An error occurred
            // ...
          });
        navigate("/")
      });
    }
  );
};

export default handleUpload;
