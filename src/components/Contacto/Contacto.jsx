import { useRef } from "react"
import { useForm } from "react-hook-form"
import "./contacto.css"

function Contacto() {

    const form = useRef()

    const {
        register,
        handleSubmit,
        formState: {
            errors
        }
    } = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <>
            <h2 className="form__titulo">Contact</h2>
            <form
                id="contact"
                onSubmit={handleSubmit(onSubmit)}
                ref={form}
                className="formulario"
            >

                <div className="formulario__container">
                    <label
                        className="formulario__label"
                        htmlFor="name"
                    >Name:</label>
                    <input
                        type="text"
                        id="name"
                        placeholder="Your name here..."
                        className="formulario__input"
                        {
                        ...register('name', {
                            required: {
                                value: true,
                                message: "The required name."
                            },
                            minLength: {
                                value: 3,
                                message: "Must contain at least 3 characters."
                            },
                            maxLength: {
                                value: 25,
                                message: "Must be less than 25 characters."
                            }
                        })
                        }
                    />
                    {errors.name && <p className="error">{errors.name?.message}</p>}

                    <label
                        className="formulario__label"
                        htmlFor="email"
                    >Email:</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="hello@hello.com"
                        className="formulario__input"
                        {
                        ...register('email', {
                            required: {
                                value: true,
                                message: "The required email."
                            },
                            pattern: {
                                value: /^[a-z0-9._%+-]+@([a-z0-9.-]+\.)+[a-z]{2,4}$/,
                                message: "Invalid email"
                            }
                        })
                        }
                    />
                    {errors.email && <p className="error">{errors.email?.message}</p>}

                    <label
                        className="formulario__label"
                        htmlFor="mensaje"
                    >Message:</label>
                    <textarea
                        className="formulario__textarea"
                        {...register("mensaje", {
                            required: {
                                value: true,
                                message: "Required message.",
                            },
                            minLength: {
                                value: 4,
                                message: "It must contain at least 4 characters."
                            }
                        })}
                        id="mensaje"
                        cols="50"
                        rows="5"
                        placeholder="Hi nice to meet you..."
                    ></textarea>
                    {errors.mensaje && <p className="error">{errors.mensaje?.message}</p>}
                </div>
                <button className="formulario__button">Send</button>
            </form>
        </>
    )
}

export default Contacto
