import { SITE_NAME } from "@/constants/constants"
import { Link } from "react-router-dom"
import logo from "../../../public/images.png"
import { useTheme } from "../context/Theme-provider"
import { Moon, Sun } from "lucide-react"

const Header = () => {
    const {theme, setTheme} = useTheme();
    const isDark = theme === "dark";
  return (
    <>
       <header className="sticky top-0 z-100 w-full border-b p-4 bg-background/95 backdrop:blur">
        <div className="container mx-auto flex h-20 items-center justify-between px-4">
            <Link to="/">
                <img src={logo} alt="logo" className="h-17"/>
                <h1 className="text-xl font-bold sm:text-2xl">{SITE_NAME}</h1>
            </Link>

           <div
              onClick={() => setTheme(isDark ? "light" : "dark")}
              className={`cursor-pointer transition-transform duration-500 ${isDark ? "rotate-100" : "rotate-0"}`}
            >
              {isDark ? (
                <Sun className="w-7 h-7 text-yellow-400 rotate-0 transition-all" />
              ) : (
                <Moon className="w-6 h-6 text-blue-400 rotate-0 transition-all" />
              )}
            </div>


            <div>

            </div>
        </div>
      </header>
    </>
  )
}

export default Header
