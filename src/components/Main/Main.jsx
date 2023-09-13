import "./principal.css"

function Main() {
    return (
        <main className="main" id="home">
            <div className="main__container">
                <div className="main__info">
                    <h1 className="info__title">your company</h1>
                    <p className="info__descripcion">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate assumenda quam quod aut reprehenderit pariatur inventore praesentium fugiat.</p>
                    <div className="info__bottons">
                        <a href="#contact" className="info__btn">Contact</a>
                        <a href="#services" className="info__btn">Services</a>
                    </div>
                </div>

                <div className="main__img">
                    <img
                        src="src/assets/compania.svg"
                        alt="imagen de la compania" />
                </div>
            </div>
        </main>
    )
}

export default Main
