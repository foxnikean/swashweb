import React from "react";
import "./Forms.scss";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import * as z from "zod";
import { useNavigate } from "react-router-dom";
import { auth } from "../../utils/firebase";
import { registerOrg } from "../../services/auth/Register";

const schema = z.object({
  username: z.string().min(3, { message: "En az 3 harfden oluşmalıdır." }),
  email: z.string().email({ message: "Lütfen geçerli bir mail adresi girin." }),
  password: z.string().min(8),
});

const OrgRegister = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });
  const onSubmit = (data) => {
    registerOrg(data);
  };
  return (
    <div className='form-container'>
      <div className='form-wrapper'>
        <h3 className='form-header'>Organizatör Kayıt Ol</h3>
        <form className='form' onSubmit={handleSubmit(onSubmit)}>
          <input
            type='text'
            placeholder=' Kullanıcı Adı'
            {...register("username")}
          />
          {errors.email?.message && (
            <p className='form-error'>{errors.username?.message}</p>
          )}
          <input type='text' placeholder='E-posta' {...register("email")} />
          {errors.email?.message && (
            <p className='form-error'>{errors.email?.message}</p>
          )}
          <input
            type='password'
            placeholder='Şifre'
            {...register("password")}
          />
          {errors.password?.message && (
            <p className='form-error'>{errors.password?.message}</p>
          )}

          <div className='checkbox-container'>
            <div>
              <input id='checkbox' className='checkbox' type='checkbox' />
              <label htmlFor='checkbox'>Beni Hatırla</label>
            </div>
            {errors.checkbox?.message && (
              <p className='form-error'>{errors.checkbox?.message}</p>
            )}
          </div>
          <button className='submit-button'>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default OrgRegister;
