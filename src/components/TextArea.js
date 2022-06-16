import styled from "styled-components";

const StyledTextArea = styled.textarea`
  resize: none;
  padding: 1rem;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  font-family: Helvetica;
  width: calc(100% - 2.2rem);
`;

const TextArea = ({ value, onInput }) => {
  return (
    <div className="text-area">
      <StyledTextArea
        rows="10"
        value={value}
        onInput={({ target }) => {
          onInput(target.value);
        }}
      />
    </div>
  );
};

export default TextArea;
