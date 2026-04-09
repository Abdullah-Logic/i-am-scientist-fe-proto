"use client";

import { CustomButtonProps } from "@/types";

const Button = ({
  title,
  className,
  width,
  onClick,
  btnType,
  disabled,
}: CustomButtonProps) => {
  return (
    <button
      type={btnType ? btnType : "button"}
      disabled={disabled ? disabled : false}
      className={`${
        width ? width : "w-full"
      } bg-gradient-to-bl transition-all duration-300 bg-[#c407b9] hover:shadow-lg hover:opacity-90 py-2.5 tracking-wider lg:text-base text-sm text-white font-medium md:px-6 px-4 rounded-full ${className} `}
      onClick={onClick}
    >
      <span className={`flex-1`}>{title}</span>
    </button>
  );
};

export default Button;
