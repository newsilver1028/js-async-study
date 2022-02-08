const fs = require("fs");
const { readFile } = require("../src/readFile");

describe("async/await - readFile함수를 async/await 만 사용하여 테스트 통과하기", () => {
  let secondKey = 0;
  let thirdKey = 0;
  test("assets/first.json을 불러오기", async () => {
    const readFirst = await readFile("assets/first.json");
    const first = JSON.parse(readFirst);
    const result = first.hi;
    secondKey = first.second_key;
    expect(result).toBe("방가방가");
  });

  test("assets/first.json에서 불러온 second_key를 이용해 second.json에서 key에 일치하는 오브젝트 찾기", async () => {
    const readSecond = await readFile("assets/second.json");
    const second = JSON.parse(readSecond);
    const array = second.filter((el) => el["key"] === secondKey);
    const result = array[0].hi;
    thirdKey = array[0].third_key;
    expect(result).toBe("Second 방가방가");
  });

  test("assets/second.json에서 불러온 third_key를 이용해 third.json에서 key에 일치하는 오브젝트 찾기", async () => {
    const readThird = await readFile("assets/third.json");
    const third = JSON.parse(readThird);
    const array = third.filter((el) => el["key"] === thirdKey);
    const result = array[0].hi;
    expect(result).toBe("Third 방가방가");
  });
});
