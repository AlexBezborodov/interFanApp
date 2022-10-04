import React from "react";

import PropTypes from "prop-types";
import { Caption, useTheme } from "react-native-paper";

import { Box } from "../box";
import { checkErrors } from "../../../utils/utils";


export const Error = ({ errors, name, ...other }) => {
  const theme = useTheme();
  const error = checkErrors(errors, name)

  return (
    Boolean(error) && (
      <Box {...other}>
        <Caption style={{ color: theme.colors.error }}>{error}</Caption>
      </Box>
    )
  );
};

Error.propTypes = {
  errors: PropTypes.object,
  name: PropTypes.string.isRequired,
};
