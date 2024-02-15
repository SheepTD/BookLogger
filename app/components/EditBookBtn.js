import ButtonStyles from "../stylesheets/ButtonStyles";
import { Pressable, Text } from "react-native";
import fontStyles from "../stylesheets/fontStyles";
import ColorPalette from "../stylesheets/ColorPalette";

const EditBookBtn = (props) => {
  const setScreen = props.setScreen;
  return (
    <Pressable
      style={ButtonStyles}
      onPress={() => {
        setScreen("EditBook");
      }}
      android_ripple={{ color: ColorPalette.bg }}
    >
      <Text style={fontStyles.button}>Edit Book</Text>
    </Pressable>
  );
};

export default EditBookBtn;
