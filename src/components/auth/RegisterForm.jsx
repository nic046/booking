import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router";
import { useAuth } from "../../context/auth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const schema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(6),
  gender: z.enum(["male", "female", "other"], {message: "Select a genre"})
});

function RegisterForm() {
  const {register: createUser} = useAuth()
  const navigate = useNavigate()

  const successMessage = () => {
    toast.success("Success register new user! Please log in!", {
      position: "bottom-right",
      autoClose: 3000,
    });
  };
  const errorMessage = () => {
    toast.error("Error in the register new user or existing register!", {
      position: "bottom-right",
      autoClose: 3000,
    });
  };

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (dataform) => {
    const success = createUser(dataform);
    if(success){
      reset()
      navigate("/login")
      successMessage()
    } else {
      errorMessage()
    }
    
  };
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4 ">
        <label className="block font-semibold">First Name</label>
        <input
          type="text"
          className="input-form"
          placeholder="First name"
          {...register("firstName")}
        />
        {errors.firstName && (
          <span className="error_validation"> {errors.firstName.message} </span>
        )}
      </div>
      <div className="mb-4">
        <label className="block font-semibold">Last Name</label>
        <input
          type="text"
          className="input-form"
          placeholder="Last name"
          {...register("lastName")}
        />
        {errors.lastName && (
          <span className="error_validation"> {errors.lastName.message} </span>
        )}
      </div>
      <div className="mb-4">
        <label className="block font-semibold">Email</label>
        <input
          type="email"
          className="input-form"
          placeholder="Last name"
          {...register("email")}
        />
        {errors.email && (
          <span className="error_validation"> {errors.email.message} </span>
        )}
      </div>
      <div className="mb-4">
        <label className="block font-semibold">Password</label>
        <input
          type="password"
          className="input-form"
          placeholder="Password"
          {...register("password")}
        />
        {errors.password && (
          <span className="error_validation"> {errors.password.message}</span>
        )}
      </div>
      <div className="mb-4">
        <label className="block font-semibold">Gender</label>
        <select
          className="input-form"
          {...register("gender")}
        >
          <option value="">Select a genre</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
          </select>
        {errors.gender && (
          <span className="error_validation"> {errors.gender.message}</span>
        )}
      </div>
      <button className="btn w-full">Create an account</button>
    </form>
  );
}

export default RegisterForm;
