import styled from "styled-components";

const ControllerContainer = styled.div`
  background-color: rgb(240, 240, 240);
  border: 1px solid black;
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 10px;
`;

function Controller() {
  return (
    <ControllerContainer>
      <button>-1</button>
      <button>-10</button>
      <button>-100</button>
      <button>+100</button>
      <button>+10</button>
      <button>+1</button>
    </ControllerContainer>
  );
}

export default Controller;
