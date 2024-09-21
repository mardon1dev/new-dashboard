import { createContext, useState } from "react";
import { OverviewIcon, AgentsIcon, ArticlesIcon, ContactsIcon, IdeasIcon, SettingsIcon, SubscriptionIcon, TicketsIcon } from '../assets/icons/icons'

export const Context = createContext();

export const DashboardContext = ({children}) => {


    const navlinks = [
        {
            id:1,
            icon: <OverviewIcon/>,
            title: 'Overview',
            path: '/',
        },
        {
            id:2,
            icon: <TicketsIcon />,
            title: 'Tickets',
            path: '/tickets'
        },
        {
            id:3,
            icon: <IdeasIcon />,
            title: 'Ideas',
            path: '/ideas',
        },
        {
            id:4,
            icon: <ContactsIcon/>,
            title: 'Contacts',
            path: '/contacts',
        },
        {
            id:5,
            icon: <AgentsIcon/>,
            title: 'Agents',
            path: '/agents',
        },
        {
            id:6,
            icon: <ArticlesIcon/>,
            title: 'Articles',
            path: '/articles',
        },
        {
            id:7,
            icon: <SettingsIcon/>,
            title: 'Settings',
            path: '/settings',
        },
        {
            id:8,
            icon: <SubscriptionIcon/>,
            title: 'Subscription',
            path: '/subscription',
        }
    ]

    const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")) || []);
    localStorage.setItem("todos", JSON.stringify(todos))

    function addTodo (todo){
        setTodos([...todos, todo])
    }

    return (
        <Context.Provider value={{navlinks, todos, setTodos}}>{children}</Context.Provider>
    )
}