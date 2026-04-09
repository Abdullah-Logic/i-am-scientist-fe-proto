// "use client";

// import React, { useRef, useEffect, useState } from "react";
// import * as tf from "@tensorflow/tfjs";
// import * as facemesh from "@tensorflow-models/facemesh";
// import Webcam from "react-webcam";

// // Reusable Alert Component
// interface AlertProps {
//   message: string;
//   type?: "error" | "success" | "info";
//   position?: "top" | "bottom";
//   customStyle?: React.CSSProperties;
// }

// const Alert: React.FC<AlertProps> = ({
//   message,
//   type = "info",
//   position = "top",
//   customStyle = {},
// }) => {
//   if (!message) return null;

//   const baseStyle = {
//     backgroundColor:
//       type === "error"
//         ? "red"
//         : type === "success"
//         ? "green"
//         : "blue",
//     color: "white",
//     padding: "8px 10px",
//     borderRadius: "8px",
//     position: "absolute" as "absolute",
//     [position === "top" ? "top" : "bottom"]: "20px",
//     zIndex: 10,
//   };

//   return (
//     <div style={{ ...baseStyle, ...customStyle }}>
//       {message}
//     </div>
//   );
// };

// const FaceDetect: React.FC = () => {
//   const webcamRef = useRef<Webcam>(null);
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const [cameraOn, setCameraOn] = useState(true); // Camera on by default
//   const [alertMessage, setAlertMessage] = useState("");

//   // Initialize TensorFlow backend
//   const initializeBackend = async () => {
//     await tf.setBackend("webgl");
//     await tf.ready();
//   };

//   // Load facemesh model
//   const loadFacemesh = async () => {
//     try {
//       const model = await facemesh.load({
//         inputResolution: { width: 480, height: 360 },
//         scale: 0.8,
//       });

//       setInterval(() => {
//         detectFaces(model);
//       }, 100);
//     } catch (error) {
//       console.error("Error loading FaceMesh model:", error);
//     }
//   };

//   // Detect faces and render points
//   const detectFaces = async (model: facemesh.FaceMesh) => {
//     if (
//       webcamRef.current &&
//       webcamRef.current.video &&
//       webcamRef.current.video.readyState === 4
//     ) {
//       const video = webcamRef.current.video;
//       const videoWidth = video.videoWidth;
//       const videoHeight = video.videoHeight;

//       webcamRef.current.video.width = videoWidth;
//       webcamRef.current.video.height = videoHeight;

//       if (canvasRef.current) {
//         canvasRef.current.width = videoWidth;
//         canvasRef.current.height = videoHeight;

//         const ctx = canvasRef.current.getContext("2d");
//         if (!ctx) return;
//         ctx.clearRect(0, 0, videoWidth, videoHeight);

//         const videoTensor = tf.browser.fromPixels(video);

//         try {
//           const faces = await model.estimateFaces(videoTensor);

//           if (faces.length === 0) {
//             setAlertMessage("No face detected. Please ensure you are visible.");
//           } else {
//             setAlertMessage(""); // Clear alert if a face is detected
//           }

//           faces.forEach((face) => {
//             const keypoints = face.scaledMesh.map(
//               ([x, y]) => [x, y] as [number, number]
//             );
//             keypoints.forEach(([x, y]) => {
//               ctx.beginPath();
//               ctx.arc(x, y, 1, 0, 2 * Math.PI);
//               ctx.fillStyle = "red";
//               ctx.fill();
//             });
//           });
//         } finally {
//           videoTensor.dispose();
//         }
//       }
//     }
//   };

//   useEffect(() => {
//     initializeBackend();
//     if (cameraOn) {
//       loadFacemesh();
//     } else {
//       setAlertMessage("Camera is off. Please turn it on to proceed.");
//     }
//   }, [cameraOn]);

//   return (
//     <div className="flex flex-col justify-center items-center   relative">
//       {/* Alert Component */}
//       <Alert
//         message={alertMessage}
//         type="error"
//         position="top"
//         customStyle={{ fontSize: "12px",  }}
        
//       />
//       <div
//         className={`relative flex items-center justify-center  rounded-md bg-black ${cameraOn ? "" : "bg-opacity-70"
//           }`}
//         style={{ width: 200, height: 150 }} // Reduced camera display size
//       >
//         {!cameraOn ? (
//           <div className="absolute text-white text-lg font-bold">
//             Camera is Off
//           </div>
//         ) : (
//           <>
//             <Webcam ref={webcamRef} className="absolute w-full h-full" />
//             <canvas ref={canvasRef} className="absolute w-full h-full" />
//           </>
//         )}
//       </div>
//       {!cameraOn && (
//         <button
//           onClick={() => setCameraOn(true)}
//           className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
//         >
//           Turn On Camera
//         </button>
//       )}
//     </div>
//   );
// };

