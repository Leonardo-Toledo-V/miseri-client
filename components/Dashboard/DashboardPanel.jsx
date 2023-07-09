import {
    CloudIcon,
    LightBulbIcon,
    Battery100Icon,
    FireIcon,
    ExclamationTriangleIcon,
    EyeDropperIcon
} from '@heroicons/react/24/outline'


import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/20/solid'
import NavbarDashboard from './NavbarDashboard'

const stats = [
    { id: 1, name: 'Calidad de aire', stat: 'Buena', icon: CloudIcon, change: 'Similar a la de ayer', changeType: 'increase' },
    { id: 2, name: 'Gas', stat: '0.72%', icon: ExclamationTriangleIcon, change: '0.03%', changeType: 'decrase' },
    { id: 3, name: 'Intensidad de luz', stat: '87.37%', icon: LightBulbIcon, change: '31%', changeType: 'increase' },
    { id: 1, name: 'Niveles de humedad', stat: '86%', icon: EyeDropperIcon, change: '67%', changeType: 'increase' },
    { id: 2, name: 'Temperatura', stat: '23.4°', icon: FireIcon, change: '0.4%', changeType: 'increase' },
    { id: 3, name: 'Batería', stat: '63%', icon: Battery100Icon, change: '3.2%', changeType: 'decrease' },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}



export default function DashboardPanel({children}) {
    return (
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
    )
}
