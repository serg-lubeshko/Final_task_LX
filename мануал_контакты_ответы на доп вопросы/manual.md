# Приложение для тестирования

Данная программа позволяет оценить пользователю свои знания с помощью теста.  Приложение предоставляет возможность создавать вопросы и ответы, а также задавать верные ответы и валидировать их.
### 1. **Главный экран программы.**
На главном экране пользователь  имеет возможность:
- добавить вопрос;
- инициировать начало теста.

### 2. **Основные функции программы.**

1. Пользователь  имеет возможность  создать вопрос:

   - ввести текст вопроса (все символы поддерживаются);

   - ввести варианты ответов 1-4 (все символы поддерживаются);

   - ввести варианты верного ответа;

2. Пользователь  имеет возможность  пройти тест:
   - отметить один или несколько вариантов ответов в качестве верных в каждом
     вопросе;
   - выбрать минимум один ответ в каждом вопросе (обязательное требование);
   - подтвердить (отправить) тест, чтобы узнать результаты.

### 3. **Возможности программы.**

#### Создать вопрос

1. Пользователь инициирует создание вопроса.
2. Система отображает окно создания вопроса.
3. Пользователь вводит и подтверждает вопрос.
4. Система отображает поле для ввода ответа 1. 
5. Пользователь вводит и подтверждает ответ 1.
6. Система отображает поле для ввода ответа 2.
7. Пользователь вводит и подтверждает ответ 2.
8. Система отображает поле для ввода ответа 3.
9. Пользователь вводит и подтверждает ответ 3.
10. Система отображает поле для ввода ответа 4.
11. Пользователь вводит и подтверждает ответ 4.
12. Система отображает поле для ввода номеров правильных ответов.

13. Пользователь вводит и подтверждает номера правильных ответов.
14. Система подтверждает валидность данных в поле правильных ответов.
15. Система создает вопрос.
16. Система скрывает окно ввода вопроса.
17. Система добавляет вопрос в тест. (При нажатии кнопки "Начать тест" вопрос добавлен!).

##### Расширение функций создать вопрос:

3а. Пользователь не вводит вопрос и подтверждает поле/отменяет создание вопроса. Отображается сообщение: *"Вы не ввели текст вопроса. Попробуйте добавить вопрос заново."*

5а/7a/9a/11a. Пользователь не вводит ответ 1/2/3/4 и подтверждает поле/отменяет создание вопроса. Отображается сообщение: *"Вы не ввели текст N варианта ответа. Попробуйте добавить вопрос заново."*

13a. Пользователь не вводит номера правильных ответов и подтверждает поле/отменяет создание вопроса. Отображается сообщение: "*Вы не ввели правильные варианты ответа. Попробуйте добавить вопрос заново."*

13б. Пользователь вводит невалидные данные и подтверждает поле. Отображается сообщение: "*Поле может содержать только уникальные цифры 1, 2, 3, 4, разделенные запятой. Попробуйте добавить вопрос заново.*"

#### Пройти тест

1. Пользователь выбирает опцию “Начать тест”. 
2. Система дизейблит опцию “Начать тест”. 
3. Система дизейблит опцию добавления вопроса. 
4. Система отображает список вопросов.
5. Пользователь отмечает варианты ответов для вопросов.
6. Система отображает выбранные варианты ответов.
7.  Пользователь подтверждает прохождение теста.
8. Система отображает диалоговое окно с сообщением "*Ваш результат <количество правильно отвеченных вопросов> из <количество всех вопросов>. Вы молодец!*".

**Расширение функций пройти тест:**

8а. Если пользователь оставляет минимум один вопрос не отвеченным, система отображает диалоговое окно с сообщением *"Все вопросы должны иметь хотя бы один выбранный вариант ответа. Проверьте правильность заполнения."*

8б. Если пользователь выбирает варианты ответов для вопросов так, что хотя бы один вопрос имеет неверный ответ, система отображает диалоговое окно с сообщением: *"Вы неправильно ответили на вопросы: <N>. <Вопрос N> <M>. <Вопрос M> Ваш результат <количество правильно отвеченных вопросов> из <количество всех вопросов>. N, M — номер вопроса.*".*

### 4. **Технические решения программы.**

Программный пакет состоит из файлов indexLubeshko.html, test.js.

#### test.js

