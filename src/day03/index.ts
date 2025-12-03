import run from "aocrunner"

const parseInput = (rawInput: string) => rawInput;

const part1 = (rawInput: string) => {
    const input = parseInput(rawInput);

    const banks = input.split("\n");
    let total = 0;

    for(let i = 0; i<banks.length; i++) {
        let maxLeft = 0;
        let maxRight = 0;

        const bank = banks[i].split('');

        for(let j = 0; j<bank.length; j++) {
            if(parseInt(bank[j]) > maxLeft && j<bank.length-1) {
                maxLeft = parseInt(bank[j]);
                maxRight = 0;
            } else if(parseInt(bank[j]) > maxRight) {
                maxRight = parseInt(bank[j]);
            }          
        }

        total = total + parseInt(maxLeft.toString().concat(maxRight.toString()));
    }

    return total.toString();
}

const part2 = (rawInput: string) => {
    const input = parseInput(rawInput);

    return;
}

run({
    part1: {
        tests: [
        {
          input: `987654321111111`,
          expected: "98",
        },
        {
          input: `811111111111119`,
          expected: "89",
        },
        {
          input: `234234234234278`,
          expected: "78",
        },
        {
          input: `818181911112111`,
          expected: "92",
        },
        {
          input: `987654321111111\n811111111111119\n234234234234278\n818181911112111`,
          expected: "357",
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
