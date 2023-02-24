import React from "react";
import "./Forms.scss";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInWithEmailAndPassword } from "firebase/auth";
import * as z from "zod";
import useBearStore from "../../stores/UserStore";
import { useNavigate } from "react-router-dom";
import { auth } from "../../utils/firebase";

const schema = z.object({
  email: z.string().min(1),
  password: z.string().min(8),
});

const Login = () => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });
  const onSubmit = (data) => {
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then(() => {
        // Signed in
        console.log("succesfull")
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        setError("Giriş bilgilerini kontrol ediniz.");
      });
  };
  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <h3 className='formHeader'>Giriş Yap </h3>
        <form className='form' onSubmit={handleSubmit(onSubmit)}>
          <input
            type='text'
            placeholder=' Email'
            {...register("email")}
          />
          {errors.email?.message && <p>{errors.email?.message}</p>}
          <input
            type='password'
            placeholder='Şifre'
            {...register("password")}
          />
          {errors.password?.message && <p>{errors.password?.message}</p>}

          <div className='checkboxContainer'>
            <input id='checkbox' {...register("checkbox")} className='checkbox' type='checkbox' />
            <label htmlFor='checkbox'>Beni Hatırla</label>
          </div>
          <button className='submitButton'>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
