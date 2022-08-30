import React, {useEffect, useState} from 'react';
import CreateTask from './modals/CreateTask';
import Card from './Card';

const Todolist = () => {
    const [modal, setModal] = useState(false);
    const [taskList, setTaskList] = useState ([])

    useEffect (()  =>{
        let arr = localStorage.getItem("taskList")
        if (arr){
            let obj = JSON.parse(arr)
            setTaskList (obj)
        }
    }, [])

    const deleteTask =(index) => {
        let tempList = taskList
        tempList.splice (index, 1)
        localStorage.setItem ("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
    }

    const updateListArray =(obj, index) =>{
        let tempList = taskList
        tempList[index] = obj
        localStorage.setItem ("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
    }

    const toggle = () => {
        setModal(!modal);
    } 

    const saveTask =(taskObj) =>{
      let tempList = taskList 
      tempList.push (taskObj)
      localStorage.setItem ("taskList", JSON.stringify(tempList))
      setModal(false)
      setTaskList(taskList) 
    }

    return (
        <>
        <div class="main text-center">
            <h2>Todo List</h2>
            <button className='btn btn-primary mt-3' onClick = {()=> setModal(true)}>Create Task</button>
        </div>
        <div className='task-container'>
            {taskList && taskList.map((obj , index) =>

             <Card taskObj ={obj} index ={index} deleteTask ={deleteTask} updateListArray ={updateListArray }/>

             )}
        </div>
     
     <CreateTask toggle={toggle} modal={modal} save ={saveTask}/>
   
        </>
    );
};

export default Todolist;