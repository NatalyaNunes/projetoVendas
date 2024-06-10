import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/user/actions";
import { toast } from "react-toastify";

const SideBar = ({ isOpen }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //Direcionamento para rotas ou ações
  const handlerVendasClick = () => {
    navigate("/vendas");
  };

  const handlerHomeClick = () => {
    navigate("/home");
  };

  const handleLogout = (event) => {
    event.preventDefault();
    dispatch(logout());
    toast.success("Você foi deslogado com sucesso!");
    navigate("/");
  };

  return (
    <main>
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <nav className="mb">
          <h2 className="text-ligth">VendUp</h2>
        </nav>
        <hr />
        <div className="mt">
          <a onClick={handlerHomeClick}>
            <div className="butsidebar">
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
                  className="feather feather-home"
                >
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
              </i>
              <p>Home</p>
            </div>
          </a>
          <a onClick={handlerVendasClick}>
            <div className="butsidebar">
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
                  className="feather feather-archive"
                >
                  <polyline points="21 8 21 21 3 21 3 8"></polyline>
                  <rect x="1" y="3" width="22" height="5"></rect>
                  <line x1="10" y1="12" x2="14" y2="12"></line>
                </svg>
              </i>
              <p>Vendas</p>
            </div>
          </a>

          <a onClick={handleLogout}>
            <div className="butsidebar">
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
                  className="feather feather-user"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </i>
              <p>Logout</p>
            </div>
          </a>
        </div>
      </div>
    </main>
  );
};

export default SideBar;
