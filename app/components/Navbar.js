import { StyleSheet, View } from "react-native";
import ColorPalette from "../stylesheets/ColorPalette";
import { Dimensions } from "react-native";
import BackBtn from "./BackBtn";
import DeleteBtn from "./DeleteBtn";
import ImportBtn from "./ImportBtn";
import ExportBookBtn from "./ExportBookBtn";
import ExportAllBtn from "./ExportAllBtn";
import SortBtn from "./SortBtn";

const windowHeight = Dimensions.get("window").height;

const Navbar = (props) => {
  const screen = props.screen;
  const setScreen = props.setScreen;
  const bookArray = props.bookArray;
  const setSelectedBook = props.setSelectedBook;
  const selectedBookIndex = props.selectedBookIndex;
  const setBookArray = props.setBookArray;
  const selectedBook = props.selectedBook;

  return (
    <View style={styles.navbar}>
      {screen === "Bookshelf" ? (
        <>
          <ImportBtn setBookArray={setBookArray} bookArray={bookArray} />
          <SortBtn
            bookArray={bookArray}
            setBookArray={setBookArray}
            setScreen={setScreen}
          />
          <ExportAllBtn bookArray={bookArray} />
        </>
      ) : (
        <BackBtn
          screen={screen}
          setScreen={setScreen}
          bookArray={bookArray}
          setSelectedBook={setSelectedBook}
          selectedBookIndex={selectedBookIndex}
        />
      )}
      {screen === "Book" ? (
        <>
          <ExportBookBtn selectedBook={selectedBook} />
          <DeleteBtn
            setScreen={setScreen}
            bookArray={bookArray}
            selectedBookIndex={selectedBookIndex}
            setBookArray={setBookArray}
          />
        </>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    backgroundColor: ColorPalette.accent,
    width: "100%",
    height: 0.1 * windowHeight,
    flexDirection: "row",
    alignItems: "center",
  },
});

export default Navbar;
