const fs = require("fs");

describe("async/await - readFile함수를 async/await 만 사용하여 테스트 통과하기", () => {
  test("assets/first.json을 불러오기", (done) => {
    const result = "테스트 코드 작성하기";
    expect(result).toBe("Second 방가방가");
  });

  test("assets/first.json에서 불러온 second_key를 이용해 second.json에서 key에 일치하는 오브젝트 찾기", () => {
    const result = "테스트 코드 작성하기";
    expect(result).toBe("Second 방가방가");
  });

  test("assets/second.json에서 불러온 third_key를 이용해 third.json에서 key에 일치하는 오브젝트 찾기", () => {
    const result = "테스트 코드 작성하기";
    expect(result).toBe("Third 방가방가");
  });
});
