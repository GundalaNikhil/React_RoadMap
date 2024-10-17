import React, { Component } from "react";

class LifecycleExample extends Component {
    //Uses constructor for initial state setup.
  constructor(props) {
    super(props);
    this.state = { count: 0 };  //Uses this.setState method for Initial state
    console.log("Constructor: Component is being initialized");
  }

  //Mounting:  Uses componentDidMount lifecycle method.
  componentDidMount() {
    console.log("componentDidMount: Component has been rendered to the DOM");
    // Simulating an API call
    setTimeout(() => {
      this.setState({ count: 1 });
    }, 1000);
  }

  //Updating: Uses shouldComponentUpdate and componentDidUpdate methods.
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate: Deciding whether to re-render");
    return nextState.count !== this.state.count;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate: Component has been updated");
    if (prevState.count !== this.state.count) {
      console.log("The count has changed");
    }
  }

  //Unmounting: Uses componentWillUnmount method.
  componentWillUnmount() {
    console.log(
      "componentWillUnmount: Component is about to be removed from the DOM"
    );
  }

  handleIncrement = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  render() {
    console.log("Render: Component is being rendered");
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleIncrement}>Increment</button>
      </div>
    );
  }
}

export default LifecycleExample;
