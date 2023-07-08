"use client"
import { createContext, useState } from 'react';

export const NavbarContext = createContext();

export const NavbarContextProvider = ({children}) => {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    return(
      <NavbarContext.Provider value={{sidebarOpen, setSidebarOpen}}>
        {children}
      </NavbarContext.Provider>
    )
  }