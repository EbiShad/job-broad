"use client";



import TextField from "@/Ui/TextField";
import Link from "next/link";
import { useState } from "react";

function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="mx-auto sm:w-1/2 lg:w-1/3 my-20 p-10 border border-purple-300 rounded-lg">
      <h4 className="font-bold text-center mb-16 text-[54px] text-purple-700">
        Sign up
      </h4>
      <form className="space-y-5">
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
        <button className="bg-purple-300  text-gray-900 text-lg rounded-lg transition ease-in-out delay-75  hover:bg-purple-400  w-full py-3">
          Sign Up
        </button>
      </form>
      <p className="text-sm text-center mt-10">
        Do you have account?
        <Link href="/signin" className="text-purple-400 pl-1 hover:text-purple-600 transition ease-in-out delay-50">login</Link>
      </p>
    </div>
  );
}

export default SignupPage;