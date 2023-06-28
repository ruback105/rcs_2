import Avatar from "./Avatar";

function Card({ initials, fullName, profession, onDelete }) {
  return (
    <div className="border-2 rounded-md border-black p-2 flex justify-between">
      <div className="flex">
        <Avatar>{initials}</Avatar>
        <div className="flex flex-col ml-1 space-y-1">
          <h3 className="text-lg font-semibold">{fullName}</h3>
          <p className="text-sm">{profession}</p>
        </div>
      </div>

      <button
        onClick={() => {
          onDelete();
        }}
        className="border rounded-md py-2 px-4 border-red-700 text-red-700"
      >
        Delete
      </button>
    </div>
  );
}

export default Card;
