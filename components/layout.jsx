import { useState } from "react"
import Footer from "./footer"
import Label from "./landing/Label"
import Navbar from "./navbar"

const Layout = ({ children }) => {
  const [etheme, settheme] = useState("fantasy")

  // const handleChange = (e) => {
  //   settheme(e.target.value);
  // }
  return (
    <div className="bg-base-100" data-theme={etheme}>
      <Navbar etheme={etheme}  settheme={settheme}  />
      <div>
        {children}
      </div>
      <Footer etheme={etheme}  settheme={settheme} />
      {/* <Label/> */}
    </div>
  )
}

export default Layout