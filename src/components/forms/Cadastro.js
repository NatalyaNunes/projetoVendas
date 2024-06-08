import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addSale } from "../../redux/user/actions";
import { useNavigate } from "react-router-dom";
import Layout from "../Layout";
import Table from "../Table";
import { getNextId } from "../../redux/user/saleReducer";

function Cadastro() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [cliente, setCliente] = useState("");
  const [produto, setProduto] = useState("");
  const [valor, setValor] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if(!cliente || !produto || !valor){
        alert("Preencha todos os campos!");
        return;
    }

    const novaVenda = {
      id: getNextId(),
      cliente,
      produto,
      valor,
    };

    dispatch(addSale(novaVenda));

    setCliente("");
    setProduto("");
    setValor("");
    navigate("/cadastro");
  };

  return (
    <Layout>
      <main className="forms">
        <div>
          <h3 className="mb">Cadastrar venda</h3>
        </div>
        <hr />
        <form onSubmit={handleSubmit}>
          <div className="cardinput mt">
            <label htmlFor="cliente">Cliente</label>
            <input
              type="text"
              name="cliente"
              value={cliente}
              onChange={(event) => setCliente(event.target.value)}
              placeholder="Nome do cliente"
            />
          </div>
          <div className="cardinput mt">
            <label htmlFor="produto">Produto</label>
            <input
              type="text"
              name="produto"
              value={produto}
              onChange={(event) => setProduto(event.target.value)}
              placeholder="Produto vendido"
            />
          </div>
          <div className="cardinput mt">
            <label htmlFor="valor">Valor</label>
            <input
              type="text"
              name="valor"
              value={valor}
              onChange={(event) => setValor(event.target.value)}
              placeholder="Valor do produto"
            />
          </div>
          <div className="cardinput mt">
            <button type="submit" className="but">
              Cadastrar
            </button>
          </div>
        </form>
      </main>
    </Layout>
  );
}

export default Cadastro;
