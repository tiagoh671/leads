import pool from "../conexao/conexao.js";

export async function cadastrarLead(nome,email,telefone){
  const conexao = await pool.getConnection()

  conexao.query('INSERT INTO leads(nome,email,telefone) VALUES(?,?,?)', [nome,email,telefone])

  conexao.release()
}

export async function listarCadastros(){

  const conexao = await pool.getConnection()

  const cadastros_tb = await conexao.query('SELECT nome, email, telefone FROM leads')

  conexao.release()

  return cadastros_tb[0]
}