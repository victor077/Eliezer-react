import { createContext, PropsWithChildren, useContext, useState } from "react";

type Produto = {
  id: number;
  imagem: string;
  nome: string;
  preco: number;
};

type LojaContextValues = {
  produtos: Produto[];
  quantidadeProdutos: number;
  valorTotal: number;
  adicionarProduto: (produto: Produto) => void;
  removerProduto: (id: number) => void;
};

export const LojaContext = createContext<LojaContextValues>(
  {} as LojaContextValues
);

const LojaProvider = ({ children }: PropsWithChildren<unknown>) => {
  const [produtos, setProdutos] = useState<Produto[]>([]);

  const adicionarProduto = (produto: Produto) => {
    if (!produtos.find((_produto) => _produto.id === produto.id)) {
      setProdutos((prevProdutos) => [...prevProdutos, produto]);
    }
  };

  const removerProduto = (id: number) => {
    const listaProdutos = produtos.filter((produto) => produto.id !== id);
    setProdutos(listaProdutos);
  };

  const values: LojaContextValues = {
    produtos,
    quantidadeProdutos: produtos.length,
    valorTotal: produtos
      .map((produto) => produto.preco)
      .reduce((precoTotal, precoAtual) => precoTotal + precoAtual, 0),
    adicionarProduto,
    removerProduto,
  };

  return <LojaContext.Provider value={values}>{children}</LojaContext.Provider>;
};

export const useLoja = () => {
  const context = useContext(LojaContext);

  if (!context) {
    throw new Error("useLoja precisa estar dentro de um LojaProvider");
  }

  return context;
};

export default LojaProvider;
