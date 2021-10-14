let questions = {
    1: "Какого (каких) метода (методов) тестирования не существует? ",
    2: "Какие из перечисленных видов тестирования могут быть\n" +
        "автоматизированы:",
    3: "Что из перечисленного можно отнести к нефункциональному\n" +
        "тестированию?",
    4: "Что из нижеперечисленного является пользовательским\n" +
        "интерфейсом?",
    5: "Какое из нижеперечисленных высказываний не является логическим?"
}

let answer_options = {
    1: ['Метод “большого пальца"', 'Метод “игры в ящик”', 'Метод “кротовой норы”', 'Метод серого ящика'],
    2: ['Unit тесты', 'Тестирование совместимости', 'Юзабилити тестирование', 'UI тестирование'],
    3: ['Тестирование удобства использования', 'Тестирование совместимости', 'Тестирование производительности',
        'Тестирование безопасности'],
    4: ['Кнопки и экран банкомата', 'Командная строка', 'Робот-пылесос', 'Голосовые помощники: Siri, Cortana, Alexa'],
    5: ['Все столы сделаны из дерева', 'Луна это спутник Земли', 'Апельсиновый сок самый вкусный',
        'Зимой обычно холоднее, чем летом']
}

let answers_questions = {
    1: [1, 1, 1, 0],
    2: [1, 1, 0, 1],
    3: [1, 1, 1, 1],
    4: [1, 1, 0, 1],
    5: [0, 0, 1, 0]
}

let request_checkbox = {}

/*Функция <showNotificationsAlert> выводит сообщения (alert) в диалоговом окне согласно к требованиям разрабатываемой
программы. Подробно см. manual */

function showNotificationsAlert(message, value_1 = 0, value_2 = 0, value_3 = 0) {
    let messages = {
        "message_1": `Вы не ввели текст вопроса. Попробуйте добавить вопрос заново.`,
        "message_2": `Вы не ввели текст ${value_1} варианта ответа. Попробуйте добавить вопрос заново.`,
        "message_3": `Вы не ввели правильные варианты ответа. Попробуйте добавить вопрос заново.`,
        "message_4": `Все вопросы должны иметь хотя бы один выбранный вариант ответа. Проверьте правильность заполнения.`,
        "message_5": `Ваш результат ${value_1} из ${value_1}. Вы молодец!`,
        "message_6": "Поле может содержать только уникальные цифры 1, 2, 3, 4, разделенные запятой. " +
            "Попробуйте добавить вопрос заново.",
        "message_7": `Вы неправильно ответили на вопросы:\n\n${value_1}\n Ваш результат ${value_2} из ${value_3}.`
    }
    alert(messages[message])
}

/*Функция <showNotificationsPrompt> выводит модальное окно (alert) с заголовком согласно к требованиям разрабатываемой
программы и полем ввода. Подробно см. manual */

function showNotificationsPrompt(message, value = 0) {
    let mes = {
        "prompt_1": `Введите текст вопроса:`,
        "prompt_2": `Введите текст ${value} варианта ответа:`,
        "prompt_3": `Введите номера правильных ответов через запятую. Нумерация начинается с 1`
    }
    return prompt(mes[message], '')
}

/* Функция <checkFluency> формирует массив ответов пользователя на вопросы теста. Если все вопросы заполнены,
* вызывается функция <showMessage> для отображения результата тестов . Подробно см. manual */

function checkFluency() {
    request_checkbox = {}
    let checkboxes = document.getElementsByClassName("form-check-input")
    let checkboxesChecked = []
    for (let index = 0; index < checkboxes.length; index++) {
        if (checkboxes[index].checked) {
            checkboxesChecked.push(checkboxes[index].id.split("."))
        }
    }
    let len = checkboxesChecked.length
    for (let item = 0; item < len; item += 1) {
        let key = Number(checkboxesChecked[item][0])
        request_checkbox[key] = [0, 0, 0, 0]
    }
    for (let item = 0; item < len; item += 1) {
        let key = Number(checkboxesChecked[item][0])
        let value = Number(checkboxesChecked[item][1])
        request_checkbox[key][value] = 1
    }
    if (Object.keys(request_checkbox).length !== Object.keys(answers_questions).length) {
        showNotificationsAlert("message_4")
        // request_checkbox = {}

    } else {

        return showMessage()
    }
}

/* Функция < createAnswerOption> возвращает 4 варианта ответа на создаваемый вопрос.
Вызывается в функциии <createQuestion>. Подробно см. manual*/

