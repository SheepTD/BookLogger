import {
  Pressable,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import ColorPalette from "../stylesheets/ColorPalette";
import fontStyles from "../stylesheets/fontStyles";

const BookSpine = (props) => {
  const bookObject = props.bookObject;
  const index = props.index;
  const setSelectedBookIndex = props.setSelectedBookIndex;
  const setScreen = props.setScreen;
  const setSelectedBook = props.setSelectedBook;

  // Need to use "useWindowDimensions", because scrollview doesn't work with percentage values
  const { height, width } = useWindowDimensions();

  const styles = StyleSheet.create({
    pressable: {
      alignItems: "center",
      justifyContent: "space-evenly",
      marginLeft: 0.05 * width,
      marginTop: 0.05 * width,
      width: 0.9 * width,
      minHeight: 0.2 * height,
      backgroundColor: ColorPalette.fg,
      borderRadius: 16,
    },
    title: {
      flexGrow: 2,
      flex: 1,
      textAlignVertical: "center",
      textAlign: "center",
    },
    otherValues: {
      flexGrow: 0.5,
      textAlignVertical: "center",
    },
  });

  let ds;
  let df;
  bookObject.ds.trim() === "" ? (ds = "Unknown DS") : (ds = bookObject.ds);
  bookObject.df.trim() === "" ? (df = "Unknown DF") : (df = bookObject.df);

  return (
    <Pressable
      android_ripple={{ color: ColorPalette.bg }}
      style={styles.pressable}
      onPress={() => {
        setSelectedBook(bookObject);
        console.log("set selected book ", bookObject);
        setSelectedBookIndex(index);
        console.log("set selected book index ", index);
        setTimeout(() => {
          setScreen("Book");
        }, 0);
      }}
    >
      <Text style={[styles.title, fontStyles.title]}>
        {bookObject.title.trim() === "" ? "Untitled Book" : bookObject.title}
      </Text>
      <Text style={[styles.otherValues, fontStyles.text]}>
        {bookObject.author.trim() === "" ? "Unknown Author" : bookObject.author}
      </Text>
      <Text style={[styles.otherValues, fontStyles.text]}>
        {ds + " - " + df}
      </Text>
      <View style={{ marginBottom: 16 }} />
    </Pressable>
  );
};

export default BookSpine;
