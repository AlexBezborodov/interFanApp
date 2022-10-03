import React, { useState, forwardRef } from "react";

import PropTypes from "prop-types";
import { Caption, TextInput } from "react-native-paper";

import { Box, Error } from "../components/basic_components";

import { useStyles } from "./styles";

export const BasicInput = forwardRef(
  (
    {
      name,
      type = "text",
      errors = {},
      errorKey,
      secureTextEntry = false,
      onChangeText,
      keyboardType,
      shrink = false,
      label = "",
      onFocus,
      onBlur,
      autoFocus = false,
      ...props
    },
    ref,
  ) => {
    const styles = useStyles();
    const [secure, setSecure] = useState(
      secureTextEntry || type === "password",
    );
    const [isFocused, setIsFocused] = useState(autoFocus);

    const error = checkErrors(errors, errorKey || name);
    const inputKeyboardType =
      keyboardType || (name === "email" ? "email-address" : "default");

    const onChange = value => {
      onChangeText
        ? onChangeText({
            name,
            value: typeof value === "number" ? value.toString() : value,
          })
        : null;
    };

    const onFocusHandler = () => {
      setIsFocused(true);
      onFocus ? onFocus() : null;
    };

    const onBlurHandler = () => {
      setIsFocused(false);
      onBlur ? onBlur() : null;
    };

    return (
      <Box py={2}>
        {shrink && (
          <Box position="relative" zIndex={100} mt={-18} bottom={-18}>
            <ShrinkLabel label={label} isFocused={isFocused} error={error} />
          </Box>
        )}
        <TextInput
          ref={ref}
          name={name}
          error={Boolean(error)}
          style={styles.input}
          keyboardType={inputKeyboardType}
          secureTextEntry={secure}
          right={
            type === "password" ? (
              <TextInput.Icon
                name={secure ? "eye" : "eye-off"}
                color={styles.icon.color}
                styles={styles.icon}
                onPress={() => setSecure(prev => !prev)}
              />
            ) : null
          }
          onChangeText={onChange}
          onFocus={onFocusHandler}
          onBlur={onBlurHandler}
          label={shrink ? "" : label}
          autoFocus={autoFocus}
          mode="outlined"
          {...props}
        />
        <Error name={errorKey || name} errors={errors} />
      </Box>
    );
  },
);

BasicInput.propTypes = {
  name: PropTypes.string.isRequired,
  errors: PropTypes.object,
  errorKey: PropTypes.string,
  keyboardType: PropTypes.string,
  type: PropTypes.oneOf(["text", "password", "email"]),
  secureTextEntry: PropTypes.bool,
  onChangeText: PropTypes.func,
  shrink: PropTypes.bool,
  label: PropTypes.any,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  autoFocus: PropTypes.bool,
};

export function ShrinkLabel({ isFocused, label, error }) {
  const styles = useStyles({ error, isFocused });

  return (
    <Box position="relative" zIndex={1} flexWrap="wrap" left={8} px={4}>
      <Caption style={styles.shrinkLabel}>{label}</Caption>
    </Box>
  );
}

ShrinkLabel.propTypes = {
  error: PropTypes.string,
  label: PropTypes.any,
  isFocused: PropTypes.bool,
};
