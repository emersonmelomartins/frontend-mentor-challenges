import styled from "styled-components";

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme["top-bg"]};
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
`;

export const HeaderContent = styled.div`
  width: 68.75rem; //1100px
  height: 15rem;
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  padding-top: 2rem;

  h1 {
    color: ${(props) => props.theme["text-primary"]};
  }

  strong {
    color: ${(props) => props.theme["text-secondary"]};
  }
`;
