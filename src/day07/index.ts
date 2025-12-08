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
    const input = parseInput(rawInput).split("\n");
    const pathsFrom = new Map<string, number>()

    let vals = [];

    for (let i = 0; i < input.length; i++) {
        vals[i] = input[i].split('');
    }

    let count = 0;
    let descendFrom = 0;

    for(let i = 0; i < vals[0].length; i++) {
        if(vals[0][i] == "S") {
            descendFrom = i;
        }
    }

    for(let i = 0; i < vals.length; i++) {
        if(vals[i][descendFrom] == "^") {
            count = count + split(descendFrom, i, vals, pathsFrom, true);
            count = count + split(descendFrom, i, vals, pathsFrom, false)
            break;
        }

        if(vals[i][descendFrom] == "." && i == vals.length-1) {
            count = 1;
            break;
        }
    }

    return count.toString();
}

function split(x: number, y: number, vals: string[][], pathsFrom: Map<string, number>, left : boolean) {
    let count = 0;
    if(left) {
        x = x - 1;
    } else {
        x = x + 1;
    }
    
    y++;
    while (y < vals.length) {
        if (y == vals.length - 1 && vals[y][x] == ".") {
            return 1;
        }
        
        if(vals[y][x] == "^") {
            if (pathsFrom.has([x,y].toString())) {
                count = count + (pathsFrom.get([x,y].toString()) || 0);
                return count;
            }
            count = count + split(x, y, vals, pathsFrom, true);
            count = count + split(x, y, vals, pathsFrom, false);
            pathsFrom.set([x,y].toString(), count);
            return count;
        }
        
        y++;
    }
    return 1;
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
            {
                input: `.......S.......\n...............\n.......^.......\n...............\n......^.^......\n...............\n.....^.^.^.....\n...............\n....^.^...^....\n...............\n...^.^...^.^...\n...............\n..^...^.....^..\n...............\n.^.^.^.^.^...^.\n...............`,
                expected: "40",
            },
            {
                input: `..S..\n.....\n..^..\n.....`,
                expected: "2"
            },
            {
                input: `..S..\n.....\n..^..\n.....\n.^.^.`,
                expected: "4"
            },
            {
                input: `...S...\n.......\n...^...\n.......\n..^.^..\n.......\n.^.^.^.`,
                expected: "8"
            }
        ],
        solution: part2,
    },
    trimTestInputs: true,
    onlyTests: false,
});
