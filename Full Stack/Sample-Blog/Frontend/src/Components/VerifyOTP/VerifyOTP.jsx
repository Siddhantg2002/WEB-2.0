import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Button } from "@cred/neopop-web/lib/components";
import { useState } from 'react';
import { onSubmit } from '@/utils/VerifyOTP';

const VerifyOTP = () => {
  const [serverError, setServerError] = useState("");
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  return (
    <section className="bg-white">
      <div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
        <form className="w-full max-w-md" onSubmit={handleSubmit((data) => onSubmit(data, navigate, setServerError))}>
          <div className="flex justify-center mx-auto">
            <img
              className="w-auto h-12 sm:h-8 cursor-pointer"
              src="../../../images/home/Logo.png"
              alt="logo"
            />
          </div>
          
          <div className="relative flex items-center mt-5">
            <input
              type="text"
              className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Enter the OTP"
              {...register("token", {
                required: "* Please Enter the OTP "
              })}
            />
          </div>
          <div className="mt-1 text-red-500 text-sm">
            {errors.token && <div>{errors.token.message}</div>}
            {serverError && <div>{serverError}</div>}
          </div>

          <div className="mt-6 flex justify-center">
            <Button
              variant="secondary"
              kind="elevated"
              size="small"
              colorMode="dark"
              type="submit"
              showArrow
            >
              Verify OTP
            </Button>
          </div>
        
        </form>
      </div>
    </section>
  );
};

export default VerifyOTP;
