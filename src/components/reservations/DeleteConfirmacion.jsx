export function DeleteConfirmation({ hotelId, onDelete, closeModal }) {
  return (
    <div className="text-lg font-semibold border border-gray-300 px-4 py-2 rounded-lg">
      <h2>Are you sure you want to delete your reservarion</h2>
      <div className="grid gap-6 pt-6">
        <button
          className="btn bg-red-500 hover:bg-red-600"
          onClick={() => onDelete(hotelId)}
        >
          Delete
        </button>
        <button className="btn" onClick={() => closeModal()}>
          Cancel
        </button>
      </div>
    </div>
  );
}
