

function sumPolygon(number1, number2) {

    sum = number1 + number2;

    if (sum < 100) {
        return true;
    } else {
        return false;
    }
}

const result = sumPolygon(83, 34);
console.log(result);
