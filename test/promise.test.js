const { readFile } = require("../src/readFile");

describe("Promise - fs.readFile를 프로미스 패턴만 사용", () => {
  test("fs.readFile을 이용해 Promise를 반환하는 readFile 함수 만들기", (done) => {
    const promise = readFile("assets/first.json");
    expect(promise instanceof Promise).toBe(true);
    done();
  });

  let secondKey = 0;
  let thirdKey = 0;

  test("assets/first.json을 불러오기", (done) => {
    readFile("assets/first.json").then((data) => {
      const first = JSON.parse(data);
      secondKey = first.second_key;

      expect(first.hi).toBe("방가방가");
      done();

      return readFile("assets/second.json");
    }).then((data) => {
      const second = JSON.parse(data);
      const secondResult = second.find((item) => item.key === secondKey);
      thirdKey = secondResult.third_key;
      expect(secondResult.hi).toBe("Second 방가방가");
      done();

      return readFile("assets/third.json");
    }).then((data) => {
      const third = JSON.parse(data);
      const thirdResult = third.find((item) => item.key === thirdKey);
      expect(thirdResult.hi).toBe("Third 방가방가");
      done();
    })
  })
});
