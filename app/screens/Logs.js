// Started - Tue 30 Jan 2024
// Finished Working Version - Sun 4 Feb 2024
// Added Import and Export Functionality - Wed 7 Feb 2024
// Added Sort Function - Sat 10 Feb 2024
// Fixed Layout and Styling - Wed 14 Feb 2024
// Added Logs Page - Wed 14 Feb 2024
// Final Bits and Pieces Finished
// Uploaded to the Play Store

import { View, Text, StyleSheet } from "react-native";
import { useWindowDimensions } from "react-native";
import ColorPalette from "../stylesheets/ColorPalette";
import fontStyles from "../stylesheets/fontStyles";

const Logs = () => {
  const { height, width } = useWindowDimensions();

  const styles = StyleSheet.create({
    text: {
      marginBottom: 16,
      marginLeft: 16,
      marginRight: 16,
    },
    title: {
      margin: 16,
      textAlign: "center",
      textAlignVertical: "center",
    },
    view: {
      marginTop: 0.05 * width,
      marginLeft: 0.05 * width,
      width: 0.9 * width,
      height: "auto",
      borderRadius: 16,
      backgroundColor: ColorPalette.fg,
    },
  });

  return (
    <>
      <View style={[styles.view]}>
        <Text style={[styles.title, fontStyles.title]}>Logs</Text>
        <Text style={[styles.text, fontStyles.text]}>
          Started - Tue 30 Jan 2024
        </Text>
        <Text style={[styles.text, fontStyles.text]}>
          Finished Working Version - Sun 4 Feb 2024
        </Text>
        <Text style={[styles.text, fontStyles.text]}>
          Added Import and Export Functionality - Wed 7 Feb 2024
        </Text>
        <Text style={[styles.text, fontStyles.text]}>
          Added Sort Function - Sat 10 Feb 2024
        </Text>
        <Text style={[styles.text, fontStyles.text]}>
          Fixed Layout and Styling - Wed 14 Feb 2024
        </Text>
        <Text style={[styles.text, fontStyles.text]}>
          Added Logs Page - Wed 14 Feb 2024
        </Text>
        <Text style={[styles.text, fontStyles.text]}>
          Final Bits and Pieces Finished -
        </Text>
        <Text style={[styles.text, fontStyles.text]}>
          Uploaded to the Play Store -
        </Text>
      </View>
      <View style={styles.view}>
        <Text style={[styles.title, fontStyles.title]}>Credits</Text>
        <Text style={[styles.text, fontStyles.text]}>
          Created and Developed by Seán Osborne
        </Text>
      </View>
      <View style={styles.view}>
        <Text style={[styles.title, fontStyles.title]}>Links</Text>
      </View>
    </>
  );
};

export default Logs;
