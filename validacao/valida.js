function validaNome(nome){
  const regexNome = /^[a-zA-ZÀ-ÿ\s'-]+$/

  const isValid = nome.length >=2 && regexNome.test(nome)
  return isValid
}

function validaEmail(email){
  const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  const isValid = regexEmail.test(email)
  
  return isValid
}


function validaTelefone(telefone){
  const regexTelefone = /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/
  const isValid = regexTelefone.test(telefone)
  
  return isValid
}

export function validaDados(nome,email,telefone){
  const validNome = validaNome(nome)
  const validEmail = validaEmail(email)
  const validTelefone = validaTelefone(telefone)

  const usuarioValido = validNome && validEmail && validTelefone

  if(usuarioValido){
    return {status: true, mensagem: ''}
  } else{
    return {status: false, mensagem: 'Parâmetros informados inválidos'}
  }
}