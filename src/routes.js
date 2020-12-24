import About from './pages/About'
import Expense from './pages/Expense'
import Home from './pages/Home'
import Income from './pages/Income'

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
        title: 'About',
        path: '/about',
        component: About
    },
]

export default routes