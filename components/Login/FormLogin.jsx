"use client"
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import axios from "@/libs/axios";
import Cookies from "js-cookie";
import Link from "next/link";

export default function FormLogin() {

    const [data, setData] = useState({
        email: "",
        password: ""
    });

    const [token, setToken] = useState();

    const [error, setError] = useState(false);

    useEffect(() => {
        Cookies.set('miseri-auth', token);
    }, [token])

    const handleChange = (event) => {
        const { name, value } = event.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        setError(false);
    };

    const router = useRouter()

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('/miseri/api/user/sign-in', JSON.stringify({
            "email": data.email,
            "password": data.password
        })).then(function (response) {
            setToken((response.data.data))
            router.push("/dashboard")
        }).catch(function (err) {
            setError(true)
        });
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
                        {error ?
                            <div className="bg-red-400 text-center mt-4">
                                <p className="text-sm text-white py-1.5">Usuario o contrasena incorrectos</p>
                            </div>
                            : ''}
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
                                name="email"
                                id="email"
                                placeholder="Ex: example@miseri.es"
                                autoComplete="off"
                                required
                                onChange={handleChange}
                            />
                        </div>
                        <div className="flex flex-col mt-4">
                            <label
                                htmlFor="password"
                                className="font-lato font-black mb-2 text-sm text-[#656565]"
                            >
                                Contraseña:
                            </label>
                            <input
                                className="bg-[#F3F6FB] py-1.5 pl-2 text-xs text-left"
                                type="password"
                                name="password"
                                id="password"
                                placeholder="●●●●●●●●●●"
                                autoComplete="off"
                                required
                                onChange={handleChange}
                            />
                        </div>
                        <div className="flex justify-start mb-8 mt-6">
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
                        </div>
                        <div>
                            <input className="bg-[#373737] text-white font-lato w-full py-1 hover:bg-[#4e4e4e] duration-300 cursor-pointer" type="submit" />
                        </div>
                        <div className="flex items-center justify-center mt-4 ">
                            <hr className="w-52" />
                            <p className="font-lato text-[#656565] mx-4">o</p>
                            <hr className="w-52" />
                        </div>
                    </div>
                </form>
                <form action="">
                    <div className="sm:mx-16">
                        <Link
                            href="/"
                            className="mt-4 font-lato text-[0.920rem] border-[0.1px] w-full hover:border-b-2 py-1 duration-300 cursor-pointer flex items-center justify-center"
                        >
                            Volver al inicio
                        </Link>
                    </div>
                </form>
            </div>
        </>
    );
}
