import { StyleSheet } from "react-native";

import { Colors } from "react-native-paper";

export const useStyles = () => {
 

  return StyleSheet.create({
      blackChar: {
          color: Colors.black,
      },
      blueChar: {
        color: Colors.blue600
      }
  });
};