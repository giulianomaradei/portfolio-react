import './Header.css';

function Header(){
    return(
        <header className="header">
            <div className='title'>GMaradei</div>
            <div className='buttons'>
                <div>About</div>
                <div>Technologies</div>
                <div>Projects</div>
                <div>Contact</div>
            </div>
        </header>
    )
}

export default Header;