```js
let questions = {
    1: "Какого (каких) метода (методов) тестирования не существует? ",
....
    5: "Какое из нижеперечисленных высказываний не является логическим?"
}
```

В переменной `let questions` хранятся вопросы по умолчанию, а также добавляются в конец новые вопросы при их создании.

```js
let answer_options = {
    1: ['Метод “большого пальца"', 'Метод “игры в ящик”', 'Метод “кротовой норы”', 'Метод серого ящика'],
....
    5: ['Все столы сделаны из дерева', 'Луна это спутник Земли', 'Апельсиновый сок самый вкусный','Зимой обычно холоднее, чем летом']
```

В переменной `let answer_options  `хранятся 4 варианта ответа к каждому вопросу теста. Стоит отметить, что <u>ключи</u> ассоциативного массива вопросов (`let questions`) <u>соответствую  ключам</u> вариантам ответов `let answer_options`, ключам вариантам правильных ответов (`let answers_questions`) и ключам вариантов ответа введенным пользователем (`let request_checkbox`).

```js
let answers_questions = {
    1: [1, 1, 1, 0],
....
    5: [0, 0, 1, 0]
}
```

##### ФУНКЦИЯ `showNotificationsAlert()`

```js
function showNotificationsAlert(message, value_1 = 0, value_2 = 0, value_3 = 0) {
    let messages = {
        "message_1": `Вы не ввели текст вопроса. Попробуйте добавить вопрос заново.`,
        "message_2": `Вы не ввели текст ${value_1} варианта ответа. Попробуйте добавить вопрос заново.`,
        "message_3": `Вы не ввели правильные варианты ответа. Попробуйте добавить вопрос заново.`,
        "message_4": `Все вопросы должны иметь хотябы один выбранный вариант ответа. Проверьте правильность заполнения.`,
        "message_5": `Ваш результат ${value_1} из ${value_1}. Вы молодец!`,
        "message_6": "Поле может содержать только уникальные цифры 1, 2, 3, 4, разделенные запятой. " +
            "Попробуйте добавить вопрос заново.",
        "message_7": `Вы неправильно ответили на вопросы:\n\n${value_1}\n Ваш результат ${value_2} из ${value_3}.`
    }
    alert(messages[message])
```

При вызове функции `showNotificationsAlert`  формируется модальное окно с текстом указанным в ТЗ к разрабатываемой программе. Функция принимает параметр `message`, который является ключом к требуемому сообщению и параметры ``value_*` -  принимают значения с указанием № варианта ответа, количества верных вариантов ответа, а также передается строка с неверно отвеченными вопросами (`value_1` в  `"message_7"` ) . `showNotificationsAlert` вызывается в следующих функциях: `createAnswerOption(), createCorrectAnswer(), createQuestion(), showMessage().` 

##### ФУНКЦИЯ `showNotificationsPrompt()`

```js
function showNotificationsPrompt(message, value = 0) {
    let mes = {
        "prompt_1": `Введите текст вопроса:`,
        "prompt_2": `Введите текст ${value} варианта ответа:`,
        "prompt_3": `Введите номера правильных ответов через запятую. Нумерация начинается с 1`
    }
    return prompt(mes[message], '')
}
```

При вызове функции `showNotificationsPrompt`  формируется модальное окно с текстом указанным в ТЗ к разрабатываемой программе. При выводе модального окна  пользователю предлагается ввести информацию согласно бизнес-логике разработанного приложения. Параметр `message` является ключом к требуемому сообщению и параметры ``value` -  принимает значение с указание № варианта ответа. `showNotificationsPromp` вызывается в  функциях: `createAnswerOption(), createCorrectAnswer(), createQuestion()`, где возвращает текст, указанный в поле для ввода, либо пустую строку по умолчанию.

##### ФУНКЦИЯ `function checkFluency()`

```js
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
    } else {
        return showMessage()
    }
}
```

Функция  `checkFluency()`  обрабатывает `checkboxes`, которые пользователь отметил при прохождении теста и оповещает "клиента", если один вопрос не имеет ни одного ответа, отмеченного как правильный.  Система, обращаясь к функции `showNotificationsAlert()` выводит сообщение "Все вопросы должны иметь хотя бы один выбранный вариант ответа. Проверьте правильность заполнения."

В переменную`let checkboxes = document.getElementsByClassName("form-check-input")` - присваивается ссылка на HTML - коллекцию элементов, отобранных по классу `class="form-check-input"`

