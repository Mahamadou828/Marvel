import React from 'react';
import { FormattedMessage } from 'react-intl';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import messages from './messages';

const useStyles = makeStyles(theme => ({
  imageComic: {
    position: 'absolute',
    top: 10,
    left: 10,
  },

  crufix: {
    position: 'absolute',
    top: 10,
    right: 10,
  },

  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default class ImageComic extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    showImage: false,
  };

  handleShow = () => {
    this.setState({
      showImage: true,
    });
  };

  handleDisable = () => {
    this.setState({
      showImage: false,
    });
  };

  render() {
    return (
      <div>
        {this.state.showImage ? (
          <Button className="disable" onClick={this.handleDisable}>
            X
          </Button>
        ) : (
          <Button onClick={this.handleShow}>Show Image</Button>
        )}
        {this.state.showImage ? (
          <img src={this.props.image} className="imageComic" />
        ) : null}
      </div>
    );
  }
}

ImageComic.propTypes = {
  image: PropTypes.string.isRequired,
};
