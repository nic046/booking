import { MdOutlineCalendarToday } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaBed } from "react-icons/fa";
import { AiOutlineDollar } from "react-icons/ai";
import { priceFormat } from "../../utils";
import { Link } from "react-router";
import { FaHouseChimneyUser } from "react-icons/fa6";


function ReservationCard({ reservation, onRate, modalDelete }) {
  const checkInDate = new Date(reservation?.checkIn + "T00:00:00");
  const checkOutDate = new Date(reservation?.checkOut + "T00:00:00");
  const millisecondsPerDay = 1000 * 60 * 60 * 24;
  const nights = Math.ceil((checkOutDate - checkInDate) / millisecondsPerDay);

  const pricePerNight = parseInt(reservation?.hotel?.price);



  return (
    <div className="bg-white shadow-2xl rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 gap-6 border-solid border-2 border-gray-500 overflow-hidden">
      <h2 className="bg-blue-500 text-white text-xl font-semibold p-4">
        <Link to={`/hotel/${reservation?.hotel?.id}`}>
          {reservation?.hotel?.name}
        </Link>
      </h2>
      <div className="p-6 flex flex-col gap-5">
        <div className="flex justify-around gap-2 items-center bg-500">
          <div className="flex flex-col items-center gap-2">
          <FaHouseChimneyUser className="size-8"/>
            <div className="flex flex-col items-center gap-2">
              <p className="font-semibold">Arrival</p>
              <p className="text-xs">{reservation?.checkIn}</p>
            </div>
          </div>
          <div>
            <div className="flex flex-col items-center gap-2">
              <MdOutlineCalendarToday className="size-8" />
              <div className="flex flex-col items-center gap-2">
                <p className="font-semibold">Departure</p>
                <p className="text-xs">{reservation?.checkOut}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <FaLocationDot  className="font-bolder text-red-500"/>
          <p className="text-sm">
            {reservation?.hotel?.city?.name},{" "}
            {reservation?.hotel?.city?.country}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <FaBed className="size-8" />
          <p>
            {nights} {nights === 1 ? "night" : "nights"}
          </p>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <AiOutlineDollar className="size-8 text-green-700" />
            <p>Price per nights</p>
          </div>
          <p className="font-semibold">{priceFormat.format(pricePerNight)}</p>
        </div>

        <div className="flex justify-between items-center border-t pt-4">
          <div className="flex items-center gap-2">
            <AiOutlineDollar className="size-8 text-green-700" />
            <p className="font-semibold text-lg">Total price</p>
          </div>
          <p className="font-semibold text-xl">
            {priceFormat.format(pricePerNight * nights)}
          </p>
        </div>
      </div>

      <div className="flex justify-between bg-gray-100 py-4 px-6">
        <button
          className="btn bg-red-500 hover:bg-red-600"
          onClick={() => modalDelete(reservation?.id)}
        >
          Delete
        </button>
        <button
          className="btn bg-yellow-400 hover:bg-yellow-500"
          onClick={() => onRate(reservation?.hotel?.id)}
        >
          Rate
        </button>
      </div>
    </div>
  );
}

export default ReservationCard;
