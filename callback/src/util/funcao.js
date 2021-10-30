import {mask, unMask} from 'remask';

export const mascara = (document, name) => {

    let cleanMask = unMask(document);
    let getMask = '';

    if(name === 'documento'){
        getMask = mask(cleanMask, ['999.999.999-99','99.999.999/9999-99']);
    }
    else if(name === 'cep'){
        getMask = mask(cleanMask, ['99999-990']);
    }
    //const getMask = mask(cleanMask, ['999.999.999-99','99.999.999/9999-99']);

    return getMask;
}

export const validarEmail = (email) => {

    var res = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi;
    return res.test(email);
}