// export default FaceDetect;


"use client";

import React, { useRef, useEffect, useState } from "react";
import * as tf from "@tensorflow/tfjs";
import * as facemesh from "@tensorflow-models/facemesh";
import Webcam from "react-webcam";

// Reusable Alert Component
interface AlertProps {
  message: string;
  type?: "error" | "success" | "info";
  customStyle?: React.CSSProperties;
}

const Alert: React.FC<AlertProps> = ({
  message,
  type = "info",
  customStyle = {},
}) => {
  if (!message) return null;

  const baseStyle: React.CSSProperties = {
    backgroundColor:
      type === "error" ? "red" : type === "success" ? "green" : "blue",
    color: "white",
    padding: "8px 16px",
    borderRadius: "8px",
    position: "absolute",
    top: "10px", // Position within the camera display
    left: "50%", // Center horizontally
    transform: "translateX(-50%)",
    zIndex: 10,
    fontSize: "12px",
    textAlign: "center",
  };

  return (
    <div style={{ ...baseStyle, ...customStyle }}>
      {message}
    </div>
  );
};

const FaceDetect: React.FC = () => {
  const webcamRef = useRef<Webcam>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [cameraOn, setCameraOn] = useState(true); // Camera on by default
  const [alertMessage, setAlertMessage] = useState("");
  const cameraSize = { width: 200, height: 150 }; // Camera display size

  // Initialize TensorFlow backend
  const initializeBackend = async () => {
    await tf.setBackend("webgl");
    await tf.ready();
  };

  // Load facemesh model
  const loadFacemesh = async () => {
    try {
      const model = await facemesh.load({
        inputResolution: { width: 480, height: 360 },
        scale: 0.8,
      });

      setInterval(() => {
        detectFaces(model);
      }, 100);
    } catch (error) {
      console.error("Error loading FaceMesh model:", error);
    }
  };

  // Detect faces and render points
  const detectFaces = async (model: facemesh.FaceMesh) => {
    if (
      webcamRef.current &&
      webcamRef.current.video &&
      webcamRef.current.video.readyState === 4
    ) {
      const video = webcamRef.current.video;
      const videoWidth = video.videoWidth;
      const videoHeight = video.videoHeight;

      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      if (canvasRef.current) {
        canvasRef.current.width = videoWidth;
        canvasRef.current.height = videoHeight;

        const ctx = canvasRef.current.getContext("2d");
        if (!ctx) return;
        ctx.clearRect(0, 0, videoWidth, videoHeight);

        const videoTensor = tf.browser.fromPixels(video);

        try {
          const faces = await model.estimateFaces(videoTensor);

          if (faces.length === 0) {
            setAlertMessage("No face detected. Please ensure you are visible .");
          } else {
            setAlertMessage(""); // Clear alert if a face is detected
          }

          faces.forEach((face) => {
            const keypoints = face.scaledMesh.map(
              ([x, y]) => [x, y] as [number, number]
            );
            keypoints.forEach(([x, y]) => {
              ctx.beginPath();
              ctx.arc(x, y, 1, 0, 2 * Math.PI);
              ctx.fillStyle = "red";
              ctx.fill();
            });
          });
        } finally {
          videoTensor.dispose();
        }
      }
    }
  };

  useEffect(() => {
    initializeBackend();
    if (cameraOn) {
      loadFacemesh();
    } else {
      setAlertMessage("Camera is off. Please turn it on to proceed.");
    }
  }, [cameraOn]);

  return (
    <div className="flex flex-col justify-center items-center relative">
      {/* Alert Component */}
      <Alert
        message={alertMessage}
        type="error"
        customStyle={{
          width: `${cameraSize.width - 20}px`, // Alert width slightly smaller than the camera width
        }}
      />
      <div
        className={`relative flex items-center justify-center rounded-md bg-black ${
          cameraOn ? "" : "bg-opacity-70"
        }`}
        style={{ width: cameraSize.width, height: cameraSize.height }}
      >
        {!cameraOn ? (
          <div className="absolute text-white text-lg font-bold">
            Camera is Off
          </div>
        ) : (
          <>
            <Webcam ref={webcamRef} className="absolute w-full h-full" />
            <canvas ref={canvasRef} className="absolute w-full h-full" />
          </>
        )}
      </div>
      {!cameraOn && (
        <button
          onClick={() => setCameraOn(true)}
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Turn On Camera
        </button>
      )}
    </div>
  );
};

export default FaceDetect;
