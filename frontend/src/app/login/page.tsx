import React from "react";
import Logo from "@/shared/Logo";
import Login from "@/components/Auth/Login";

const page = () => {
  return (
    <div className="h-full flex flex-col px-6">
      <div className="py-6 md:px-10">
        <Logo />
      </div>
      <div className="flex flex-col md:flex-row min-h-[calc(100vh-80px)] h-full">
        <section className="w-full flex items-center px-10">
          <div className="">
            <h1 className="text-blue-dark text-center md:text-left md:leading-[70px] mt-9 md:mt-0 mb-5 font-bold text-4xl md:text-6xl capitalize">
              Welcome Back, <span className="">Sign in</span>
            </h1>
            <p className="text-xl tracking-wide md:mr-40 text-center md:text-left">
              Storage rack gives you secure access to all your files from any
              device. Create an account and start sharing files today!
            </p>
          </div>
        </section>
        <section className="w-full mt-2 md:mt-0 grid place-items-center">
          <Login />
        </section>
      </div>
    </div>
  );
};

export default page;
