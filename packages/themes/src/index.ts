export const THEMES = {
  cyberpunk: { bg: "#050505", surface: "#0a0a0a", primary: "#00ff41", text: "#e0e0e0", muted: "#00ff4180", border: "#00ff41" },
  matrix: { bg: "#000000", surface: "#001100", primary: "#00ff00", text: "#00ff00", muted: "#004400", border: "#00ff00" }
};
export type ThemeName = keyof typeof THEMES;
