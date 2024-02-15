import {
  ScrollView,
  StyleSheet,
  TextInput,
  View,
  useWindowDimensions,
} from "react-native";
import Navbar from "../components/Navbar";
import ColorPalette from "../stylesheets/ColorPalette";
import UpdateBookBtn from "../components/UpdateBookBtn";
import fontStyles from "../stylesheets/fontStyles";

const EditBook = (props) => {
  const selectedBook = props.selectedBook;
  const setSelectedBook = props.setSelectedBook;
  const setScreen = props.setScreen;
  const bookArray = props.bookArray;
  const setBookArray = props.setBookArray;
  const selectedBookIndex = props.selectedBookIndex;

  const handleTextChange = (newText, key) => {
    const updatedSelectedBook = { ...selectedBook, [key]: newText };
    setSelectedBook(updatedSelectedBook);
    console.log("updated book ", updatedSelectedBook);
  };

  const { height, width } = useWindowDimensions();

  const styles = StyleSheet.create({
    View: {
      backgroundColor: ColorPalette.fg,
      width: 0.9 * width,
      minHeight: 0.1 * height,
      marginTop: 0.05 * width,
      marginLeft: 0.05 * width,
      borderRadius: 16,
    },
    text: {
      flex: 1,
      margin: 16,
    },
    T: {
      textAlignVertical: "top",
    },
  });

  return (
    <>
      <View
        style={{
          height: "80%",
        }}
      >
        <ScrollView>
          <View style={styles.View}>
            <TextInput
              style={[styles.text, fontStyles.text]}
              placeholder="Title"
              value={selectedBook.title}
              onChangeText={(value) => handleTextChange(value, "title")}
            />
          </View>
          <View style={styles.View}>
            <TextInput
              style={[styles.text, fontStyles.text]}
              placeholder="Author"
              value={selectedBook.author}
              onChangeText={(value) => handleTextChange(value, "author")}
            />
          </View>
          <View style={styles.View}>
            <TextInput
              style={[styles.text, fontStyles.text]}
              placeholder="Date Started (day/month/year)"
              value={selectedBook.ds}
              onChangeText={(value) => handleTextChange(value, "ds")}
            />
          </View>
          <View style={styles.View}>
            <TextInput
              style={[styles.text, fontStyles.text]}
              placeholder="Date Finished (day/month/year)"
              value={selectedBook.df}
              onChangeText={(value) => handleTextChange(value, "df")}
            />
          </View>
          <View style={styles.View}>
            <TextInput
              style={[styles.T, styles.text, fontStyles.text]}
              multiline={true}
              numberOfLines={8}
              placeholder="Your Thoughts Before"
              value={selectedBook.tb}
              onChangeText={(value) => handleTextChange(value, "tb")}
            />
          </View>
          <View style={styles.View}>
            <TextInput
              multiline={true}
              numberOfLines={8}
              style={[styles.T, styles.text, fontStyles.text]}
              placeholder="Your Thoughts After"
              value={selectedBook.ta}
              onChangeText={(value) => handleTextChange(value, "ta")}
            />
          </View>
          <View style={{ height: 0.05 * width }} />
        </ScrollView>
      </View>

      <UpdateBookBtn
        selectedBook={selectedBook}
        selectedBookIndex={selectedBookIndex}
        setScreen={setScreen}
        bookArray={bookArray}
        setBookArray={setBookArray}
      />
    </>
  );
};

export default EditBook;
