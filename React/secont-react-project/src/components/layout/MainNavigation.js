import {Link} from 'react-router-dom';    // alternativa ad a href per avere una navigazione più fluida senza mandare nessuna chiamata lato server
import classes from './MainNavigation.module.css';   // importo il file css con l'oggetto classes che contiene le classi nel file css (nome a piacere)

function MainNavigation() {
    return (
    <header className={classes.header}>                   {/* metodo per importare le classi dal css  */}
            <div className={classes.logo}>React Meetups</div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>AllMeetUp</Link>
                    </li>
                    <li>
                        <Link to='/NewMeetUp'>NewMeetUp</Link>
                    </li>
                    <li>
                        <Link to='/Favorites'>Favorites</Link>
                    </li>
                </ul>
            </nav>
    </header>
        )
    }
        

export default MainNavigation;