```js
>> let checkboxes
[input#1.0.form-check-input, input#1.1.form-check-input, input#1.2.form-check-input, input#1.3.form-check-input, input#2.0.form-check-input, input#2.1.form-check-input, input#2.2.form-check-input, input#2.3.form-check-input, input#3.0.form-check-input,  …]
```

Фрагмент кода функции `checkFluency()`:

```js
....
let checkboxesChecked = []					>>> [["1", "0"], ["1", "1"]....["5", "3"]]
    for (let index = 0; index < checkboxes.length; index++) {
        if (checkboxes[index].checked) {
            checkboxesChecked.push(checkboxes[index].id.split("."))
        }
....
```

создает в переменную `let checkboxesChecked`   список отспличенных id чекбоксов, которые пользователь отметил, как верные варианты ответов к тесту. Используя метод сплит, функция разбивает id на два значения, где первое число - номер вопроса, второе - вариант ответа. Например `input#1.0.form-check-input, input#1.1, input#5.3`вернет в `let checkboxesChecked`[1, 0], [1, 1]...[5,3] (1-№ вопроса, 0 - первый вариант ответа), (1-№ вопроса, 1 - второй вариант ответа, 5-№ вопроса, 3- четвертый вариант ответа).

Фрагмент кода функции `checkFluency()`:

```js
   ....
	}
    let len = checkboxesChecked.length
    for (let item = 0; item < len; item += 1) {
        let key = Number(checkboxesChecked[item][0])
        request_checkbox[key] = [0, 0, 0, 0]
    } ....
```

Передает в переменную `let request_checkbox` ассоциативный массив вида:

```js
{1:[0,0,0,0]....n:[0,0,0,0]}
/* 1...n - ключи, соответсвующие номеру вопроса*
   [0,0,0,0] - варианты ответа. По умолчанию 0 означает, что чекбоксы к вопросу не отмечены
/
```

Фрагмент кода функции `checkFluency()`:

```js
    ....
	for (let item = 0; item < len; item += 1) {
        let key = Number(checkboxesChecked[item][0])
        let value = Number(checkboxesChecked[item][1])
        request_checkbox[key][value] = 1
        ....
```

Обращается к списку переменной `checkboxesChecked`, где `let key = Number(checkboxesChecked[item][0]`  - ключ,  номер вопроса , а переменная `let value = Number(checkboxesCheckedх[item][1])`  - номер отмечено чекбокса. После чего по ключу обращается к `let request_checkbox`, где ставим число 1 (значит чекбокс отмечен ) в № позиции списка, указанного в `let value`. Таким образом создаем массив **вопрос - ответ  от  пользователя** при прохождении теста (пример: {1:[1,1,1,0], 2:[1,1,0,1]}) - > В вопросе 1 пользователь считает верным ответы (1,2,3) , а во 2-м верным ответы (1,2,4) 

Фрагмент кода функции `checkFluency()`:

```
    ....
    if (Object.keys(request_checkbox).length !== Object.keys(answers_questions).length) {
        showNotificationsAlert("message_4")
    } else {
        return showMessage()
        ....
```

проверяет "на все ли?" вопросы ответил пользователь. Если нет - выводит сообщение "Все вопросы должны иметь хотя бы один выбранный вариант ответа. Проверьте правильность заполнения."

##### ФУНКЦИЯ `createAnswerOption()`

```js
function createAnswerOption() {
    res = []
    let count = 1
    while (count < 5) {
        let answer = showNotificationsPrompt("prompt_2", count)
        // let answer = prompt(`Введите текст ${count} варианта ответа:`, '')
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
```

предлагает пользователю ввести 4 варианта ответа на создаваемый  вопрос. Ответы добавляются в переменную `res`, которая возвращается в функцию `createQuestion()`. Если пользователь не ввел вариант ответа или отменил ввод, система выводит сообщение: "Вы не ввели текст N варианта ответа. Попробуйте добавить вопрос заново."

##### ФУНКЦИЯ `createCorrectAnswer()`

```js
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
```

предлагает пользователю ввести  "номера правильных ответов через запятую. Нумерация начинается с 1". Номера ответов сохраняются в переменной `let correctanswer`. Если пользователь не ввел варианты правильных ответов или отменил ввод,  система выводит сообщение: "Вы не ввели правильные варианты ответа. Попробуйте добавить вопрос заново." 

За описанную часть отвечает фрагмент кода:

