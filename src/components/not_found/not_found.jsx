import React from "react";

import PropTypes from "prop-types";
import { Appbar } from "react-native-paper";
import { useNavigate } from "react-router-native";

export function NotFound() {
  const navigate = useNavigate();
  return (
    <Appbar.Header>
      <Appbar.BackAction onPress={() => navigate("/news")} />
      <Appbar.Content title="Back to the app" />
    </Appbar.Header>
  );
}

NotFound.propTypes = {};
