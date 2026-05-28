/**
 * Эту функцию трогать не нужно
 */
function print(text) {
  console.log(text);
}

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 */
function isValid(name) {
    let j = 0
    if (name == null) {
      return false
    }
    for (i = 0; i < name.length; i++){
    if (name[i] == ' ') {
        j += 1
    }}
    if (j > 0 || name.length < 4 ) {
        return false
    }
    else {
        return true
    }
}

function sayHello() {
  let userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}
