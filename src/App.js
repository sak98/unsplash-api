import React, { Fragment, Component } from "react";
import SearchComponent from "./Components/SearchComponent";
import api from "./Api/unsplashapi";
import ImageList from "./Components/ImageList";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
      images: [],
      loading: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(term) {
    //connect unsplash api
    let response = await api.get("/search/photos", {
      params: {
        query: term,
      },
    });
    this.setState({ images: response.data.results, loading: true });
  }
  render() {
    console.log(this.state.images);
    return (
      <Fragment>
        <SearchComponent Submit={this.handleSubmit} />
        <ImageList Images={this.state} />
      </Fragment>
    );
  }
}

export default App;
