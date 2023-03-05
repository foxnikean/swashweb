import React from "react";
import "./Forms.scss";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import * as z from "zod";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../utils/firebase";
import registerUser from "../../services/auth/Register";

const schema = z.object({
  username: z.string().min(3, { message: "En az 3 harfden oluşmalıdır." }),
  email: z.string().email({ message: "Lütfen geçerli bir mail adresi girin." }),
  password: z.string().min(8),
});

const Register = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });
  const onSubmit = (data) => {
    registerUser(data);
  };
  return (
    <div className='form-container'>
      <div className='form-wrapper'>
        <h3 className='form-header'>Kayıt Ol </h3>
        <form className='form min-w-96' onSubmit={handleSubmit(onSubmit)}>
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
            <div className="flex items-center gap-4">
              <input id='checkbox' className='checkbox' type='checkbox' />
              <label htmlFor='checkbox'>Sözleşmeleri Kabul Ediyorum</label>
            </div>
            {errors.checkbox?.message && (
              <p className='form-error'>{errors.checkbox?.message}</p>
            )}
          </div>
          <button className='submit-button'>Kayıt Ol</button>
          <span>Zaten bizdensen ? <Link to="/login" className="underline">Giriş Yap</Link> </span>
        </form>
      </div>
    </div>
  );
};

export default Register;
