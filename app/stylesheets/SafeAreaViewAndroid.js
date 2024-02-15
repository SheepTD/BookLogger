import { StyleSheet, Platform, StatusBar } from "react-native";
import ColorPalette from "./ColorPalette";

const SafeAreaViewAndroid = StyleSheet.create({
  flex: 1,
  backgroundColor: ColorPalette.bg,
  paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
});
export default SafeAreaViewAndroid;
