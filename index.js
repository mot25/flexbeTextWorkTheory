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

// console.log(funcStr(str)); // 9


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

console.log(drawRating(39));