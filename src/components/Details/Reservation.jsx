import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import * as z from "zod";
import useApiFetch from "../../hooks/useApiFetch";
import Spinner from "../../components/Spinner";
import "react-toastify/dist/ReactToastify.css";

const schema = z.object({
  checkIn: z
    .string()
    .min(1, { message: "Check-In is required" })
    .refine((date) => date >= today, {
      message: "Check-In cannot be in the past",
    }),
  checkOut: z
    .string()
    .min(1, { message: "Check-out is required" })
    ,
});

const today = new Date().toISOString().split("T")[0];

function Reservation({ hotelId }) {
  const [data, createReservation, loading, error] = useApiFetch();
  const navigate = useNavigate();

  const successMessage = () => {
    toast.success("Success reservation!", {
      position: "bottom-right",
      autoClose: 3000,
    });
  };
  const errorMessage = () => {
    toast.error("Error at the reservation!", {
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

  const onSubmit = (dataForm) => {
    dataForm.hotelId = hotelId;
    createReservation({
      url: "/bookings",
      method: "POST",
      body: dataForm,
    });
    if(error){
      errorMessage()
    } else{
      successMessage()
      navigate("/reservation");
    }
    reset();
  };

  if (loading)
    return (
      <div className="grid place-content-center min-h-[100dvh]">
        <Spinner className="w-14 h-14 text-gray-200 fill-blue-500 animate-spin" />
      </div>
    );

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col md:flex-row md:items-center justify-center gap-2 mb-4">
        <div className="flex  items-center justify-center gap-2">
          <div className="flex flex-col items-center">
            <label htmlFor="" className="font-semibold text-sm">
              Check-In
            </label>
            <input
              type="date"
              id="check-in"
              className="border px-3 py-1 rounded-sm"
              min={today}
              {...register("checkIn")}
            />
          </div>
          <div className="flex flex-col items-center">
            <label htmlFor="" className="font-semibold text-sm ">
              Check-Out
            </label>
            <input
              type="date"
              id="check-out"
              className="border px-3 py-1 rounded-sm"
              min={today}
              {...register("checkOut")}
            />
          </div>
        </div>
        <button className="btn bg-emerald-500">Reserve</button>
      </div>
      {/* Errors */}
      <p
        className={`text-center error_validation ${
          errors.checkIn || errors.checkOut ? "block" : "hidden"
        }`}
      >
        {errors?.checkIn?.message || errors?.checkOut?.message}
      </p>
    </form>
  );
}

export default Reservation;
