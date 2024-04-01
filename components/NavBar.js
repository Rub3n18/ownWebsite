import house from '../components/house.png'
export default function NavBar(){
  return <nav className="nav">
    <div className="container">
    <div className="logo">
      <house />
    </div>
    <div className="nav-elements">
    <ul class="menu">
      
        <li><a class="active" href="#experience">Experience</a></li>
        <li><a class="active" href="#project">Projects</a></li>
        <li><a class="active" href="#volunteer">Volunteer</a></li>
        <li><a class="active" href="#contact">Contact</a></li>
     
    </ul>
    </div>
    </div>
    </nav>
}
