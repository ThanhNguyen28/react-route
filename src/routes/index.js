import Home from '../Pages/Home'
import Product from '../Pages/Product'
import Category from '../Pages/Category'
import Search from '../Pages/Search'
import HeaderOnly from '../components/Layout/HeaderOnly'
const publicRoutes =[
    { path: '/', component: Home },
    { path: '/product', component: Product },
    { path: '/category', component: Category, layout: HeaderOnly },
    { path: '/search', component: Search, layout:null},
]
const privateRoutes =[]

export {publicRoutes,privateRoutes}