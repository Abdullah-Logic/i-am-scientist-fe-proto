import React from "react";
import Image from "next/image";
import Container from "./container/container";

const ImagesComp = () => {
  const images = [
    { src: "/images/Container (1).webp", alt: "Image 1" },
    { src: "/images/Container (2).webp", alt: "Image 2" },
    { src: "/images/Container (3).webp", alt: "Image 3" },
    { src: "/images/Container (4).webp", alt: "Image 4" },
    { src: "/images/Container (5).webp", alt: "Image 5" },
  ];
  return (
    <Container>
      <div className="max-sm:hidden bg-[#280253] w-full h-full p-4">
        <div className="hidden sm:grid grid-cols-5 gap-4">
          {images.map((image, index) => (
            <div key={index} className="relative w-full h-0 pb-[65%]">
              <Image
                src={image.src}
                alt={image.alt}
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default ImagesComp;
