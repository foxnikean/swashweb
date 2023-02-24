import React from "react";
import "./Forms.scss";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import * as z from "zod";
import useBearStore from "../../stores/UserStore";
import { useNavigate } from "react-router-dom";
import { auth } from "../../utils/firebase";

const schema = z.object({
  username: z.string().min(3, { message: "En az 3 harfden oluşmalıdır." }),
  email: z.string().email({ message: "Lütfen geçerli bir mail adresi girin." }),
  password: z.string().min(8),
  checkbox: z.literal(true, {
    errorMap: () => ({ message: "You must accept Terms and Conditions" }),
  }),
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
    createUserWithEmailAndPassword(auth, data.email, data.password)
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
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <h3 className='formHeader'>Kayıt Ol </h3>
        <form className='form' onSubmit={handleSubmit(onSubmit)}>
          <input
            type='text'
            placeholder=' Kullanıcı Adı'
            {...register("username")}
          />
          {errors.email?.message && (
            <p className='formError'>{errors.username?.message}</p>
          )}
          <input type='text' placeholder='E-posta' {...register("email")} />
          {errors.email?.message && (
            <p className='formError'>{errors.email?.message}</p>
          )}
          <input
            type='password'
            placeholder='Şifre'
            {...register("password")}
          />
          {errors.password?.message && (
            <p className='formError'>{errors.password?.message}</p>
          )}

          <div className='checkboxContainer'>
            <div>
              <input id='checkbox' className='checkbox' type='checkbox' />
              <label htmlFor='checkbox'>Beni Hatırla</label>
            </div>
            {errors.checkbox?.message && (
              <p className='formError'>{errors.checkbox?.message}</p>
            )}
          </div>
          <button className='submitButton'>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
