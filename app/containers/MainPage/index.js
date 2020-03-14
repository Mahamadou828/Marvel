import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import CardPerso from 'components/CardPerso';
import messages from './messages';

export default class MainPage extends React.Component {
  state = {
    persoToPresent: [],
    showResult: false,
  };

  componentDidMount() {
    const persoToDescript = [];
    const idPersonnage = [1009610, 1009351, 1009368];

    idPersonnage.forEach((element, index) => {
      this.handleGetPresentation(element, persoToDescript, index);
    });

    this.setState({
      persoToPresent: persoToDescript,
      showResult: true,
    });
  }

  componentDidUpdate() {
    return true;
  }

  handleGetPresentation = (persoToSearch, array, index) => {
    const url = `https://gateway.marvel.com:443/v1/public/characters/${persoToSearch}?apikey=b11070095d993f8d199da37c75e36c72`;

    fetch(url)
      .then(respond => {
        respond
          .json()
          .then(respondJson => {
            respondJson.data.results[0].position = index;
            array.push(respondJson.data.results[0]);

            this.setState({
              showResult: true,
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
      <div className="bodyMainPage">
        <Helmet>
          <title>Marvel Page</title>
          <meta name="description" content="Home page of the site" />
        </Helmet>

        <p>
          <FormattedMessage {...messages.body} />
        </p>

        {this.state.showResult
          ? this.state.persoToPresent.map(personnage => (
              <CardPerso
                key={personnage.id}
                id={personnage.id}
                name={personnage.name}
                description={personnage.description}
                image={`${personnage.thumbnail.path}.${
                  personnage.thumbnail.extension
                }`}
              />
            ))
          : null}
      </div>
    );
  }
}
