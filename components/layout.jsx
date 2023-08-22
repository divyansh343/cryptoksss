import { useState } from "react"
import Footer from "./footer"
import Label from "./landing/Label"
import Navbar from "./navbar"

const Layout = ({ children }) => {
  const [theme, settheme] = useState("synthwave")

  const handleChange = (e) => {
    settheme(e.target.value);
  }
  return (
    <div className="bg-gradient-to-r
    from-base-300
    via-blue-900
    to-accent`}" data-theme={theme}>
      <Navbar ethmem={theme} handleChange={handleChange} />
      <div>
        {children}
      </div>
      <Footer />
      {/* <Label/> */}
    </div>
  )
}

export default Layout