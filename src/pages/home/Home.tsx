import wink from '../../assets/images/wink.png';
import './home.css'

const gameList = [
    {id:1,thumbnail : wink, url : ""},
    {id:2,thumbnail : wink, url : ""},
   
]

const Home = () => {
  return (
    <div className="container">
        {
            gameList.map(game => {
                return (<figure className="thumbcard" key={game.id}>
                     <figcaption>Game title</figcaption>
                     <img src={game.thumbnail} alt="" />
                </figure>)
            })
        }
    </div>
  )
}

export default Home