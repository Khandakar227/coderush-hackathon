import Link from "next/link";
import { useContext, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { UserInfo } from "@/utils/types";
import signUp from "@/utils/api/signup";
import { userInfoSchema } from "@/utils/validations";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Loader from "@/components/Loader";
import { NotifyContext } from "@/context/notification";

interface NewUserInfo extends UserInfo {
  confirmPassword: string;
}
function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewUserInfo>({ resolver: yupResolver(userInfoSchema) });

  const [showPassword, setShowPassword] = useState(false);
  const [showConPassword, setShowConPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { setNotify } = useContext(NotifyContext);

  const onSubmit = async (data: FieldValues) => {
    try {
      setIsLoading(true);
      const res = await signUp(data);
      console.log(res);
      setNotify({
        heading: "Success",
        message: "Your account has been created. Check your email for email verification link",
        type: "success"
      })
      setIsLoading(false);
    } catch (error: any) {
      console.log(error.message);
      setNotify({
        heading: "ERROR",
        message: error.message,
        type: "error",
      });
      setIsLoading(false);
    }
  };
  return (
    <div className="grid place-items-center custom-h bg-hero">
      <form onSubmit={handleSubmit(onSubmit)}
        className="p-4 border shadow rounded-md glass-morph"
      >
        <h2 className="text-3xl text-center font-bold py-4"> Sign up </h2>

        <label htmlFor="username" className="mt-6 text-slate-600">
          Name:
        </label>
        <input
          {...register("username")}
          type="text"
          placeholder="Enter your user name"
          className="p-4 rounded-md shadow-md border my-2 w-full"
        />
        <p className="my-2 text-red-500">{errors.username?.message}</p>

        <label htmlFor="email" className="mt-6 text-slate-600">
          Email:
        </label>
        <input
          {...register("email")}
          type="text"
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

        <label htmlFor="confirm_password" className="mt-6 text-slate-600">
          Confirm Password:
        </label>
        <div className="flex rounded-md shadow-sm bg-white w-full my-3 border-b">
          <input
            type={showConPassword ? "text" : "password"}
            {...register("confirmPassword")}
            placeholder="Confirm your password"
            className="p-4 rounded-md outline-none my-2 w-full"
          />
          <button
            type="button"
            onClick={() => setShowConPassword(!showConPassword)}
            className="mx-4"
          >
            {showConPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
        <p className="my-2 text-red-500">{errors.confirmPassword?.message}</p>

        <div className="w-full">
          <button
            type="submit"
            className="py-4 px-8 my-4 bg-black text-white rounded-md mx-auto w-full"
          disabled={isLoading ? true : false}
          >
            {isLoading ? <Loader /> : "Create an account"}
          </button>
        </div>
        <Link href="/auth/login">
          <p className="my-4 text-blue-700"> Already have an account? </p>
        </Link>
      </form>
    </div>
  );
}

export default SignUp;
