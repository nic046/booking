import ReservationCard from "./ReservationCard";

function ReservationsList({ reservation, onRate, modalDelete }) {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-6">
      {reservation.map((reservation) => (
        <ReservationCard
          key={reservation?.id}
          reservation={reservation}
          onRate={onRate}
          modalDelete={modalDelete}
        />
      ))}
      {reservation.length === 0 && <p>No se encontro hoteles</p>}
    </div>
  );
}

export default ReservationsList;
