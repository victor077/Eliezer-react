import React from "react";

import { Box, Button, Typography } from "@newcon/ui";
import { DeleteOutlineIcon } from "@newcon/ui/icones";
import { useStyles } from "./styles";

import { useLoja } from "../../Context/LojaContext";

type ProdutoItemProps = {
  id: number;
  imagem: string;
  nome: string;
  preco: number;
};

const ProdutoItem = ({ id, imagem, nome, preco }: ProdutoItemProps) => {
  const classes = useStyles();
  const { removerProduto } = useLoja();

  const handleRemoverProduto = () => {
    debugger;
    removerProduto(id);
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
          startIcon={<DeleteOutlineIcon />}
          onClick={handleRemoverProduto}
        >
          Remover Produto
        </Button>
      </Box>
    </Box>
  );
};

export default ProdutoItem;
