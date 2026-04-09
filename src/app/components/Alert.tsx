// // CustomAlert.tsx
// import React from "react";

// interface CustomAlertProps {
//   message: string;
//   onConfirm: () => void;
//   onCancel: () => void;
//   visible: boolean;
// }

// const CustomAlert: React.FC<CustomAlertProps> = ({
//   message,
//   onConfirm,
//   onCancel,
//   visible,
// }) => {
//   if (!visible) return null;

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//       <div className="bg-[linear-gradient(175.05deg,#1D013C_6.62%,#310266_44.17%,#3C027D_64.08%,#4E03A2_97.1%)] rounded-lg shadow-2xl border border-1 p-6 w-1/3">
//         <p className="text-sm text-center font-semibold mb-4 ">{message}?</p>
//         <div className="flex justify-center items-center gap-4">
          
//           <button
//             onClick={onConfirm}
//             className="bg-[rgba(196,7,185,1)] hover:bg-opacity-60 text-white px-4 py-2 rounded"
//           >
//             Confirm
//           </button>
//           <button
//             onClick={onCancel}
//             className="bg-gray-300 hover:bg-gray-400 text-black px-4 py-2 rounded"
//           >
//             Cancel
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CustomAlert;
import React from "react";

interface TabSwitchAlertProps {
  message: string;
  isVisible: boolean;
  onClose: () => void;
}

const TabSwitchAlert: React.FC<TabSwitchAlertProps> = ({
  message,
  isVisible,
  onClose,
}) => {
  if (!isVisible) return null;

  return (
    
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-gradient-to-r from-blue-600 to-[rgba(196,7,185,1)] p-[1.5px] rounded-lg w-1/3">

      <div className="bg-[linear-gradient(175.05deg,#1D013C_6.62%,#310266_44.17%,#3C027D_64.08%,#4E03A2_97.1%)] rounded-lg shadow-2xl  p-6 ">
        <p className="text-sm text-center font-semibold mb-4 ">{message}</p>
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

export default TabSwitchAlert;
