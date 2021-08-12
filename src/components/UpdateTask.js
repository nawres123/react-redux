import React,{useState} from 'react';
import {Modal,Button,Form} from 'react-bootstrap';
import {useDispatch} from 'react-redux';
const UpdateTask = ({id,taskName}) => {
    const dispatch = useDispatch();
    const [newTask,setNewTask] = useState(taskName);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => {setNewTask(taskName);setShow(true)};
    const updateFunc=()=>{
        if(newTask.trim()){
            dispatch({type:'update',payload:{newTask:newTask,id:id}})
            handleClose();
        }
    }
    return (
        <div style={{display:'flex', justifyContent:'center', margin:'10px'}}>
            <Button variant="success" onClick={handleShow}>
            Change
            </Button>
            <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Modify Task</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Task's description</Form.Label>
            <Form.Control type="text" value={newTask} placeholder="Task..." onChange={(e)=>setNewTask(e.target.value)}/>
            </Form.Group>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="primary" onClick={updateFunc}>
                Update
            </Button>
            </Modal.Footer>
        </Modal>   
        </div>
    )
}

export default UpdateTask;