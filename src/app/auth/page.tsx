"use client";
import { useState } from "react";
import clsx from "clsx";
import Input from "@/components/Input/component";
import Button from "@/components/Button/component";
import "./style.scss";

export default function Page() {
  const classNamePrefix = "auth-page";
  const [isRegister, setIsRegister] = useState(false);

  const handleClick = () => {
    console.log("clicked");
  };

  const renderInputs = () => {
    return (
      <div className="flex flex-col gap-4 mt-5">
        <Input label="Username" placeholder="username" id="username" />
        <Input label="Password" placeholder="password" id="password" />
        {isRegister && (
          <Input
            label="Confirm Password"
            placeholder="password"
            id="confirmPassword"
          />
        )}
      </div>
    );
  };

  return (
    <div
      className={`${classNamePrefix} min-h-96 flex flex-col items-center justify-around p-10 rounded-md`}
    >
      <div className="w-2/3 flex justify-around">
        <h2
          className={clsx(!isRegister && "border-b-2", "p-1")}
          onClick={() => setIsRegister(false)}
        >
          Log in
        </h2>
        <h2
          className={clsx(isRegister && "border-b-2", "p-1")}
          onClick={() => setIsRegister(true)}
        >
          Register
        </h2>
      </div>

      {renderInputs()}

      <div className="w-full mt-5">
        <Button
          text={isRegister ? "Register" : "Login"}
          onClick={handleClick}
          width="w-full"
        />
      </div>
    </div>
  );
}
