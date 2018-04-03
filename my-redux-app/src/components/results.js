import React, { Component } from "react";
class Results extends Component {
  constructor(props) {
    super(props);
    this.store = this.props.store;
  }

  getBackgroundColor() {
    return { backgroundColor: this.store.getState().color };
  }

  votesAngularInPercent() {
    if (this.store.getState().angular.vote) {
      return (
        this.store.getState().angular.vote /
        (this.store.getState().angular.vote +
          this.store.getState().react.vote +
          this.store.getState().vuejs.vote) *
        100
      );
    } else {
      return 0;
    }
  }
  votesReactInPercent() {
    if (this.store.getState().react.vote) {
      return (
        this.store.getState().react.vote /
        (this.store.getState().angular.vote +
          this.store.getState().react.vote +
          this.store.getState().vuejs.vote) *
        100
      );
    } else {
      return 0;
    }
  }
  votesVuejsInPercent() {
    if (this.store.getState().vuejs.vote) {
      return (
        this.store.getState().vuejs.vote /
        (this.store.getState().angular.vote +
          this.store.getState().react.vote +
          this.store.getState().vuejs.vote) *
        100
      );
    } else {
      return 0;
    }
  }
  votesAngularInPercentStyle() {
    return {
      width: this.votesAngularInPercent() + "%"
    };
  }
  votesReactInPercentStyle() {
    return {
      width: this.votesReactInPercent() + "%"
    };
  }
  votesVuejsInPercentStyle() {
    return {
      width: this.votesVuejsInPercent() + "%"
    };
  }
  render() {
    return (
      <div style={this.getBackgroundColor()}>
        <span className="label label-danger">
          Angular: {this.votesAngularInPercent().toFixed(2) + "%"}
        </span>
        <div className="progress progress-striped active">
          <div
            className="progress-bar progress-bar-danger"
            style={this.votesAngularInPercentStyle()}
          />
        </div>
        <span className="label label-info">
          React: {this.votesReactInPercent().toFixed(2) + "%"}
        </span>
        <div className="progress progress-striped active">
          <div
            className="progress-bar progress-bar-info"
            style={this.votesReactInPercentStyle()}
          />
        </div>
        <span className="label label-success">
          Vue.js: {this.votesVuejsInPercent().toFixed(2) + "%"}
        </span>
        <div className="progress progress-striped active">
          <div
            className="progress-bar progress-bar-success"
            style={this.votesVuejsInPercentStyle()}
          />
        </div>
      </div>
    );
  }
}
export default Results;
