import { Pressable, Text } from "react-native";
import NavBtnStyles from "../stylesheets/NavBtnStyles";
import * as Clipboard from "expo-clipboard";
import fontStyles from "../stylesheets/fontStyles";
import ColorPalette from "../stylesheets/ColorPalette";

const ExportBookBtn = (props) => {
  const selectedBook = props.selectedBook;

  const copyToClipboard = async () => {
    const JSONSelectedBook = JSON.stringify(selectedBook);
    console.log("stringified", JSON.stringify(selectedBook));
    await Clipboard.setStringAsync(JSONSelectedBook);
  };

  return (
    <Pressable
      style={NavBtnStyles.Pressable}
      onPress={() => copyToClipboard()}
      android_ripple={{ color: ColorPalette.bg }}
    >
      <Text style={fontStyles.navBtn}>Export</Text>
    </Pressable>
  );
};

export default ExportBookBtn;
