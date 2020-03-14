import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import CardPerso from 'components/CardPerso';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import messages from './messages';

export default class SearchPerso extends React.Component {
  state = {
    searchName: 'a',
    persoToShow: [],
  };

  handleChange = event => {
    this.setState({
      searchName: event.target.value,
    });
  };

  componentDidMount() {
    this.callApi(this.state.searchName);
  }

  handleSearch = () => {
    this.callApi(this.state.searchName);
  };

  callApi = persoToSearch => {
    const url = `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${persoToSearch}&apikey=b11070095d993f8d199da37c75e36c72`;

    fetch(url)
      .then(respond => {
        respond
          .json()
          .then(respondJson => {
            const data = respondJson;

            this.setState({
              persoToShow: data.data.results,
            });
          })
          .catch(error => {
            console.log(error);
          });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="searchPage">
        <Helmet>
          <title>Marvel Page</title>
          <meta name="description" content="Home page of the site" />
        </Helmet>

        <h1>
          <FormattedMessage {...messages.header} />
        </h1>

        <TextField
          id="standard-basic"
          label="Standard"
          value={this.state.searchName}
          onChange={this.handleChange}
        />

        <Button
          className="search"
          variant="contained"
          onClick={this.handleSearch}
        >
          Search
        </Button>

        {this.state.persoToShow.map(personnage => (
          <CardPerso
            key={personnage.id}
            id={personnage.id}
            name={personnage.name}
            description={personnage.description}
            image={`${personnage.thumbnail.path}.${
              personnage.thumbnail.extension
            }`}
          />
        ))}
      </div>
    );
  }
}
