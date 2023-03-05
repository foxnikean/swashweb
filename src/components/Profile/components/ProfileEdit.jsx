import React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { BiEdit } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import UpdateUser from "../../../services/auth/UpdateUser";
import { useSelector } from "react-redux";
import useAuthentication from "../../../services/UseAuthHook";
const schema = z.object({
  name: z.string().min(3),
  email: z.string().min(1),
  cell: z.number().min(1),
  gender: z.string(),
});
const ProfileEdit = () => {
  const userData = useSelector((state) => state.userData.data);
  const { user } = useAuthentication();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });
  const onSubmit = () => {
    console.log("kelam")
  };
  return (
    <div className='pedit-container'>
      <div className='pedit-left'>
        <div className='pedit-img-container'>
          <img className='pedit-img' src={user?.photoURL} alt='' />
          <button
            onClick={() => navigate("/addpic")}
            className='pedit-img-icon'
          >
            <BiEdit />
          </button>
        </div>
        <div className='pedit-btn-group'>
         
          <button>Submit</button>
          <button>Submit</button>
        </div>
      </div>
      <div className='pedit-right'>
        <form className='form' id='user-form' onSubmit={handleSubmit(onSubmit)}>
          <div className='input-container'>
            <span>Ad Soyad</span>
            <input type='text' {...register("name")} />
            {errors.email?.message && (
              <p className='form-error'>{errors.name?.message}</p>
            )}
          </div>
          <div className='input-container'>
            <span>E-Posta</span>

            <input type='text' {...register("email")} />
            {errors.email?.message && (
              <p className='form-error'>{errors.email?.message}</p>
            )}
          </div>
          <div className='input-container'>
            <span>Telefon Numarası</span>
            <input type='tel' {...register("cell")} />
            {errors.email?.message && (
              <p className='form-error'>{errors.cell?.message}</p>
            )}
          </div>
          <div className='input-container'>
            <span>Cinsiyet</span>
            <select name='gender' {...register("gender")}>
              <option value='undefined'>Belirtmek İstemiyorum</option>
              <option value='male'>Erkek</option>
              <option value='female'>Kadın</option>
            </select>
          </div>
          <div className='input-container'>
            <span>Açıklama</span>
            <textarea
              name='description'
              {...register("description")}
              id=''
              cols='30'
              rows='5'
            ></textarea>
            {errors.email?.message && (
              <p className='form-error'>{errors.email?.message}</p>
            )}
          </div>
          <button form='user-form' type='submit'>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfileEdit;
