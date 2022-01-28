import React from "react";

import { Box, Button, Typography } from "@newcon/ui";
import { AddCircleIcon } from "@newcon/ui/icones";
import { useStyles } from "./styles";

import { useLoja } from "../../Context/LojaContext";

type ProdutoProps = {
  id: number;
  imagem: string;
  nome: string;
  preco: number;
};

const ProdutoItem = ({ id, imagem, nome, preco }: ProdutoProps) => {
  const classes = useStyles();
  const { adicionarProduto } = useLoja();

  const handleAdicionarProduto = () => {
    debugger;
    adicionarProduto({ id, imagem, nome, preco });
  };

  return (
    <Box className={classes.root}>
      <Box>
        <img src={imagem} alt="Foto do Produto" className={classes.imagem} />
      </Box>
      <Box className={classes.informations}>
        <Typography>{nome}</Typography>
        <Typography>{`Preço do produto: ${preco}`}</Typography>
      </Box>
      <Box>
        <Button
          variant="outlined"
          color="primary"
          startIcon={<AddCircleIcon />}
          onClick={handleAdicionarProduto}
        >
          Adicionar no carrinho
        </Button>
      </Box>
    </Box>
  );
};

export default ProdutoItem;
