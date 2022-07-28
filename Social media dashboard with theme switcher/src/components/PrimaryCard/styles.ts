import styled from "styled-components";

export const CARD_TYPES = {
  twitter: "twitter",
  facebook: "facebook",
  youtube: "youtube",
  instagram: "instagram",
} as const;

export type PrimaryCardBorderType = keyof typeof CARD_TYPES;

interface IPrimaryCardProps {
  $type: PrimaryCardBorderType;
}

export const CardContainer = styled.div<IPrimaryCardProps>`
  position: relative;
  width: 15.625rem;
  height: 13.75rem;
  background: ${(props) => props.theme["card-bg"]};

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1.5rem;

  border-radius: 4px;
  ${(props) =>
    props.$type === "instagram"
      ? `
          border-image: ${props.theme[CARD_TYPES[props.$type]]} 1;
          border-top: double 5px transparent;
          background-image: 
            linear-gradient(${props.theme["card-bg"]}, 
            ${props.theme["card-bg"]}), ${props.theme.instagram};
          background-origin: border-box;
          background-clip: content-box, border-box;
          background-repeat: no-repeat;
        `
      : `
          border-top: 5px solid ${props.theme[CARD_TYPES[props.$type]]};
        `}

  &:hover {
    filter: ${(props) => props.theme["card-hover"]};
  }
`;

export const CardHeader = styled.header`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  strong {
    color: ${(props) => props.theme["text-secondary"]};
    font-size: 0.75rem;
  }
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 3rem;
    color: ${(props) => props.theme["text-primary"]};
  }

  span {
    text-transform: uppercase;
    color: ${(props) => props.theme["text-secondary"]};
    letter-spacing: 0.35rem;
    font-size: 0.65rem;
  }
`;

const CARD_FOOTER_COLORS = {
  positive: "lime-green",
  negative: "bright-red",
} as const;

export type PrimaryCardFooterColorType = keyof typeof CARD_FOOTER_COLORS;

interface IPrimaryCardFooterProps {
  $color: PrimaryCardFooterColorType;
}

export const CardFooter = styled.footer<IPrimaryCardFooterProps>`
  position: relative;
  color: ${(props) => props.theme[CARD_FOOTER_COLORS[props.$color]]};

  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
