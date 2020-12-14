import React, { FC, ReactElement } from "react";
import {
  fade,
  makeStyles,
  Theme,
  createStyles,
} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    footer: {
        flexGrow: 0,
        alignContent: 'center',
        backgroundColor: fade(theme.palette.common.white, 0.25),
    },
  })
);

const AppFooter: FC<{}> = (): ReactElement => {
    const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <p>Some footer nonsense!</p>
    </footer>
  );
};

export default AppFooter;
