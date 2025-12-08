import run from "aocrunner"

const parseInput = (rawInput: string) => rawInput;

const part1 = (rawInput: string) => {
    const input = parseInput(rawInput).split("\n");

    let vals = [];

    for(let i = 0; i<input.length; i++) {
        vals[i] = input[i].split('');
    }

    let count = 0;

    for (let i = 1; i < vals.length; i++) {
        for (let j = 0; j < vals[i].length; j++) {
            if(vals[i-1][j] == "S") {
                vals[i][j] = "|"
            } else if (vals[i - 1][j] == "|" && vals[i][j] == "^") {
                vals[i][j-1] = "|"
                vals[i][j+1] = "|"
                count++;
            } else if(vals[i-1][j] == "|") {
                vals[i][j] = "|"
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
                input: `.......S.......\n...............\n.......^.......\n...............\n......^.^......\n...............\n.....^.^.^.....\n...............\n....^.^...^....\n...............\n...^.^...^.^...\n...............\n..^...^.....^..\n...............\n.^.^.^.^.^...^.\n...............`,
                expected: "21",
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
