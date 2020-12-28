import About from './pages/About'
import Debt from './pages/Debt'
import Expense from './pages/Expense'
import Home from './pages/Home'
import Income from './pages/Income'
import Receivable from './pages/Receivable'

const routes = [
    {
        title: 'Home',
        path: '/',
        exact: true,
        component: Home
    },
    {
        title: 'Income',
        path: '/income',
        component: Income
    },
    {
        title: 'Expense',
        path: '/expense',
        component: Expense
    },
    {
        title: 'Debt',
        path: '/debt',
        component: Debt
    },
    {
        title: 'Receivable',
        path: '/receivable',
        component: Receivable
    },
    {
        title: 'About',
        path: '/about',
        component: About
    },
]

export default routes