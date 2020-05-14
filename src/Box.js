import React from 'react'

export default function Box({width, height, bgColor, deleteBox , id}) {
    return (
        <div style = {{
            width: `${width} rem`,
            height: `${height} rem`,
            backgroundColor: `${bgColor}`
        }} 
            onClick = {() => deleteBox(id)}
        >
            Click to Remove!!!
        </div>
    )
}
