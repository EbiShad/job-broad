"use client";


import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import TextField from "../module/TextField";
import Loader from "../module/Loader";
import { useMutation} from "@tanstack/react-query";
import { SignupFn } from "@/servises/authService";
import toast from "react-hot-toast";



function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  // const signupHandler = async (e) => {
  //   e.preventDefault();

  //   try {
  //     setIsLoading(true)
  //     const res = await fetch("/api/auth/signup", {
  //       method: "POST",
  //       body: JSON.stringify({ email, password }),
  //       headers: { "Content-Type": "application/json" },
  //     });
  
  //     const {message,status} = await res.json();

  //     setIsLoading(false)
  //     if(status === 201){
  //       toast.success(message)
  //        router.push("/signin");
  //     }else{
  //       toast.error(message)
  //     }

  //   } catch (error){
  //     console.log(error)
  //   }
  // }
  const {data,isPending,mutateAsync} = useMutation({
    mutationFn:SignupFn,
    // mutationKey:["signup"]
  })


  const signupHandler = async(e) =>{
    e.preventDefault();
    
    try {
     const {message,status} = await mutateAsync({email,password})
     if(status === 201){
            toast.success(message)
             router.push("/signin");
          }else{
            toast.error(message)
          }
    } catch (error) {
     console.log(error)
    }
  }

  return (
    <div className="mx-auto sm:w-1/2 lg:w-1/3 my-20 p-10 border border-purple-300 rounded-lg">
      <h4 className="font-bold text-center mb-16 text-[54px] text-purple-700">
        Sign up
      </h4>
      <form className="space-y-5" onSubmit={signupHandler}>
        <TextField
          label="email"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="enter your email"
        />
        <TextField
          label="password"
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="enter your password"
        />
        <button
          className="bg-purple-300 flex justify-center items-center
         text-gray-900 text-lg rounded-lg transition ease-in-out delay-75 
          hover:bg-purple-400  w-full h-[48px]"
        >
          {isPending ? (
            <Loader
              width="50"
              height="18"
              color="rgb(0, 0, 0)"
            />
          ) : (
            "Sign up"
          )}
        </button>
      </form>
      <p className="text-sm text-center mt-10">
        Alredy have account?
        <Link
          href="/signin"
          className="text-purple-400 pl-1 hover:text-purple-600 transition ease-in-out delay-50"
        >
          login
        </Link>
      </p>
     
    </div>
  );
}

export default SignupPage;
