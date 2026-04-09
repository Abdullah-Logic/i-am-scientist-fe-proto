"use client";
import React, { useMemo } from "react";
import styles from "./container.module.css";
import { getBreakpointLabel } from "./container.helper";
import useWindowWidth from "../../../hooks/useWindowWidth";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  onBreakpointChange?: (width: number) => void;
}

const Container: React.FC<ContainerProps> = ({
  children,
  className = "",
  onBreakpointChange,
}) => {
  const windowWidth = useWindowWidth(onBreakpointChange);

  const responsiveMaxWidth = useMemo(() => {
    if (windowWidth === null) return "xl";
    return getBreakpointLabel(windowWidth);
  }, [windowWidth]);

  const containerClass = [
    styles.container,
    styles[`container-${responsiveMaxWidth}`],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <div className={containerClass}>{children}</div>;
};

export default Container;
