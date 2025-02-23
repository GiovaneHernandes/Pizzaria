import React, { useEffect, useState } from "react";

function App() {
  const [backendData, setBackendData] = useState({ users: [] }); // Alterado para iniciar como objeto vazio

  useEffect(() => {
    fetch("http://localhost:4000/api")
      .then((response) => response.json())
      .then((data) => {
        console.log("Dados recebidos:", data);
        setBackendData(data);
      })
      .catch((error) => console.error("Erro ao buscar dados:", error));
  }, []);

  return (
    <div>
      {backendData.users.length === 0 ? ( // Verificado se a lista de usuários está vazia
        <p>Loading...</p>
      ) : (
        backendData.users.map((user, i) => <p key={i}>{user}</p>) // Corrigido para "user"
      )}
    </div>
  );
}

export default App;
