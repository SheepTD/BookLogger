import { Pressable, Text, Alert } from "react-native";
import ColorPalette from "../stylesheets/ColorPalette";
import NavBtnStyles from "../stylesheets/NavBtnStyles";
import fontStyles from "../stylesheets/fontStyles";

const DeleteBtn = (props) => {
  const setScreen = props.setScreen;
  const bookArray = props.bookArray;
  const selectedBookIndex = props.selectedBookIndex;
  const setBookArray = props.setBookArray;

  const handleOK = () => {
    let newBookArray = [...bookArray];
    newBookArray.splice(selectedBookIndex, 1);
    setBookArray(newBookArray);
    console.log("Deleted Book");
    setTimeout(() => {
      setScreen("Bookshelf");
    }, 0);
  };

  const openAlert = () =>
    Alert.alert(
      "Confirm Deletion",
      "Are you sure that you want to delete this book?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => handleOK() },
      ]
    );

  return (
    <Pressable
      onPress={() => openAlert()}
      style={NavBtnStyles.Pressable}
      android_ripple={{ color: ColorPalette.bg }}
    >
      <Text style={fontStyles.navBtn}>Delete</Text>
    </Pressable>
  );
};

export default DeleteBtn;
