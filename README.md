# 방가방가 찾기

[GitHub - PaDuckk/js-async-study](https://github.com/PaDuckk/js-async-study/tree/main)

- 테스트 실행 방법

```jsx
npm run test
```

### 테스트 코드 작성시 참조

[Testing Asynchronous Code · Jest](https://jestjs.io/docs/asynchronous)

### 콜백 패턴

- 콜백 패턴을 이용해 연쇄적으로 파일 불러오는 코드 작성하기

### Promise

- fs.readFile을 Promise로 처리할 수 있게 바꾼 src/readFile을 구현
- readFile을 이용해 연쇄적으로 파일 불러오는 코드 작성하기

### async / await

- Promise 챕터에서 만든 readFile을 이용해 async/await 패턴으로 테스트 코드 작성하기