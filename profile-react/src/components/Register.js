import React, { Component } from 'react'

 

export default class Register extends Component {
    constructor(props){
        super(props);
        this.state = {
            user: {
                email: '',
                password: '',
                campus: '',
                course:''
            },
            error: true,
            touch: false
       
        }  
 
    }
 
    handleChange = (e) => {
        const { name, value} = e.target
        this.setState({
            user: {
                ...this.state.user,
                [name]: value
            }
        })
    }
 
    handleBlur = (e) =>{
        this.setState({ touch: true });
    }
 
    render() {
        return (
            <div className="container mx-auto">
                <div className="row">
                    <div className="col-6">
                        <h2>Sing up</h2>
                        <form  onSubmit={this.handleSubmit}>
                        <div className="form-group">
                        <label className="">Email</label>       
                            <input className="input" name="email" type="email"  value={this.state.user.email}
                            onChange={this.handleChange}
                            onBlur={this.handleBlur}/>
                        </div>
 
                        <div className="form-group">
                        <label className="">Password</label>                   
                            <input className="input" name="password" type="password"  value={this.state.user.password}
                            onChange={this.handleChange}
                            onBlur={this.handleBlur}/>                    
                        </div>

                        <div className="form-group">
                        <label className="">Campus</label>                   
                            <input className="input" name="campus" type="text"  value={this.state.user.campus}
                            onChange={this.handleChange}
                            onBlur={this.handleBlur}/>                    
                        </div>
 
                        <div className="form-group">
                        <label className="">Course</label>                    
                            <input className="input" name="course" type="text"  value={this.state.user.course}
                            onChange={this.handleChange}
                            onBlur={this.handleBlur}/>                    
                        </div>
 
                        <div className="form-group">
                   
                            <button className="button is-info">ADD NEW</button>
                   
                        </div>
                                            
                    </form>
 
                    </div>
                </div>
            </div>
        )
    }
}