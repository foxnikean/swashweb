import React from "react";
import "./Forms.scss";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Link, useNavigate } from "react-router-dom";
import login from "../../services/auth/Login";

const schema = z.object({
  email: z.string().min(1),
  password: z.string().min(8),
});

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });
  const onSubmit = (data) => {
    login(data);
  };
  return (
    <div className='form-container'>
      <div className='form-wrapper'>
        <h3 className='form-header'>Giriş Yap </h3>
        <form className='form' onSubmit={handleSubmit(onSubmit)}>
          <input type='text' placeholder=' Email' {...register("email")} />
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

          <button className='submit-button'>Giriş Yap</button>
          <span>Üye değil misin ? <Link to="/register" className="underline">Kayıt Ol</Link> </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
