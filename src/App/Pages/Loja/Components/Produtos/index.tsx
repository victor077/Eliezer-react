import React from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { Box } from "@newcon/ui";

import ProdutoItem from "./ProdutoItem";

type Produto = {
  id: number;
  title: string;
  price: number;
  picture: string;
  description: string;
  memory: string;
  brand: string;
  chipType: string;
  quantity: number;
};

const Produtos = () => {
  const { data, isLoading } = useQuery("consultar-produtos", () =>
    axios.get<Produto[]>("http://localhost:5002/products")
  );

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  return (
    <Box>
      {data?.data.map((produto) => (
        <ProdutoItem
          key={produto.id}
          id={produto.id}
          imagem={produto.picture}
          nome={produto.title}
          preco={produto.price}
        />
      ))}
    </Box>
  );
};

export default Produtos;
