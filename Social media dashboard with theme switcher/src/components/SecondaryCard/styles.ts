import styled from "styled-components";

export const CardContainer = styled.div`
  position: relative;
  width: 15.625rem;
  height: 8rem;
  background: ${(props) => props.theme["card-bg"]};

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2rem 1.5rem;
  border-radius: 4px;

  &:hover {
    filter: ${(props) => props.theme["card-hover"]};
  }
`;

export const CardHeader = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  strong {
    color: ${(props) => props.theme["text-secondary"]};
    font-size: 0.75rem;
  }
`;

const CARD_BODY_COLORS = {
  positive: "lime-green",
  negative: "bright-red",
} as const;

export type SecondaryCardBodyColorType = keyof typeof CARD_BODY_COLORS;

interface ISecondaryCardBodyProps {
  $color: SecondaryCardBodyColorType;
}

export const CardBody = styled.div<ISecondaryCardBodyProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  h2 {
    font-size: 2rem;
    color: ${(props) => props.theme["text-primary"]};
  }

  div {
    position: relative;
    color: ${(props) => props.theme[CARD_BODY_COLORS[props.$color]]};
    font-size: 0.75rem;

    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;
