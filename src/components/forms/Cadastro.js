import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSale, updSale } from "../../redux/user/actions";
import { useNavigate, useParams } from "react-router-dom";
import Layout from "../Layout";
import Table from "../Table";
import { getNextId } from "../../redux/user/saleReducer";

function Cadastro() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const sales = useSelector((state) => state.sale.sales);
  const saleToEdit = sales.find((sale) => sale.id === Number(id));

  const [cliente, setCliente] = useState("");
  const [produto, setProduto] = useState("");
  const [valor, setValor] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (saleToEdit) {
      setCliente(saleToEdit.cliente);
      setProduto(saleToEdit.produto);
      setValor(saleToEdit.valor);
      setIsEditing(true);
    }
  }, [saleToEdit]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!cliente || !produto || !valor) {
      alert("Preencha todos os campos!");
      return;
    }

    const novaVenda = {
      id: isEditing ? saleToEdit.id : getNextId(),
      cliente,
      produto,
      valor,
    };

    if (isEditing) {
      dispatch(updSale(novaVenda));
    } else {
      dispatch(addSale(novaVenda));
    }

    setCliente("");
    setProduto("");
    setValor("");
    navigate("/vendas");
  };

  return (
    <Layout>
      <main className="forms">
        <div>
          <h3 className="mb">{isEditing ? "Editar" : "Cadastrar"} venda</h3>
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
              {isEditing ? "Salvar Alterações" : "Cadastrar"}
            </button>
          </div>
        </form>
      </main>
    </Layout>
  );
}

export default Cadastro;
