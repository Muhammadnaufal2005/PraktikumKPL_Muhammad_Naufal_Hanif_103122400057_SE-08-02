/**
 * =
 * @param {any} value - 
 * @returns {string|number} 
 * @throws {Error} 
 */
function zzzzOrNum(value) {
    if (typeof value !== "number" || Number.isNaN(value)) {
        throw new Error("Input tidak valid, harus berupa angka tunggal");
    }

    if (value % 15 === 0) {
        return "FizzBuzz";
    } else if (value % 3 === 0) {
        return "Fizz";
    } else if (value % 5 === 0) {
        return "Buzz";
    } else {
        return value;
    }
}

/**
 * 
 * @param {any} sequence
 * @returns {Array<string|number>}
 * @throws {Error}
 */
function fizzBuzz(sequence) {
    if (!Array.isArray(sequence)) {
        throw new Error("Input tidak valid, harus berupa sebuah array");
    }

    const newSequence = sequence.map((e) => zzzzOrNum(e));
    return newSequence;
}

module.exports = {
    fizzBuzz,
    zzzzOrNum,
};