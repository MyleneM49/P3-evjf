import { createContext } from "react";

const LandingPageContext = createContext();

export default function LandingPageContextProvider({ children }) {
  const LandingPage = {
    backgroundImage: `url(${LandingPage})`,
    backgroundSize: "cover",
    backgroundRepaeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundAttachment: "fixed",
  };
  const PageAccueil = {
    backgroundImage: `url(${PageAccueil})`,
    backgroundSize: "cover",
    backgroundRepaeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundAttachment: "fixed",
  };

  return <LandingPageContext.Provider>{children}</LandingPageContext.Provider>;
}
