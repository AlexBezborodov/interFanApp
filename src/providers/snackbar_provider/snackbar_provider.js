import React, { createContext, useState } from "react";

import { Snackbar } from "react-native-paper";

export const SnackbarContext = createContext({
  notify: () => {},
});

export const SnackBarProvider = ({ children }) => {
  const [props, setProps] = useState({
    visible: false,
    variant: "success",
    message: "",
  });

  const notify = (msg, variant = "success", options) =>
    setProps(prev => ({
      ...prev,
      visible: true,
      variant,
      message: msg,
      ...options,
    }));
  const onDismissSnackBar = () =>
    setProps(prev => ({ ...prev, visible: false }));

  return (
    <SnackbarContext.Provider value={{ notify }}>
      {children}

      <Snackbar
        onDismiss={onDismissSnackBar}
        style={{
          backgroundColor: props.variant === "success" ? "#43A046" : "red",
        }}
        {...props}>
        {props.message}
      </Snackbar>
    </SnackbarContext.Provider>
  );
};
