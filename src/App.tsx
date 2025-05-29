import { BrowserRouter, Route } from "react-router-dom"
import Layout from "./components/Layout"
import { ThemeProvider } from "./components/context/Theme-provider"

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider defaultTheme="dark">
        <Layout>
          <Route path="/"></Route>
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
