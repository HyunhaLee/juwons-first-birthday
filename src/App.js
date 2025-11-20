import hat from "./party-hat.png";
import confettigreen from "./green.png";
import confettiblue from "./blue.png";
import confettiyellow1 from "./yellow1.png";
import confettiyellow2 from "./yellow2.png";
import confettipink1 from "./pink1.png";
import confettipink2 from "./pink2.png";
import confettired1 from "./red1.png";
import confettired2 from "./red2.png";
import confetti from "./confetti.png";
import decoration from "./decoration.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>원이의 첫 생일에 초대합니다.</h1>
        <div className="header-img-area">
          <div className="header-bg"></div>
          <div className="header-img"></div>
          <img src={hat} className="header-img-hat" alt="hat" />
          {/* 왼쪽 컨페티 */}
          <img
            src={confetti}
            className="header-img-confetti"
            alt="confetti"
            style={{
              width: "50px",
              height: "50px",
              top: "-180px",
              left: "-80px",
              transform: "rotate(64deg)",
            }}
          />
          <img
            src={confettigreen}
            className="header-img-confetti"
            alt="confetti"
            style={{ top: "180px", left: "10px" }}
          />
          <img
            src={confettiblue}
            className="header-img-confetti"
            alt="confetti"
            style={{ top: "10px", left: "-10px" }}
          />
          <img
            src={confettiyellow1}
            className="header-img-confetti"
            alt="confetti"
            style={{
              top: "120px",
              left: "-40px",
              transform: "rotate(120deg)",
            }}
          />
          <img
            src={confettiyellow2}
            className="header-img-confetti"
            alt="confetti"
            style={{ top: "10px", left: "-70px" }}
          />
          <img
            src={confettiyellow2}
            className="header-img-confetti"
            alt="confetti"
            style={{
              top: "-30px",
              left: "20px",
              transform: "rotate(80deg)",
            }}
          />
          <img
            src={confettired2}
            className="header-img-confetti"
            alt="confetti"
            style={{ top: "150px", left: "-10px" }}
          />
          <img
            src={confettired1}
            className="header-img-confetti"
            alt="confetti"
            style={{ top: "80px", left: "-50px" }}
          />
          <img
            src={confettipink1}
            className="header-img-confetti"
            alt="confetti"
            style={{
              top: "-20px",
              left: "-30px",
              width: "25px",
              height: "25px",
              transform: "rotate(30deg)",
            }}
          />
          <img
            src={confettipink1}
            className="header-img-confetti"
            alt="confetti"
            style={{
              top: "160px",
              left: "-60px",
              width: "20px",
              height: "20px",
              transform: "rotate(-65deg)",
            }}
          />
          <img
            src={confettipink2}
            className="header-img-confetti"
            alt="confetti"
            style={{ top: "40px", left: "-30px" }}
          />
          {/* 오른쪽 컨페티 */}
          <img
            src={confetti}
            className="header-img-confetti"
            alt="confetti"
            style={{
              width: "50px",
              height: "50px",
              top: "-178px",
              right: "-80px",
              transform: "rotate(-195deg)",
            }}
          />
          <img
            src={confettigreen}
            className="header-img-confetti"
            alt="confetti"
            style={{
              top: "180px",
              right: "10px",
              transform: "rotate(95deg)",
            }}
          />
          <img
            src={confettiblue}
            className="header-img-confetti"
            alt="confetti"
            style={{
              top: "10px",
              right: "-10px",
              transform: "rotate(-45deg)",
            }}
          />
          <img
            src={confettiyellow1}
            className="header-img-confetti"
            alt="confetti"
            style={{
              top: "120px",
              right: "-40px",
              transform: "rotate(-185deg)",
            }}
          />
          <img
            src={confettiyellow2}
            className="header-img-confetti"
            alt="confetti"
            style={{ top: "160px", right: "-50px" }}
          />
          <img
            src={confettiyellow2}
            className="header-img-confetti"
            alt="confetti"
            style={{
              top: "-30px",
              right: "20px",
              transform: "rotate(-110deg)",
            }}
          />
          <img
            src={confettired2}
            className="header-img-confetti"
            alt="confetti"
            style={{
              top: "150px",
              right: "-10px",
              transform: "rotate(-60deg)",
            }}
          />
          <img
            src={confettired1}
            className="header-img-confetti"
            alt="confetti"
            style={{
              top: "-30px",
              right: "-30px",
              transform: "rotate(-60deg)",
              width: "30px",
              height: "30px",
            }}
          />
          <img
            src={confettipink1}
            className="header-img-confetti"
            alt="confetti"
            style={{
              top: "80px",
              right: "-50px",
            }}
          />
          <img
            src={confettipink2}
            className="header-img-confetti"
            alt="confetti"
            style={{
              top: "40px",
              right: "-30px",
              transform: "rotate(-80deg)",
            }}
          />
          <img
            src={confettigreen}
            className="header-img-confetti"
            alt="confetti"
            style={{
              top: "45px",
              right: "-70px",
              transform: "rotate(25deg)",
              width: "14px",
              height: "14px",
            }}
          />
        </div>
        <p>
          어느덧, 1년
          <br />
          우리 원이가 벌써
          <br />첫 번째 생일을 맞이 했습니다.
          <br />
          소중한 자리에 소중한 분들을 모시고자 합니다.
          <br />
          좋은날, 기쁨을 함께해주세요.
        </p>
        <h2>
          2025년 12월 27일 토요일 12시
          <br />
          포레스트 도일
          <br />
          <br />
        </h2>
      </header>
      <main className="App-main">
        <img src={decoration} className="header-img-deco" alt="confetti" />
        <img src={decoration} className="header-img-deco" alt="confetti" />
        <img src={decoration} className="header-img-deco" alt="confetti" />
        <h3>invitation</h3>
        <p>
          원이가 건강하게 첫생일을 맞았습니다.
          <br />
          밝고 행복한 아이로 자랄 수 있도록
          <br />
          자리하시어 함께 축복해 주시면 감사하겠습니다.
          <br />
          <br />
          아빠 <span>주형우</span> | 엄마 <span>이현하</span>
          <br />
          <br />
          <br />
          <br />
        </p>

        <img src={decoration} className="header-img-deco" alt="confetti" />
        <img src={decoration} className="header-img-deco" alt="confetti" />
        <img src={decoration} className="header-img-deco" alt="confetti" />
        <h3>location</h3>
        <h4>포레스트 도일</h4>
        <p>경기 평택시 원릉군길 171-2 (도일동 466-3)</p>
        <div>
          <div style={{ height: "240px" }}>
            <a
              href="https://map.kakao.com/?urlX=524543.0000000028&amp;urlY=987856.0000000009&amp;itemId=1028008308&amp;q=%ED%8F%AC%EB%A0%88%EC%8A%A4%ED%8A%B8%EB%8F%84%EC%9D%BC&amp;srcid=1028008308&amp;map_type=TYPE_MAP&amp;from=roughmap"
              target="_blank"
              rel="noreferrer"
            >
              <img
                alt="map"
                class="map"
                src="http://t1.daumcdn.net/roughmap/imgmap/e3b54448638c051663b20966b5216a843742cc2aa94003feded8039dc5e8b3e2"
                width="358"
                height="238"
                style={{ border: "1px solid rgb(204, 204, 204)" }}
              />
            </a>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <img src={decoration} className="header-img-deco" alt="confetti" />
        <img src={decoration} className="header-img-deco" alt="confetti" />
        <img src={decoration} className="header-img-deco" alt="confetti" />
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
          호기심 가득한 우리 아이들은 밖을 뛰어다니고 싶어 할 테니 꼭!
          <br />
          <b>반드시! 여러겹 따뜻하게 입혀주세요!!</b>
        </p>
      </main>
      <footer className="App-footer">
        <a href="tel:01071069739">원이 엄마에게 전화</a>
        <br />
        <a href="tel:01044715896">원이 아빠에게 전화</a>
      </footer>
    </div>
  );
}

export default App;
