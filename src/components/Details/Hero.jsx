import { TbWorld } from "react-icons/tb";

function Hero({ hotel }) {
    const image = hotel?.images && hotel?.images[0].url;
  return (
    <div className="h-[35dvh] bg-cover bg-center"
    style={{ 
        backgroundImage: `url('${image}')`
    }}
    >
      <div className="grid place-content-center h-full bg-white/60 backdrop-blur-ms">
        <h1 className="text-2xl font-bold text-align-center ">{hotel?.name}</h1>
        <p className="flex items-center justify-center gap-1">
          <TbWorld />
          <span className="text-sm font-semibold">
            {hotel?.city?.name}, {hotel?.city?.country}
          </span>
        </p>
      </div>
    </div>
  );
}

export default Hero;
