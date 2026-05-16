import { ButtonHTMLAttributes } from "react";
import { ThemeName } from "@ascii-ui/themes";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "danger" | "success";
  size?: "sm" | "md" | "lg";
  glow?: boolean;
  theme?: ThemeName;
}
