export const incrementAction = {
  type: "INCREMENT",
  action: (value) => {
    return value + 1;
  },
};

export const decrementAction = {
  type: "DECREMENT",
  action: (value) => {
    return value - 1;
  },
};
