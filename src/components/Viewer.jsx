import styled from "styled-components";

const ViewerContainer = styled.div`
  background-color: rgb(240, 240, 240);
  border: 1px solid black;
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 10px;
`;

function Viewer() {
  return (
    <ViewerContainer>
      <div>현재 카운트:</div>
      <h1>0</h1>
    </ViewerContainer>
  );
}
export default Viewer;
