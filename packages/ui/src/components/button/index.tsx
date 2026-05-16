import React, { forwardRef } from "react";
import { ButtonProps } from "./button.types";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant = "primary", size = "md", glow, theme, style, ...props }, ref) => {
    return (
      <button
        ref={ref}
        style={{
          padding: size === "md" ? "7px 15px" : "3px 9px",
          fontFamily: "monospace",
          textTransform: "uppercase",
          cursor: "pointer",
          border: "1px solid",
          ...style
        }}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
