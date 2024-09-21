import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { FormIcon } from '../../assets/icons/icons'

import "./todo.css"
import { Context } from '../../context/Context'
import TodoItem from './TodoItem'

const Todo = () => {
    const {todos, setTodos} = useContext(Context);

    const [title, setTitle] = useState("");

    function handleSubmit (e){
        e.preventDefault();
        const newTodo = {
            id: todos.length ? todos[todos.length - 1] + 1: 1,
            title: title,
            type: ['Default', 'New', 'Urgent'],
            completed: false
        }
        setTodos([...todos, newTodo]);
        setTitle("");
    }
  return (
    <div className='max-w-[546px] w-full bg-[#ffffff] border vorder-[#DFE0EB] rounded-lg'>
        <div className='w-full flex items-center justify-between p-8'>
            <div>
                <h3 className='font-bold text-[19px] leading-6 text-[#252733]'>Tasks</h3>
                <p className='text-[12px] font-semibold leading-4 text-[#9FA2B4] mt-2'>Today</p>
            </div>
            <Link className='text-[#3751FF] text-[14px] leading-5 font-semibold' to="/">
                View all
            </Link>
        </div>
        <div>
            <form className='px-8 flex items-center py-[17px] todo-form' onSubmit={handleSubmit}>
                <input value={title} onChange={(e)=>setTitle(e.target.value)} type="text" className="w-full bg-transparent outline-none" placeholder="Create new task"/>
                <button type="submit" className="bg-[#F0F1F7] text-[#9FA2B4] p-[7px] rounded-lg">
                    <FormIcon />
                </button>
            </form>
            <ul className='w-full h-[180px] overflow-y-scroll todo-list'>
                {
                    todos.map((todo, index) => (
                        <TodoItem todo={todo} key={index} />
                    ))
                }
            </ul>
        </div>
    </div>
  )
}

export default Todo