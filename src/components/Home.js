import React from "react";
import { useSelector } from "react-redux";
import Layout from "./Layout";

const Home = () => {
  const total = useSelector((state) => state.sale.total);

  return (
    <Layout>
      <main class="">
        <div>
          <h1>Welcome </h1>
        </div>
        <div class="">
          <h1>Total de Vendas</h1>
          <p>{total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
        </div>
      </main>
    </Layout>
  );
};

export default Home;
