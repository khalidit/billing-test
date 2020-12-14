import React, { FC } from "react";
import { withStyles, Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import FactureItem from "./FactureItem";
import Facture from "../../../domains/Facture";


const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }),
)(TableCell);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }),
)(TableRow);

interface FactureListProps {
  items: Facture[];
}

const FactureList: FC<FactureListProps> = ({ items }) => { 
  const classes = useStyles();
  console.log(items);

  return (
  <div className={classes.table}>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Id</StyledTableCell>
            <StyledTableCell align="left">Numéro Facture</StyledTableCell>
            <StyledTableCell align="left">Prix Total HT</StyledTableCell>
            <StyledTableCell align="left">Prix Total TTC</StyledTableCell>
            <StyledTableCell align="left">Date de Facturation</StyledTableCell>
            <StyledTableCell align="left">Délai(j)</StyledTableCell>
            <StyledTableCell align="left">Date d'Echéance</StyledTableCell>            
            <StyledTableCell align="left">Jours de Retard</StyledTableCell>
            <StyledTableCell align="left">Statut de la Facture</StyledTableCell>
            <StyledTableCell align="left">Date d'Encaissement</StyledTableCell>
            <StyledTableCell align="left">Frais de Retard</StyledTableCell>
          </TableRow>
        </TableHead>
        
        <TableBody>    
          {items &&
            items.map((facture: Facture, index: number) => (
              <StyledTableRow key={index}> 
                <FactureItem key={index} item={facture} />
              </StyledTableRow>
            ))}
      </TableBody>
      </Table>
      </TableContainer>
    </div>
  );
};

export default FactureList;
