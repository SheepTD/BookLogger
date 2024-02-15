import { useState, useEffect } from "react";
import { Pressable, Text } from "react-native";
import NavBtnStyles from "../stylesheets/NavBtnStyles";
import * as Clipboard from "expo-clipboard";
import fontStyles from "../stylesheets/fontStyles";
import ColorPalette from "../stylesheets/ColorPalette";

const ImportBtn = (props) => {
  const setBookArray = props.setBookArray;
  const bookArray = props.bookArray;

  const [copiedText, setCopiedText] = useState("");

  useEffect(() => handlePress(), [copiedText]);

  const fetchCopiedText = async () => {
    const text = await Clipboard.getStringAsync();
    setCopiedText(text);
  };

  handlePress = () => {
    if (copiedText[0] === "{" && copiedText[copiedText.length - 1] === "}") {
      console.log("has curly brackets");
      const obj = JSON.parse(copiedText);
      console.log("parsed object", obj);
      if (
        obj.title !== undefined &&
        obj.author !== undefined &&
        obj.ds !== undefined &&
        obj.df !== undefined &&
        obj.tb !== undefined &&
        obj.ta !== undefined
      ) {
        console.log("has a the correct keys, adding to storage");
        const newArray = [...bookArray, obj];
        setBookArray(newArray);
      } else {
        console.log("doesn't have the correct keys");
      }
    } else if (
      copiedText[0] === "[" &&
      copiedText[copiedText.length - 1] === "]"
    ) {
      console.log("has square brackets, parsing");
      const array = JSON.parse(copiedText);
      console.log("array: ", array);

      if (array[0] !== undefined) {
        let index = 0;
        if (
          array[index].title !== undefined &&
          array[index].author !== undefined &&
          array[index].ds !== undefined &&
          array[index].df !== undefined &&
          array[index].tb !== undefined &&
          array[index].ta !== undefined
        ) {
          console.log("array checks out");
          const newBookArray = [...bookArray, ...array];
          setBookArray(newBookArray);
        }
      } else {
        console.log("empty array");
      }
    } else {
      console.log("doesn't have curly bracket");
    }
  };

  return (
    <Pressable
      style={NavBtnStyles.Pressable}
      onPress={() => fetchCopiedText()}
      android_ripple={{ color: ColorPalette.bg }}
    >
      <Text style={fontStyles.navBtn}>Import</Text>
    </Pressable>
  );
};

export default ImportBtn;
