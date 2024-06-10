import React from "react";
import { useSelector } from "react-redux";
import Layout from "./Layout";

const Home = () => {
  //Resgatar total vendido
  const total = useSelector((state) => state.sale.total);

  //Resgatar nome do usuário
  const CurrentUser = useSelector((state) => state.user.CurrentUser);

  return (
    <Layout>
      <main className="homePag">
        <div className="welcome">
          <h1>Welcome {CurrentUser.nome}!</h1>
          <span>
            Bem-vindo ao VendUp, onde suas vendas decolam! Aproveite a
            simplicidade e eficiência em gestão de vendas ao seu alcance.
          </span>
        </div>
        <div className="content">
          <div className="sales">
            <h1>Total de Vendas</h1>
            <span>VendUp - Elevando suas vendas ao próximo nível!</span>
            <p>
              {total.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
          </div>
          <div className="other-content">
            {/* Conteúdo futuro */}
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Home;
