// import React, { useState } from 'react';
// import { FaTasks } from "react-icons/fa";
// import { IoIosAddCircle } from "react-icons/io";
// import TaskItem from './TaskItem';

// function ToDoList() {
//     const [tasks, setTasks] = useState([]);
//     const [task, setTask] = useState('');
//     const [completedTasks, setCompletedTasks] = useState([]);

//     const toggleComplete = index => {
//         if (completedTasks.includes(index)) {
//             setCompletedTasks(completedTasks.filter(item => item !== index));
//         } else {
//             setCompletedTasks([...completedTasks, index]);
//         }
//     };

//     const addTask = () => {
//         if (task.trim() !== "") {
//             setTasks([...tasks, task]);
//             setTask('');
//         }
//     };

//     const deleteTask = index => {
//         const updatedList = tasks.filter((_, i) => i !== index);
//         setTasks(updatedList);
//     };

//     return (
//         <>
//             <div className="flex flex-col items-center mb-52">
//                 <h1 className='text-4xl m-16 font-bold flex items-center'> <FaTasks className='mr-5' /> Simple To Do App </h1>
//                 <div className="flex">
//                     <input
//                         className='bg-slate-200 rounded-md p-4 m-4 outline-none w-96 focus:ring focus:ring-green-700 transition duration-500 ease-in-out'
//                         type="text"
//                         onChange={(e) => setTask(e.target.value)}
//                         placeholder='Create new TODO'
//                         value={task}
//                     />
//                     <button
//                         className='text-white text-2xl bg-green-500 rounded-md p-3 m-4 font-bold hover:bg-green-600  transition duration-500 ease-in-out hover:scale-110'
//                         onClick={addTask}
//                     >
//                         <IoIosAddCircle />
//                     </button>
//                 </div>
//                 <div>
//                     {tasks.length > 0 ? (
//                         <ul>
//                             {tasks.map((item, index) => (
//                                 <TaskItem
//                                     key={index}
//                                     task={item}
//                                     index={index}
//                                     completed={completed}
//                                     onToggleComplete={toggleComplete}
//                                     toDeleteTask={deleteTask}
//                                 />
//                             ))}
//                         </ul>
//                     ) : (
//                         <div>
//                             <p>Add Some Tasks</p>
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </>
//     );
// }

// export default ToDoList;
