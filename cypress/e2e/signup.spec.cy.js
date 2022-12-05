import signup from '../pages/SignupPage'
import signupFactory from '../factories/SignupFactory.cy'

describe('Signup', () => {

   /* 
   beforeEach(function () {
        cy.fixture('deliver').then((d) => {
            this.deliver = d
        })
    }
    )
    */

    it('User should be delivery', function () {

        var deliver = signupFactory.deliver()

        signup.go()
        signup.fillForm(deliver)
        signup.submit()

        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'

        signup.modalContentShouldBe(expectedMessage)


    })

    it('Incorrect document', function () {
        var deliver = signupFactory.deliver()
        deliver.cpf = '343608228aa'

        signup.go()
        signup.fillForm(deliver)
        signup.submit()

        signup.alertMessageShouldBe('Oops! CPF inválido')

    })

    it('Incorrect email', function () {
        var deliver = signupFactory.deliver()
        deliver.email = 'user.com.br'

        signup.go()
        signup.fillForm(deliver)
        signup.submit()

        signup.alertMessageShouldBe('Oops! Email com formato inválido.')

    })

    

    it('Required fields', function () {

        signup.go()
        signup.submit()

        signup.alertMessageShouldBe('Adicione uma foto da sua CNH')
        signup.alertMessageShouldBe('Selecione o método de entrega')
        signup.alertMessageShouldBe('É necessário informar o número do endereço')
        signup.alertMessageShouldBe('É necessário informar o CEP')
        signup.alertMessageShouldBe('É necessário informar o email')
        signup.alertMessageShouldBe('É necessário informar o CPF')
        signup.alertMessageShouldBe('É necessário informar o nome')

    })
})