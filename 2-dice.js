// Homework 2-dice
function drop(dice) {
    const min = 1;
    let max = [];
    for (i = 0; i < dice.length; i++) {
        if (!isNaN(dice[i])) {
            max += dice[i]
        }
    }
    return Math.floor(Math.random() * (max - min + 1) + min);
}
drop ('d20');