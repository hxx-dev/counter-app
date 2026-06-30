import styled from "styled-components";

const ControllerContainer = styled.div`
  background-color: rgb(240, 240, 240);
  border: 1px solid black;
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 10px;
`;

function Controller({ onClickBtn }) { //이벤트 핸들러 부모한테 받음
  return (
    <ControllerContainer>
        {/* 콜백함수를 사용해서 매개변수값 이벤트 핸들러로 넘겨주기 */}
      <button
        onClick={() => {
          onClickBtn(-1);
        }}
      >
        -1
      </button>
      <button
        onClick={() => {
          onClickBtn(-10);
        }}
      >
        -10
      </button>
      <button
        onClick={() => {
          onClickBtn(-100);
        }}
      >
        -100
      </button>
      <button
        onClick={() => {
          onClickBtn(100);
        }}
      >
        +100
      </button>
      <button
        onClick={() => {
          onClickBtn(10);
        }}
      >
        +10
      </button>
      <button
        onClick={() => {
          onClickBtn(1);
        }}
      >
        +1
      </button>
    </ControllerContainer>
  );
}

export default Controller;
