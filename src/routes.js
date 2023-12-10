
import { MENU_ROUTE, GLAV_ROUTE,AUTO_ROUTE, ITEM_ROUTE, BASKET_ROUTE, DELIVERY_ROUTE,ORDER_ROUTE,ACCOUNT_ROUTE,FQU_ROUTE,SUPPORT_ROUTE,PRESENT_ROUTE,CONTACT_ROUTE
} 
from "./utils/consts";
import Glav from "./pages/Glav_Str";
import Menu from "./pages/Menu";
import Item from "./pages/Item";
import Delivery from "./pages/Delivery";
import Basket from "./pages/Basket" ;    
import Order from "./pages/Order";
import Account from "./pages/account";
import FQU from "./pages/FQU";
import Support from "./pages/support";
import Present from "./pages/present";
import Contact from "./pages/contact";
import Auto from "./pages/auto";

export const adminRoutes = [


]

export const publicRoutes = [
    {
        path: AUTO_ROUTE,
        Component: Auto
    },
    {
        path: PRESENT_ROUTE,
        Component: Present
    },
    {
        path: CONTACT_ROUTE,
        Component: Contact
    },
    {
        path: SUPPORT_ROUTE,
        Component: Support
    },
    {
        path: FQU_ROUTE,
        Component: FQU
    },
    {
        path: ACCOUNT_ROUTE,
        Component: Account
    },

    {
        path: ORDER_ROUTE,
        Component: Order
    },

    {
        path: ITEM_ROUTE + '/:id',
        Component: Item
    },
    {
        path: MENU_ROUTE,
        Component: Menu
    },

    {
        path: GLAV_ROUTE,
        Component: Glav
    },
    {
        path: BASKET_ROUTE,
        Component: Basket
    },
    {
        path: DELIVERY_ROUTE,
        Component: Delivery
    },
]
