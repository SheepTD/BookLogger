import { Pressable, Text } from "react-native";
import NavBtnStyles from "../stylesheets/NavBtnStyles";
import fontStyles from "../stylesheets/fontStyles";
import ColorPalette from "../stylesheets/ColorPalette";

const BackBtn = (props) => {
  const screen = props.screen;
  const setScreen = props.setScreen;
  const bookArray = props.bookArray;
  const setSelectedBook = props.setSelectedBook;
  const selectedBookIndex = props.selectedBookIndex;

  const handlePress = () => {
    if (screen === "Book" || screen === "AddBook" || screen === "Logs") {
      setScreen("Bookshelf");
    } else {
      setSelectedBook(bookArray[selectedBookIndex]);
      setTimeout(() => {
        setScreen("Book");
      }, 0);
    }
  };

  return (
    <Pressable
      style={NavBtnStyles.Pressable}
      onPress={() => handlePress()}
      android_ripple={{ color: ColorPalette.bg }}
    >
      <Text style={fontStyles.navBtn}>Back</Text>
    </Pressable>
  );
};

export default BackBtn;
