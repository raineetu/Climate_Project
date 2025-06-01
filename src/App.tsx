import { BrowserRouter, Route, Routes } from "react-router-dom"
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"
import Layout from "./components/Layout"
import { ThemeProvider } from "./components/context/Theme-provider"
import WeatherDashboard from "./components/pages/WeatherDashboard"
import CityPages from "./components/pages/CityPages"

function App() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <ThemeProvider defaultTheme="dark">
            <Layout>
              <Routes>
              <Route path="/" element={<WeatherDashboard /> } />
              <Route path="/city/:cityName" element={<CityPages /> } />
              </Routes>
            </Layout>
          </ThemeProvider>
        </BrowserRouter>
    </QueryClientProvider>

  )
}

export default App
