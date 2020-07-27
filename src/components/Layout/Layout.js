import React from 'react'
import './Layout.css'
const Layout = (props)=>{
    return(
        <main className="Layout" >{props.children}</main>
    )
}

export default Layout;