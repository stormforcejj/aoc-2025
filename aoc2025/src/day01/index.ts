import run from "aocrunner"

const parseInput = (rawInput: string) => rawInput;

const part1 = (rawInput: string) => {
    const input = parseInput(rawInput);

    let lock = 50;
    let count = 0;

    const split = input.split("\n");

    for (let i = 0; i < split.length; i++) {
        const rotation = split[i];
        const val = parseInt(rotation.substring(1)) % 100;

        if(rotation.charAt(0) == "L") {
            lock = lock - val;
            if (lock < 0) {
              lock = 100 - (-lock);
            }
        } else {
            lock = lock + val;
            if(lock > 99) {
                lock = lock - 100;
            }
        }

        if(lock == 0) {
            count++;
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
        input: `R50`,
        expected: "1",
      },
      {
        input: `L50`,
        expected: "1",
      },
      {
        input: `L50\nR50\nR50`,
        expected: "2",
      },
      {
        input: `L68\nL30\nR48\nL5\nR60\nL55\nL1\nL99\nR14\nL82`,
        expected: "3",
      },
      {
        input: `L102\nL48\nR200\nR50\nR50`,
        expected: "3"
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
})
