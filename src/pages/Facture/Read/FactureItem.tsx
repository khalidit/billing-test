import React, { FC, ReactElement } from "react";
import TableCell from '@material-ui/core/TableCell';
import { withStyles, Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Facture from "../../../domains/Facture";


interface FactureItemProps {
  item: Facture;
}

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

const FactureItem: FC<FactureItemProps> = ({ item }): ReactElement => {
    
  return (
   
    <>
          <StyledTableCell> {item.id}</StyledTableCell>
          <StyledTableCell> {item.numeroFacture}</StyledTableCell>
          <StyledTableCell> {item.prixTotalHT} </StyledTableCell>
          <StyledTableCell> {item.prixTotalTTC} </StyledTableCell>
          <StyledTableCell> {item.dateFacturation} </StyledTableCell>
          <StyledTableCell> {item.delaiPaiement} </StyledTableCell>
          <StyledTableCell> {item.dateEcheance} </StyledTableCell>
          <StyledTableCell> {item.nbJourRetard} </StyledTableCell>
          <StyledTableCell> {item.factureStatus} </StyledTableCell>
          <StyledTableCell> {item.dateEncaissement} </StyledTableCell>
          <StyledTableCell> {item.fraisRetard} </StyledTableCell>
    </>      
  
  );
};

export default FactureItem;
