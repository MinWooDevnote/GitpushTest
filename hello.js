c = require('ansi-colors')
// ansi-colors 모듈을 불러와 c 변수에 저장합니다.
// c.{메써드} 를 통해 모듈의 함수를 실행할 수 있습니다.

function hello(name) {
    console.log(c.green(name) + " 님, 안녕하세요?");
    // 내용을 출력합니다.
    // ansi-colors 모듈을 통해 name 을 녹색 처리합니다.
    // 터미널에서 name 이 녹색으로 출력되는 것을 확인할 수 있습니다.
  }
  
