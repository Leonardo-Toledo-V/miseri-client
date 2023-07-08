import React from "react";
import {useRouter} from "next/navigation";

export default function FormLogin() {
    const router = useRouter()
   

    const handleSubmit = (e) => {
        e.preventDefault();
        router.push('/dashboard')
    }


    return (
        <>
            <div className="h-full w-full p-4 sm:p-16 max-w-[900px] flex flex-col">
                <form onSubmit={handleSubmit}>
                    <div className="sm:mx-16 mt-16 flex flex-col">
                        <div>
                            <h3 className="font-playfair text-4xl">Bienvenido</h3>
                            <h4 className="font-lato text-lg">Inicia sesión en tu cuenta</h4>
                        </div>
                        <div className="flex flex-col mt-12">
                            <label
                                htmlFor="email"
                                className="font-lato font-black mb-2 text-sm text-[#656565]"
                            >
                                Correo electrónico:
                            </label>
                            <input
                                className="bg-[#F3F6FB] py-1.5 pl-2 text-sm text-left"
                                type="text"
                                id="email"
                                placeholder="Ex: example@miseri.es"
                                autoComplete="off"
                                required
                            />
                        </div>
                        <div className="flex flex-col mt-4">
                            <label
                                htmlFor="email"
                                className="font-lato font-black mb-2 text-sm text-[#656565]"
                            >
                                Contraseña:
                            </label>
                            <input
                                className="bg-[#F3F6FB] py-1.5 pl-2 text-xs text-left"
                                type="password"
                                id="email"
                                placeholder="●●●●●●●●●●"
                                autoComplete="off"
                                required
                            />
                        </div>

                        <div className="flex justify-between mb-8 mt-6">
                            <div className="flex items-center">
                                <input
                                    id="checkbox"
                                    className="border-[#B7B7B7] mr-2"
                                    type="checkbox"
                                />
                                <label
                                    htmlFor="checkbox"
                                    className="text-sm font-lato text-[#656565]"
                                >
                                    Recordarme por 30 días
                                </label>
                            </div>
                            <div>
                                <p className="font-lato text-sm text-[#656565] cursor-pointer hover:text-[#656565] duration-300 text-center sm:text-left">
                                    ¿Olvidaste tú contraseña?
                                </p>
                            </div>
                        </div>
                        <div>
                            <input className="bg-[#373737] text-white font-lato w-full py-1 hover:bg-[#4e4e4e] duration-300 cursor-pointer" type="submit" />
                        </div>
                        <div className="flex items-center justify-center mt-4 ">
                            <hr className="w-52"/>
                            <p className="font-lato text-[#656565] mx-4">o</p>
                            <hr className="w-52" />
                        </div>
                    </div>
                </form>
                <form action="">
               <div className="sm:mx-16">
               <button
                    type="submit"
                    className="mt-4 font-lato text-[0.920rem] border-[0.1px] w-full hover:border-b-2 py-1 duration-300 cursor-pointer flex items-center justify-center"
                >
                    <span>
                        <img className="h-3 w-3 sm:h-5 sm:w-5 mx-4" src="google.png" alt="google" />
                    </span>
                    Ingresar con Google
                </button>

               </div>
                </form>
            </div>
        </>
    );
}
