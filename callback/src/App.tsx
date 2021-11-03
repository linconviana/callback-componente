import React, { useState } from 'react';
import './App.css';
import { mascara, validarEmail } from './util/funcao';
import { ViaCep } from './util/requestApi';

type FormData = {
  nome: string,
  documento: string,
  emil: string,
  cep: string,
  logradouro: string,
  bairro: string,
  localidade: string,
  uf: string,
  ddd: string
}

const AddressData = {
  logradouro: '',
  localidade: '',
  bairro: '',
  uf: '',
  ddd: '',
};

//https://www.youtube.com/watch?v=Cg4QICsXhQ4
function App() {

  /// :: pegar valor do formulario
  const [formData, setFormData] = useState<FormData>({} as FormData);

  /// :: exibir mensagem de erro
  const [errorMessage, setErrorMessage] = useState('');

  /// :: atualizar valor dos campos
  const [documentValue, setDdocumentValue] = useState('');
  const [cepValue, setCepValue] = useState('');
  const [address, setAddress] = useState(AddressData);

  /// :: enviar dados do formulario
  const handleSubmit = (event: any) =>{

    event.preventDefault();

    const data = JSON.stringify(formData);

    debugger

  }

  /// atualizar o valor dos input
  const handleChange = (event: any) => {

    const name = event.target.name;
    const value = event.target.value;
    let mask = '';

    if(name === 'documento'){

      mask = mascara(value, name);
      setDdocumentValue(mask);
    }
    else if(name === 'cep'){
      mask = mascara(value, name);
      setCepValue(mask)
    }

    setFormData({...formData, [name] : value})
  }

  //https://pt.stackoverflow.com/questions/404856/como-pegar-o-valor-do-select
  const estados = [
    {id: "SP", name: 'São Paulo'},
    {id: "RJ", name: 'Rio de Janeiro'},
    {id: "MG", name: 'Minas Gerais'},
    {id: "ES", name: 'Espirito Santo'},
  ];

  const onBlur = (event: any) => {

    const name = event.target.name;
    const value = event.target.value;

    if(name === 'email'){

      const status = validarEmail(value);
      
      if(status){
        setErrorMessage('');
      }
      else{
        //setErrorMessage('E-mail no formato inválido!');
        setCepValue('');
      }
    }
    else if(name === 'cep'){
      
      //ViaCep(value.replace('-',''),setAddress);
      ViaCep(value.replace('-',''), UpdateFormData);
      
    }

  }

  const UpdateFormData = (AddressData: any) =>{

    setAddress(AddressData);
    formData.logradouro = AddressData.logradouro;
    formData.bairro = AddressData.bairro;
    formData.localidade = AddressData.localidade;
    formData.uf = AddressData.uf;
    formData.ddd = AddressData.ddd;
  }

  return (
    <div>
      <h1>Principal</h1>
      <hr />
      <form onSubmit={handleSubmit}>
        <input type="text" name="nome" placeholder="Digite o nome" onChange={handleChange} />
        <p>{errorMessage ? errorMessage : ''}</p>
        <br /><br />
        <input type="text" name="documento" placeholder="Digite o cpf" onChange={handleChange} value={documentValue} />
        <p>{errorMessage ? errorMessage : ''}</p>
        <br /><br />
        <input type="text" name="email" placeholder="Digite o email" onChange={handleChange} onBlur={onBlur}/>
        <p>{errorMessage ? errorMessage : ''}</p>
        <br /><br />
        <input type="text" name="cep"  placeholder="Digite o cep" onChange={handleChange} onBlur={onBlur} value={cepValue}/>
        <p>{errorMessage ? errorMessage : ''}</p>
        <br /><br />
        <input type="text" name="logradouro" id="rua" placeholder="Digite o logradouro" onChange={handleChange} defaultValue={address && address.logradouro}/>
        <p>{errorMessage ? errorMessage : ''}</p>
        <br /><br />
        <input type="text" name="bairro"  placeholder="Digite o bairro" onChange={handleChange} defaultValue={address && address.bairro}/>
        <p>{errorMessage ? errorMessage : ''}</p>
        <br /><br />
        <input type="text" name="localidade"  placeholder="Digite a cidade" onChange={handleChange} defaultValue={address && address.localidade}/>
        <p>{errorMessage ? errorMessage : ''}</p>
        <br /><br />
        <select name="uf" onChange={handleChange} value={address && address.uf} key={address && address.uf}>
          <option key="">selecione</option>

          {
            estados.map((item, index) => (
              <option key={index} value={item.id}>{item.name}</option>
            ))
          }

        </select>
        <p>{errorMessage ? errorMessage : ''}</p>
        <br /><br />
        
        <button type="submit" >Login</button>
      </form>
      <hr />
    </div>
  );
}

export default App;
