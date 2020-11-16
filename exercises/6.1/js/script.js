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

const botaoEnviar = document.querySelector('#submit');

function validacaoData() {
    let inputData = document.querySelector('#input-data-inicio');
    let data = inputData.value;
    let dataArray = data.split('/');
    let dia = parseInt(dataArray[0]);
    let mes = parseInt(dataArray[1]);
    let ano = parseInt(dataArray[2]);

    if (!(dia > 0 && dia <= 31
        && mes > 0 && mes <= 12
        && ano > 0 && ano <= 2020)) {
        inputData.className = 'error';
        return 'Erro na formatação da data';
    }
    return '';
}

botaoEnviar.addEventListener('click', function (event) {
    event.preventDefault();
    let erro;
    let erros = '';
    erro = validacaoData();
    if (erro != '') {
        erros += `${erro} \n`;
    }
    let inputsText = document.querySelectorAll('input[type=text], textarea');
    for (let index = 0; index < inputsText.length; index += 1) {
        let input = inputsText[index];
        if (input.required) {
            if (input.value === '') {
                input.className = 'error';
                erros += `O campo ${input.name} é obrigatório \n`;
            }
            if (input.minlength && input.value.length < minlength) {
                input.className = 'error';
                erros += `O campo ${input.name} deve possuir ${input.minlength} caracteres \n`;
            }
        }
    }
    if (erros !== '') {
        alert(erros);
    } else {
        let form = document.querySelector('form');
        form.reset();
        for (let index = 0; index < inputsText; index += 1) {
            inputsText[index].classList.remove('error');
        }
    }
});