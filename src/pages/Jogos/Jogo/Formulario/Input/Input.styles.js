import styled from 'styled-components';

export const TextInput = styled.input`
  border: 1px solid ${(props) => props.theme.color2};
  display: block;
  width: 50%;
  font-size: 1rem;
  padding: 0.8rem;
  margin: 5px 0 5px 0;
  border-radius: 0.4rem;
  color: ${(props) => props.theme.color1};
  background: ${(props) => props.theme.backgroundColor2};
  transition: 0.1s;
  &:focus,
  &:hover {
    outline: none;
    border-color: ${(props) => props.theme.color2};
    color: ${(props) => props.theme.color1};
    background: ${(props) => props.theme.backgroundColor1};
    box-shadow: 0 0 0 3px ${(props) => props.theme.color3};
  }
`;
