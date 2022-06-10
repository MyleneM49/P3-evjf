import { createContext, useMemo } from "react";
import { useLocalStorage } from "react-use";

export const LandingPageContext = createContext();

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
  const [open, setOpen] = useLocalStorage("open", true);
  const openRendering = useMemo(() => ({ open, setOpen }), [open]);
  return (
    <LandingPageContext.Provider value={openRendering}>
      {children}
    </LandingPageContext.Provider>
  );
}
