import twitterSvg from "../../assets/images/icon-twitter.svg";
import facebookSvg from "../../assets/images/icon-facebook.svg";
import instagramSvg from "../../assets/images/icon-instagram.svg";
import youtubeSvg from "../../assets/images/icon-youtube.svg";

import upSvg from "../../assets/images/icon-up.svg";
import downSvg from "../../assets/images/icon-down.svg";

import {
  CardBody,
  SecondaryCardBorderType,
  CardContainer,
  CardHeader,
  SecondaryCardBodyColorType,
} from "./styles";

interface ISecondaryCardProps {
  type: SecondaryCardBorderType;
  amount: string;
  amountType: string;
  footerText: string;
  footerColor: SecondaryCardBodyColorType;
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
}: ISecondaryCardProps) {
  return (
    <CardContainer type={type}>
      <CardHeader>
        <strong>{amountType}</strong>
        <img src={CARD_ICONS[type]} alt={`${type} icon`} />
      </CardHeader>

      <CardBody color={footerColor}>
        <h2>{amount}</h2>
        <div>
          <img src={footerColor === "positive" ? upSvg : downSvg} alt={footerColor === "positive" ? "up chevron icon" : "down chevron icon"} />
          <strong>{footerText}</strong>
        </div>
      </CardBody>
    </CardContainer>
  );
}
