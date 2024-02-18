import { SafeAreaView, StatusBar, View } from "react-native";
import Bookshelf from "./app/screens/Bookshelf";
import SafeAreaViewAndroid from "./app/stylesheets/SafeAreaViewAndroid";
import Book from "./app/screens/Book";
import AddBook from "./app/screens/AddBook";
import EditBook from "./app/screens/EditBook";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import Navbar from "./app/components/Navbar";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { useCallback } from "react";
import Logs from "./app/screens/Logs";
import ColorPalette from "./app/stylesheets/ColorPalette";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [bookArray, setBookArray] = useState([]);
  const [screen, setScreen] = useState("Bookshelf");
  const [selectedBook, setSelectedBook] = useState(null);
  const [selectedBookIndex, setSelectedBookIndex] = useState(null);

  const addBookArray = async (value) => {
    console.log("adding bookArray to storage");
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("bookArray", jsonValue);
    } catch (e) {
      console.error("Error adding bookArray to storage:", e);
    }
  };

  const checkIfBookArrayExists = async () => {
    try {
      const bookArrayJson = await AsyncStorage.getItem("bookArray");

      if (bookArrayJson !== null) {
        // 'bookArray' exists in AsyncStorage
        setBookArray(JSON.parse(bookArrayJson));
        console.log("bookArray exists:", bookArray);
      } else {
        // 'bookArray' does not exist in AsyncStorage
        console.log("bookArray does not exist");
        // add bookArray to storage
        addBookArray(bookArray);
      }
    } catch (e) {
      console.error("Error checking bookArray:", e);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      console.log("Book Array: ", bookArray);
      addBookArray(bookArray);
    }, 500);
  }, [bookArray]);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          "Lora-Reg": require("./assets/fonts/Lora-VariableFont_wght.ttf"),
          "Lora-Bold": require("./assets/fonts/static/Lora-Bold.ttf"),
          "Lora-Italic": require("./assets/fonts/static/Lora-Italic.ttf"),
          "Lora-BoldItalic": require("./assets/fonts/static/Lora-BoldItalic.ttf"),
        });
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  useEffect(() => {
    checkIfBookArrayExists();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <SafeAreaView style={SafeAreaViewAndroid} onLayout={onLayoutRootView}>
      <StatusBar
        animated={false}
        backgroundColor={ColorPalette.bg}
        barStyle={"dark-content"}
        hidden={false}
      />
      <Navbar
        setScreen={setScreen}
        screen={screen}
        bookArray={bookArray}
        setSelectedBook={setSelectedBook}
        selectedBookIndex={selectedBookIndex}
        setBookArray={setBookArray}
        selectedBook={selectedBook}
      />
      {screen === "Bookshelf" ? (
        <Bookshelf
          setScreen={setScreen}
          bookArray={bookArray}
          setSelectedBook={setSelectedBook}
          setSelectedBookIndex={setSelectedBookIndex}
        />
      ) : screen === "Book" ? (
        <Book selectedBook={selectedBook} setScreen={setScreen} />
      ) : screen === "AddBook" ? (
        <AddBook
          setScreen={setScreen}
          bookArray={bookArray}
          setBookArray={setBookArray}
        />
      ) : screen === "EditBook" ? (
        <EditBook
          selectedBook={selectedBook}
          setSelectedBook={setSelectedBook}
          selectedBookIndex={selectedBookIndex}
          setScreen={setScreen}
          bookArray={bookArray}
          setBookArray={setBookArray}
        />
      ) : screen === "Logs" ? (
        <Logs />
      ) : null}
    </SafeAreaView>
  );
}
