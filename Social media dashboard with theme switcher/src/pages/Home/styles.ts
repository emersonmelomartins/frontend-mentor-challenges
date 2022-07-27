import styled from "styled-components";

export const HomeContainer = styled.main`
  margin: -6.5rem auto 0 auto;
  max-width: 68.75rem;

  h2 {
    color: ${props => props.theme["text-primary"]}
  }

  .card-list {
    gap: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }

  @media (max-width: 768px) {
    margin: 0 auto;

    h2 {
      text-align: center;
    }
  }
`;
