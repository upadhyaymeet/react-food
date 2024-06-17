import {Component} from "react"
import UserClass from "./UserClass"

class About extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <UserClass name="First" location="First"/>
                <UserClass name="Second" location="Second" />
            </div>
        )
    }
}

export default About

// const About = () =>{
//     return (
//         <div>About</div>
//     );
// };

// export default About