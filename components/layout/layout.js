import React from "react";

import PropTypes from "prop-types";

import { Box } from "../basic_components/box";

export function Layout({ children }) {
  return (
    <Box padding={12} flex={1}>
      {children}
    </Box>
  );
}

Layout.propTypes = {
  children: PropTypes.any,
};
