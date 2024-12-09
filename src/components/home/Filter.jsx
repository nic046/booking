import { useHotels } from "../../context/hotels";
import { useEffect, useRef } from "react";
import useApiFetch from "../../hooks/useApiFetch";

function Filter({ setResult, closeMenu }) {
  const [cities, getCities] = useApiFetch();
  const { getByCity } = useHotels();

  const selectRef = useRef();

  useEffect(() => {
    getCities({
      url: `/cities`,
    });
  }, []);

  const handleChange = () => {
    getByCity(selectRef.current.value)
    setResult("")
    closeMenu()
  };

  return (
    <div className=" w-full md:w-fit">
      <select
        ref={selectRef}
        className="w-full md:w-fit focus:outline-none px-2 py-1 rounded-lg"
        onChange={handleChange}
      >
        <option value="">All cities</option>
        {cities?.map((city) => (
          <option key={city?.id} value={city?.id}>
            {city?.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Filter;
