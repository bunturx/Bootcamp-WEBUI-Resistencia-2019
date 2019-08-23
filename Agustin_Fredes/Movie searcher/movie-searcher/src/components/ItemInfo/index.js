import React from "react";
import "./index.css";

class ItemInfo extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      title: "N/A",
      plot: "N/A",
      rated: "N/A",
      released: "N/A",
      genre: "N/A",
      director: "N/A",
      writer: "N/A",
      actors: "N/A",
      language: "N/A",
      country: "N/A",
      production: "N/A",
      website: "N/A",
      poster:
        "http://www.interlog.com/~tfs/images/posters/TFSMoviePosterUnavailable.jpg"
    };
  }

  fetch() {
    fetch(
      `http://www.omdbapi.com/?i=${
        this.props.match.params.id
      }&plot=full&apikey=5242b7c7`
    )
      .then(item => item.json())
      .then(item => {
        console.log(item);
        this.setState({
          title: item.Title,
          plot: item.Plot,
          rated: item.Rated,
          released: item.Released,
          genre: item.Genre,
          director: item.Director,
          writer: item.Writer,
          actors: item.Actors,
          language: item.Language,
          country: item.Country,
          production: item.Production,
          Website: item.Website
        });
        item.Poster.length > 10
          ? this.setState({ poster: item.Poster })
          : this.setState({
              poster:
                "http://www.interlog.com/~tfs/images/posters/TFSMoviePosterUnavailable.jpg"
            });
      });
  }

  render() {
    setTimeout(this.fetch(), 300);
    return (
      <main className="itemInfo">
        <img
          className="itemPoster"
          src={this.state.poster}
          alt={`Poster ${this.state.title}`}
        />
        <aside>
          <article>
            <h2 className="itemTitle">{this.state.title}</h2>
            <hr />
            <br />
            <p>Plot: {this.state.plot}</p>
            <hr />
            <br />
            <p>Director: {this.state.director}</p>
            <br />
            <p>Actors: {this.state.actors}</p>
            <br />
            <p>Writer: {this.state.writer}</p>
            <br />
            <p>Production: {this.state.production}</p>
            <hr />
            <br />
            <p>rated: {this.state.rated}</p>
            <br />
            <p>Genre: {this.state.genre}</p>
            <br />
            <p>Language: {this.state.language}</p>
            <br />
            <p>Country: {this.state.country}</p>
            <br />
            <p>Website:: {this.state.website}</p>
          </article>
        </aside>
      </main>
    );
  }
}

export default ItemInfo;
