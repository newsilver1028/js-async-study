const fs = require("fs");

describe("Callback - fs.readFile를 콜백 패턴만 사용", () => {
  let secondKey = 0;
  let thirdKey = 0;
  test("assets/first.json을 불러오기", (done) => {
    fs.readFile("assets/first.json", (err, data) => {
      if (err) throw err;
      const first = JSON.parse(data);
      secondKey = first.second_key;
      expect(first.hi).toBe("방가방가");
      done();
    });
  });

  test("assets/first.json에서 불러온 second_key를 이용해 second.json에서 key에 일치하는 오브젝트 찾기", (done) => {
    fs.readFile("assets/second.json", (err, data) => {
      if (err) throw err;
      const second = JSON.parse(data);
      const array = second.filter((el) => el["key"] === secondKey);
      const result = array[0].hi;
      thirdKey = array[0].third_key;
      expect(result).toBe("Second 방가방가");
      done();
    })
  });

  test("assets/second.json에서 불러온 third_key를 이용해 third.json에서 key에 일치하는 오브젝트 찾기", (done) => {
    fs.readFile("assets/third.json", (err, data) => {
      if (err) throw err;
      const third = JSON.parse(data);
      const array = third.filter((el) => el["key"] === thirdKey);
      const result = array[0].hi;
      expect(result).toBe("Third 방가방가");
      done();
    });
  })
});
