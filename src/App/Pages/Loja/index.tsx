import React from "react";
import { Box, Typography } from "@newcon/ui";

import { useStyles } from "./styles";
import Produtos from "./Components/Produtos";
import Carrinho from "./Components/Carrinho";
import LojaProvider from "./Context/LojaContext";

const Loja = () => {
  const classes = useStyles();

  return (
    <LojaProvider>
      <Box className={classes.root}>
        <Box className={classes.header}>
          <Carrinho />
        </Box>
        <Box className={classes.content}>
          <Typography variant="h5">Lista de Produtos</Typography>
          <Produtos />
        </Box>
      </Box>
    </LojaProvider>
  );
};

export default Loja;
