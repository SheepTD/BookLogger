import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import ColorPalette from "../stylesheets/ColorPalette";
import EditBookBtn from "../components/EditBookBtn";
import fontStyles from "../stylesheets/fontStyles";

const Book = (props) => {
  const selectedBook = props.selectedBook;
  const setScreen = props.setScreen;
  // Need to use "useWindowDimensions", because scrollview doesn't work with percentage values
  const { height, width } = useWindowDimensions();

  let ds;
  let df;
  selectedBook.ds.trim() === "" ? (ds = "Unknown DS") : (ds = selectedBook.ds);
  selectedBook.df.trim() === "" ? (df = "Unknown DF") : (df = selectedBook.df);

  const styles = StyleSheet.create({
    text: {
      flex: 1,
      margin: 16,
    },
    title: {
      flex: 1,
      flexGrow: 2,
      textAlign: "center",
      textAlignVertical: "center",
    },
    underTitle: {
      flexGrow: 0.5,
      flex: 1,
      textAlign: "center",
      textAlignVertical: "center",
    },
    view: {
      marginTop: 0.05 * width,
      marginLeft: 0.05 * width,
      width: 0.9 * width,
      minHeight: 0.2 * height,
      borderRadius: 16,
      backgroundColor: ColorPalette.fg,
    },
  });

  return (
    <>
      <View style={{ height: "80%" }}>
        <ScrollView>
          <View style={styles.view}>
            <Text style={[styles.title, fontStyles.title]}>
              {selectedBook.title.trim() === ""
                ? "Untitled Book"
                : selectedBook.title}
            </Text>
            <Text style={[styles.underTitle, fontStyles.text]}>
              {selectedBook.author.trim() === ""
                ? "Unknown Author"
                : selectedBook.author}
            </Text>
            <Text style={[styles.underTitle, fontStyles.text]}>
              {ds + " - " + df}
            </Text>
            <View style={{ marginBottom: 16 }} />
          </View>
          <View style={styles.view}>
            <Text style={[styles.text, fontStyles.text]}>
              {selectedBook.tb.trim() === ""
                ? "Unknown Thoughts Before"
                : selectedBook.tb}
            </Text>
          </View>
          <View style={styles.view}>
            <Text style={[styles.text, fontStyles.text]}>
              {selectedBook.ta.trim() === ""
                ? "Unknown Thoughts After"
                : selectedBook.ta}
            </Text>
          </View>
        </ScrollView>
      </View>
      <EditBookBtn setScreen={setScreen} />
    </>
  );
};

export default Book;
