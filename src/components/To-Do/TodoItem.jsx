import React, { useContext, useState } from 'react'

import "./todo.css"
import { Context } from '../../context/Context'

const TodoItem = ({todo}) => {
    const {todos, setTodos} = useContext(Context);
    const [currentIndex, setCurrentIndex] = useState(0);

    function handleChange(id){
        setTodos(todos.map((item) => item.id === id ? {...item, completed: !item.completed}: item))
    }
    const handleChangeText = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % todo.type.length);
    }
  return (
    <li className='flex px-8 py-[17px] items-center justify-between gap-4 todo-item'>
        <label className="checkbox-container">
            <input className="custom-checkbox" type="checkbox" onChange={()=>handleChange(todo.id)} checked={todo.completed}/>
            <span className="checkmark"></span>
        </label>
        <div className='flex items-center justify-between w-full'>
            <p className="text-[14px] leading-5 text-[#252733] font-semibold">{todo.title}</p>
            <button onClick={handleChangeText} className={`text-[11px] leading-[14px] font-bold uppercase py-[5px] px-3 
            ${
                todo.type[currentIndex] === 'Default' ? 'text-[#9FA2B4] bg-[#F0F1F7]' :
                todo.type[currentIndex] === 'New' ? 'text-[#FFFFFF] bg-[#29CC97]': 
                todo.type[currentIndex] === 'Urgent' ? 'text-[#FFFFFF] bg-[#FEC400]': ""
            } rounded-lg`}>{todo.type[currentIndex]}</button>
        </div>
    </li>
  )
}

export default TodoItem