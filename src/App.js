import logo from "./logo.svg";
import "./App.css";
import { HStack, NativeBaseProvider, extendTheme } from "native-base";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import More from "./Pages/More";
import DownloadSongs1 from "./Pages/DownloadSongs1";
import LayoutMain from "./Layout/LayoutMain";
import BigHit from "./Pages/bigHit";

function App() {
  const theme = extendTheme({
    colors: {
      // Add new color
      primary: {
        50: "#4F0DA3",
        100: "#C5E4F3",
        200: "#A2D4EC",
        300: "#7AC1E4",
        400: "#47A9DA",
        500: "#0088CC",
        600: "#007AB8",
        700: "#006BA1",
        800: "#005885",
        900: "#003F5E",
      },
      // Redefining only one shade, rest of the color will remain same.
      amber: {
        400: "#d97706",
      },
    },
    config: {
      // Changing initialColorMode to 'dark'
      initialColorMode: "dark",
    },
  });

  return (
    <NativeBaseProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/more" element={<More />} />
          <Route path="/download1" element={<DownloadSongs1 />} />
          <Route path="/bighit" element={<BigHit />} />
        </Routes>
      </BrowserRouter>
    </NativeBaseProvider>
  );
}

export default App;
