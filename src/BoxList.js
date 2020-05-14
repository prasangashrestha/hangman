import React, { Component } from 'react'
import BoxForm from './BoxForm'
import Box from './Box'


class BoxList extends Component {

    state = {
        boxes : []
    }

    addBox = (box) => {
        this.setState({
            boxes: [...this.state.boxes, box]
        })
    }

    deleteBox = (id) => {
        console.log(id)
        const newBoxes = [...this.state.boxes].filter(box => ( 
            box.id !== id
        ))
        this.setState({boxes: newBoxes})
    }

    render() {
        
        return (
            <div className='BoxList'>
                <BoxForm addBox= {this.addBox} />
                {this.state.boxes.map((box) => (
                    <Box 
                        key = {box.id}
                        width = {box.width} 
                        height = {box.height} 
                        bgColor = {box.bgColor} 
                        deleteBox = {this.deleteBox}
                        id = {box.id}
                        />
                ))}
                

            </div>
        )
    }
}

export default BoxList;