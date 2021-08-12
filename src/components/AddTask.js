
import React,{useState} from 'react';
import {Modal,Button,Form} from 'react-bootstrap';
import {useDispatch} from 'react-redux';
const AddTask = () => {
    const dispatch = useDispatch();
    const [newTask,setNewTask] = useState('');
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const addFunc=()=>{
        if(newTask.trim()){
            dispatch({type:'add',payload:newTask})
            handleClose();
        }
    }
    return (
        <div style={{display:'flex', justifyContent:'center', margin:'10px'}}>
            <Button variant="secondary" onClick={handleShow}>
            Add Task
            </Button>
            <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Add new task</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Task's description</Form.Label>
            <Form.Control type="text" placeholder="Task..." onChange={(e)=>setNewTask(e.target.value)}/>
            </Form.Group>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="primary" onClick={addFunc}>
                Add
            </Button>
            </Modal.Footer>
        </Modal>
                
        </div>
    )
}

export default AddTask;