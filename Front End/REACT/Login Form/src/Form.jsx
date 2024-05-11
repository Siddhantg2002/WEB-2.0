import { useForm } from "react-hook-form";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setTimeout(() => {
        console.log(data); 
        alert("Login Successful");
    }, 3000);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Login</h1>

      <div className="input-field-1">
        <input
          placeholder="Username"
          {...register("username", {
            required: { value: true, message: "Email is Required" },
          })}
        />
        <i className="bx bxs-user"></i>
      </div>
      <div className="input-field-2">
        <input
        type="password"
          placeholder="Password"
          {...register("password", {
            required: { value: true, message: "Password is Required" },
            maxLength: {
              value: 15,
              message: "Max Length of your passord is 15",
            },
            minLength: { value: 5, message: "Min Length of your passord is 5" },
          })}
        />
        <i className="bx bxs-lock-alt"></i>
      </div>

      <div className="remember-forgot">
        <label htmlFor="remember-me">
          <input type="checkbox" />
          Remember me
        </label>
        <a href="#">Forgot password?</a>
      </div>

      <button type="submit">Login</button>

      <div className="footer-1">
        <p>Don't have an account?</p>
        <a href="#">Register</a>
      </div>
      <div className="footer-2">
        {errors.username && <span>{errors.username.message}</span>}
        {errors.password && <span>{errors.password.message}</span>}
      </div>
    </form>
  );
};

export default Form;
