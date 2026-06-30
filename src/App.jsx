import styled from "styled-components";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";

//컨테이너로 감싸 위치 ,크기 조정
const Container = styled.div` 
  margin: 0 auto;
  width: 400px;
`;

function App() {
  return (
    <Container>
      <h1>Simple Counter</h1>
      <Viewer />
      <Controller />
    </Container>
  );
}

export default App;
