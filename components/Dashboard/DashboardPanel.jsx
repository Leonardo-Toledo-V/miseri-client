'use client'
import NavbarDashboard from './NavbarDashboard'
import SideBarDesktop from './SideBarDesktop'
import SideBarMobile from './SideBarMobile'

export default function DashboardPanel({ children }) {
    return (
        <>
            <SideBarMobile />
            <SideBarDesktop />
            <div className="flex flex-col md:pl-64">
                <NavbarDashboard />
                <main className="flex-1">
                    <div className="py-6">
                        <div className="xl:mx-32 px-4 sm:px-6 md:px-8">
                            <div>
                                {children}
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}
