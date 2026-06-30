import styled from "styled-components";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import { useState } from "react";

//컨테이너로 감싸 위치 ,크기 조정
const Container = styled.div`
  margin: 0 auto;
  width: 400px;
`;

function App() {
  const [count, setCount] = useState(0); // props는 부모 자식 관계에서 사용 가능, 부모 컴포넌트에서 useState 사용
  const onClickBtn = (value) => { //이벤트 핸들러
    setCount(count + value);
  };
  return (
    <Container>
      <h1>Simple Counter</h1>
      {/*count값 props로 Viewer 넘겨주기*/}
      <Viewer count={count} /> 
      {/*이벤트 핸들러 Controller에 넘겨주기 */}
      <Controller onClickBtn = {onClickBtn}/>
    </Container>
  );
}

export default App;
