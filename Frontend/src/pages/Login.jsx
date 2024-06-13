import React, { useState } from "react";
import { useForm } from 'react-hook-form';
import { Button } from "@mui/material";
import Input from './Input';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [message, setMessage] = useState('');

  const onSubmit = async (data) => {
    const url = isLogin ? 'http://localhost:4000/login' : 'http://localhost:4000/signup';
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      const result = await response.json();
      if (result.success) {
        setMessage('Success');
        localStorage.setItem('token', result.token);
        window.location.href = '/home';
      } else {
        setMessage(result.errors || 'Something went wrong');
      }
    } catch (error) {
      setMessage('An error occurred');
    }
  };

  const handleGoogleLogin = () => {
    window.location.href = 'http://localhost:4000/auth/google';
  };

  return (
    <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
      <div className="md:w-1/3 max-w-sm">
        <img
          src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          alt="Sample image" />
      </div>
      <div className="md:w-1/3 max-w-sm">
        <div className="flex justify-center">
          <button
            onClick={handleGoogleLogin}
            className="flex items-center bg-white dark:bg-gray-900 border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 dark:text-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
            <img className="h-5 w-5 mr-2" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg" />

            <span>Continue with Google</span>
          </button>
        </div>
        <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
          <p className="mx-4 mb-0 text-center font-semibold text-slate-500">Or</p>
        </div>

        {isLogin ? (
          <>
            <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded" type="text" placeholder="Email Address" {...register("email", { required: true })} />
            <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" type="password" placeholder="Password" {...register("password", { required: true })} />
            <div className="mt-4 flex justify-between font-semibold text-sm">
              <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
                <input className="mr-1" type="checkbox" />
                <span>Remember Me</span>
              </label>
              <a className="text-[#14cbe3] hover:text-[#4beaff] hover:underline hover:underline-offset-4" href="#">Forgot Password?</a>
            </div>
            <div className="text-center md:text-left">
              <Button
                sx={{
                  backgroundColor: '#14cbe3',
                  '&:hover': {
                    backgroundColor: '#24a7b8',
                  },
                  marginTop: '3rem',
                }} variant="contained" onClick={handleSubmit(onSubmit)}>LogIn</Button>
            </div>
            <div className="flex mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
              Don't have an account ? <span onClick={() => setIsLogin(false)} className="block ml-2 text-[#14cbe3] duration-300 hover:text-[#4beaff] cursor-pointer">Register</span>
            </div>
          </>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              placeholder="Full Name"
              {...register("name", {
                required: true,
              })}
            />
            <Input
              placeholder="Username"
              {...register("username", {
                required: true,
              })}
            />
            <Input
              placeholder="Email Address"
              type="email"
              {...register("email", {
                required: true,
                validate: {
                  matchPatern: (value) => /^\w+([.-]?\w+)@\w+([.-]?\w+)(\.\w{2,3})+$/.test(value) ||
                    "Email address must be a valid address",
                }
              })}
            />
            <Input
              type="password"
              placeholder="Password"
              {...register("password", {
                required: true,
              })}
            />
            <div className="text-center md:text-left">
              <Button
                sx={{
                  backgroundColor: '#14cbe3',
                  '&:hover': {
                    backgroundColor: '#24a7b8',
                  },
                  marginTop: '3rem',
                }} variant="contained" type="submit">Register</Button>
            </div>
            <div className="flex mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
              Already have an account ? <span onClick={() => setIsLogin(true)} className="block ml-2 text-[#14cbe3] duration-300 hover:text-[#4beaff] cursor-pointer">Login</span>
            </div>
          </form>
        )}
        {message && <p className="mt-4 text-center text-red-500">{message}</p>}
      </div>
    </section>
  )
}

export default Login;