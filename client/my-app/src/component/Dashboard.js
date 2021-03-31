import React from "react";
import {Tabs,Tab} from "react-bootstrap"
import {connect} from 'react-redux'

import {startGetUser} from '../actions/userAction'
import Users from "./users"
class Dashboard extends React.Component {
    
      componentDidMount() {
        this.props.dispatch(startGetUser())

      }
      render(){
        console.log(Array.isArray(this.props.user))

          if(this.props.user.length===0){

            return <div>No Data</div>
              
          }
          console.log(this.props.user[0].store)

          
          const e_user=this.props.user.filter(user=>user.store==="Electronics")
          const t_user=this.props.user.filter(user=>user.store==="Toys")
          
        return (
            <div>
              <Tabs  >
                <Tab eventKey="all" title="All">
                <Users users={this.props.user }/>
                </Tab>
                <Tab eventKey="electronics" title="Electronics">
                <Users users={e_user}/>
                  
                </Tab>
                <Tab eventKey="toys" title="Toys">
                <Users users={t_user}/>
                  
                </Tab>
              </Tabs>
            </div>
          );
        }
    }
 
 const mapStateToProps=(state)=>{
  return{
      user:state.user
      

  }

}

export default connect(mapStateToProps)(Dashboard)
        

      
  