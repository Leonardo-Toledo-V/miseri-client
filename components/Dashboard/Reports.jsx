import React from 'react'

export default function Reports() {
    return (
        <details>
            <summary className="text-base font-playfair text-black cursor-pointer">
                Reporte de datos
            </summary>
            <div className="mt-4 space-x-6 flex justify-start">
                <div>
                    <label htmlFor="price" className="block text-sm pb-4 font-lato text-gray-700">
                        Generar pdf
                    </label>
                  
                </div>
            </div>
        </details>
    )
}
