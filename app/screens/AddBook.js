import React, { useState, useEffect } from "react";
import {
  ScrollView,
  StyleSheet,
  TextInput,
  View,
  useWindowDimensions,
} from "react-native";
import ColorPalette from "../stylesheets/ColorPalette";
import SaveBookBtn from "../components/SaveBookBtn";
import fontStyles from "../stylesheets/fontStyles";

const AddBook = (props) => {
  const setScreen = props.setScreen;
  const bookArray = props.bookArray;
  const setBookArray = props.setBookArray;

  const [bookObject, setBookObject] = useState({
    title: "",
    author: "",
    ds: "",
    df: "",
    tb: "",
    ta: "",
  });

  useEffect(() => {
    console.log(bookObject);
  }, [bookObject]);

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
    TextInput: {
      flex: 1,
      margin: 16,
    },
    BufferView: {
      backgroundColor: ColorPalette.bg,
      width: 0.9 * width,
      minHeight: 0.1 * height,
      marginTop: 0.05 * width,
      marginLeft: 0.05 * width,
    },
    T: {
      textAlignVertical: "top",
    },
  });

  const handleInputChange = (key, value) => {
    setBookObject({ ...bookObject, [key]: value });
  };

  return (
    <>
      <View style={{ height: "80%" }}>
        <ScrollView>
          <View style={styles.View}>
            <TextInput
              onChangeText={(value) => handleInputChange("title", value)}
              placeholder="Title"
              style={[styles.TextInput, fontStyles.text]}
            />
          </View>
          <View style={styles.View}>
            <TextInput
              onChangeText={(value) => handleInputChange("author", value)}
              placeholder="Author"
              style={[styles.TextInput, fontStyles.text]}
            />
          </View>
          <View style={styles.View}>
            <TextInput
              onChangeText={(value) => handleInputChange("ds", value)}
              placeholder="Date Started (day/month/year)"
              style={[styles.TextInput, fontStyles.text]}
            />
          </View>
          <View style={styles.View}>
            <TextInput
              onChangeText={(value) => handleInputChange("df", value)}
              placeholder="Date Finished (day/month/year)"
              style={[styles.TextInput, fontStyles.text]}
            />
          </View>
          <View style={styles.View}>
            <TextInput
              multiline={true}
              numberOfLines={8}
              onChangeText={(value) => handleInputChange("tb", value)}
              placeholder="Your Thoughts Before"
              style={[styles.T, styles.TextInput, fontStyles.text]}
            />
          </View>
          <View style={styles.View}>
            <TextInput
              multiline={true}
              numberOfLines={8}
              onChangeText={(value) => handleInputChange("ta", value)}
              placeholder="Your Thoughts After"
              style={[styles.T, styles.TextInput, fontStyles.text]}
            />
          </View>
          <View style={styles.BufferView}></View>
        </ScrollView>
      </View>

      <SaveBookBtn
        setScreen={setScreen}
        bookArray={bookArray}
        setBookArray={setBookArray}
        bookObject={bookObject}
      />
    </>
  );
};

export default AddBook;
