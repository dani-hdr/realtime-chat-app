"use client";
import { SignUpUser } from "@/types/User";
import { useFormik, FormikProps } from "formik";
import Image from "next/image";
import { useState } from "react";
import { BeatLoader } from "react-spinners";
import * as Yup from "yup";
import toast from 'react-hot-toast'
import Link from "next/link";
import axios from '@/lib/axios'
import type {AxiosError} from 'axios'
import { useRouter } from "next/navigation";

type InitialValues = {
  username: string;
  password: string;
};

const SignUpPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);

  const formik: FormikProps<InitialValues> = useFormik<InitialValues>({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Userame is required"),
      password: Yup.string()
        .min(6, "Must be 6 characters or more")
        .max(30, "Must be 30 characters or less")
        .required("Password is required"),
    }),
    onSubmit: (values) => {
      handleSignUpUser(values);
    },
  });

  const handleSignUpUser = async (user: SignUpUser) => {
    setLoading(true);
   try{
    const res = await axios.post<GenericResponse>('/users',user)
    toast.success(res.data.message)
    router.push('/auth/sign-in')
   }catch(e){
      const error = e as AxiosError<GenericResponse> 
      const message = error.response?.data.message || error.message
      toast.error(message)
   }finally{
    setLoading(false)
   }
  };

  return (
    <div className="h-screen w-screen bg-blue-50">
      <div className="container mx-auto flex justify-center px-4">
        <div className="mt-4  max-w-max rounded-md bg-white px-14 py-8 shadow-md">
          <div className="flex flex-col items-center justify-center">
            <Image src="/logo.png" width={70} height={70} alt="logo" />
            <h1 className="text-center text-2xl font-bold">Sign up</h1>
            <p className="mt-1 text-center tracking-wide text-slate-400">
              Welcome to the best Chat App
            </p>
            <form
              onSubmit={formik.handleSubmit}
              className="mt-2 flex w-full flex-col gap-2"
            >
              <label className="text-sm text-slate-600">Username</label>
              <input
                className=" rounded-lg border-slate-400 placeholder-slate-400"
                type="text"
                placeholder="John"
                id="username"
                name="username"
                value={formik.values.username}
                onChange={formik.handleChange}
              />
              {formik.touched.username && formik.errors.username ? (
                <div className="text-sm text-red-600">
                  {formik.errors.username}
                </div>
              ) : null}
              <label className="text-sm text-slate-600">Password</label>
              <input
                className=" rounded-lg border-slate-400 placeholder-slate-400"
                type="password"
                placeholder="Password"
                id="password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="text-sm text-red-600">
                  {formik.errors.password}
                </div>
              ) : null}
              <button
                type="submit"
                className="mt-5 inline-block rounded-lg bg-blue-600 px-4 py-2 text-white shadow-md focus:ring-blue-500"
              >
                <BeatLoader
                  color={"white"}
                  loading={loading}
                  size={10}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                />
                {!loading && 'Sign Up'}
              </button>
            </form>
            <p className="mt-5 text-sm text-slate-400">Already have account?<Link className="font-bold text-slate-950 ml-1" href='/auth/sign-in'>Sign In</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
