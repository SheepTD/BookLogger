import { Pressable, Text } from "react-native";
import NavBtnStyles from "../stylesheets/NavBtnStyles";
import * as Clipboard from "expo-clipboard";
import fontStyles from "../stylesheets/fontStyles";
import ColorPalette from "../stylesheets/ColorPalette";

const ExportAllBtn = (props) => {
  const bookArray = props.bookArray;

  const copyToClipboard = async () => {
    const JSONBookArray = JSON.stringify([...bookArray]);
    console.log("stringified", JSON.stringify(JSONBookArray));
    await Clipboard.setStringAsync(JSONBookArray);
  };

  return (
    <Pressable
      style={NavBtnStyles.Pressable}
      onPress={() => copyToClipboard()}
      android_ripple={{ color: ColorPalette.bg }}
    >
      <Text style={fontStyles.navBtn}>Export All</Text>
    </Pressable>
  );
};

export default ExportAllBtn;
