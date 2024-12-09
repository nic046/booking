import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { DeleteConfirmation } from "../components/reservations/DeleteConfirmacion";
import useApiFetch from "../hooks/useApiFetch";
import ReservationsList from "../components/reservations/ReservationsList";
import Modal from "../components/Modal";
import Review from "../components/reservations/Review";
import Spinner from "../components/Spinner";


function Reservations() {
  const [reservation, fetchReservations, loading, error] = useApiFetch();
  const [openModal, setOpenModal] = useState(false);
  const [child, setChild] = useState(null);

  const successMessage = () => {
    toast.success("Delete successfully!", {
      position: "bottom-right",
      autoClose: 3000,
    });
  };
  const errorMessage = () => {
    toast.error("Error deleting!", {
      position: "bottom-right",
      autoClose: 3000,
    });
  };

  useEffect(() => {
    fetchReservations({
      url: "/bookings",
    });
  }, []);

  const handleDelete = (id) => {
    fetchReservations({
      url: `/bookings/${id}`,
      method: "DELETE",
    });
    if (error) {
      errorMessage();
    } else {
      successMessage();
    }
    closeModal()
  };

  const closeModal = () => {
    setOpenModal(false);
  };
  const handleOpenModal = (id) => {
    setOpenModal(true);
    setChild(<Review hotelId={id} closeModal={closeModal} />);
  };

  const handleDeleteModal = (id) => {
    setOpenModal(true);
    setChild(
      <DeleteConfirmation
        hotelId={id}
        onDelete={handleDelete}
        closeModal={closeModal}
      />
    );
  };

  if (loading)
    return (
      <div className="grid place-content-center min-h-[100dvh]">
        <Spinner className="w-14 h-14 text-gray-200 fill-blue-500 animate-spin" />
      </div>
    );
  return (
    <div className="bg-gradient-to-b from-gray-400 to-gray-100">
      <div className="max-w-5xl mx-auto px-5 py-16 ">
        <ReservationsList
          reservation={reservation}
          onRate={handleOpenModal}
          modalDelete={handleDeleteModal}
        />
        <Modal openModal={openModal} closeModal={closeModal}>
          {child}
        </Modal>
      </div>
    </div>
  );
}

export { Reservations };
