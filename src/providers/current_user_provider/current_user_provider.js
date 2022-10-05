import React from "react";

import PropTypes from "prop-types";

export const CurrentUserContext = React.createContext({
  currentUser: {},
});

export function CurrentUserProvider({ children }) {
  const [currentUser, setCurrentUser] = React.useState({});
  const updateCurrentUser = React.useCallback(
    data => {
      setCurrentUser(user => ({ ...user, ...data }));
    },
    [setCurrentUser],
  );

  return (
    <CurrentUserContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        updateCurrentUser,
      }}>
      {children}
    </CurrentUserContext.Provider>
  );
}

CurrentUserProvider.propTypes = {
  children: PropTypes.any.isRequired,
};
