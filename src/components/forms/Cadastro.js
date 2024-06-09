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
      <main class="home homeCadastro">
        <div className="box shadow">
          <form onSubmit={handleSubmit}>
            <h3 className="mb">{isEditing ? "Editar" : "Cadastrar"} venda</h3>
            <div className="inputbox">
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
                  class="feather feather-user"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </i>
              <input
                type="text"
                name="cliente"
                value={cliente}
                onChange={(event) => setCliente(event.target.value)}
              />
              <label htmlFor="cliente">Cliente</label>
            </div>
            <div className="inputbox">
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
                  class="feather feather-shopping-bag"
                >
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <path d="M16 10a4 4 0 0 1-8 0"></path>
                </svg>
              </i>
              <input
                type="text"
                name="produto"
                value={produto}
                onChange={(event) => setProduto(event.target.value)}
              />
              <label htmlFor="produto">Produto</label>
            </div>
            <div className="inputbox">
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
                  class="feather feather-dollar-sign"
                >
                  <line x1="12" y1="1" x2="12" y2="23"></line>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
              </i>
              <input
                type="text"
                name="valor"
                value={valor}
                onChange={(event) => setValor(event.target.value)}
              />
              <label htmlFor="valor">Valor</label>
            </div>
            <div className="cardinput mt">
              <button type="submit" className="but">
                {isEditing ? "Salvar Alterações" : "Cadastrar"}
              </button>
            </div>
          </form>
        </div>
      </main>
    </Layout>
  );
}

export default Cadastro;
