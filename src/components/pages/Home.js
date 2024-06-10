import React from "react";
import { useSelector } from "react-redux";
import Layout from "../layout/Layout";
import ProgressBar from "./barradeProgresso/ProgressoBarra";

const Home = () => {
  // Resgatar total vendido
  const total = useSelector((state) => state.sale.total);

  // Resgatar nome do usuário
  const CurrentUser = useSelector((state) => state.user.CurrentUser);

  //Criar barra de progresso
  const salesGoal = 1000;

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
        <div className="sales">
          <h1 class="mb">Total das Vendas</h1>
          <span>VendUp - Elevando suas vendas ao próximo nível!</span>
          <p>
            {total.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })} á 1.000,00
          </p>
        <ProgressBar value={total} max={salesGoal} />
        </div>
        <div className="social-media">
          <h2>Redes Sociais</h2>
          <div className="wrapper mt">
            <a href="#" className="icon">
              <i className="fa-instagram">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="feather feather-instagram"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </i>
            </a>
            <a href="#" className="icon">
              <i className="fa-facebook">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="feather feather-facebook"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </i>
            </a>
            <a href="#" className="icon">
              <i className="fa-youtube">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="feather feather-youtube"
                >
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
              </i>
            </a>
            <a href="#" className="icon">
              <i className="fa-x-twitter">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="feather feather-twitter"
                >
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </i>
            </a>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Home;
