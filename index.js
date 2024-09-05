import express from 'express'
import cors from 'cors'
import { cadastrarLead, listarCadastros } from './servicos/servicos.js'
import { validaDados } from './validacao/valida.js'

const app = express()
app.use(express.json())
app.use(cors())


app.get('/usuarios', async(req, res)=>{
  const cadastros = await listarCadastros()

  if(cadastrarLead.length > 0){
    res.json(cadastros)
  } else{
    res.status(404).send({Erro: 'Error'})
  }

})

app.post('/usuarios', async(req,res)=>{

  const nome = req.body.nome
  const email = req.body.email
  const telefone = req.body.telefone

  const validaCadastro = validaDados(nome,email,telefone)

  if(validaCadastro.status){
    await cadastrarLead(nome,email,telefone)
    res.status(204).end()
  } else{
    res.status(404).send({mensagem: validaCadastro.mensagem})
  }

})

app.listen('9090', ()=>{
  console.log('servidor iniciado')
})