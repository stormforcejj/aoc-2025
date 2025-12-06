import run from "aocrunner"

const parseInput = (rawInput: string) => rawInput;

const part1 = (rawInput: string) => {
    const rows = parseInput(rawInput).split("\n");
    let vals = [];

    for (let i = 0; i < rows.length-1; i++) {
        vals.push(rows[i].replace(/\s+/g, ' ').trim().split(' '));
    }

    let ops = rows[rows.length-1].replace(/\s+/g, ' ').trim().split(' ');

    let count = 0;

    for(let i = 0; i<ops.length; i++) {
        let result;

        if(ops[i] == "+") {
            result = 0;
        } else {
            result = 1;
        }

        for(let j = 0; j<vals.length; j++) {
            if(ops[i] == "+") {
                result = result + parseInt(vals[j][i])
            } else {
                result = result * parseInt(vals[j][i]);
            }
        }

        count = count + result;
    }

    return count.toString();
}

const part2 = (rawInput: string) => {
    const input = parseInput(rawInput);

    return;
}

run({
    part1: {
        tests: [
            {
                input: `123 328  51 64 \n 45 64  387 23 \n  6 98  215 314\n*   +   *   + `,
                expected: "4277556",
            },
        ],
        solution: part1,
    },
    part2: {
        tests: [
            // {
            //   input: ``,
            //   expected: "",
            // },
        ],
        solution: part2,
    },
    trimTestInputs: true,
    onlyTests: false,
});
