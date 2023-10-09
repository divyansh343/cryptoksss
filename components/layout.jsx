import { useState } from "react"
import Footer from "./footer"
import Label from "./landing/Label"
import Navbar from "./navbar"

const Layout = ({ children }) => {
  const [theme, settheme] = useState("corporate")

  const handleChange = (e) => {
    settheme(e.target.value);
  }
  return (
    <div className="`}" data-theme={theme}>
      <Navbar ethmem={theme} handleChange={handleChange} />

      <div className='grid justify-center'>
        <div className='max-w-7xl bg-base-100  px-5  md:mx-10'>
          {children}
        </div>
      </div>
      <Footer />
      {/* <Label/> */}
    </div>
  )
}

export default Layout