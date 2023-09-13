import "./services.css"

function Services() {
    return (
        <section className="servicios" id="services">
            <h2 className="servicios__titulos">Services</h2>
            <div className="grid">


                <article className=" servicios__container">
                    <div className="servicios__info">
                        <h4 className="servicios__titulo">Profits</h4>
                        <p className="servicios__descripcion">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit alias blanditiis error quod natus tempora provident ex odio.</p>
                    </div>
                    <div className="servicios__img">
                        <img src="src/assets/profits.svg" alt="" />
                    </div>
                </article>

                <article className=" servicios__container">
                    <div className="servicios__info">
                        <h4 className="servicios__titulo">Market</h4>
                        <p className="servicios__descripcion">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit alias blanditiis error quod natus tempora provident ex odio.</p>
                    </div>
                    <div className="servicios__img">
                        <img src="src/assets/mercado.svg" alt="" />
                    </div>
                </article>

                <article className=" servicios__container">
                    <div className="servicios__info">
                        <h4 className="servicios__titulo">tracking</h4>
                        <p className="servicios__descripcion">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit alias blanditiis error quod natus tempora provident ex odio.</p>
                    </div>
                    <div className="servicios__img">
                        <img src="src/assets/seguimiento.svg" alt="" />
                    </div>
                </article>

                <article className=" servicios__container">
                    <div className="servicios__info">
                        <h4 className="servicios__titulo">results</h4>
                        <p className="servicios__descripcion">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit alias blanditiis error quod natus tempora provident ex odio.</p>
                    </div>
                    <div className="servicios__img">
                        <img src="src/assets/resultados.svg" alt="" />
                    </div>
                </article>
            </div>

        </section>
    )
}

export default Services
