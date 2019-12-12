import React,{Component} from 'react'

export default class AddPersonList extends Component {
  constructor(props){
    super(props)
  }
  
  render(){
    return (
      <div>
        {
          this.props.people.map((p, id) => {
            return (<li key={id}>
              {
                p.firstName
              }
  
            </li>
            )
          })
        }
      </div>
  
  
    )
  }
  
}
