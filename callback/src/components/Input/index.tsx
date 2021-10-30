import { useState } from "react";
import { mascara, viacep } from "../../util/funcao";

type FormData = {
    login: string;
    senha: string;
}

const Input = ({...props}) => {

    const [formData, setFormData] = useState<FormData>({} as FormData);
    const [value, setValue] = useState("");

    const handleChange = (event: any) => {
      debugger
      let result = mascara(event.target.value)
        
        //pegar name e valor dos input do formulario
        const name = event.target.name;
        const value = result;
    
        setValue(value);
        //trocar pela informação digitada no formulario
        setFormData({ ...formData, [name]: value });
      };

      const onBlur = (event: any) => {

        let cpf = event.target.value;
        let resultado = viacep(cpf, setValue)

        debugger
      }

      const logar = () => {
          debugger
        props.dadosUsuario(formData.login, formData.senha)
        debugger
      }

    return(
        <>
        <input type="text" name="cpf" value={value} placeholder="componente input login" onChange={handleChange} onBlur={onBlur} style={{border:'1px solid red'}}/>
        <br /><br />
        <input type="text" name="login" placeholder="componente input login" onChange={handleChange} style={{border:'1px solid red'}}/>
        <br /><br />
        <input type="text" name="senha" placeholder="componente input senha" onChange={handleChange} style={{border:'1px solid red'}}/>
        <br /><br />
        <button type="button" onClick={logar}>Login</button>
        </>
    )
}

export default Input;