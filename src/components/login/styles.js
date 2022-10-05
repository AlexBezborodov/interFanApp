import { StyleSheet } from "react-native";

import { Colors } from "react-native-paper";

export const useStyles = () => {
 

  return StyleSheet.create({
      blackChar: {
        color: Colors.black,
      fontWeight: 'bold',
        fontSize: 28,
      },
      blueChar: {
        color: Colors.blue600,
        fontWeight: 'bold',
        fontSize: 28,
      }
  });
};