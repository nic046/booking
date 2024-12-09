import { useEffect } from "react";
import { useParams } from "react-router";
import { useAuth } from "../context/auth";
import { MdLock } from "react-icons/md";
import useApiFetch from "../hooks/useApiFetch";
import Spinner from "../components/Spinner";
import Reservation from "../components/Details/Reservation";
import Description from "../components/Details/Description";
import Gallery from "../components/Details/Gallery";
import Map from "../components/Details/Map";
import Hero from "../components/Details/Hero";
import Reviews from "../components/Details/Reviews";
import Related from "../components/Details/Related";

function Details() {
  const params = useParams();
  const { isAuth } = useAuth();
  const [hotel, getHotel, loading] = useApiFetch();

  useEffect(() => {
    getHotel({
      url: `/hotels/${params.id}`,
    });
  }, [params.id]);
  if (loading)
    return (
      <div className="grid place-content-center min-h-[100dvh]">
        <Spinner className="w-14 h-14 text-gray-200 fill-blue-500 animate-spin" />
      </div>
    );

  return (
    <div className="bg-gradient-to-b from-gray-300 to-gray-100">
      {/*Hero:*/}
      <Hero hotel={hotel} />
      <div className="max-w-5xl mx-auto p-5 py-10">
        {/*Reservaciones:*/}
        <h2 className="text-2xl md:text-4xl font-semibold text-center mb-4">Reserve</h2>
        <div className="mb-8">
          {isAuth ? (
            <Reservation hotelId={params.id} />
          ) : (
            <p className="flex items-center justify-center gap-1">
              <MdLock />
              <span className="text-sm">
                Please, login to make a reservation.
              </span>
            </p>
          )}
        </div>
        {/*Grid:*/}
        <div className="grid grid-cols-2 gap-5 mb-8">
          <div className="col-span-2">
            <Description
              description={hotel?.description}
              rating={hotel?.rating}
              address={hotel?.address}
            />
          </div>
          <div>
            <Gallery hotel={hotel} />
          </div>
          <div>
            <Map lat={hotel?.lat} lon={hotel?.lon} />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/*Reviews*/}
          <div>
            <Reviews hotelId={hotel?.id} />
          </div>
          {/*Related Hotels*/}
          <div className="h-full">
            <div className="sticky top-20">
              <Related cityId={hotel?.cityId} hotelId={hotel?.id} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Details };
