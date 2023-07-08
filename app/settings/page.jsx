"use client"
import SideBarDesktop from '@/components/Dashboard/SideBarDesktop'
import DashboardPanel from '@/components/Dashboard/DashboardPanel'
import SideBarMobile from '@/components/Dashboard/SideBarMobile'

export default function Settings() {
  return (
    <>
      <div>
        <SideBarMobile/>
        {/* Static sidebar for desktop */}
       <SideBarDesktop/>
        <DashboardPanel title="Settings" children={<div>Hello world from Settings</div>}/>
      </div>
    </>
  )
}
