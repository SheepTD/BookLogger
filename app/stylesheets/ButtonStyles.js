import ColorPalette from "./ColorPalette";
import { Dimensions } from "react-native";

const windowHeight = Dimensions.get("window").height;

const ButtonStyles = {
  position: "absolute",
  bottom: 0,
  backgroundColor: ColorPalette.accent,
  width: "100%",
  height: 0.1 * windowHeight,
  alignItems: "center",
  justifyContent: "center",
};

export default ButtonStyles;
