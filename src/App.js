import React, { Component } from 'react';

/// Modifica el componente para que se puedan agregar tareas, tachar y destacharlas y error de validacion en el input

class App extends Component {
  constructor() {
    super()
    this.state = {
      error: false, 
      tasks: [
        { id: 1, name: "Sacar la ropa", done: false },
        { id: 2, name: "Hacer la cama", done: true },
        { id: 3, name: "Leer un rato", done: false }
      ],
      newTask: ''
    }
  }
  handleSubmit = (event) => {
    let error = false
    event.preventDefault()
    if (this.state.newTask ==="") {
      error = true
      this.setState({newTask: "",error})
    } else {
    //console.log(error)
    //console.log(this.state.newTask)
    let html = this.state.tasks
    html.push({name:this.state.newTask})
    this.setState({html,newTask:"",error})
   // console.log(html)
  
    
    }
  
  }
  handleChange = (event) => {
    this.setState({newTask: event.target.value,done: false})
  }
  handleClick = (task) =>{
    const newTasks = this.state.tasks
    const tasktoUpdate = newTasks.find(({id})=>{return id === task.id})
    console.log(tasktoUpdate)
    tasktoUpdate.done = ! tasktoUpdate.done
    this.setState({tasks:newTasks})
    console.log(newTasks)

  }
     
  render() {
    console.log(this.state.error)
    return (
      <div className="wrapper">
        <div className="list">
          <h3>Por hacer:</h3>
          <ul className="todo">
            {this.state.tasks.map((task, index) => <li className={task.done ? "done" :""} onClick={() =>{this.handleClick(task)} } key={task.id}>{task.name}</li>)}
          </ul>
          <form onSubmit = {this.handleSubmit}>
            <input type="text" id="new-task" className={this.state.error ? "error" : ""} onChange= {this.handleChange} placeholder="Ingresa una tarea y oprime Enter" value={this.state.newTask} />
          </form>
        </div>
      </div>
    )
  }
}

export default App;
