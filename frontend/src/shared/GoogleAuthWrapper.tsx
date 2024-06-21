import React, { FC } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { useMutation } from "@tanstack/react-query";
import { googleLogin } from "@/api";
import { jwtDecode } from "jwt-decode";
import { useAppDispatch } from "@/hooks/reduxhooks";
import { LoggedIn } from "@/redux/slice/userSlice";
import toast from "react-hot-toast";
import clsx from "clsx";

interface GoogleAuthWrapperProps {
  children?: React.ReactNode;
}

const GoogleAuthWrapper: FC<GoogleAuthWrapperProps> = ({ children }) => {
  const dispatch = useAppDispatch();
  const GoogleLoginMutate = useMutation({
    mutationFn: (data: any) => googleLogin(data),
    onSuccess(data) {
      if (data.success) {
        dispatch(LoggedIn(data.data));
        toast.success("Logged in successfully");
      }
    },
    onError(error: any) {
      console.log(error);
    },
  });

  return (
    <div
      className={clsx(
        "w-full max-w-2xl",
        GoogleLoginMutate.isPending && "pointer-events-none "
      )}
    >
      <div className=" mt-5 w-full flex-col  flex items-center justify-center">
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            if (credentialResponse.credential) {
              const token = credentialResponse.credential;
              const decodedToken = jwtDecode(token);
              GoogleLoginMutate.mutate(decodedToken);
            }
          }}
        />
      </div>
      <section
        className={clsx(
          "w-full",
          GoogleLoginMutate.isPending && "pointer-events-none opacity-80"
        )}
      >
        {children}
      </section>
    </div>
  );
};

export default GoogleAuthWrapper;
