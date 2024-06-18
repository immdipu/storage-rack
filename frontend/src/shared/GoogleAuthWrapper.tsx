import React, { FC } from "react";
import { GoogleLogin } from "@react-oauth/google";

interface GoogleAuthWrapperProps {
  children?: React.ReactNode;
}

const GoogleAuthWrapper: FC<GoogleAuthWrapperProps> = ({ children }) => {
  return (
    <div className="w-full max-w-2xl">
      <div className=" mt-5 w-full flex-col  flex items-center justify-center">
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            if (credentialResponse.credential) {
              console.log(credentialResponse.credential);
            }
          }}
        />
      </div>
      <section className="w-full">{children}</section>
    </div>
  );
};

export default GoogleAuthWrapper;
