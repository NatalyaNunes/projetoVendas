import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addSale } from "../../redux/user/actions";
import { useNavigate } from "react-router-dom";
import Layout from "../Layout";

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
    const formData = new FormData(event.target);

    const novaVenda = {
      id: Date.now(),
      cliente,
      produto,
      valor,
    };
    // Despacha a ação para adicionar a nova venda
    dispatch(addSale(novaVenda));
    // Limpa os campos do formulário após a submissão
    setCliente("");
    setProduto("");
    setValor("");
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
              onChange={(e) => setCliente(e.target.value)}
              placeholder="Nome do cliente"
            />
          </div>
          <div className="cardinput mt">
            <label htmlFor="produto">Produto</label>
            <input
              type="text"
              name="produto"
              value={produto}
              onChange={(e) => setProduto(e.target.value)}
              placeholder="Produto vendido"
            />
          </div>
          <div className="cardinput mt">
            <label htmlFor="valor">Valor</label>
            <input
              type="text"
              name="valor"
              value={valor}
              onChange={(e) => setValor(e.target.value)}
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
