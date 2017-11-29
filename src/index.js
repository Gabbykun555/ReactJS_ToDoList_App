import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
      list: [],
    } 
  }

changeUserInput(input) {
  this.setState({
    userInput: input
  });
}
  
addToList(input) {
 if (this.state.userInput != "") {
  let listArray = this.state.list;
  listArray.push(input);
  this.setState({
    list: listArray,
    userInput: ""})
} else {
  alert('You must enter a task');
}
}
  
deleteTask(deletedListItem) {
}
 
  
/* **************  JSX  *************** */
  
  render() {
        return (
          <div id="input-field">
          <h1 id="heading">To-Do List</h1>
   <div className="task-box">
    <input type="text" id="enter-task" value={this.state.userInput} onChange={ (e) => this.changeUserInput(e.target.value)} placeholder="Add something to do..." />
        
    <a href="#" id="add-btn" onClick={()=>this.addToList(this.state.userInput)}>Add</a>
     
    <a href="#" id="deleteAll">Clear ALL</a>
 
     <ul id="to-do-list">
       <li>Eat<a href="#"><span className="danger">x</span></a></li>
       <li>Sleep<a href="#"><span className="danger">x</span></a></li>
       <li>Code<a onClick={this.deleteTask.bind(this)} href="#"><span className="danger">x</span></a></li>
       <li>Repeat<a href="#"><span className="danger">x</span></a></li>
       {this.state.list.map( (val) => <li >{val} <a onClick={this.deleteTask.bind(this)} href="#"><span className="danger">x</span></a></li>)}
        </ul>
            </div>
          </div>
       );
    }
}

ReactDOM.render(<ToDoList />, document.getElementById('app'));
