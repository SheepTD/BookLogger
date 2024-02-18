import { Pressable, Text, Alert } from "react-native";
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

  const openAlert = () =>
    Alert.alert(
      "Confirm Export All",
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
      <Text style={fontStyles.navBtn}>Export All</Text>
    </Pressable>
  );
};

export default ExportAllBtn;
