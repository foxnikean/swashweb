import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../../utils/firebase";

export default function EventAdd(data, url) {
    console.log(data);
    setDoc(doc(db, `events`, data.name), {
      name:data.name,
      category:data.category,
      startDate : data.startDate,
      endDate:data.endDate,
      startTime:data.startTime,
      endTime:data.endTime,
      city:data.city,
      place:data.place,
      address:data.address,
      description:data.description,
      image:url,
    });
}