import { StyleSheet } from "react-native";

import { useTheme } from "react-native-paper";

export const useStyles = ({ error, isFocused } = {}) => {
  const { colors } = useTheme();

  return StyleSheet.create({
    input: {
      backgroundColor: colors.surface,
      paddingHorizontal: 0,
    },
    icon: {
      color: colors.placeholder,
    },
    shrinkLabel: {
      backgroundColor: colors.surface,
      paddingHorizontal: 4,
      color: !!error
        ? colors.error
        : isFocused
        ? colors.primary
        : colors.placeholder,
    },
  });
};
