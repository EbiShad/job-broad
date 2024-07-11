"use client";

import TextInput from "@/Ui/TextInput";
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
        <TextInput
          label="email"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextInput
          label="password"
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="bg-purple-300  text-gray-900 text-lg rounded-lg transition ease-in-out delay-75  focus:ring-purple-600 hover:bg-purple-400  w-full py-3">
          Sign Up
        </button>
      </form>
      <p className="text-sm text-center mt-10">
        Have you account?
        <Link href="/signin" className="text-purple-400">login</Link>
      </p>
    </div>
  );
}

export default SignupPage;
