import { PrimaryCard } from "../../components/PrimaryCard";
import { HomeContainer } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <div className="primary-card-list">
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

      {/* <h2>Overview - Today</h2> */}

      <div className="secondary-card-list">
        
      </div>
    </HomeContainer>
  );
}
