import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      title:'Get Things Done',
      act:0,
      index:'',
      datas:[]
    }
  }
componentDidMount(){
  this.refs.task.focus();
}

fSubmit = (e) =>{
  e.preventDefault();
  console.log('try');

  let datas = this.state.datas;
  let task=this.refs.task.value;
 
  if(this.state.act === 0){
    let data={
      task
    }
    datas.push(data);
  }else{
    let index = this.state.index;
    datas[index].task=task;
  }

  this.setState({
    datas: datas,
    act:0
  });

this.refs.todoForm.reset();
this.refs.task.focus();
}

fRemove = (i) => {
  let datas = this.state.datas;
  datas.splice(i,1);
  this.setState({
    datas:datas
  });

  this.refs.todoForm.reset();
  this.refs.task.focus();
}

fEdit = (i) => {
  let data = this.state.datas[i];
  this.refs.task.value = data.task;
  
  this.setState({
    act:1,
    index:i
  });

  this.refs.task.focus();
}
 
  render() {
    let datas=this.state.datas;
    return (
      <div className="App">
        <h1>{this.state.title}</h1>
        <form ref="todoForm" className="todoForm">
          <input type="text" ref="task" placeholder="Add New Task" className="formField addTask" />
          <button onClick={(e)=>this.fSubmit(e)} className="todoBtn">Add</button>
          </form>
          
          {datas.map((data, i)=>
            <div className="task-list">
              <li key={i} id={i} className="myList">
                {data.task}
                <div className="icon-buttons">
                  <button onClick={()=>this.fRemove(i)} className="listBtn"><i class="far fa-trash-alt"></i></button>
                  <button onClick={()=>this.fEdit(i)} className="listBtn"><i class="far fa-edit"></i></button>
                </div>
              </li>

            </div>
            )}
          
      </div>
    );
  }
}

export default App;
