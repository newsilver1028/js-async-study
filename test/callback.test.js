const fs = require("fs");

describe("Callback - fs.readFile를 콜백 패턴만 사용", () => {
  test("assets/first.json을 불러오기", (done) => {
    fs.readFile("assets/first.json", (err, data) => {
      const first = JSON.parse(data);
      const secondKey = first.second_key;
      expect(first.hi).toBe("방가방가");
      done();
      
      fs.readFile("assets/second.json", (err, data) => {
        const second = JSON.parse(data);
        const secondResult = second.find((item) => item.key === secondKey);
        const thirdKey = secondResult.third_key;
        expect(secondResult.hi).toBe("Second 방가방가");
        done();

        fs.readFile("assets/third.json", (err, data) => {
          const third = JSON.parse(data);
          const thirdResult = third.find((item) => item.key === thirdKey);
          expect(thirdResult.hi).toBe("Third 방가방가");
          done();
        })
      })
    });
  });
})

