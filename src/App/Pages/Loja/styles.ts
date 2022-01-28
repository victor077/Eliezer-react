import { createStyles, makeStyles, Theme } from "@newcon/ui";

export const useStyles = makeStyles<Theme>((theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      height: "100%",
    },
    header: {
      display: 'flex',
      justifyContent: 'flex-end',
      height: 80,
      padding: theme.spacing(2),
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      margin: 'auto',
      width: '100%',
      maxWidth: 960,
    },
  })
);
