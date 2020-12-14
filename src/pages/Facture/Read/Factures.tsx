import React, { FC, ReactElement, useEffect, useState } from "react";
import { useStoreActions, useStoreState } from "../../../store/hooks";
import { useSnackbar } from "notistack";
import FactureList from "./FactureList";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Facture from "../../../domains/Facture";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: "#fff",
    },
  })
);

const Factures: FC<{}> = (): ReactElement => {
  const classes = useStyles();
  const findAll = useStoreActions((actions) => actions.factures.findAll);
  const isLoaded: boolean = useStoreState((state) => state.factures.isLoaded);
  const items: Facture[] = useStoreState((state) => state.factures.items);
  const { enqueueSnackbar } = useSnackbar();

  const [openBackdrop, setOpenBackdrop] = React.useState(false);

  useEffect(() => {
    setOpenBackdrop(true);
    if (!isLoaded) {
      findAll("85292702900011").catch((e: Error) =>
        enqueueSnackbar(e.message, { variant: "error" })
      ).finally(() => {
        setOpenBackdrop(false)
      });
    }
  }, [findAll]);

  if (!isLoaded) {
    return (
      <Backdrop className={classes.backdrop} open={openBackdrop}>
        <CircularProgress color="inherit" />
      </Backdrop>
    );
  }
  return (
    <>
      <h2>Listes des factures</h2>
      <FactureList items={items} />
    </>
  );
};

export default Factures;
