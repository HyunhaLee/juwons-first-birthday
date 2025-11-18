import logo from "./one2.jpg";
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
        </h2>
      </header>
      <main className="App-main">
        <h3>invitation</h3>
        <p>
          건강하게 1년을 맞이하는 원이가
          <br />
          밝고 건강한 아이로 자랄 수 있도록
          <br />
          자리하시어 함께 축복해 주시면 감사하겠습니다.
          <br />
          <br />
          아빠 <span>주형우</span> | 엄마 <span>이현하</span>
        </p>
        <h3>location</h3>
        <h4>포레스트 도일</h4>
        <p>경기 평택시 원릉군길 171-2 (도일동 466-3)</p>
        {/* 주차 공간 넉넉하지만 혹시라도 자리가 없으면 모선재 옆 공터에 주차하시면 됩니다 */}
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
          {/* <div
            style={{
              overflow: "hidden",
              padding: "7px 11px",
              border: "1px solid rgba(0, 0, 0, 0.1)",
              borderRadius: "0px 0px 2px 2px",
              backgroundColor: "rgb(249, 249, 249)",
            }}
          >
            <a
              href="https://map.kakao.com"
              target="_blank"
              rel="noreferrer"
              style={{ float: "left" }}
            >
              <img
                src="//t1.daumcdn.net/localimg/localimages/07/2018/pc/common/logo_kakaomap.png"
                width="72"
                height="16"
                alt="카카오맵"
                style={{ display: "block", width: "72px", height: "16px" }}
              />
            </a>
            <div
              style={{
                float: "right",
                position: "relative",
                top: "1px",
                fontSize: "11px",
              }}
            >
              <a
                target="_blank"
                rel="noreferrer"
                href="https://map.kakao.com/?from=roughmap&amp;srcid=1028008308&amp;confirmid=1028008308&amp;q=%ED%8F%AC%EB%A0%88%EC%8A%A4%ED%8A%B8%EB%8F%84%EC%9D%BC&amp;rv=on"
                style={{
                  float: "left",
                  height: "15px",
                  paddingTop: "1px",
                  lineHeight: "15px",
                  color: "#000",
                  textDecoration: "none",
                }}
              >
                로드뷰
              </a>
              <span
                style={{
                  width: "1px",
                  padding: "0",
                  margin: "0 8px 0 9px",
                  height: "11px",
                  verticalAlign: "top",
                  position: "relative",
                  top: "2px",
                  borderLeft: "1px solid #d0d0d0",
                  float: "left",
                }}
              ></span>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://map.kakao.com/?from=roughmap&amp;eName=%ED%8F%AC%EB%A0%88%EC%8A%A4%ED%8A%B8%EB%8F%84%EC%9D%BC&amp;eX=524543.0000000028&amp;eY=987856.0000000009"
                style={{
                  float: "left",
                  height: "15px",
                  paddingTop: "1px",
                  lineHeight: "15px",
                  color: "#000",
                  textDecoration: "none",
                }}
              >
                길찾기
              </a>
              <span
                style={{
                  width: "1px",
                  padding: "0",
                  margin: "0 8px 0 9px",
                  height: "11px",
                  verticalAlign: "top",
                  position: "relative",
                  top: "2px",
                  borderLeft: "1px solid #d0d0d0",
                  float: "left",
                }}
              ></span>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://map.kakao.com?map_type=TYPE_MAP&amp;from=roughmap&amp;srcid=1028008308&amp;itemId=1028008308&amp;q=%ED%8F%AC%EB%A0%88%EC%8A%A4%ED%8A%B8%EB%8F%84%EC%9D%BC&amp;urlX=524543.0000000028&amp;urlY=987856.0000000009"
                style={{
                  float: "left",
                  height: "15px",
                  paddingTop: "1px",
                  lineHeight: "15px",
                  color: "#000",
                  textDecoration: "none",
                }}
              >
                지도 크게 보기
              </a>
            </div>
          </div> */}
          {/* <div>
            <span style="border-bottom:0px none rgb(51, 51, 51);position:absolute;left:30px;top:282px;width:320px;height:86px"></span>
          </div>
          <div>
            <br style="display: none;" />
            <span style="color:rgb(34, 34, 34);font-weight:700;display:block;float:left;position:absolute;left:30px;top:302px;width:78px">
              주소
            </span>
            <span style="color:rgb(34, 34, 34);display:block;overflow:hidden;position:absolute;left:108px;top:302px;width:242px">
              경기 평택시 원릉군길 171-2
            </span>
            <span style="color:rgb(34, 34, 34);font-weight:700;display:block;float:left;position:absolute;left:30px;top:330px;width:78px">
              전화
            </span>
            <span style="color:rgb(34, 34, 34);display:block;overflow:hidden;position:absolute;left:108px;top:330px;width:242px">
              0507-1361-1841
            </span>
          </div> */}
        </div>

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
