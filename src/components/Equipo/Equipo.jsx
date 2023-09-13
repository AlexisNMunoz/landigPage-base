import "./equipo.css"
function Equipo() {
    return (
        <section className="equipo" id="team">
            <h2 className="equipo__titulo ">Team</h2>
            <div className="equipo__grid">

                <article className="equipo__container">
                    <div className="equipo__background">
                        <div className="equipo__info">
                            <h2 className="equipo__nombre">Insert name here</h2>
                            <p className="equipo__cargo">CEO & Founding Partner</p>
                        </div>
                    </div>
                    <img className="equipo__img" src="src/assets/user.svg" alt="" />
                </article>

                <article className="equipo__container">
                    <div className="equipo__background">
                        <div className="equipo__info">
                            <h2 className="equipo__nombre">Insert name here</h2>
                            <p className="equipo__cargo">VP & Founding Partner</p>
                        </div>
                    </div>
                    <img className="equipo__img" src="src/assets/user.svg" alt="" />
                </article>

                <article className="equipo__container">
                    <div className="equipo__background">
                        <div className="equipo__info">
                            <h2 className="equipo__nombre">Insert name here</h2>
                            <p className="equipo__cargo">Head of People</p>
                        </div>
                    </div>
                    <img className="equipo__img" src="src/assets/user.svg" alt="" />
                </article>

                <article className="equipo__container">
                    <div className="equipo__background">
                        <div className="equipo__info">
                            <h2 className="equipo__nombre">Insert name here</h2>
                            <p className="equipo__cargo">Dev</p>
                        </div>
                    </div>
                    <img className="equipo__img" src="src/assets/user.svg" alt="" />
                </article>

            </div>
        </section>
    )
}

export default Equipo
