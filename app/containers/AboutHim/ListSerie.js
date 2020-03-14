import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    overflow: 'auto',
    maxHeight: 300,
    marginBottom: 25,
  },
  listSection: {
    backgroundColor: 'inherit',
  },
  ul: {
    backgroundColor: 'inherit',
    padding: 0,
  },
}));

export default function ListSerie(props) {
  const classes = useStyles();

  return (
    <List className={`${classes.root} listSerie`} subheader={<li />}>
      <h1>List of series</h1>
      {props.series.map(serie => (
        <li key={`section-${serie.name}`} className={classes.listSection}>
          <ul className={classes.ul}>
            <ListItem key={`item-${serie.name}`}>
              <ListItemText primary={`${serie.name}`} />
            </ListItem>
          </ul>
        </li>
      ))}
    </List>
  );
}

ListSerie.propTypes = {
  series: PropTypes.array.isRequired,
};
