import { StyleSheet } from "react-native";
import ColorPalette from "./ColorPalette";
import { Dimensions } from "react-native";

const windowHeight = Dimensions.get("window").height;

const NavBtnStyles = StyleSheet.create({
  Pressable: {
    backgroundColor: ColorPalette.accent,
    flex: 1,
    height: 0.1 * windowHeight,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default NavBtnStyles;
