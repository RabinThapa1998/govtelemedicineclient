import Layout from "../components/Layout";
import Dropdown from "../utils/Dropdown";
import "./App.css";
import Home from "./pages/Home";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/system";
import DischargedPatientPage from "./pages/DischargedPatientPage";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import NewAdmission from "./pages/NewAdmission";

const theme = createTheme({
  typography: {
    fontFamily: ["Inter", "sans-serif"].join(","),
  },
  palette: {
    primary: {
      light: "#F6FAFF",
      main: "#2384F5",
      dark: "#002884",
      contrastText: "#fff",
    },
    greenbutton: {
      main: "#12DA86",
    },
    dangerred: {
      main: "#E8143A",
    },
    blackdropdown: {
      main: "#000000",
    },
    bggray: {
      main: "#EEEFEF",
    },
    error: {
      main: "#E8143A",
    },
    whitedropdown: { main: "#ffffff", contrastText: "#2384F5" },
    darkblue: { main: "#0C2C53" },
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/dischargedpatient"
              element={<DischargedPatientPage />}
            />
            <Route path="/newadmission" element={<NewAdmission />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
