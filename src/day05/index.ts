import run from "aocrunner"

const parseInput = (rawInput: string) => rawInput;

const part1 = (rawInput: string) => {
    const input = parseInput(rawInput).split("\n");
    let splitPos = 0;

    for(let i = 0; i<input.length; i++) {
        if(input[i] == '') {
            splitPos = i;
        }
    }

    let bounds : [number,number][] = [];

    for(let i = 0; i<splitPos; i++) {
        const work = input[i].split("-");
        const tuple : [number, number] = [parseInt(work[0]), parseInt(work[1])];
        
        bounds.push(tuple);
    }

    let count = 0;

    for(let i = splitPos + 1; i<input.length; i++) {
        const num = parseInt(input[i]);
        for(let j = 0; j<bounds.length; j++) {
            if(num >= bounds[j][0] && num <= bounds[j][1]) {
                count++;
                break;
            }
        }
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
            input: `3-5\n10-14\n16-20\n12-18\n\n1\n5\n8\n11\n17\n32`,
            expected: "3",
        },
        {
            input: `3-5\n3-5\n\n4`,
            expected: "1"
        },
        {
            input: `0-0\n\n9`,
            expected: "0"
        }
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
