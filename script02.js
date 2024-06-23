// k 시리즈 결과 예측하기 프로그램

// '결과 예측하기'btn.click > addEventListener 추가
// html.doc > #predict-btn 요소 선택
document.getElementById('predict-btn').addEventListener('click', function() {
  // results 객체
  // : LG, KT 각각의 승리 횟수를 추적
  let result = { 'LG':0, 'KT':0 };
  // 최대 게임 횟수를 저장하는 변수
  // 7전 4전승제 >> 최대 7경기
  let maxGames = 7;
  // 현재까지 진행된 게임 횟수를 저장하는 변수
  let gamesPlayed = 0;
  // 경기 결과를 담을 배열 (각 경기마다 승리팀 기록)
  let gameOutcomes = [];

  // 시리즈 종료까지 게임 진행
  // : 한 팀이 4승 | 최대 게임 횟수까지 도달
  while (gamesPlayed < maxGames && result['LG'] < 4 && result['KT'] < 4) {
    // Math.random() 함수
    // : 0과 1 사이의 난수 생성, >> 난수를 기반으로 승자를 결정
    // = 0.5 미만의 경우 LG 승리, ≠ KT 승리
    let winner = Math.random() < 0.5 ? 'LG' : 'KT';
    // 결정된 승자의 승리 횟수 +1
    result[winner]++;
    // 진행된 게임 횟수 +1
    gamesPlayed++;

    // 경기 결과를 배열에 추가
    gameOutcomes.push(`${gamesPlayed}차전 ${winner} 승리`);
  }

  // 모든 게임 종료 이후, 최종 결과를 화면에 표시하는 함수 호출
  displayResults(result, gameOutcomes);
});

// displayResults 함수는, 최종 결과를 받아서 웹페이지에 표시
function displayResults(result, gameOutcomes) {
  // 현재 시리즈의 결과를 문자열로 작성
  let resultsText = `현재 시리즈 결과: LG ${result['LG']} : KT ${result['KT']}`;

  gameOutcomes.forEach(function(outcome) {
    resultsText += `<br /> ${outcome} <br />`;
  })

  // LG | KT가 4승을 달성할 경우, 시리즈 승리 메세지를 결과 문자열에 추가
  if (result['LG'] == 4 || result['KT'] ==4) {
    // 승리한 팀에 따라 각자 다른 메세지가 출력
    resultsText += `<br />
    <strong>
      ${results}
    </strong>
    `
  }
}