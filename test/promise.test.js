const fs = require("fs");
const { readFile } = require("../src/readFile");

describe("Promise - fs.readFile를 프로미스 패턴만 사용", () => {
  test("fs.readFile을 이용해 Promise를 반환하는 readFile 함수 만들기", (done) => {
    const promise = readFile("assets/first");
    expect(promise instanceof Promise).toBe(true);
    done();
  });
  
  test("assets/first.json을 불러오기", (done) => {
    readFile("assets/first").then((data) => {
      const first = JSON.parse(data);
      expect(first.hi).toBe("방가방가");
      done();
    })
    .then(() => {
      test("assets/first.json에서 불러온 second_key를 이용해 second.json에서 key에 일치하는 오브젝트 찾기", () => {
        const result = "테스트 코드 작성하기";
        expect(result).toBe("Second 방가방가")
      })
    .then(() => {
      test("assets/second.json에서 불러온 third_key를 이용해 third.json에서 key에 일치하는 오브젝트 찾기", () => {
        const result = "테스트 코드 작성하기";
        expect(result).toBe("Third 방가방가");
      });
    })
  });

  // test("assets/first.json에서 불러온 second_key를 이용해 second.json에서 key에 일치하는 오브젝트 찾기", () => {
  //   const result = "테스트 코드 작성하기";
  //   expect(result).toBe("Second 방가방가");
  // });

  // test("assets/second.json에서 불러온 third_key를 이용해 third.json에서 key에 일치하는 오브젝트 찾기", () => {
  //   const result = "테스트 코드 작성하기";
  //   expect(result).toBe("Third 방가방가");
  // });
});
});
