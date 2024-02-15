import { Pressable, Text } from "react-native";
import ButtonStyles from "../stylesheets/ButtonStyles";
import fontStyles from "../stylesheets/fontStyles";
import ColorPalette from "../stylesheets/ColorPalette";

const SaveBookBtn = (props) => {
  const setScreen = props.setScreen;
  const bookArray = props.bookArray;
  const setBookArray = props.setBookArray;
  const bookObject = props.bookObject;

  const handlePress = () => {
    // Create a new array with the updated book object
    const newBookArray = [...bookArray, bookObject];
    setBookArray(newBookArray);
    setScreen("Bookshelf"); // Navigate to the "Bookshelf" screen
    console.log("added new book: ", newBookArray);
  };

  return (
    <Pressable
      style={ButtonStyles}
      onPress={handlePress}
      android_ripple={{ color: ColorPalette.bg }}
    >
      <Text style={fontStyles.button}>Save Book</Text>
    </Pressable>
  );
};

export default SaveBookBtn;
