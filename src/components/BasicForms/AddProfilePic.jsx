import React, { useState } from "react";
import { RiImageAddLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import handleUpload from "../../services/auth/AddImage";
const AddProfilePic = () => {
  const navigate = useNavigate()
  const [file, setFile] = useState();
  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };
  return (
    <div className='form-container'>
      <div className='form-wrapper'>
        <h3 className='form-header'>Profil Resmi Ekle</h3>
        <div className='image-container'>
          {file ? (
            <img
              className='image-temp'
              src={URL.createObjectURL(file)}
              alt=''
            />
          ) : (
            <div>
              <label htmlFor='image' className='image-label'>
                <RiImageAddLine />
              </label>
              <input
                onChange={handleChange}
                className='image-input'
                id='image'
                type='file'
              />
            </div>
          )}

          <span className='disclaimer'>
            Zorunlu değildir atlamak için <Link to='/'>buraya</Link> tıklayın.
          </span>
          <button onClick={() => handleUpload(file, navigate)} className='submit-button'>Resmi Yükle</button>
        </div>
      </div>
    </div>
  );
};

export default AddProfilePic;
