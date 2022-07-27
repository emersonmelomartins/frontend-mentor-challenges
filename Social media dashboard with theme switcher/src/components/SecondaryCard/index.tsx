import twitterSvg from "../../assets/images/icon-twitter.svg";
import facebookSvg from "../../assets/images/icon-facebook.svg";
import instagramSvg from "../../assets/images/icon-instagram.svg";
import youtubeSvg from "../../assets/images/icon-youtube.svg";

import upSvg from "../../assets/images/icon-up.svg";
import downSvg from "../../assets/images/icon-down.svg";

import {
  CardBody,
  CardBorderType,
  CardContainer,
  CardFooter,
  CardFooterColorType,
  CardHeader,
} from "./styles";

interface ICardProps {
  type: CardBorderType;
  amount: string;
  amountType: string;
  footerText: string;
  footerColor: CardFooterColorType;
}

const CARD_ICONS = {
  twitter: twitterSvg,
  facebook: facebookSvg,
  youtube: youtubeSvg,
  instagram: instagramSvg,
};

export function SecondaryCard({
  type,
  amount,
  amountType,
  footerColor,
  footerText,
}: ICardProps) {
  return (
    <CardContainer type={type}>
      <CardHeader>
        <img src={CARD_ICONS[type]} alt={`${type} icon`} />
      </CardHeader>

      <CardBody>
        <h2>{amount}</h2>
        <span>{amountType}</span>
      </CardBody>

      <CardFooter color={footerColor}>
        <img src={footerColor === "positive" ? upSvg : downSvg} />
        <strong>{footerText}</strong>
      </CardFooter>
    </CardContainer>
  );
}
