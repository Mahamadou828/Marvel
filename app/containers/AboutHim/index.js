import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Information from './Information';
import TableComics from './TableComics';

export default class AboutHim extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.match);
  }

  state = {
    persoInformation: false,
    persoComics: false,
    id: parseInt(this.props.match.params.id),
  };

  componentDidMount() {
    this.RequestForComics();
    this.RequestForInformationAboutPersonnage();

    console.log(this.state.persoInformation);
    console.log(this.state.persoComics);
  }

  RequestForInformationAboutPersonnage = () => {
    const url = `https://gateway.marvel.com:443/v1/public/characters/${
      this.state.id
    }?apikey=b11070095d993f8d199da37c75e36c72`;

    fetch(url)
      .then(respond => {
        respond
          .json()
          .then(respondJson => {
            const data = respondJson;
            this.setState({
              persoInformation: data.data.results[0],
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

  RequestForComics = () => {
    const url = `https://gateway.marvel.com:443/v1/public/characters/${
      this.state.id
    }/comics?apikey=b11070095d993f8d199da37c75e36c72`;

    fetch(url)
      .then(respond => {
        respond
          .json()
          .then(respondJson => {
            const data = respondJson;

            this.setState({
              persoComics: data.data.results,
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
    // console.log (this.state.persoInformation.thumbnail.path) ;
    console.log(this.state.persoComics);

    return (
      <div>
        {this.state.persoInformation ? (
          <Information
            image={`${this.state.persoInformation.thumbnail.path}.${
              this.state.persoInformation.thumbnail.extension
            }`}
            description={this.state.persoInformation.description}
            name={this.state.persoInformation.name}
            series={this.state.persoInformation.series.items}
          />
        ) : null}

        {this.state.persoComics ? (
          <TableComics comics={this.state.persoComics} />
        ) : null}
      </div>
    );
  }
}
