import { entregador } from "../fixtures/factories/entregador"
import form from "../pages/index"

describe('Cadastrar 1 entregador com sucesso', () => {
  it('Validar cadastro de entregador', () => {

    form.visit()

    form.acessarFormularioCadastro()

    form.cadastrarEntregador(entregador)

    form.uploadCnh(entregador.cnh)

    form.concluirCadastro()

    form.validacaoCadastroSucesso("Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.")
  })
})