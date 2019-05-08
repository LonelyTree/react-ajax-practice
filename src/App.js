import React, { Component } from "react";
import { PacmanLoader } from "react-spinners";
import "./App.css";
import CrimesList from "./components/CrimeList/CrimesList";

class App extends Component {
  state = {
    crimes: [],
    loading: true
  };

  componentDidMount() {
    this.getCrimes().then(data =>
      this.setState({ crimes: data, loading: false })
    );
  }

  deleteItem = i =>
    this.setState({
      crimes: this.state.crimes.filter((crime, index) => index !== i)
    });

  getCrimes = async () => {
    try {
      const crimes = await fetch(
        "https://data.cityofchicago.org/resource/crimes.json"
      );
      if (!crimes.ok) {
        throw Error(crimes.response.statusText);
      }
      const crimesJson = await crimes.json();
      return crimesJson;
    } catch (err) {
      console.log(err, "err in the catch block");
    }
  };

  render() {
    const { crimes, loading } = this.state;
    return (
      <div className="App">
        <h1>this is my app</h1>
        <CrimesList crimes={crimes} deleteItem={this.deleteItem} />
        <PacmanLoader loading={loading} />
      </div>
    );
  }
}

export default App;
