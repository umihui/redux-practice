import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import { voteAngular, voteReact, voteVuejs } from "./actions";
import OptionView from "./components/OptionView.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.store = this.props.store;
  }
  handleVoteAngular = () => {
    this.store.dispatch(voteAngular());
  };
  handleVoteReact = () => {
    this.store.dispatch(voteReact());
  };
  handleVoteVuejs = () => {
    this.store.dispatch(voteVuejs());
  };
  render() {
    return (
      <div>
        <div className="jumbotron" style={{ textAlign: "center" }}>
          <h2>What is your favorite front-end development framework 2017?</h2>
          <h4>Click on the logos below to vote!</h4>
          <br />
          <div className="row">
            <OptionView
              image={"angularjs.svg"}
              handleVote={this.handleVoteAngular}
              name={"angularJS"}
            />
            <OptionView
              image={"reactjs.png"}
              handleVote={this.handleVoteReact}
              name={"React"}
            />
            <OptionView
              image={"jkhj.png"}
              handleVote={this.handleVoteVuejs}
              name={"Vue.js"}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default App;
