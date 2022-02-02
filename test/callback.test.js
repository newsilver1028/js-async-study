const fs = require("fs");

// describe : 여러 테스트를 하나로 묶어 스코프를 공유할 수 있게 해줌.
describe("Callback - fs.readFile를 콜백 패턴만 사용", () => {
  test("assets/first.json을 불러오기", (done) => {
    fs.readFile("assets/first.json", (err, data) => {
      const first = JSON.parse(data);
      expect(first.hi).toBe("방가방가");
      done();
    });
  });

  const secondData = (callback) => {
    const result = "Second 방가방가";
    setTimeout(() => {
      callback(result)
    },100)
  }
  
  test("assets/first.json에서 불러온 second_key를 이용해 second.json에서 key에 일치하는 오브젝트 찾기", (done) => {
    function callback(result) {
      expect(result).toBe("Second 방가방가");
      done();
    }
    secondData(callback);
  });

  const thirdData = (callback) => {
    const result = "Third 방가방가";
    setTimeout(() => {
      callback(result)
    },200)
  }

  test("assets/second.json에서 불러온 third_key를 이용해 third.json에서 key에 일치하는 오브젝트 찾기", (done) => {
    function callback(result) {
      expect(result).toBe("Third 방가방가");
      done();
  }
  thirdData(callback);
  });
});
