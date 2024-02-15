import { Pressable, Text } from "react-native";
import NavBtnStyles from "../stylesheets/NavBtnStyles";
import { useEffect, useState } from "react";
import fontStyles from "../stylesheets/fontStyles";
import ColorPalette from "../stylesheets/ColorPalette";

const SortBtn = (props) => {
  const bookArray = props.bookArray;
  const setBookArray = props.setBookArray;
  const setScreen = props.setScreen;

  const [order, setOrder] = useState("newFirst");
  useEffect(() => {
    let dateArray = [];
    for (let i = 0; i < bookArray.length; i++) {
      if (bookArray[i].ds !== undefined) {
        if (bookArray[i].ds.includes("/") === true) {
          const DSValue = getDSValue(bookArray[i].ds);
          console.log(i, DSValue);
          const obj = { index: i, ds: DSValue };
          dateArray.push(obj);
          console.log("Book can be sorted", i);
        } else {
          let DSValue;
          if (order === "newFirst") {
            DSValue = 0;
          } else {
            DSValue = 99999999;
          }
          console.log(i, DSValue);
          const obj = { index: i, ds: DSValue };
          dateArray.push(obj);
          console.log("Start date formatted incorrect, will appear last");
        }
      } else {
        let DSValue;
        if (order === "newFirst") {
          DSValue = 0;
        } else {
          DSValue = 99999999;
        }
        console.log(i, DSValue);
        const obj = { index: i, ds: DSValue };
        dateArray.push(obj);
        console.log("Start date not found, will appear last");
      }
    }
    if (order === "oldFirst") {
      dateArray.sort((a, b) => a.ds - b.ds);
    } else if (order === "newFirst") {
      dateArray.sort((a, b) => b.ds - a.ds);
    }
    console.log("dateArray sorted");
    let newArray = [];
    for (let i = 0; i < dateArray.length; i++) {
      newArray.push(bookArray[dateArray[i].index]);
    }
    setBookArray(newArray);
  }, [order]);

  const getDSValue = (ds) => {
    const day = parseInt(ds.split("/")[0]);
    const month = parseInt(ds.split("/")[1]) * 28;
    const year = parseInt(ds.split("/")[2]) * 365;
    return day + month + year;
  };

  const handlePress = () => {
    if (order === "newFirst") {
      console.log("Set order: oldFirst");
      setOrder("oldFirst");
    } else if (order === "oldFirst") {
      console.log("Set order: newFirst");
      setOrder("newFirst");
    }
  };

  const handleLongPress = () => {
    setScreen("Logs");
  };
  return (
    <Pressable
      style={NavBtnStyles.Pressable}
      onPress={() => handlePress()}
      delayLongPress={4999}
      onLongPress={() => handleLongPress()}
      android_ripple={{ color: ColorPalette.bg }}
    >
      <Text style={fontStyles.navBtn}>Sort</Text>
    </Pressable>
  );
};

export default SortBtn;
