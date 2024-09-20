// Создайте функцию gcd(a, b), которая находит НОД двух чисел

function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }

    return a;
}

console.log(gcd(11, 18));
