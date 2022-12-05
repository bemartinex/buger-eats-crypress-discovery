var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {
    deliver: function () {

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
            name: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName, lastName),
            whatsapp: '11991578536',
            address: {
                postalcode: '03818130',
                street: 'Rua Cícero Dantas',
                number: '321',
                details: 'Ap 258',
                district: 'Parque Císper',
                city_state: 'São Paulo/SP'
            },
            delivery_method: 'Moto',
            cnh: '/images/cnh-digital.jpg'
        }

        return data

    }
}