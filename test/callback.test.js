const fs = require("fs");

describe("Callback - fs.readFile를 콜백 패턴만 사용", () => {
  test("assets/first.json을 불러오기", (done) => {
    fs.readFile("assets/first.json", (err, data) => {
      const first = JSON.parse(data);
      expect(first.hi).toBe("방가방가");
      done();
    });
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
