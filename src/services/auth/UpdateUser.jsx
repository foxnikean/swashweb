import { doc, setDoc } from "firebase/firestore"
import { auth, db } from "../../utils/firebase"


const UpdateUser = (data) => {
  try {
    setDoc(doc(db, "users", auth.currentUser.uid), {
      name: data.name,
      cell:data.cell,
      email:data.email,
      description:data.description,
      gender:data.gender
    })
  } catch (error) {
    console.log(error)
  }
   
    }
export default UpdateUser