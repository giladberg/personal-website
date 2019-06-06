import React, { Fragment, useEffect,useState} from 'react'

const Navbar = () => {
    const [titles, setTitle] = useState(['home','about','portfolio','contact']);
     
    return (
        <Fragment>
        <div className="container-navbar">
            {titles.map(title=><p className="navbar-text" key={title}>{title.toUpperCase()}</p>)}
        </div>
          <i class="fas fa-chess"></i>
        </Fragment>
    )
}

export default Navbar
