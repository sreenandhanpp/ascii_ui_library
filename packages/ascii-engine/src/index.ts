export const BORDERS = {
  double: { tl: "╔", tr: "╗", bl: "╚", br: "╝", h: "═", v: "║", css: "3px double" },
  single: { tl: "┌", tr: "┐", bl: "└", br: "┘", h: "─", v: "│", css: "1px solid" }
};
export type BorderStyle = keyof typeof BORDERS;
