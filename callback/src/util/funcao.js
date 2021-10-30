import {mask, unMask} from 'remask';

export const mascara = (cpf) => {

    const cleanMask = unMask(cpf);
    const getMask = mask(cleanMask, ['999.999.999-99','99.999.999/9999-99']);

    return getMask;
}

export const viacep = (cep, callback) => {

    return   {'Nome':'Lincon','numero':'307',}
}