import React from "react";
import "./Forms.scss";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useNavigate } from "react-router-dom";
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
    navigate("/")
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

          <div className='checkboxContainer'>
            <input
              id='checkbox'
              {...register("checkbox")}
              className='checkbox'
              type='checkbox'
            />
            <label htmlFor='checkbox'>Beni Hatırla</label>
          </div>
          <button className='submit-button'>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
