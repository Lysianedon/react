import React from "react";

// const style = {
//     fontSize :100,
//     color : "blue"
// }

class Box extends React.Component {

    render() {

        return (
            <>
                {
                    this.props.icon === "local_drink" ?  

                    (<div className="col-sm-3 col-6 box">

                    <span className="material-icons" style={{fontSize: 100, color: this.props.color}}>{this.props.icon}</span>
                    <p>{this.props.value} {this.props.unit}</p>

                    </div>)
                    :
                    (<div className="col-sm-3 col-6 box">

                    <span className="material-icons" style={{fontSize: 100, color: this.props.color}}>{this.props.icon}</span>
                    <p>{this.props.value} {this.props.unit}</p>
                    <input type="range" min="0" max="0" value="0" onInput={this.props.onInput}></input>

                </div>)
                
                }
            </>
            
        )
    }


}

export default Box;
