import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  max-width: 600px;
  background-color: #000;
  border-radius: 3px;
`;

export const Input = styled.input`
  display: inline-block;
  width: 100%;
  font-size: 20px;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  ::placeholder {
    font-size: 18px;
  }
`;

export const Submit = styled.button`
  width: 20%;
  height: 48px;
  border: 0;
  background-size: 40%;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  :hover {
    opacity: 1;
  }
`;
