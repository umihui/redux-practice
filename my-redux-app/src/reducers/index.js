const initialState = {
  angular: { vote: 0, color: "red" },
  react: { vote: 0, color: "blue" },
  vuejs: { vote: 0, color: "green" }
};
export default (state = initialState, action) => {
  switch (action.type) {
    case "VOTE_ANGULAR":
      console.log("Your choice is Angular!");
      return Object.assign({}, state, {
        angular: { vote: state.angular.vote + 1, color: "red" }
      });
    case "VOTE_REACT":
      console.log("Your choice is React!");
      return Object.assign({}, state, {
        react: { vote: state.react.vote + 1, color: "blue" }
      });
    case "VOTE_VUEJS":
      console.log("Your choice is Vue.js");
      return Object.assign({}, state, {
        vuejs: { vote: state.vuejs.vote + 1, color: "green" }
      });
    default:
      return state;
  }
};
