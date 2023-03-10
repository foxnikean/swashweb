import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import React, { useState } from "react";
import "react-icons";
import { BiPlusCircle } from "react-icons/bi";
import uuid from "react-uuid";
import { storage } from "../../utils/firebase";
const AddImg = ({setUrl, url}) => {
  const [file, setFile] = useState();
  const [fileUrl, setFileUrl] = useState();
  const [percent, setPercent] = useState(0); // Handle file upload event and update state

  function handleChange(event) {
    setFile(event.target.files[0]);
  }
  const handleUpload = () => {
    if (!file) {
      alert("Please upload an image first!");
    }

    const storageRef = ref(storage, `/events/${uuid()}`); // progress can be paused and resumed. It also exposes progress updates. // Receives the storage reference and the file to upload.
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const percent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        ); // update progress
        setPercent(percent);
      },
      (err) => console.log(err),
      () => {
        alert("Image Uploaded");
        // download url
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          console.log(url);
          setUrl(url);
        });
      }
    );
  };
  return (
    <div className='w-full mt-6 '>
      {file ? (
        <img className="mx-auto w-full h-full" src={URL.createObjectURL(file)} alt='' />
      ) : (
        <div className='w-full bg-gray-500 flex items-center justify-center h-64 rounded-xl'>
          <label
            className='cursor-pointer w-full h-full flex items-center justify-center text-6xl text-bgwhite'
            htmlFor='img'
          >
            <BiPlusCircle />
          </label>
        </div>
      )}

      <input className='hidden' onChange={handleChange} type='file' id='img'  />
      {file ? 
      <button
      onClick={handleUpload}
      className='border-2 h-12 hover:border-bgdark transition-all text-white border-bg-white bg-spurple w-full mt-4 rounded-full'
      >
        Ekle
      </button> : null
      }
    </div>
  );
};

export default AddImg;
