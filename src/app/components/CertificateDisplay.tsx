"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { Download } from "lucide-react";
import { Linkedin } from "lucide-react";

interface CertificateDisplayProps {
  result: {
    success: boolean;
    certificateUrl?: string;
    message?: string;
  } | null;
  isVerifying: boolean;
}

export default function CertificateDisplay({
  result,
  isVerifying,
}: CertificateDisplayProps) {
  const [showTooltip, setShowTooltip] = useState(false);

  //   const handleDownload = () => {
  //     if (result?.certificateUrl) {
  //       const link = document.createElement("a")
  //       link.href = result.certificateUrl
  //       link.download = "certificate.jpg"
  //       document.body.appendChild(link)
  //       link.click()
  //       document.body.removeChild(link)
  //       showTooltipMessage("Certificate downloaded successfully!")
  //     }
  //   }

  const handleDownload = async () => {
    if (!result?.certificateUrl) return;

    try {
      const response = await fetch(result.certificateUrl, {
        mode: "cors", // Ensures cross-origin request handling
      });

      if (!response.ok) throw new Error("Failed to fetch image");

      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = "certificate.jpg";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Cleanup the object URL after the download
      URL.revokeObjectURL(blobUrl);

      showTooltipMessage("Certificate downloaded successfully!");
    } catch (error) {
      console.error("Error downloading certificate:", error);
      alert("Failed to download the certificate.");
    }
  };

//   const handleShare = () => {
//     if (result?.certificateUrl) {
//       const shareText = `I'm excited to share my certificate! Check it out here: ${result.certificateUrl}`;
//       const shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
//         result.certificateUrl
//       )}&summary=${encodeURIComponent(shareText)}`;
//       window.open(shareUrl, "_blank");
//       showTooltipMessage("Sharing to LinkedIn...");
//     }
//   };

  const showTooltipMessage = (message: string) => {
    setShowTooltip(true);
    setTimeout(() => setShowTooltip(false), 3000);
  };

  if (isVerifying) {
    return (
      <div className="mt-6 flex justify-center">
        <motion.div
          className="w-8 h-8 border-4 border-indigo-500 border-t-transparent rounded-full"
          animate={{ rotate: 360 }}
          transition={{
            duration: 1,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      </div>
    );
  }

  if (!result) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mt-6"
    >
      {result.success ? (
        <div className="flex flex-col items-center">
          {/* <p className="mb-4 text-green-600 font-semibold">Certificate found!</p> */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <Image
              src={result.certificateUrl || "/placeholder.svg"}
              alt="Certificate"
              width={1000}
              height={500}
              className="rounded-lg shadow-lg"
            />
            <div className="absolute bottom-4 right-4 flex space-x-2">
              <button
                onClick={handleDownload}
                className="bg-black text-indigo-600 p-2 rounded-full shadow-md hover:bg-indigo-100 transition duration-200"
              >
                <Download size={24} />
              </button>
              {/* <button
                onClick={handleShare}
                className="bg-white text-indigo-600 p-2 rounded-full shadow-md hover:bg-indigo-100 transition duration-200"
              >
                <Linkedin size={24} />
              </button> */}
            </div>
          </motion.div>
          {showTooltip && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="mt-4 bg-black text-white px-4 py-2 rounded-md"
            >
              Action completed successfully!
            </motion.div>
          )}
        </div>
      ) : (
        <p className="text-red-600 text-center">{result.message}</p>
      )}
    </motion.div>
  );
}
