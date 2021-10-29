import { useState } from "react";

type FormData = {
    login: string;
    senha: string;
}

const Input = ({...props}) => {

    const [formData, setFormData] = useState<FormData>({} as FormData);

    const handleChange = (event: any) => {
        //pegar name e valor dos input do formulario
        const name = event.target.name;
        const value = event.target.value;
    
        //trocar pela informação digitada no formulario
        setFormData({ ...formData, [name]: value });
      };

      const logar = () => {
          debugger
        let resp = props.dadosUsuario(formData.login, formData.senha)
        debugger
      }

    return(
        <>
        <input type="text" name="login" placeholder="componente input login" onChange={handleChange} style={{border:'1px solid red'}}/>
        <br /><br />
        <input type="text" name="senha" placeholder="componente input senha" onChange={handleChange} style={{border:'1px solid red'}}/>
        <br /><br />
        <button type="button" onClick={logar}>Login</button>
        </>
    )
}

export default Input;