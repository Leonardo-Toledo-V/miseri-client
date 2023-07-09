"use client"
import SideBarDesktop from '@/components/Dashboard/SideBarDesktop'
import DashboardPanel from '@/components/Dashboard/DashboardPanel'
import SideBarMobile from '@/components/Dashboard/SideBarMobile'
import DashboardPage from '@/components/Dashboard/DashboardPage'


export default function Settings() {
  return (
    <>
      <div>
        <SideBarMobile/>
        {/* Static sidebar for desktop */}
        <SideBarDesktop/>
          <DashboardPanel>
            <DashboardPage/>
          </DashboardPanel>
      </div>
    </>
  )
}
