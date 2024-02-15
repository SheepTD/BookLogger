import { ScrollView, View, useWindowDimensions } from "react-native";
import AddBookBtn from "../components/AddBookBtn";
import BookSpine from "../components/BookSpine";

const Bookshelf = (props) => {
  const setScreen = props.setScreen;
  const bookArray = props.bookArray;
  const setSelectedBook = props.setSelectedBook;
  const setSelectedBookIndex = props.setSelectedBookIndex;

  const { height, width } = useWindowDimensions();

  return (
    <>
      <View style={{ height: "80%" }}>
        <ScrollView>
          {bookArray.map((el, index) => {
            return (
              <BookSpine
                key={index}
                index={index}
                setSelectedBookIndex={setSelectedBookIndex}
                bookObject={el}
                setScreen={setScreen}
                setSelectedBook={setSelectedBook}
              />
            );
          })}
          <View style={{ height: 0.05 * width }} />
        </ScrollView>
      </View>

      <AddBookBtn setScreen={setScreen} />
    </>
  );
};

export default Bookshelf;
