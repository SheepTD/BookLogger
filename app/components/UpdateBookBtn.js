import { Pressable, Text } from "react-native";
import ButtonStyles from "../stylesheets/ButtonStyles";
import fontStyles from "../stylesheets/fontStyles";
import ColorPalette from "../stylesheets/ColorPalette";

const UpdateBookBtn = (props) => {
  const selectedBook = props.selectedBook;
  const setScreen = props.setScreen;
  const bookArray = props.bookArray;
  const setBookArray = props.setBookArray;
  const selectedBookIndex = props.selectedBookIndex;

  const handlePress = () => {
    const newBookArray = [...bookArray];
    newBookArray.splice(selectedBookIndex, 1, selectedBook);
    setBookArray(newBookArray);
    console.log("bookArray changed", bookArray);
    setTimeout(() => {
      setScreen("Bookshelf");
    }, 0);
  };
  return (
    <Pressable
      style={ButtonStyles}
      onPress={handlePress}
      android_ripple={{ color: ColorPalette.bg }}
    >
      <Text style={fontStyles.button}>Update Book</Text>
    </Pressable>
  );
};

export default UpdateBookBtn;
