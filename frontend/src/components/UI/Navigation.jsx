import { Link, NavLink } from 'react-router-dom'
import Home from '../../img/home.svg'
import RightLine from '../../img/right-line.svg'

const Navigation = ({ catName, catPath, prodName, isProd }) => {
    return (
        <nav>
            <div className="nav">
                <div className="nav__list">
                    <div>
                        <Link to="/">
                            <img src={Home} alt='home' />
                        </Link>
                    </div>
                    <div>
                        <img src={RightLine} alt="right-line" />
                    </div>
                    <div>
                        <NavLink end to={`/${catPath}`} className={({ isActive }) => (isActive ? "nav__text__active" : "nav__text")}>
                            {catName}
                        </NavLink>
                    </div>
                    {isProd ?
                        <>
                            <div>
                                <img src={RightLine} alt="right-line" />
                            </div>
                            <div className="nav__text__active">
                                {prodName}
                            </div>
                        </>
                        : ''
                    }
                </div>
            </div>
        </nav>
    )
}

export default Navigation