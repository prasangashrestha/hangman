import React, { Component } from 'react'

export default class BoxForm extends Component {

    state = {
        id: Math.random(),
        width: '',
        height: '',
        bgColor: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value,
           
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addBox(this.state);
        this.setState({
           width: '',
           height: '',
           bgColor: '' 
        })

    }

    render() {
        return (
            <div className= 'BoxForm'>
                <form onSubmit =  {this.handleSubmit}>
                    <label htmlFor="width">Width:</label>
                    <input type="text"
                        name='width'
                        value={this.state.width}
                        onChange={this.handleChange}/>

                    <label htmlFor="width">Height:</label>
                    <input type="text"
                        name='height'
                        value={this.state.height}
                        onChange={this.handleChange}/>
                    
                    <label htmlFor="width">Background Color:</label>
                    <input type="text"
                        name='bgColor'
                        value={this.state.bgColor}
                        onChange={this.handleChange}/>
                    
                    <input type='submit' />
                </form>
                

            </div>
        )
    }
}
