import Link from "next/link";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { User } from "@/utils/types";
import { signIn } from "next-auth/react";
import { userSchema } from "@/utils/validations";
import Loader from "@/components/Loader";
import { NotifyContext } from "@/context/notification";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useContext } from "react";
import ForgotPassword from "@/components/ForgotPassword";
import { useRouter } from "next/router";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>({ resolver: yupResolver(userSchema) });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isForgotPass, showFP] = useState(false);
  const { setNotify } = useContext(NotifyContext);
  const router = useRouter()

  const onSubmit = async (data: FieldValues) => {
    setIsLoading(true);
    try {
      const res = await signIn("credentials", { ...data, redirect: false });
      setIsLoading(false);
      console.log(res);
      if (!res?.ok)
        setNotify({
          heading: "ERROR",
          message: "Invalid email or password",
          type: "error",
        });
      else {
        setNotify({
          heading: "Logged In",
          message: "Logged in successfully",
          type: "success",
        });
        router.push('/');
      }
    } catch (error: any) {
      setIsLoading(false);
      setNotify({
        heading: "ERROR",
        message: error.message,
        type: "error",
      });
    }
  };

  return (
    <div className="grid place-items-center custom-h bg-hero">
      {isForgotPass ? (
        <ForgotPassword showForgotPassword={() => showFP(false)} />
      ) : (
        ""
      )}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-4 border shadow rounded-md glass-morph"
      >
        <h2 className="text-3xl text-center font-bold py-4"> Login </h2>
        <label htmlFor="username" className="mt-6 text-slate-600">
          Email:
        </label>
        <input
          {...register("email")}
          type="email"
          placeholder="Enter your email address"
          className="p-4 rounded-md shadow-md border my-2 w-full"
        />
        <p className="my-2 text-red-500">{errors.email?.message}</p>

        <label htmlFor="password" className="mt-6 text-slate-600">
          Password:
        </label>
        <div className="flex rounded-md shadow-sm bg-white w-full my-3 border-b">
          <input
            type={showPassword ? "text" : "password"}
            {...register("password")}
            placeholder="Enter your password"
            className="p-4 rounded-md outline-none my-2 w-full"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="mx-4"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
        <p className="my-2 text-red-500">{errors.password?.message}</p>
        <button
          type="button"
          onClick={() => showFP(true)}
          className="underline text-blue-700"
        >
          Forgot Password?
        </button>
        <div className="w-full">
          <button
            disabled={isLoading ? true : false}
            type="submit"
            className="py-4 px-8 my-4 bg-black text-white rounded-md mx-auto w-full"
          >
            {isLoading ? <Loader /> : "Login"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
