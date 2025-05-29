import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import { ThemeProvider } from "./components/context/Theme-provider"
import WeatherDashboard from "./components/pages/WeatherDashboard"
import CityPages from "./components/pages/CityPages"

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider defaultTheme="dark">
        <Layout>
          <Routes>
          <Route path="/" element={<WeatherDashboard /> } />
          <Route path="/city" element={<CityPages /> } />
          </Routes>
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
