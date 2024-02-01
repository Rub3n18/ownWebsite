import house from '../components/house.png'
export default function NavBar(){
  return <nav className="nav">
    <a href="#" className="site"><img src={house} width={72} height={25}/></a>
    
    <ul class="menu">
      
        <li><a href="#experience">Experience</a></li>
        <li><a href="#project">Projects</a></li>
        <li><a href="#volunteer">Volunteer</a></li>
     
    </ul>
    </nav>
}
