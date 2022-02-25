console.log("start");
/**
 1. Предложите вариант базового класса для успешной работы следующего кода.
    
    Подсказка: значения a и b переданные в метод test должны быть умножены на -1
    
    Хорошо если сможете привести аргументы почему этот код плохой.
 */
// Реализуйте класс
class BaseClass {
}

/* Код ниже не трогаем */
class MyClass extends BaseClass {
    test(a, b) {
        this.a = a;
        this.b = b;
        return 100 - this.a + this.b;
    }
}
const m = new MyClass();

// console.log(m.test(50, 40) === 110); // true
// console.log(m.test(10, 90) === 20); // true

/*
2. Дан массив целых чисел `input`. Необходимо написать функцию, которая преобразует массив `input` так, чтобы он удовлетворял следующим условиям:

- вначале числа кратные двум, от наибольшего к наименьшему;
- затем оставшиеся числа от наименьшего к наибольшему.

Задача имеет целый ряд решений, большим плюсом будет показать несколько решений, но выбрать то которое кажется наиболее красивым/быстрым на ваш взгляд.
*/

const input = [-2, 2, 4, 6, 8, 10, 3, 5, 7, 9, -1, -11];

const func = (arr) => {
    let arr1 = []
    for (const iter of arr) {
        if (iter % 2 === 0) {
            arr1.push(iter)
        }
    }
    arr1.sort((a, b) => b - a)
    const s = new Set(arr1);
    const abc = arr.filter(e => !s.has(e)).sort((a, b) => a - b)
    return arr1.concat(abc)
}

// console.log(func(input)); // [10, 8, 6, 4, 2, -2, -11, -1, 3, 5, 7, 9]


/*
3. Имеется строка str с произвольным текстом. Необходимо без использования циклов (for, while, do) и объявления дополнительных переменных, посчитать количество символов в строке, у которых ASCII код кратный 3.

Напишите по возможности наиболее компактный код.
*/

const str = 'Flexbe. Frontend. Test. 1234567890.';

const funcStr = (str) => {
    const arr = str.split(' ')
    let i = 0
    let answer = ''
    function ansawerFun(arr) {
        if (arr[i].length % 3 === 0) {
            answer = `Word - ${arr[i]} and ansawer => ${arr[i].length}`
        } else {
            i++
            ansawerFun(arr)
        }
    }
    ansawerFun(arr)
    return answer
};

const funcStr2 = () => {
    return str.split('').filter(char => char.charCodeAt() % 3 === 0).length
}

// console.log(funcStr(str)); // 9
// console.log(funcStr2(str)); // 9


/*
4. Что можно улучшить? **Максимально** упростите код (сократите или удалите ненужные операции), сохранив его логику. **Важна логика, а не визуальное отображение звезд**.
*/

function drawRating(vote) {
    let arr = []
    for (let i = 0; i < Math.ceil(vote / 20); i++) {
        arr.push('★')
    }
    arr.push('☆☆☆☆☆')
    return arr.join('').substring(0, 5)
}

// console.log(drawRating(39));





/**
 5. Задачка посложнее, на асинхронность. Имеется объект фиксированной структуры, хранящий значения по некоторым ID в разных форматах, а так же сервис отдающий данные по каждому ID.

Функция mainFn должна загрузить данные по каждому ID в объекте и запустить resultFn с готовым обьектом данных.

Хорошо если вы продумаете как поддерживать данный код если структура объекта на входе начнет меняться (например добавится поле single2)z

Разрешено создавать новые функции. Запрещено импортировать код сторонних библиотек.
 */

/**
 * Mock функция, представьте что это кривой старый promissless сторонний сервис возвращающий записи из БД, 
 * Доступа к исходному коду этого сервиса у вас нет и исправить его нельзя
 * НЕ МЕНЯЙТЕ ДАННЫЙ МЕТОД
 *
 * @param id {Number} - ID записи
 * @param callback {Function<Error, Object>} - Коллбек функция возвращающая результирующие данные
*/
const getData = (id, callback = () => { }) => {
    console.log('idл', id)
    if (!id) {
        return callback(new Error('getData: ID not specified'));
    }

    setTimeout(() => {
        const data = {
            utime: Date.now()
        };

        callback(null, data);
    }, Math.random() * 10);
};


/**
 * Ваша функция
 * Перепишите данный метод так 
 * что бы в результате выполнения функции в resultFn пришли данные по каждому ID в требуемом формате
 * @param data {Object} - Исходный обьект
 * @result {Promise<Object>} - Полный обьект с данными от сервера
*/
const mainFn = (data) => {

    const createObj = (num) => {
        return { id: num, data: { utime: Date.now() } }
    }

    const resultFn = (data) => {
        let postData = data
        for (const key in data) {
            console.log('key', key)
            if (Array.isArray(data[key])) {
                let postMultiple = []
                postMultiple = data[key].map(item => {
                    return createObj(item)
                })
                postData.multiple = postMultiple
            } else if (key !== 'id' & key !== 'title' & !Array.isArray(data[key])) {
                postData[key] = createObj(data[key])
            }
        }


        return postData
    }
    return Promise.resolve(resultFn(data));
};

// Вызов вашей функции, должен вызвать resultFn в итоге
mainFn({
    id: 78,
    title: 'Some title',
    single: 12345,
    single2: 12343,
    single256: 12345363,
    multiple: [56783, 46573, 13251]
}).then((result) => {
    console.log('bdsb');
    console.log(result);
    /**
     {
         id: 78,
             title: 'Some title',
       single: { id: 12345, data: { utime: ... }},
       multiple: [{ id: 56783, data: { utime: ...  }}, { id: 46573, data: { utime: ...  }}, { id: 13251, data: { utime: ... }}]
   }
  */
});


/**
1 и 5, я, честно говоря не понял как решить, такое ощущение, что захожу не стой стороны и чтобы задачу не оставить не решенной, я сделал свою дверь-
 */


