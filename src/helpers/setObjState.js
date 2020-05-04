export const setObjState = (setState, value) => {
  if (typeof value === 'object' && value !== null) {
    setState(prevState => ({
      ...prevState,
      ...value
    }));
  } else {
    setState(value);
  }
};
