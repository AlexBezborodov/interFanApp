import { useCallback } from "react";

export function useInputHandler(update, payload = {}) {
  const inputHandler = useCallback(
    ({ name, value }) => {
      update({ [name]: value, ...payload });
    },
    [update],
  );

  return { inputHandler };
}

export function useStateInputHandler(update, payload = {}) {
  const inputHandler = useCallback(
    ({ name, value }) => {
      update(prev => ({ ...prev, [name]: value, ...payload }));
    },
    [update],
  );

  return { inputHandler };
}
