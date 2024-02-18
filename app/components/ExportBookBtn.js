import { Pressable, Text, Alert } from "react-native";
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

  const openAlert = () =>
    Alert.alert(
      "Confirm Export",
      "Are you sure that you want to export all books to your clipboard?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => copyToClipboard() },
      ]
    );

  return (
    <Pressable
      style={NavBtnStyles.Pressable}
      onPress={() => openAlert()}
      android_ripple={{ color: ColorPalette.bg }}
    >
      <Text style={fontStyles.navBtn}>Export</Text>
    </Pressable>
  );
};

export default ExportBookBtn;
