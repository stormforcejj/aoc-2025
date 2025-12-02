import run from "aocrunner"

const parseInput = (rawInput: string) => rawInput;

const part1 = (rawInput: string) => {
    const input = parseInput(rawInput);

    const ranges = input.split(",");
    let total = 0;

    for(let i = 0; i<ranges.length; i++) {
        const bounds = ranges[i].split('-');

        for(let i = parseInt(bounds[0]); i <= parseInt(bounds[1]); i++) {
            const str = i.toString();
            if(str.substring(0, str.length/2) == str.substring(str.length/2, str.length)) {
                total = total + i;
            }
        }
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
                input: `11-22`,
                expected: "33",
            },
            {
                input: `95-115`,
                expected: "99",
            },
            {
                input: `998-1012`,
                expected: "1010",
            },
            {
                input: `1188511880-1188511890`,
                expected: "1188511885",
            },
            {
                input: `222220-222224`,
                expected: "222222",
            },
            {
                input: `1698522-1698528`,
                expected: "0",
            },
            {
                input: `446443-446449`,
                expected: "446446",
            },
            {
                input: `38593856-38593862`,
                expected: "38593859",
            },
            {
                input: `11-22,95-115,998-1012,1188511880-1188511890,222220-222224,1698522-1698528,446443-446449,38593856-38593862`,
                expected: "1227775554",
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
