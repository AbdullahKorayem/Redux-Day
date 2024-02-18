import React from 'react';
import { MdOutlineTaskAlt } from 'react-icons/md';
import { AiFillDelete } from 'react-icons/ai';

function TaskItem({ task, index, completed, onToggleComplete, toDeleteTask }) {
    return (
        <>
            <div key={index} className='flex bg-slate-200 py-4 pr-4 pl-12 rounded-md items-center my-4 space-x-40 hover:shadow-lg transition duration-500 ease-in-out hover:scale-101'>
                <li className={`self-center font-semibold pr-10 mr-6 grow ${completed ? 'text-green-500 line-through' : 'text-black'}`}>{task}</li>

                <div className='flex'>
                    <button type="button" onClick={() => { onToggleComplete(index) }} className='bg-blue-500 text-white p-3 mx-1 rounded-md font-bold hover:bg-blue-900 transition duration-500 ease-in-out hover:scale-110'><MdOutlineTaskAlt className='text-2xl' /></button>
                    <button className='bg-red-500 text-white p-3 mx-1 rounded-md font-bold hover:bg-red-900 transition duration-500 ease-in-out hover:scale-110' onClick={() => { toDeleteTask(index) }}><AiFillDelete className='text-2xl' /></button>
                </div>
            </div>
        </>
    )
}

export default TaskItem;
