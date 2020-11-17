import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
class search extends Component {
    state = {
        title:""
      }
    
      onSearchHandler=(event)=>{
          const val = event.target.value
          console.log(val)
          this.setState({title:val})
      }

      submitHandler=(event)=>{
          event.preventDefault()
          this.props.onSearch(this.state.title);
      }
   
    render(){
    return (
        <div>
            <form onSubmit={this.submitHandler}>
                <h1 style={{color:"#e84118"}}>Channel ID</h1>
                <input value={this.state.title} onChange={this.onSearchHandler}></input>

            </form>
            
        </div>
    )
   }
}

export default search;