```js
    let correctanswer = showNotificationsPrompt("prompt_3")
    if (correctanswer === "" || correctanswer === null) {
        showNotificationsAlert("message_3")
        return null
    }
```

Фрагмент кода функции `createCorrectAnswer()`:

```js
    correctanswer = correctanswer.split(',')
    let inputValueFormated = isValidInput(correctanswer)
    if (inputValueFormated === false) {
        showNotificationsAlert("message_6")
        return null
    }
    return inputValueFormated
}
```

отправляет введенный список правильных ответов, на проверку в функцию `function isValidInput(item)`, если вопросы введены согласно бизнес-логике системы, функция возвращает список вопросов в переменную `inputValueFormated`, которую в последующем использует функция `function createQuestion()`. Если функция `isValidInput(item)` возвращает `false`, пользователю будет представлено модальное окно с сообщением "Поле может содержать только уникальные цифры 1, 2, 3, 4, разделенные запятой. Попробуйте добавить вопрос заново." 

##### ФУНКЦИЯ `isValidInput(item)`

```js
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
```

проверяет (валидирует) данные "ответы на введенные вопросы" согласно бизнес-логике:

- не позволяет  вводить цифры, отличные от 1-4;
- не повторяет введенные цифры;
- не позволяет вводить знаки, отличные от “,” 

возвращает список правильных вариантов ответа в переменной  `result` вида [0,1,0,1]. Где 1- правильный ответ, 0 - не правильный ответ. Т.е., когда пользователь вводит например 2, 4. Функция isValidInput(item) подставит в позиции (2-1=**1 и  4-1=**3**) переменной result значение 1 (см. фрагмент кода):

```js
                if (result[val - 1] === 0) {      #данная строка, позволяет проверить на дублирование цифр
                    result[val - 1] = 1
                } else {
                    return false      
                }
```

##### ФУНКЦИЯ `createQuestion()`

```js
function createQuestion() {
    let num_question = Object.keys(questions).length + 1
    let question = showNotificationsPrompt("prompt_1")
    if (question === "" || question === null) {
        showNotificationsAlert("message_1")
        return null;
    } else {

        let answer_option = createAnswerOption()       // описание функции см. выше
        if (answer_option === null) {
            return null;
        }

        let correct_answer = createCorrectAnswer()     // описание функции см. выше
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
```

данная функция работает  совместно с функциями `showNotificationsPrompt(),createAnswerOption(),createCorrectAnswer()`.

`let num_question = Object.keys(questions).length + 1` - переменная которая в последующем используется в качестве ключа, который позволит добавить новый вопрос (с вариантами ответа, № правильных вариантов) в конец списка вопросов. 

Фрагмент кода функции `createQuestion()`:

```js
 ....
let question = showNotificationsPrompt("prompt_1")
    if (question === "" || question === null) {
        showNotificationsAlert("message_1")
        return null;....
```

используя функцию `showNotificationsPrompt("prompt_1")` вызывает модальное окно, где предлагает пользователю ввести вопрос. Если пользователь не ввел вопрос или отменил ввод, система выводит сообщение: "Вы не ввели текст вопроса. Попробуйте добавить вопрос заново."

Фрагмент кода функции `createQuestion()`:

```js
....        
	if (answer_option && correct_answer) {
            questions[num_question] = question
            answer_options[num_question] = answer_option
            answers_questions[num_question] = correct_answer
        }....
```

используя в качестве ключа переменную `let num_question` добавляет вопросы, варианты ответов, правильные ответы на вопросы в соответствующие им переменные.

##### ФУНКЦИЯ `beginTest()`

```js
function beginTest() {
    document.getElementById("question").disabled = true;
    document.getElementById("test").disabled = true;
    for (let key in questions) {
        let count = 0
        out1.innerHTML += `<br> <p>${key}. ${questions[key]} ${answers_questions[key]}</p>`
        for (let j of answer_options[key]) {
            out1.innerHTML += `<div class="form-check"><input class="form-check-input" type="checkbox" id="${key}.${count}">` +
                `<label>${j}</label></div>`
            count = count + 1
        }
    }
    out2.innerHTML = `<br><button id='newButton' onclick="checkFluency()">Отправить</button><br><br>`
}
```

Фрагмент кода функции `beginTest()`

```js
    ....
	document.getElementById("question").disabled = true;
    document.getElementById("test").disabled = true;
	....
```

