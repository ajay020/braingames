import { Link} from 'react-router-dom'

import wink from '../../assets/images/wink.png';
import './home.css'

const gameList = [
    {id:1,thumbnail : wink, url : "/match-pair"},
    {id:2,thumbnail : wink, url : "/identify-color"},
]

const Home = () => {
  return (

    <div className="thumb-container">
        {
            gameList.map(game => {
                return (
                    <Link to={game.url} target="_blank"  key={game.id}>
                        <figure className="thumbcard">
                            <figcaption>Game title</figcaption>
                            <img src={game.thumbnail} alt="" />
                        </figure>
                </Link>)
            })
        }
    </div>
  )
}

export default Home