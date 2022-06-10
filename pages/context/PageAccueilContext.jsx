// import NightModeContextProvider from './contexts/nightModeContext';

// function App() {
//   return (
//     <NightModeContextProvider>
//       <Header />
//       <Main />
//       <Footer />
//     </NightModeContextProvider>
//   );
// }

// export const NightModeContext = createContext();

// function NightModeContextProvider({ children }) {
//   const pageDayStyle = {
//     backgroundImage: `url(${dayBkg})`,
//     backgroundSize: 'cover',
//     backgroundRepaeat: 'no-repeat',
//     backgroundPosition: 'center center',
//     backgroundAttachment: 'fixed',
//   };
//   const pageNightStyle = {
//     backgroundImage: `url(${nightBkg})`,
//     backgroundSize: 'cover',
//     backgroundRepaeat: 'no-repeat',
//     backgroundPosition: 'center center',
//     backgroundAttachment: 'fixed',
//     color: 'white',
//   };
//   const [isNight, setIsNight] = useLocalStorage('isNight', true);
//   const pageStyle = isNight ? pageNightStyle : pageDayStyle;

//   const nightModeRendering = useMemo(
//     () => ({ isNight, setIsNight, pageStyle }),
//     [isNight, pageStyle]
//   );
//   return (
//     <NightModeContext.Provider value={nightModeRendering}>
//       {children}
//     </NightModeContext.Provider>
//   );
// }

// export default NightModeContextProvider;
