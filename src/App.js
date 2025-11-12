import logo from "./one.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>원이의 첫생일에 초대합니다.</h1>
        <img src={logo} className="header-img" alt="logo" />
        <p>
          어느덧, 1년
          <br />
          원이가 건강하게 첫돌을 맞이했습니다.
          <br />
          좋은날, 기쁨을 함께해주세요.
        </p>
        <h2>
          2025년 12월 27일 토요일 12시
          <br />
          포레스트 도일
        </h2>
      </header>
      <main className="App-main">
        <h3>invitation</h3>
        <p>
          어느덧 1년, 우리 원이가 벌써
          <br />첫 번째 생일을 맞이 했습니다.
          <br />
          소중한 자리에 소중한 분들을 모시고자 합니다.
          <br />
          소중한 시간 함께하셔서
          <br />
          밝고 건강한 아이로 자랄 수 있도록
          <br />
          축복해 주시면 감사하겠습니다.
          <br />
          <br />
          아빠 <b>주형우</b> | 엄마 <b>이현하</b>
        </p>
        <h3>location</h3>
        <h4>포레스트 도일</h4>
        <p>경기 평택시 원릉군길 171-2 (도일동 466-3)</p>
        {/* 주차 공간 넉넉하지만 혹시라도 자리가 없으면 모선재 옆 공터에 주차하시면 됩니다 */}
        지도
        <h3>infomation</h3>
        <p>
          2025년 바쁜 한 해 고생 많으셨습니다.
          <br />
          자연을 사랑하는 엄마아빠가 준비한 장소는
          <br /> 캠핑 분위기의 야외 바베큐장 입니다.
          <br />
          <br />
          원이의 돌잔치에 참석하시어
          <br />
          오랜만에 만난 가족, 친구들과 함께
          <br />
          자연 속에서 힐링하며 한 해 멋지게 마무리하시면 좋겠습니다.
          <br />
          <br />
          감사합니다.
          <br />
          <br />
          *식사는 대형 텐트 안에서 진행되며 히터도 빵빵하지만 <br />
          호기심 가득한 우리 아이들은 뛰어다니고 싶어 할 테니 꼭!
          <br />
          반드시! 여러겹 따뜻하게 입혀주세요!!
        </p>
      </main>
      <footer className="App-footer"></footer>
    </div>
  );
}

export default App;
