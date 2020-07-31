import React, { Component } from 'react';
import Link from 'next/link'
import Route from 'next/router'
// import './auth/auth.css'
class HomePage extends Component {
    // run before constructor
    static getInitialProps() {
        return { title: 'Home Title' }
    }
    // error when have constructor
    // constructor () {
    //     this.state = {
    //         isShow: true
    //     }
    // }

    render() {
        return (
            <div>
                <div>{this.props.title}</div>
                <div className="toggle"
                // error in next
                // onClick = {()=> this.setState(prevState => ({isShow: !prevState.isShow}))}
                >
                    Toggle Welcome 11
                </div>

                <Link href="/auth">
                    <a>Auth</a>
                </Link>


                <button onClick={() => Route.push("/auth")}>Auth Route</button>


                <div className="my-div">

                </div>


                <style jsx> {`
                .my-div {
                    color: red;
                    width: 100px;
                    height: 100px;
                    background-color: red;
                }
            `}
                </style>
            </div>
        );
    }
}




export default HomePage;