/* Criação dos dias da semana */

function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
        const days = weekDays[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;

        weekDaysList.appendChild(dayListItem);
    };
};

createDaysOfTheWeek();

/* EX01 Criação dos dias do mês */

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

const holidays = [24, 25, 31];

const fridays = [4, 11, 18, 25];

function createDaysOfMonth() {
    const ulDays = document.querySelector('#days');

    for (let element = 0; element < dezDaysList.length; element += 1) {
        const day = dezDaysList[element];
        const liDays = document.createElement('li');
        liDays.classList.add('day');
        liDays.innerText = day;

        if (holidays.includes(day)) {
            liDays.classList.add('holiday');
        }

        if (fridays.includes(day)) {
            liDays.classList.add('friday')
        }

        ulDays.appendChild(liDays)
    }
}

createDaysOfMonth();

/* EX02 Criação botão de feriados */

function createButtonHoliday(string) {
    const buttonsContainer = document.querySelector('.buttons-container');
    const buttonHoliday = document.createElement('button');

    buttonHoliday.id = 'btn-holiday';
    buttonHoliday.innerHTML = string;
    buttonsContainer.appendChild(buttonHoliday);
}

createButtonHoliday('Feriados');

/* EX03 Mudar background dias com feriado */

function showHolidays() {
    let holidayButton = document.querySelector('#btn-holiday');
    let holidays = document.querySelectorAll('.holiday');
    let backgroundColor = 'rgb(238,238,238)';
    let newBackgroundColor = 'orange';

    holidayButton.addEventListener('click', function () {
        for (let el = 0; el < holidays.length; el += 1) {
            if (holidays[el].style.backgroundColor === newBackgroundColor) {
                holidays[el].style.backgroundColor = backgroundColor;
            } else {
                holidays[el].style.backgroundColor = newBackgroundColor;
            }
        }
    })
};

showHolidays();

/* EX04 Criação botão sexta-feira */

function createButtonFriday(string) {
    const buttonsContainer = document.querySelector('.buttons-container');
    const buttonFriday = document.createElement('button');

    buttonFriday.id = 'btn-friday';
    buttonFriday.innerHTML = string;
    buttonsContainer.appendChild(buttonFriday);
}

createButtonFriday('Sexta-feira');

/* EX05 Mudar o texto nos elementos sexta-feira */

function changeTextElement() {
    const fridayButton = document.querySelector('#btn-friday');
    const fridays = document.querySelectorAll('.friday');

    fridayButton.addEventListener('click', changeText);
    function changeText() {
        for (let el = 0; el < fridays.length; el += 1) {
            let friday = fridays[el];

            if (friday.innerText === 'Sextou') {
                friday.innerText = Number(friday.previousElementSibling.innerText) + 1;
            } else {
                friday.innerText = 'Sextou';
            }
        }
    }
}

changeTextElement();

/* Ex06 */

const days = document.querySelector('#days');

function mouseOver() {
    days.addEventListener('mouseover', function (event) {
        event.target.style.fontSize = '28px';
        event.target.style.fontWeight = 'bold';
    });
}

mouseOver();

function mouseOut() {
    days.addEventListener('mouseout', function (event) {
        event.target.style.fontSize = '20px';
        event.target.style.fontWeight = 'normal';
    });
}

mouseOut();

/* EX07 Adicionar tarefa */

const taskContainer = document.querySelector('.my-tasks');

function createTask(string) {
    const newTask = document.createElement('span');
    newTask.innerText = string;
    taskContainer.appendChild(newTask);
}

createTask('Adicionar tarefa teste');

/* EX08 Adiciona legenda com cor para a tarefa criada */

function createLegend(color) {
    const divLegend = document.createElement('div');
    divLegend.classList.add('task');
    divLegend.style.backgroundColor = color;
    taskContainer.appendChild(divLegend);
}

createLegend('orange');

/* EX 09 Adicionar evento no elemento clicado e atribuir uma classe para ele */

function toggleTask() {
    const task = document.querySelector('.task');

    task.addEventListener('click', function (event) {
        const taskSelected = document.querySelector('.selected');
        if (taskSelected == null) {
            event.target.className = 'task selected';
        } else {
            event.target.className = 'task';
        }
    })
}

toggleTask();

/* EX10 Adicionar um evento e atribuir cor */

function toggleDayColor() {
    days.addEventListener('click', function (event) {
        const taskSelected = document.querySelector('.selected');
        if (taskSelected != null) {
            if (event.target.style.color === taskSelected.style.backgroundColor) {
                event.target.style.color = 'rgb(119,119,119)';
            } else {
                event.target.style.color = taskSelected.style.backgroundColor;
            }
        }
    })
}

toggleDayColor();

/* Bônus Adicionar compromisso ao calendário */

function createAppointment() {
    const buttonTask = document.querySelector('#btn-add');
    const taskInput = document.querySelector('#task-input');

    taskInput.addEventListener('keydown', function (event) {
        if (event.code === 'Enter') {
            createTask();
        }
    })

    buttonTask.addEventListener('click', createTask);

    function createTask() {
        const listTasks = document.querySelector('.task-list');
        if (taskInput.value.length <= 0) {
            alert('Erro! Adicione um compromisso');
            return
        }

        const taskSpan = document.createElement('li');
        taskSpan.innerHTML = taskInput.value;
        listTasks.appendChild(taskSpan);
        taskInput.value = '';
    }
}

createAppointment()