const estados = [
    'Acre',
    'Alagoas',
    'Amapá',
    'Amazonas',
    'Bahia',
    'Ceará',
    'Distrito Federal',
    'Espírito Santo',
    'Goías',
    'Maranhão',
    'Mato Grosso',
    'Mato Grosso do Sul',
    'Minas Gerais',
    'Pará',
    'Paraíba',
    'Paraná',
    'Pernambuco',
    'Piauí',
    'Rio de Janeiro',
    'Rio Grande do Norte',
    'Rio Grande do Sul',
    'Rondônia',
    'Roraima',
    'Santa Catarina',
    'São Paulo',
    'Sergipe',
    'Tocantins'
];

const selectEstados = document.querySelector('#select-estado');
for (let estado = 0; estado < estados.length; estado += 1) {
    const option = document.createElement('option');
    option.innerText = estados[estado];
    option.value = estados[estado];
    selectEstados.appendChild(option);
}

validation.init("form");


const button = document.querySelector('#submit');
button.addEventListener('click', function () {
    validation.validate();
})
