import twitterSvg from "../../assets/images/icon-twitter.svg";
import facebookSvg from "../../assets/images/icon-facebook.svg";
import instagramSvg from "../../assets/images/icon-instagram.svg";
import youtubeSvg from "../../assets/images/icon-youtube.svg";

import upSvg from "../../assets/images/icon-up.svg";
import downSvg from "../../assets/images/icon-down.svg";

import {
  CardBody,
  PrimaryCardBorderType,
  CardContainer,
  CardFooter,
  PrimaryCardFooterColorType,
  CardHeader,
} from "./styles";

interface IPrimaryCardProps {
  type: PrimaryCardBorderType;
  headerText: string;
  amount: string;
  amountType: string;
  footerText: string;
  footerColor: PrimaryCardFooterColorType;
}

const CARD_ICONS = {
  twitter: twitterSvg,
  facebook: facebookSvg,
  youtube: youtubeSvg,
  instagram: instagramSvg,
};

export function PrimaryCard({
  type,
  headerText,
  amount,
  amountType,
  footerColor,
  footerText,
}: IPrimaryCardProps) {
  return (
    <CardContainer type={type}>
      <CardHeader>
        <img src={CARD_ICONS[type]} alt={`${type} icon`} />
        <strong>{headerText}</strong>
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
