import React from "react";

type CustomAlertProps = {
  message: string;
  isVisible: boolean;
  onClose: () => void;
};

const CustomAlert: React.FC<CustomAlertProps> = ({ message, isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-gradient-to-r from-blue-600 to-[rgba(196,7,185,1)] p-[1.5px] rounded-lg w-1/3">

      <div className="bg-[linear-gradient(175.05deg,#1D013C_6.62%,#310266_44.17%,#3C027D_64.08%,#4E03A2_97.1%)] rounded-lg shadow-2xl  p-6 ">
        <p className="text-base text-center font-semibold mb-4">{message}</p>
        <button
          onClick={onClose}
          className="bg-[rgba(196,7,185,1)] hover:bg-opacity-60 text-white px-4 py-2 rounded"
        >
          OK
        </button>
      </div>
      </div>

    </div>
  );
};

export default CustomAlert;
