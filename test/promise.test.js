const fs = require("fs");
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
    })
  });
  test("assets/first.json에서 불러온 second_key를 이용해 second.json에서 key에 일치하는 오브젝트 찾기", (done) => {
    fs.readFile("assets/second.json", (err, data) => {
      const second = JSON.parse(data);
      const result = second.filter((el) => el["key"] === secondKey);
      thirdKey = result[0].third_key;
      expect(result[0].hi).toBe("Second 방가방가");
      done();
    });
  })
  test("assets/second.json에서 불러온 third_key를 이용해 third.json에서 key에 일치하는 오브젝트 찾기", (done) => {
    fs.readFile("assets/third.json",(err,data) => {
      const third = JSON.parse(data);
      const result = third.filter((el) => el["key"] === thirdKey);
      expect(result[0].hi).toBe("Third 방가방가");
      done();
    });
  });
});
