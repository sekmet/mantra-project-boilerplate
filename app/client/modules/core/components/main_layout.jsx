import React from 'react';

class Layout extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="main-wrapper">
        {React.cloneElement(this.props.children)}
      </div>
    )
  }

}

export default Layout;
