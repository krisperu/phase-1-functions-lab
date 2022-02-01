// Code your solution in this file!
function distanceFromHqInBlocks(pickup) {
    return Math.abs(42 -pickup);
}

function distanceFromHqInFeet(pickup) {
    return distanceFromHqInBlocks(pickup) * 264;
}

function distanceTravelledInFeet(num1, num2) {
    return Math.abs(num2 - num1) * 264;
}

function calculatesFarePrice(num1, num2) {
    const distance = distanceTravelledInFeet(num1, num2);
    if (distance < 400){
    return 0;
    } else if (distance >= 400 && distance <= 2000) {
        return (distance -400) * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}