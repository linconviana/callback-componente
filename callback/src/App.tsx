import React, { useState } from 'react';
import './App.css';
import Input from './components/Input';

type Usuario = {
  login: '',
  senha: ''
}
//https://www.youtube.com/watch?v=Cg4QICsXhQ4
function App() {

  const [getUser, setGetUser] = useState<Usuario>({} as Usuario)

  const getNome = (usuario: any, senha: any) =>{
    setGetUser({
      login: usuario,
      senha: senha
    })
  }

  return (
    <div>
      <h1>Principal</h1>
      <hr />
      <Input dadosUsuario={getNome}/>
      <hr />
      <input type="text" placeholder="recebe o texto" />
    </div>
  );
}

export default App;
