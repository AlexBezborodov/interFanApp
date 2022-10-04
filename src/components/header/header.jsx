import React from "react";

import PropTypes from "prop-types";
import { Appbar } from "react-native-paper";

export function AppHeader({ children, title,bgc, style, onPress, ...other }) {
  return (
    <Appbar.Header
      style={{
        backgroundColor: bgc,
        ...style,
      }}
      {...other}>
      {!!onPress && <Appbar.BackAction onPress={onPress} />}
      {!!title && <Appbar.Content title={title} />}
      {children}
    </Appbar.Header>
  );
}

AppHeader.propTypes = {
  bgc: PropTypes.string,
  children: PropTypes.any,
  style: PropTypes.object,
  title: PropTypes.string,
  onPress: PropTypes.func,
};
