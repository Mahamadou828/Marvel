import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import ImageComic from './ImageComics';

const useStyles = makeStyles({
  table: {
    minWidth: 1000,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

export default function TableComics(props) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{ minWidth: 200 }}>Title</TableCell>
            <TableCell>Description</TableCell>
            <TableCell style={{ minWidth: 100 }}>Price</TableCell>
            <TableCell style={{ minWidth: 300 }}>Character</TableCell>
            <TableCell style={{ minWidth: 100 }}>Image</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.comics.map(comic => (
            <TableRow key={comic.id}>
              <TableCell component="th" scope="row">
                {comic.title}
              </TableCell>
              <TableCell>{comic.description}</TableCell>
              <TableCell>{`${comic.prices[0].price}$`}</TableCell>
              <TableCell>
                {comic.characters.items.map(character => (
                  <p key={character.name}>{character.name}</p>
                ))}
              </TableCell>
              <TableCell>
                <ImageComic
                  image={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

TableComics.propTypes = {
  comics: PropTypes.array.isRequired,
};
