import React, { Component } from 'react'
import Item from './Item'

export default class xiaojiejie extends Component {
  state = {
    inputValue: 'sss',
    list: ['vue', 'react']
  }

  addList = () =>{
    const value =this.state.inputValue
    this.setState({list: [...this.state.list, value],inputValue: ''})
  }

  changeValue = (e) => {
    this.setState({inputValue: e.target.value})
  }

  deleteItem = (e,i) =>{
    const list = this.state.list
    list.splice(i, 1)
    this.setState({list:list})
  }
 
  render() {
    return (
      <div>
        <input type="text" value={this.state.inputValue} onChange={this.changeValue}/>
        <button onClick={this.addList}>添加</button>
        <ul>
          {
            this.state.list.map((item, i) => {
              return (
                <Item key={item + i} content={item} index={i} deleteItem={e => this.deleteItem(e,i)}/>
                // <li key={item + i} onClick={e => this.deleteItem(e,i)}>{item}</li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}
