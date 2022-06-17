const { readFile } = require("../src/readFile");

describe("async/await - readFile함수를 async/await 만 사용하여 테스트 통과하기", () => {
  
  test("assets/first.json을 불러오기", (done) => {
    const getResult = async () => {
      const firstData = await readFile("assets/first.json");
      const parsedFirstData = JSON.parse(firstData);
      expect(parsedFirstData.hi).toBe("방가방가");

      const secondKey = parsedFirstData.second_key;
      const secondData = await readFile("assets/second.json");
      const parsedSecondData = JSON.parse(secondData);
      const secondResult = parsedSecondData.find((item) => item.key === secondKey);
      expect(secondResult.hi).toBe("Second 방가방가");

      const thirdKey = secondResult.third_key;
      const thirdData = await readFile("assets/third.json");
      const parsedThirdData = JSON.parse(thirdData);
      const thirdResult = parsedThirdData.find((item) => item.key === thirdKey);
      expect(thirdResult.hi).toBe("Third 방가방가");
    };

  getResult();
  done();
  });
});
