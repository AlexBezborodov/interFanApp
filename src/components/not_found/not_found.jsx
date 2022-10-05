import React from "react";

import PropTypes from "prop-types";
import { Appbar, Subheading } from "react-native-paper";
import { useLocation, useNavigate } from "react-router-native";

export function NotFound() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  return (
    <>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigate("/news")} />
        <Appbar.Content title="Back to the app" />
      </Appbar.Header>
      <Subheading>{pathname}</Subheading>
    </>
  );
}

NotFound.propTypes = {};