дизейблит опцию `Начать тест`, `Добавить вопрос`, когда пользователь выбрал опцию "Пройти тест".

```js
    ....
     for (let key in questions) {
        let count = 0
        out1.innerHTML += `<br> <p>${key}. ${questions[key]} ${answers_questions[key]}</p>`
        for (let j of answer_options[key]) {
            out1.innerHTML += `<div class="form-check"><input class="form-check-input" type="checkbox" id="${key}.${count}">` +
                `<label>${j}</label></div>`
            count = count + 1
        }....
```

формирует и выводит пользователю тест в окне браузера. Строка `${answers_questions[key]}`в коде позволяет рядом с вопросом увидеть правильные ответы (при сдаче программы на проверку *фрагмент строки удалил*) .  Строка `id="${key}.${count}"`в коде создает `id` для чекбоксов. где первая цифра № вопроса, вторая цифра ( от 0 до 3) номер варианта ответа.

##### ФУНКЦИЯ `vetAnswer(arr_1, arr_2)`

```js
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
```

Функция принимает два ассоциативного массива. `arr_1`- массив из переменной `request_checkbox` (см.  ниже функцию `showMessage()` стр.2).  Переменная `let request_checkbox` содержит варианты ответов от пользователя, полученные при тестировании  (могут быть как правильные, так и не правильные ответы).

arr_2 - массив из переменной `answers_questions` (см. ниже функцию `showMessage()` стр.2). Переменная `let answers_questions` ссылается на массив правильных ответов к вопросам теста.

Фрагмент кода функции `vetAnswer()`:

```js
....
let len_arr_1 = Object.keys(arr_1).length
    for (let keys = 1; keys < len_arr_1 + 1; keys += 1) {
        if (arr_1[keys].join() !== arr_2[keys].join()) {
            res.push(keys)
        }....
```

сравнивает значения массивов `arr_1` и `arr_2`.  Если значения не равны, вопрос считается неверно отвеченным и добавляется в переменную `res`, которая возвращается в функцию `showMessage()`

##### ФУНКЦИЯ `showMessage()`

```js
function showMessage() {
    let list_wrong = vetAnswer(request_checkbox, answers_questions)
    let len_answer_options = Object.keys(answer_options).length
    if (list_wrong.length === 0) {
        showNotificationsAlert("message_5", len_answer_options)
        document.getElementById("newButton").disabled = true
        return null
    } else {
        let mes = ""
        for (let element of list_wrong) {
            mes += `${element}. ${questions[element]}\n`
        }
        let num_correct_answer = len_answer_options - list_wrong.length
        showNotificationsAlert("message_7", mes, num_correct_answer, len_answer_options)
        document.getElementById("newButton").disabled = true
    }
}

```

`let list_wrong = vetAnswer(request_checkbox, answers_questions)` - переменная принимает от функции `vetAnswer()`список номеров неправильно отвеченных вопросов или принимает пустой список.

`let len_answer_options = Object.keys(answer_options).length` - переменная указывает на количество вопросов в тесте.

Фрагмент кода функции `showMessage()`

```js
.... 
if (list_wrong.length === 0) {
        showNotificationsAlert("message_5", len_answer_options)
        document.getElementById("newButton").disabled = true
        return null
    } else ....
```

выводит сообщение "Ваш результат 5 из 5. Вы молодец!" , если  `let list_wrong` пуст, в противном случае:

```js
.... 
let mes = ""
        for (let element of list_wrong) {
            mes += `${element}. ${questions[element]}\n`
        }
        let num_correct_answer = len_answer_options - list_wrong.length
        showNotificationsAlert("message_7", mes, num_correct_answer, len_answer_options)
        document.getElementById("newButton").disabled = true       //дизейблит кнопку отправить после результатов теста
    }
}
```

формируется строка в переменной `mes` неправильно отвеченных вопросов. После чего `mes` передаются в функцию `showNotificationsAlert()`, которая выводит результат теста!

P.S.!

Вот и прошло более  месяца как я познакомился с командой LeverX. И скажу,  месяц был интересный, насыщенный, немного волнительный в плане обучения. Пришлось серьезно потрудиться над тестами. Ну, а про финальное задание вообще и говорить не приходится. Я первый раз кодил на JS, надеюсь программа работает как надо!

Команда LeverX,  спасибо Вам за курс!  Вы молодцы!