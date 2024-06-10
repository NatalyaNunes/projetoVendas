import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSale, updSale } from "../../redux/user/actions";
import { useNavigate, useParams } from "react-router-dom";
import Layout from "../layout/Layout";
import { getNextId } from "../../redux/user/saleReducer";
import { toast } from "react-toastify";

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

  //Submeter o valor caso esteja campos preenchidos, do contrário exibir alerta
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!cliente || !produto || !valor) {
      toast.error("Preencha todos os campos!")
      return;
    }

    //Ajustar a mask do input valor
    const valorNumerico =
      parseFloat(valor.replace("R$", "").replace(/\./g, "").replace(",", ".")) /
      100;

    const novaVenda = {
      id: isEditing ? saleToEdit.id : getNextId(),
      cliente,
      produto,
      valor: `R$ ${valorNumerico.toFixed(2).replace(".", ",")}`,
    };

    //Definir a ação requisitada para executar
    if (isEditing) {
      dispatch(updSale(novaVenda));
      toast.success("Venda atualizada!")
    } else {
      dispatch(addSale(novaVenda));
      toast.success("Venda registrada!")
    }
    //limpar os campos e redirecionar
    setCliente("");
    setProduto("");
    setValor("");
    navigate("/vendas");
  };

  const formatCurrency = (value) => {
    if (!value) return "";
    const parts = value.replace(/[^\d]/g, "").split("");
    const integerPart = parts.slice(0, -2).join("") || "0";
    const decimalPart = parts.slice(-2).join("").padStart(2, "0");
    return `R$ ${parseInt(integerPart, 10).toLocaleString()}.${decimalPart}`;
  };

  const handleValorChange = (event) => {
    const inputValue = event.target.value;
    const formattedValue = formatCurrency(inputValue);
    setValor(formattedValue);
  };

  return (
    <Layout>
      <main className="home homeCadastro">
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
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-user"
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
                placeholder=" "
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
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-shopping-bag"
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
                placeholder=" "
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
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-dollar-sign"
                >
                  <line x1="12" y1="1" x2="12" y2="23"></line>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
              </i>
              <input
                type="text"
                name="valor"
                value={valor}
                onChange={handleValorChange}
                placeholder=" "
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
