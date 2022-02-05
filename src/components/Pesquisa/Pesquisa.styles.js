import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 1rem;
`;

export const Label = styled.label`
  display: block;
  font-size: 1rem;
  line-height: 1;
  padding-bottom: 0.5rem;
`;

export const Input = styled.input`
  border: 1px solid ${(props) => props.theme.color2};
  display: block;
  width: 100%;
  font-size: 1rem;
  padding: 0.8rem;
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
