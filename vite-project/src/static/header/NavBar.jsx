import LogoIcon from '../../assets/images/logo.svg'
import './NavBar.css'

const NavBar =()=> {
    return(
      <div className='header'>
        <div> 
          <img src={LogoIcon} alt="" />
            
        </div>
        <div className='navs'>
          <nav>Features</nav>
          <nav>Company</nav>
          <nav>Careers</nav>
          <nav>About</nav>
        </div>
        <div className='Login'>
          <nav>Login</nav>
          <button>Register</button>

        </div>
  
      </div>
    )
  }
  
  export default NavBar