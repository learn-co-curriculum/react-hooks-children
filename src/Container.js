import React from "react"

function Container(props){
  return (
    <div className={`container ${props.textPosition}`}>

      {props.header ? <h2>{props.header}</h2> : null}
      
      <div className={`container-children ${props.direction} ${props.contentPosition}`}>
        {props.children}
      </div>
      
    </div>
  )
}

Container.defaultProps = {
  textPosition: "", // possible values: left, right, center
  direction: "horizontal", // possible values: verical, horizontal
  contentPosition: "center" // possible values: left, right, center
}

export default Container