import React, { useState } from "react";
import "react-icons/bi";
import uuid from "react-uuid";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../utils/firebase";
import { BiPlusCircle } from "react-icons/bi";
const AddVid = ({setVidUrl, vidUrl}) => {
  const [file, setFile] = useState();
  const [fileUrl, setFileUrl] = useState();
  const [percent, setPercent] = useState(0); // Handle file upload event and update state

  function handleChange(event) {
    setFile(event.target.files[0]);
    setFileUrl(URL.createObjectURL(file));
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
          setVidUrl(url);
        });
      }
    );
  };
  return (
    <div className='w-full  mt-6 '>
      {file ? (
      <iframe className="mx-auto w-full h-full" src={URL.createObjectURL(file)} frameborder="0"></iframe>
      ) : (
        <div className='w-64 mx-auto h-96 bg-gray-500 flex items-center justify-center  rounded-xl'>
          <label
            className='cursor-pointer w-32 h-full flex items-center justify-center text-6xl text-bgwhite'
            htmlFor='vid'
          >
            <BiPlusCircle />
          </label>
        </div>
      )}

      <input
        className='hidden'
        onChange={handleChange}
        type='file'
        id='vid'
      />
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

export default AddVid;