function createAnswerOption() {
    res = []
    let count = 1
    while (count < 5) {
        let answer = showNotificationsPrompt("prompt_2", count)
        if (answer === "" || answer === null) {
            showNotificationsAlert("message_2", count)
            return null
        } else {
            res.push(answer)
        }
        count += 1
    }
    return res

}

/*Функция <isValidInput> проверяет корректность введенных вариантов верного ответа от пользователя согласно ТЗ.
Вызывается в функции < createCorrectAnswer >. Подробно см. manual*/

function isValidInput(item) {
    result = [0, 0, 0, 0]
    let checkNumber = ["1", "2", "3", "4"]
    let len = item.length
    if (len > 4) {
        return false
    } else {
        for (let num = 0; num < len; num += 1) {
            if (checkNumber.includes(item[num])) {
                let val = Number(item[num])
                if (result[val - 1] === 0) {
                    result[val - 1] = 1
                } else {
                    return false
                }
            } else {
                return false
            }
        }
    }
    return result
}

/*Функция <createCorrectAnswer> создает и возвращает в функцию < createAnswerOption>
правильные ответы на добавляемый вопрос. Номера правильных ответов через запятую не более 4 (1,2,3,4).
 Подробно см. manual*/

function createCorrectAnswer() {
    let correctanswer = showNotificationsPrompt("prompt_3")
    if (correctanswer === "" || correctanswer === null) {
        showNotificationsAlert("message_3")
        return null
    }
    correctanswer = correctanswer.split(',')
    let inputValueFormated = isValidInput(correctanswer)
    if (inputValueFormated === false) {
        showNotificationsAlert("message_6")
        return null
    }
    return inputValueFormated
}

/*Функция <createQuestion> создает вопрос после нажатия кноки <Добавить вопрос>, варианты ответов,
правильные ответы на вопрос от пользователя с отображением информации согласно ТЗ в диалоговых окнах.
Функция обращается к  функциям <createAnswerOption> <createCorrectAnswer. Подробно см. manual */

function createQuestion() {
    let num_question = Object.keys(questions).length + 1
    let question = showNotificationsPrompt("prompt_1")
    if (question === "" || question === null) {
        showNotificationsAlert("message_1")
        return null;
    } else {

        let answer_option = createAnswerOption()
        if (answer_option === null) {
            return null;
        }

        let correct_answer = createCorrectAnswer()
        if (correct_answer === null) {
            return null;
        }

        if (answer_option && correct_answer) {
            questions[num_question] = question
            answer_options[num_question] = answer_option
            answers_questions[num_question] = correct_answer
        } else {
            return null
        }
    }
}

/*Функция <beginTest> выводит список вопросов с вариантами ответов пользователю, после нажатия кнопки <Начать тест>
* Подробно см. manual*/

function beginTest() {
    document.getElementById("question").disabled = true;
    document.getElementById("test").disabled = true;
    for (let key in questions) {
        let count = 0
        out1.innerHTML += `<br> <p>${key}. ${questions[key]}</p>`
        for (let j of answer_options[key]) {
            out1.innerHTML += `<div class="form-check"><input class="form-check-input" type="checkbox" id="${key}.${count}">` +
                `<label>${j}</label></div>`
            count = count + 1
        }
    }
    out2.innerHTML = `<br><button id='newButton' onclick="checkFluency()">Отправить</button><br><br>`
}

/*Функция <vetAnswer> возвращает список неправильных ответов пользователя на вопросы. Подробно см. manual*/

function vetAnswer(arr_1, arr_2) {
    let res = []
    let len_arr_1 = Object.keys(arr_1).length
    for (let keys = 1; keys < len_arr_1 + 1; keys += 1) {
        if (arr_1[keys].join() !== arr_2[keys].join()) {
            res.push(keys)
        }
    }
    return res
}

/* Функция <showMessage> генерирует результат теста для последующего вывода его в диалоговом окне.
Для формирования количества неправильных ответов, обращаемся к функции <vetAnswer>. Подробно см. manual */

function showMessage() {
    let list_wrong = vetAnswer(request_checkbox, answers_questions)
    let len_answer_options = Object.keys(answer_options).length
    if (list_wrong.length === 0) {
        showNotificationsAlert("message_5", len_answer_options)
        // document.getElementById("newButton").disabled = true
        return null
    } else {
        let mes = ""
        for (let element of list_wrong) {
            mes += `${element}. ${questions[element]}\n`
        }
        let num_correct_answer = len_answer_options - list_wrong.length
        showNotificationsAlert("message_7", mes, num_correct_answer, len_answer_options)
        // document.getElementById("newButton").disabled = true
    }
}





