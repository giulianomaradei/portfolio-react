import './Header.css';

function Header(){
    return(
        <header className="header">
            <div className='title'>GMaradei</div>
            <div className='buttons'>
                <a href='#welcome'>Introdução</a>
                <a href='#about'>Sobre</a>
                <a href='#tech'>Tecnologias</a>
            </div>
        </header>
    )
}

export default Header;