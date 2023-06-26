import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }

    render() {

       return this.state.isLoggedIn && <div>Welcome Prateek</div>

        // return (
        //     this.state.isLoggedIn ?
        //         <div>Welcome Prateek</div> :
        //         <div>Welcome Guest</div>
        // )

        // let message
        // if(this.state.isLoggedIn){
        //     message = <div>Welcome Prateek</div>
        // } else {
        //     message = <div>Welcome Guest</div>
        // }
        // return <div>{message}</div>


        // if (this.state.isLoggedIn) {
        //     return <div>Welcome Prateek</div>
        // } else {
        //     return <div>Welcome Guest</div>

        // }
        // return (
        //     <div>
        //         <div>Welcome Prateek</div>
        //         <div>Welcome Guest</div>
        //     </div>
        // )
    }
}

export default UserGreeting

// 1) If else method
// 2) Element method
// 3) Ternary method
// 4) Short Circuit