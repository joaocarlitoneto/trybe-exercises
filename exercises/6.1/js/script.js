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

/* -------------------------------------------------- */

validation.init("form");

const buttonCV = document.querySelector('#submit');
buttonCV.addEventListener('click', function (event) {
    event.preventDefault();
    validation.validate();
})

/* -------------------------------------------------- */

const formulario = document.querySelector('form');

function createCV() {
    buttonCV.addEventListener('click', function (event) {
        event.preventDefault();
        let data = document.querySelectorAll('.data-cv');
        let showCV = document.querySelector('#show-cv');

        showCV.innerHTML = '';
        for (let index = 0; index < data.length; index += 1) {
            let paragraph = document.createElement('p');
            paragraph.innerHTML = data[index].value;
            showCV.appendChild(paragraph);
        }
        formulario.reset();
    })
}

createCV();

/* -------------------------------------------------- */

const buttonClear = document.querySelector('#limpar');
buttonClear.addEventListener('click', function (event) {
    event.preventDefault();
    let showCV = document.querySelector('#show-cv');
    showCV.innerHTML = '';
})