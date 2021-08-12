import React,{useState} from 'react'
import {useSelector,useDispatch} from 'react-redux';
import {Button,Toast} from 'react-bootstrap';
import UpdateTask from './UpdateTask'
const ListTask = () => {
    const dispatch = useDispatch()
    const tasks = useSelector(state => state.reducer.tasks)
    const [state, setstate] = useState('All')
    return (
        <div>
            <div style={{display:'flex', justifyContent:'center' , margin:'5px'}}> 
                    <Button variant="outline-success" style={{margin:'5px'}} onClick={()=>setstate('Finished')}>Finished</Button>
                    <Button variant="outline-warning" style={{margin:'5px'}} onClick={()=>setstate('To do')}>To do</Button>
                    <Button variant="outline-primary" style={{margin:'5px'}} onClick={()=>setstate('All')}>All</Button>
                    </div>
                    <h3 style={{color:'royalblue',textAlign:'center'}}>{state} tasks</h3>
            {
            (state==="Finished"?tasks.filter(task=>task.isDone===true):state==="To do"?tasks.filter(task=>task.isDone===false):tasks).map((task,i)=>{
                return (
                <div key={i}>
                    <>
                    <Toast style={{margin:'auto'}}>
                        <Toast.Header>
                        <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
                        <strong className="mr-auto">Task Description: </strong>
                        <strong>
                            <Button variant="danger" onClick={()=>dispatch({type:'delete',payload:task.id})} style={{margin:'5px'}}>Delete</Button>
                            <UpdateTask id={task.id} taskName={task.description}></UpdateTask>
                            </strong>
                        </Toast.Header>
                        <Toast.Body onClick={()=>dispatch({type:'taskState',payload:task.id})} style={task.isDone?{textDecoration:'line-Through',backgroundColor:'green'}:{}}>{task.description}</Toast.Body>
                    </Toast>
                    </>
                </div>
                )}
            ) 
                }
        </div>
    )
}

export default ListTask