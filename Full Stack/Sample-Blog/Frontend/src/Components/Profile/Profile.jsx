import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@cred/neopop-web/lib/components";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import isEmail from "validator/lib/isEmail";
import SubmittedToast from "./Submitted";
import SubmittingToast from "./Submitting";
import { useNavigate } from "react-router-dom";
import { redirect, onSubmit, onSelectFile} from "@utils/Profile"
// import useFetch from "@/utils/hooks/useFetch(auth)";
import { useAdmin } from "@/Global/Admin/User";


const Profile = () => {
  const navigate = useNavigate();
  const [disable, setDisable] = useState(true);
  const [initialValues, setInitialValues] = useState({});
  const [preview, setPreview] = useState(null); // State for image preview
  const {register,handleSubmit,formState: { errors, isSubmitting, isValid, isSubmitSuccessful },} = useForm();
  // const { data, loading, error} = useFetch(`http://localhost:3000/users`, []);
  const { data, loading, error} = useAdmin();


  useEffect(() => {
    redirect(navigate, isSubmitSuccessful)
  }, [isSubmitSuccessful]);

  if (loading) {
    return (
      <div className="flex justify-center h-auto mb-96">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }
  if (error) return <p>{error}</p>;

  return (
    <>
      <div className="max-w-md mx-auto mt-20 mb-48 p-6 bg-white rounded-lg shadow-xl">
        <div className="flex">
          <h2 className="text-2xl font-semibold mb-4">User Profile</h2>
          <div
            onClick={() => {
              setDisable(false);
            }}
            className="relative left-2 cursor-pointer hover:scale-90 transition"
          >
            <ModeEditIcon />
          </div>
        </div>

        {data.map((user, index) => (
          <div key={index} className="mb-8">
            <form
              onSubmit={handleSubmit((data) => {onSubmit(data, initialValues)})}
              encType="multipart/form-data"
            >
              <div className="flex justify-between">
                <div className="mb-4">
                  <label
                    htmlFor={`username-${user.id}`}
                    className="block text-xs font-medium text-gray-700"
                  >
                    Username:
                  </label>
                  <input
                    type="text"
                    id={`username-${user.id}`}
                    defaultValue={user.username}
                    className="mt-1 px-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    {...register("username", {
                      minLength: { value: 5, message: "* Username too short" },
                      maxLength: { value: 15, message: "* Username too long" },
                    })}
                    disabled={disable}
                  />
                  <div className="mt-1 text-red-500 text-sm">
                    {errors.username && <span>{errors.username.message}</span>}
                  </div>
                </div>
                <div className="relative bottom-10">
                  {preview ? (
                    <img
                      src={preview}
                      alt="Preview"
                      className="size-28 object-cover rounded-full"
                    />
                  ) : (
                    <img
                      src={`../../../images/profiles/${user.image}`}
                      alt="Preview"
                      className="size-28 object-cover rounded-full"
                    />
                  )}
                  <input
                    type="file"
                    id="fileInput"
                    className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                    onChange={(event)=>{onSelectFile(event, setPreview)}}
                    disabled={disable}
                    {...register("profile_pic")}
                  />
                </div>
              </div>
              <div className="relative bottom-12">
                <div className="mb-4">
                  <label
                    htmlFor={`email-${user.id}`}
                    className="block text-xs font-medium text-gray-700"
                  >
                    Email:
                  </label>
                  <input
                    type="email"
                    id={`email-${user.id}`}
                    defaultValue={user.email}
                    className="mt-1 px-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    {...register("email", {
                      validate: (value) =>
                        !value || isEmail(value) || "* Please enter a valid email",
                    })}
                    disabled={disable}
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor={`password-${user.id}`}
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password:
                  </label>
                  <input
                    type="password"
                    id={`password-${user.id}`}
                    defaultValue="123456789"
                    className="mt-1 px-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    {...register("password", {
                      minLength: { value: 5, message: "* Password too short" },
                      maxLength: { value: 15, message: "* Password too long" },
                    })}
                    disabled={disable}
                  />
                  <div className="mt-1 text-red-500 text-sm">
                    {errors.password && <span>{errors.password.message}</span>}
                  </div>
                </div>
                <div className="relative top-12 left-36 ">
                  <Button
                    variant="secondary"
                    kind="elevated"
                    size="small"
                    colorMode="dark"
                    type="submit"
                    disabled={disable}
                  >
                    Save Changes
                  </Button>
                </div>
              </div>
            </form>
          </div>
        ))}
      </div>
      <div className="flex justify-end">
        {isSubmitting && isValid && <SubmittingToast />}
        {isSubmitSuccessful && <SubmittedToast />}
      </div>
     
    </>
  );
};

export default Profile;
