export default (state = [], { type, payload }) => {
  switch (type) {
    case "FETCH_TAGS":
      return payload;

    default:
      return state;
  }
};
