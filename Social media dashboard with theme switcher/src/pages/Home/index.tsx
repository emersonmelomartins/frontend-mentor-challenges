import { PrimaryCard } from "../../components/PrimaryCard";
import { SecondaryCard } from "../../components/SecondaryCard";
import { HomeContainer } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <div className="card-list">
        <PrimaryCard
          type="facebook"
          headerText="@nathanf"
          amount="1987"
          amountType="followers"
          footerText="12 Today"
          footerColor="positive"
        />

        <PrimaryCard
          type="twitter"
          headerText="@nathanf"
          amount="1044"
          amountType="followers"
          footerText="99 Today"
          footerColor="positive"
        />

        <PrimaryCard
          type="instagram"
          headerText="@realnathanf"
          amount="11k"
          amountType="followers"
          footerText="1099 Today"
          footerColor="positive"
        />

        <PrimaryCard
          type="youtube"
          headerText="Nathan F."
          amount="8239"
          amountType="subscribers"
          footerText="144 Today"
          footerColor="negative"
        />
      </div>

      <br />

      <h2>Overview - Today</h2>

      <br />

      <div className="card-list">
        <SecondaryCard
          type="facebook"
          amount="87"
          amountType="Page Views"
          footerText="3%"
          footerColor="positive"
        />

        <SecondaryCard
          type="facebook"
          amount="57"
          amountType="Likes"
          footerText="2%"
          footerColor="negative"
        />

        <SecondaryCard
          type="instagram"
          amount="5462"
          amountType="Likes"
          footerText="2257%"
          footerColor="positive"
        />

        <SecondaryCard
          type="instagram"
          amount="52k"
          amountType="Profile Views"
          footerText="1375%"
          footerColor="positive"
        />

        <SecondaryCard
          type="twitter"
          amount="117"
          amountType="Retweets"
          footerText="303%"
          footerColor="positive"
        />

        <SecondaryCard
          type="twitter"
          amount="507"
          amountType="Likes"
          footerText="553%"
          footerColor="positive"
        />

        <SecondaryCard
          type="youtube"
          amount="107"
          amountType="Likes"
          footerText="19%"
          footerColor="negative"
        />

        <SecondaryCard
          type="youtube"
          amount="1407"
          amountType="Total Views"
          footerText="12%"
          footerColor="negative"
        />
      </div>
    </HomeContainer>
  );
}
