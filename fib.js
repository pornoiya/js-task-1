'use strict';

/**
 * Складывает два целых числа
 * @param {Number} a Первое целое
 * @param {Number} b Второе целое
 * @throws {TypeError} Когда в аргументы переданы не числа
 * @returns {Number} Сумма аргументов
 */
function abProblem(a, b) {
    if (! Number.isInteger(a) || ! Number.isInteger(b)){
        throw new TypeError("в аргументы переданы не целые числа");
    }
    return a + b;
}

/**
 * Определяет век по году
 * @param {Number} year Год, целое положительное число
 * @throws {TypeError} Когда в качестве года передано не число
 * @throws {RangeError} Когда год – отрицательное значение
 * @returns {Number} Век, полученный из года
 */
function centuryByYearProblem(year) {
    if (! Number.isInteger(year)){
        throw new TypeError("в качестве года передано не целое число");
    }
    else if(year <= 0){
        throw new RangeError("год – отрицательное значение");
    }
    return Math.ceil(year/100);
}

/**
 * Переводит цвет из формата HEX в формат RGB
 * @param {String} hexColor Цвет в формате HEX, например, '#FFFFFF'
 * @throws {TypeError} Когда цвет передан не строкой
 * @throws {RangeError} Когда значения цвета выходят за пределы допустимых
 * @returns {String} Цвет в формате RGB, например, '(255, 255, 255)'
 */
function colorsProblem(hexColor) {
    const len = hexColor.length;
    if (Object.prototype.toString.call(hexColor) !== '[object String]'){
        throw new TypeError("цвет передан не строкой");
    }
    else if ( len !== 7)
        throw new RangeError("значения цвета выходят за пределы допустимых");
    for (var i = 1; i < 7; i++) {
        var chCode = hexColor.toLowerCase().charCodeAt(i);
        if (!((48 <= chCode && chCode <= 57) || (97 <= chCode && chCode <= 102))){
            throw new RangeError("значения цвета выходят за пределы допустимых");
        }
    }
    const r = hexColor.slice(1, 3);
    const g = hexColor.slice(3, 5);
    const b = hexColor.slice(5);
    return  "(".concat(parseInt(r, 16).toString(), ", ",
        parseInt(g, 16).toString(), ", ",
        parseInt(b, 16).toString(), ")");
}

function cachingDecorator(f) {
    var cache = {};
    return function(x) {
        if (!(x in cache)) {
            cache[x] = f.call(this, x);
        }
        return cache[x];
    };

}

/**
 * Находит n-ое число Фибоначчи
 * @param {Number} n Положение числа в ряде Фибоначчи
 * @throws {TypeError} Когда в качестве положения в ряде передано не число
 * @throws {RangeError} Когда положение в ряде не является целым положительным числом
 * @returns {function(): *} Число Фибоначчи, находящееся на n-ой позиции
 */
function fibonacciProblem(n) {
    if (typeof n !== 'number'){
        throw new TypeError("в ряде передано не число");
    }
    else if(!Number.isInteger(n) || n <= 0){
        throw new RangeError("положение в ряде не является целым положительным числом");
    }
    if (n <= 2){
        return 1;
    }
    else {
        return fibonacciProblem(n - 1) + fibonacciProblem(n - 2);
    }
}
fibonacciProblem = cachingDecorator(fibonacciProblem)

/**
 * Транспонирует матрицу
 * @param {(Any[])[]} matrix Матрица размерности MxN
 * @throws {TypeError} Когда в функцию передаётся не двумерный массив
 * @returns {(Any[])[]} Транспонированная матрица размера NxM
 */
function matrixProblem(matrix) {
    if (Object.prototype.toString.call(matrix) !== '[object Array]' &&
        Object.prototype.toString.call(matrix[0]) !== '[object Array]') {
        throw new TypeError("в функцию передаётся не двумерный массив");
    }
    return matrix[0].map((_, col) => matrix.map(row => row[col]));
}

