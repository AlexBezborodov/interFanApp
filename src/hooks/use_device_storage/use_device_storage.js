import { useContext, useMemo } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { SnackbarContext } from "../../providers";

export const useDeviceStorage = () => {
  const { notify } = useContext(SnackbarContext);

  const deviceStorage = useMemo(
    () => ({
      async storeData(key, value, callback) {
        try {
          const jsonValue = JSON.stringify(value);
          await AsyncStorage.setItem(key, jsonValue);
          callback ? callback() : null;
        } catch (error) {
          notify(`AsyncStorage Error: ${error.message}`, "error");
        }
      },

      async getData(key, callback) {
        try {
          const value = await AsyncStorage.getItem(key);
          callback ? callback(JSON.parse(value)) : null;
        } catch (error) {
          notify(`AsyncStorage Error: ${error.message}`, "error");
        }
      },

      async removeValue(key, callback) {
        try {
          await AsyncStorage.removeItem(key);
          callback ? callback() : null;
        } catch (error) {
          notify(`AsyncStorage Error: ${error.message}`, "error");
        }
      },
    }),
    [AsyncStorage],
  );

  return [deviceStorage];
};
