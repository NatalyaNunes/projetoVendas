import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "./Layout";

const Table = () => {
  const navigate = useNavigate();

  const handleNewVendaClick = () => {
    navigate("/cadastro");
  };
  return (
    <Layout>
      <main class="crud">
        <div class="cardinput">
          <button class="but" onClick={handleNewVendaClick}>
            Nova Venda
          </button>
        </div>
        <table class="mt">
          <thead>
            <tr class="top">
              <th>Id</th>
              <th>Cliente</th>
              <th>Produto</th>
              <th>Valor</th>
              <th>Editar</th>
              <th>Excluir</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>01</td>
              <td>Natálya </td>
              <td>Pizza</td>
              <td>49,99</td>
              <td>
                <a href="#">
                  <i>
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
                      class="feather feather-edit"
                    >
                      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                    </svg>
                  </i>
                </a>
              </td>
              <td>
                <a href="#">
                  <i class="lixeira">
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
                      class="feather feather-trash-2"
                    >
                      <polyline points="3 6 5 6 21 6"></polyline>
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                      <line x1="10" y1="11" x2="10" y2="17"></line>
                      <line x1="14" y1="11" x2="14" y2="17"></line>
                    </svg>
                  </i>
                </a>
              </td>
            </tr>

            <tr>
              <td>02</td>
              <td>Naty</td>
              <td>Pizza</td>
              <td>49,99</td>
              <td>
                <a href="#">
                  <i>
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
                      class="feather feather-edit"
                    >
                      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                    </svg>
                  </i>
                </a>
              </td>
              <td>
                <a href="#">
                  <i class="lixeira">
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
                      class="feather feather-trash-2"
                    >
                      <polyline points="3 6 5 6 21 6"></polyline>
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                      <line x1="10" y1="11" x2="10" y2="17"></line>
                      <line x1="14" y1="11" x2="14" y2="17"></line>
                    </svg>
                  </i>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </main>
    </Layout>
  );
};

export default Table;
