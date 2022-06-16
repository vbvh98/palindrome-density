import styled from "styled-components";

const WrapperDiv = styled.div`
  display: grid;
  justify-items: center;
`;

const Label = styled.span`
  z-index: 1;
  width: 100%;
  height: 100%;
  display: flex;
  color: #222;
  align-items: center;
  justify-content: center;
  grid-area: 1 / 1 / 2 / 2;
`;

const Progress = styled.div`
  width: 100%;
  height: 1.8rem;
  overflow: hidden;
  position: relative;
  border-radius: 0.4rem;
  border: 2px solid #222;
  grid-area: 1 / 1 / 2 / 2;
  box-shadow: inset 0 0.1rem 0.25rem 0 #00000036;
  &::before,
  &::after {
    top: 0;
    content: "";
    height: 100%;
    position: absolute;
  }
  &::before {
    left: 0;
    background: #2fc;
    transition: width 0.3s ease-in-out;
    width: ${(props) => `${props.progress}%`};
  }
`;

const ProgressBar = ({ label, progress }) => {
  return (
    <WrapperDiv>
      <Label>
        {label}: {progress * 100}%
      </Label>
      <Progress progress={progress * 100} />
    </WrapperDiv>
  );
};

export default ProgressBar;
