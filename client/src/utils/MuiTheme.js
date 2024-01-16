import { alpha, createTheme, getContrastRatio } from "@mui/material";
import variables from "../styles/_variables.module.scss";

const buildPaletteColor = (color) => ({
  main: color,
  light: alpha(color, 0.5),
  dark: alpha(color, 0.9),
  contrastText: getContrastRatio(color, "#fff") > 4.5 ? "#fff" : "#111",
});

export const theme = createTheme({
  palette: {
    purple: buildPaletteColor(variables.purple),
    pink: buildPaletteColor(variables.pink),
    yellow: buildPaletteColor(variables.yellow),
    lightBlue: buildPaletteColor(variables.lightBlue),
    blue: buildPaletteColor(variables.blue),
    darkBlue: buildPaletteColor(variables.darkBlue),
    green: buildPaletteColor(variables.green),
    lightRed: buildPaletteColor(variables.lightRed),
    light: buildPaletteColor(variables.light),
    dark: buildPaletteColor(variables.dark),
  },
});
