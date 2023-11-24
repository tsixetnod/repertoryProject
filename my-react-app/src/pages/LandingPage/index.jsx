import { FooterComponent } from "../../components/footerComponent"
import { HeaderComponent } from "../../components/headerComponent"
import { MainComponent } from "../../components/mainComponent"


export const LandingPage = () => {
    return (
      <>
        <HeaderComponent>
          <MainComponent/>
        </HeaderComponent>
        <FooterComponent/>
      </>
    )
  }

  