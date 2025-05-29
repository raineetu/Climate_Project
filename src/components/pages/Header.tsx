import { SITE_NAME } from "@/constants/constants"
import { Link } from "react-router-dom"
import logo from "../../../public/images.png"
import { useTheme } from "../context/Theme-provider"

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

            <div>

            </div>
        </div>
      </header>
    </>
  )
}

export default Header
