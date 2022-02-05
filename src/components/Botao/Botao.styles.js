import styled from 'styled-components';

export const StyledButton = styled.button`
  font-size: 1rem;
  cursor: pointer;
  border: none;
  border-radius: 0.4rem;
  background: ${(props) => props.theme.color3};
  color: ${(props) => props.theme.color1};
  min-width: 8rem;
  padding: 0.8rem 1.2rem;
  box-sizing: border-box;
  transition: 0.1s;
  &:hover,
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px ${(props) => props.theme.color2},
      0 0 0 4px ${(props) => props.theme.color3};
  }
  &:disabled {
    opacity: 0.5;
    cursor: wait;
  }
`;
