import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import "./page.css"
import { useState } from "react";

export const Page = ({children}) => {
    const [ sidebar, toggleSidebar ] = useState(false);

    const handleToggleSidebar = () => {
        toggleSidebar(sidebar => !sidebar);
    }

    return ( <>
      {console.log("from frontpage")}
      <Header handleToggleSidebar={handleToggleSidebar}/>
      <div class="container-app">
        <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar} />
        {children}
      </div>
    </>);
}