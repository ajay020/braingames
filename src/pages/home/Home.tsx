import { Link} from 'react-router-dom'

import tiles from '../../assets/tiles.png'
import colormatch from '../../assets/color-match.png'

import './home.css'

const gameList = [
    {id:1,title:"Match Pairs", thumbnail : tiles, url : "/match-pair"},
    {id:2, title:"Identify Color", thumbnail : colormatch, url : "/identify-color"},
]

const Home = () => {
  return (

    <div className="thumb-container">
        {
            gameList.map(game => {
                return (
                    <Link  className="thumbcard" to={game.url} target="_blank"  key={game.id}>
                        <figure>
                            <figcaption>{game.title}</figcaption>
                            <img src={game.thumbnail} alt="" />
                        </figure>
                </Link>)
            })
        }
    </div>
  )
}

export default Home