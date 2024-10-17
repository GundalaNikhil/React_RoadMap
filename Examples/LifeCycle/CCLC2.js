import React, { Component } from "react";

class DataFetcher extends Component {
  constructor(props) {
    super(props);
    // Initial state
    this.state = {
      data: null,
      loading: true,
    };
  }

  // Called when the component is about to mount (deprecated)
  // UNSAFE_componentWillMount() {
  //   console.log('Component Will Mount');
  // }

  // Called after the component is rendered to the DOM
  componentDidMount() {
    console.log("Component Did Mount");
    // Simulate an API call
    fetch("https://api.example.com/data")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ data, loading: false });
      });
  }

  // This method decides whether the component should re-render
  shouldComponentUpdate(nextProps, nextState) {
    console.log("Should Component Update");
    // Prevent re-render if the data hasn't changed
    if (this.state.data === nextState.data) {
      return false;
    }
    return true;
  }

  // Called right after the component has updated
  componentDidUpdate(prevProps, prevState) {
    console.log("Component Did Update");
    // Example: Fetch new data if props have changed
    if (prevProps.query !== this.props.query) {
      this.fetchData();
    }
  }

  // Called right before the component is unmounted
  componentWillUnmount() {
    console.log("Component Will Unmount");
    // Clean up operations like clearing timers, unsubscribing from APIs
  }

  render() {
    console.log("Render Method");
    const { loading, data } = this.state;

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h1>Data Fetched</h1>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    );
  }
}

export default DataFetcher;
