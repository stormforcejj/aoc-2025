import run from "aocrunner"

const parseInput = (rawInput: string) => rawInput;

const part1 = (rawInput: string) => {
    const input = parseInput(rawInput);
    const rows = input.split("\n");
    let matrix : string[][] = [];

    for(let i = 0; i < rows.length; i++) {
        matrix[i] = rows[i].split('');
    }

    let count = 0;

    // n^2
    for(let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix[i].length; j++) {
            // Constant Time
            if(matrix[i][j] != "@") {
                continue;
            }
            
            let surrounds = 0;

            for(let k = -1; k < 2; k++) {
                if(i == 0 && k == -1 || i == matrix.length-1 && k == 1) {
                    continue;
                }

                for(let l = -1; l < 2; l++) {
                    if(j == 0 && l == -1 || j == matrix[i].length-1 && l == 1) {
                        continue;
                    }

                    if(l == 0 && k == 0) {
                        continue;
                    }

                    if(matrix[i+k][l+j] == "@") {
                        surrounds++;
                    }
                }
            }

            if(surrounds < 4) {
                count++;
            }
        }
    }

    return count.toString();
}

const part2 = (rawInput: string) => {
    const input = parseInput(rawInput);
    const rows = input.split("\n");
    let matrix: string[][] = [];

    for (let i = 0; i < rows.length; i++) {
        matrix[i] = rows[i].split("");
    }

    let count = 0;

    let removing = true;
    // n^2
    while(removing) {
        removing  = false

        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                // Constant Time
                if (matrix[i][j] != "@") {
                    continue;
                }

                let surrounds = 0;

                for (let k = -1; k < 2; k++) {
                    if (
                        (i == 0 && k == -1) ||
                        (i == matrix.length - 1 && k == 1)
                    ) {
                        continue;
                    }

                    for (let l = -1; l < 2; l++) {
                        if (
                            (j == 0 && l == -1) ||
                            (j == matrix[i].length - 1 && l == 1)
                        ) {
                            continue;
                        }

                        if (l == 0 && k == 0) {
                            continue;
                        }

                        if (matrix[i + k][l + j] == "@") {
                            surrounds++;
                        }
                    }
                }

                if (surrounds < 4) {
                    count++;
                    matrix[i][j] = '.';
                    removing = true;
                }
            }
        }
    }

    return count.toString();
}

run({
    part1: {
        tests: [
            {
                input: `..@@.@@@@.\n@@@.@.@.@@\n@@@@@.@.@@\n@.@@@@..@.\n@@.@@@@.@@\n.@@@@@@@.@\n.@.@.@.@@@\n@.@@@.@@@@\n.@@@@@@@@.\n@.@.@@@.@.`,
                expected: "13",
            },
            {
                input: `@@@\n@.@\n@@@`,
                expected: "4",
            },
            {
                input: `...\n.@.\n...`,
                expected: "1",
            },
        ],
        solution: part1,
    },
    part2: {
        tests: [
            {
                input: `..@@.@@@@.\n@@@.@.@.@@\n@@@@@.@.@@\n@.@@@@..@.\n@@.@@@@.@@\n.@@@@@@@.@\n.@.@.@.@@@\n@.@@@.@@@@\n.@@@@@@@@.\n@.@.@@@.@.`,
                expected: "43",
            },
            {
                input: `@@@\n@.@\n@@@`,
                expected: "8",
            },
            {
                input: `...\n.@.\n...`,
                expected: "1",
            },
        ],
        solution: part2,
    },
    trimTestInputs: true,
    onlyTests: false,
});
