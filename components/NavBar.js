import house from '../components/house.png'
export default function NavBar(){
  return <nav className="nav">
    <a href="#" className="site"><img src={house}/></a>
    
    <ul class="menu">
      
        <li><a class="active" href="#experience">Experience</a></li>
        <li><a class="active" href="#project">Projects</a></li>
        <li><a class="active" href="#volunteer">Volunteer</a></li>
        <li><a class="active" href="#contact">Contact</a></li>
     
    </ul>
    </nav>
}
