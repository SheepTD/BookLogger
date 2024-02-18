import { StyleSheet } from "react-native";
import ColorPalette from "./ColorPalette";

const fontStyles = StyleSheet.create({
  title: {
    color: ColorPalette.text,
    fontFamily: "Lora-Bold",
    fontSize: 24,
  },
  text: {
    color: ColorPalette.text,
    fontFamily: "Lora-Reg",
  },
  button: {
    color: ColorPalette.bg,
    fontFamily: "Lora-Bold",
    fontSize: 18,
  },
  navBtn: {
    color: ColorPalette.bg,
    fontFamily: "Lora-Bold",
    fontSize: 18,
  },
  link: {
    color: ColorPalette.text,
    fontFamily: "Lora-Italic",
    textDecorationLine: "underline",
  },
});

export default fontStyles;
