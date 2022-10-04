import React from "react";
import { View } from "react-native";

import PropTypes from "prop-types";

export function Box({
  children,
  onLayout,
  pb,
  pt,
  pl,
  pr,
  px,
  py,
  ml,
  mt,
  mr,
  mb,
  mx,
  my,
  p,
  m,
  pointerEvents = "auto",
  style = {},
  ...props
}) {
  return (
    <View
      pointerEvents={pointerEvents}
      onLayout={onLayout}
      style={{
        padding: p,
        paddingBottom: pb,
        paddingTop: pt,
        paddingLeft: pl,
        paddingRight: pr,
        paddingHorizontal: px,
        paddingVertical: py,
        margin: m,
        marginLeft: ml,
        marginRight: mr,
        marginTop: mt,
        marginBottom: mb,
        marginHorizontal: mx,
        marginVertical: my,
        ...style,
        ...props,
      }}>
      {children}
    </View>
  );
}

Box.propTypes = {
  children: PropTypes.any,
  onLayout: PropTypes.func,
  pb: PropTypes.number,
  pt: PropTypes.number,
  pl: PropTypes.number,
  pr: PropTypes.number,
  px: PropTypes.number,
  py: PropTypes.number,
  mr: PropTypes.number,
  mt: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  mb: PropTypes.number,
  ml: PropTypes.number,
  p: PropTypes.number,
  m: PropTypes.number,
  mx: PropTypes.number,
  my: PropTypes.number,
  pointerEvents: PropTypes.string,
  style: PropTypes.object,
};
