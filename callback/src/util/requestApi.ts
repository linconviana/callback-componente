import axios from 'axios';

const MessageError = {
    message: '',
  };

export const ViaCep = (cep: string, callback: any) => {

    /* useEffect(() => {}, []); */
    
    const url = `https://viacep.com.br/ws/${cep}/json/`;
  
    axios
      .get(url)
      .then((response) => {
        if (response.statusText === 'OK' && !response.data.erro) {
          debugger
          callback(response.data);
        } else {
          return [];
        }
      })
      .catch((error) => {
        return (MessageError.message = error.message);
      });
  };