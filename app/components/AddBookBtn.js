import { Pressable, Text } from "react-native";
import ButtonStyles from "../stylesheets/ButtonStyles";
import fontStyles from "../stylesheets/fontStyles";
import ColorPalette from "../stylesheets/ColorPalette";

const AddBookBtn = (props) => {
  const setScreen = props.setScreen;

  return (
    <Pressable
      style={ButtonStyles}
      onPress={() => {
        setScreen("AddBook");
      }}
      android_ripple={{ color: ColorPalette.bg }}
    >
      <Text style={fontStyles.button}>Add Book</Text>
    </Pressable>
  );
};

export default AddBookBtn;
