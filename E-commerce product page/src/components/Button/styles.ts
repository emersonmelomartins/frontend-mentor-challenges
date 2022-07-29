import styled from "styled-components";

export const ButtonContent = styled.button`
  background: ${(props) => props.theme.orange};
  color: ${(props) => props.theme.white};
  width: 100%;
  padding: 1rem;
  border: none;
  border-radius: 8px;
  transition: all 0.1s;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  &:hover {
    filter: brightness(1.15);
  }
`;
