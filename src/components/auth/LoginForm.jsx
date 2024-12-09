import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "../../context/auth";
import { useNavigate } from "react-router";
import * as z from "zod";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

function LoginForm() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const successMessage = () => {
    toast.success("Success sign in!", {
      position: "bottom-right",
      autoClose: 3000,
    });
  };
  const errorMessage = () => {
    toast.error("Error signing in check your email or password !", {
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

  const onSubmit = async (dataform) => {
    const success = await login(dataform);
    if (success) {
      reset();
      navigate("/");
      successMessage();
    } else {
      errorMessage();
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4">
        <label className="block font-semibold">Email</label>
        <input
          type="email"
          className="input-form"
          placeholder="Ingresa tu correo electrónico"
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
          placeholder="Ingresa tu password"
          {...register("password")}
        />
        {errors.password && (
          <span className="error_validation"> {errors.password.message}</span>
        )}
      </div>
      <button className="btn w-full">Iniciar sesión</button>
    </form>
  );
}

export default LoginForm;
