import React from "react";
import "./App.css";
import Header from "./Header";
import Carousel from "./Carousel";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: []
    };
  }

  async componentDidMount() {
    const result = await fetch(
      "https://api.mercadolibre.com/sites/MLA/search?category=MLA1144"
    );
    const resultJson = await result.json();

    this.setState({
      result: resultJson.results
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Carousel title="Video Juegos" products={this.state.result} />
      </div>
    );
  }
}

export default App;
