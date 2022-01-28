import React from "react";
import { Badge, Modal, Typography, IconButton } from "@newcon/ui";
import { ShoppingCartIcon } from "@newcon/ui/icones";
import { useDisclosure } from "@newcon/utils/Hooks";

import ProdutoItem from "./ProdutoItem";
import { useLoja } from "../../Context/LojaContext";

const Carrinho = () => {
  const { isOpen, open, close } = useDisclosure();
  const { quantidadeProdutos, produtos, valorTotal } = useLoja();

  // const [open, setOpen] = useState<boolean>(false);

  // const handleFecharModal = () => {
  //   setOpen(false);
  // };

  // const handleAbrirModal = () => {
  //   setOpen(true);
  // };

  return (
    <>
      <Badge badgeContent={quantidadeProdutos} color="primary">
        <IconButton onClick={open}>
          <ShoppingCartIcon />
        </IconButton>
      </Badge>
      <Modal
        fullWidth
        maxWidth="lg"
        open={isOpen}
        onClose={close}
        onBackdropClick={close}
      >
        <Typography variant="h5">Carrinho</Typography>
        {produtos.map((produto) => (
          <ProdutoItem
            key={produto.id}
            id={produto.id}
            imagem={produto.imagem}
            nome={produto.nome}
            preco={produto.preco}
          />
        ))}
        <Typography variant="h5">{`Valor total: ${valorTotal} `}</Typography>
      </Modal>
    </>
  );
};

export default Carrinho;
