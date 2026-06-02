let calculator = {
    read: function(a,b){el1 = a, el2 = b},
    sum: function(){return el1 + el2},
    mul: function(){return el1 * el2},
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
