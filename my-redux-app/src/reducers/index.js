const initialState = {
  angular: 0,
  react: 0,
  vuejs: 0,
  color: "white"
};
export default (state = initialState, action) => {
  switch (action.type) {
    case "VOTE_ANGULAR":
      console.log("Your choice is Angular!");
      return Object.assign({}, state, {
        angular: state.angular + 1,
        color: "red"
      });
    case "VOTE_REACT":
      console.log("Your choice is React!");
      return Object.assign({}, state, {
        react: state.react + 1,
        color: "blue"
      });
    case "VOTE_VUEJS":
      console.log("Your choice is Vue.js");
      return Object.assign({}, state, {
        vuejs: state.vuejs + 1,
        color: "green"
      });
    default:
      return state;
  }
};
