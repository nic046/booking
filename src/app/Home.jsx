import { useHotels } from "../context/hotels";
import { useEffect, useState } from "react";
import { LiaFilterSolid } from "react-icons/lia";
import React from "react";
import HotelList from "../components/home/HotelList";
import Search from "../components/home/Search";
import Filter from "../components/home/Filter";
import Menu from "../components/Menu";
import Spinner from "../components/Spinner";

function Home() {
  const { hotels, getAll, loading, error } = useHotels();
  const [result, setResult] = useState();
  const [openMenu, setOpenMenu] = useState();

  useEffect(() => {
    if (hotels.length === 0) {
      getAll();
    }
    setResult("");
  }, []);

  const filtered = hotels?.filter((hotel) =>
    (hotel?.name.toLowerCase().includes(result) || hotel?.city?.country.toLowerCase().includes(result) || hotel?.city?.name.toLowerCase().includes(result))
  );

  const handeltoggle = () => {
    setOpenMenu(!openMenu);
  };

  if (loading)
    return (
      <div className="grid place-content-center min-h-[100dvh]">
        <Spinner className="w-14 h-14 text-gray-200 fill-blue-500 animate-spin" />
      </div>
    );

  return (
    <div className="bg-gradient-to-b from-gray-400 to-gray-100">
      <section className="max-w-7xl mx-auto px-5 py-10">
        <div className="mb-8 flex items-center justify-center gap-4">
          <Search setResult={setResult} />
          <button className="md:hidden" onClick={handeltoggle}>
            <LiaFilterSolid className="size-10 btn" />
          </button>
          <Menu openMenu={openMenu} closeMenu={handeltoggle}>
            <Filter setResult={setResult} closeMenu={handeltoggle} />
          </Menu>
        </div>
        <HotelList hotels={filtered} />
      </section>
    </div>
  );
}

export { Home };
