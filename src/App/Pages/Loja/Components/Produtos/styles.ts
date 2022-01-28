import { makeStyles, createStyles, Theme } from "@newcon/ui";

export const useStyles = makeStyles<Theme>((theme) =>
  createStyles({
    root: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: theme.spacing(2),
      boxShadow: "0px 0px 15px -6px rgba(0,0,0,0.36)",
      marginBottom: theme.spacing(2),
    },
    imagem: {
      width: 70,
      height: 70,
    },
    informations: {
      maxWidth: 500,
    }
  })
);
