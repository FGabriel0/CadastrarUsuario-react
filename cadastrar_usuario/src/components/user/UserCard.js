import Home from "../pages/Home";
import { useState, useEffect } from "react";
import { FaUsers } from "react-icons/fa";
import {RiDeleteBin6Fill } from "react-icons/ri";

import React from "react";
import { useFetch } from "../../hooks/useFetch";

const url = "http://localhost:3000/users";
const UserCard = () => {
  const [users, setUsers] = useState([]);

  const{data: items, httpConfig,loading,error}= useFetch(url);

  const[name, setName] = useState("")
  const [email, setEmail] = useState("");

  const handlerSubmit = async (e)=>{
      e.preventDefault()

      const user ={
        name,
        email
      };
  
      httpConfig(user,"POST");
      setName("")
      setEmail("")

  }

  const handleRemove = (id) => {
    httpConfig(id, "DELETE");
  };

  return (
    <>
      <Home
        icon={<FaUsers />}
        title="Usuários"
        subtitle="Usuários Cadastrados"
      />
      <main className="content container-fluid">
        <div className="p-3 mt-3">
          <p className="mb-0">Cadastro do Usuário</p>
        </div>

        <form className="form" onSubmit={handlerSubmit}>
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="form-group">
                <label>Nome</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Digite o nome..."
                />
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="form-group">
                <label>E-mail</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Digite o e-mail..."
                />
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-12 d-flex justify-content-end">
                {!loading && <input type="submit" value="Salvar" className="btn btn-primary"/>}
              </div>
            </div>
          </div>
        </form>
        <table className="table mt-4">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>E-mail</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>{/* {this.renderRows()} */}</tbody>

        {loading && <p>Carregando Dados...</p>}
        {error && <p>{error}</p>}
          {items && items.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
              <button onClick={() => handleRemove(user.id)} variant="danger">
                  <RiDeleteBin6Fill/>
                </button>
              </td>
            </tr>
          ))}
        </table>
      </main>
    </>
  );
};

export default UserCard;