/**
 * Переводит число в другую систему счисления
 * @param {Number} n Число для перевода в другую систему счисления
 * @param {Number} targetNs Система счисления, в которую нужно перевести (Число от 2 до 36)
 * @throws {TypeError} Когда переданы аргументы некорректного типа
 * @throws {RangeError} Когда система счисления выходит за пределы значений [2, 36]
 * @returns {String} Число n в системе счисления targetNs
 */
function numberSystemProblem(n, targetNs) {
    if (typeof n !== 'number' || typeof targetNs !== 'number') {
        throw new TypeError("переданы аргументы некорректного типа");
    }
    if (targetNs < 2 || targetNs > 36) {
        throw new RangeError("Когда система счисления выходит за пределы значений [2, 36]");
    }
    return n.toString(targetNs);
}

/**
 * Проверяет соответствие телефонного номера формату
 * @param {String} phoneNumber Номер телефона в формате '8–800–xxx–xx–xx'
 * @throws {TypeError} Когда в качестве аргумента передаётся не строка
 * @returns {Boolean} Если соответствует формату, то true, а иначе false
 */
function phoneProblem(phoneNumber) {
    if (Object.prototype.toString.call(phoneNumber) !== '[object String]') {
        throw new TypeError("переданы аргументы некорректного типа");
    }
    return /^8-800-\d{3}-\d{2}-\d{2}$/.test(phoneNumber);
}

/**
 * Определяет количество улыбающихся смайликов в строке
 * @param {String} text Строка в которой производится поиск
 * @throws {TypeError} Когда в качестве аргумента передаётся не строка
 * @returns {Number} Количество улыбающихся смайликов в строке
 */
function smilesProblem(text) {
    if (Object.prototype.toString.call(text) !== '[object String]') {
        throw new TypeError("в качестве аргумента передаётся не строка");
    }
    const res = text.match(/(\(-:)|(:-\))/g);
    if (! res)
        return 0;
    else
        return res.length;
}

/**
 * Определяет победителя в игре "Крестики-нолики"
 * Тестами гарантируются корректные аргументы.
 * @param {(('x' | 'o')[])[]} field Игровое поле 3x3 завершённой игры
 * @returns {'x' | 'o' | 'draw'} Результат игры
 */
function ticTacToeProblem(field) {
        if ((field[0][0] === field[0][1]) && (field[0][1] === field[0][2]) && (field[0][0] === field[0][2])){
            return field[0][0];
        }
        else if ((field[1][0] === field[1][1]) && (field[1][1] === field[1][2]) && (field[1][0] === field[1][2])){
            return field[1][0];
        }
        else if ((field[2][0] === field[2][1]) && (field[2][1] === field[2][2]) && (field[2][0] === field[1][2])){
            return field[2][0];
        }
        else if ((field[0][0] === field[1][1]) && (field[1][1] === field[2][2]) && (field[2][2] === field[0][0])){
            return field[0][0];
        }
        else if ((field[0][2] === field[1][1]) && (field[1][1] === field[2][0]) && (field[2][0] === field[0][2])){
            return field[0][2];
        }
        else if ((field[0][0] === field[1][0]) && (field[1][0] === field[2][0]) && (field[2][0] === field[0][0])){
            return field[0][0];
        }
        else if ((field[0][1] === field[1][1]) && (field[1][1] === field[2][1]) && (field[2][1] === field[0][1])){
            return field[0][1];
        }
        else if ((field[0][2] === field[1][2]) && (field[1][2] === field[2][2]) && (field[2][2] === field[0][2])){
            return field[0][2];
        }
        else return 'draw';
}

module.exports = {
    abProblem,
    centuryByYearProblem,
    colorsProblem,
    fibonacciProblem,
    matrixProblem,
    numberSystemProblem,
    phoneProblem,
    smilesProblem,
    ticTacToeProblem
};
