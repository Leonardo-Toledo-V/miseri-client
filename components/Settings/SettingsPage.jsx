"use client"
import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import { useRouter } from 'next/navigation'


const lightSensor = [
  { name: 'Sensor A' },
  { name: 'Sensor B' },
  { name: 'Ambos' },
]

const temperatureSensor = [
  { name: 'Sensor A' },
  { name: 'Sensor B' },
  { name: 'Ambos' },
]

const humiditySensor = [
  { name: 'Sensor A' },
  { name: 'Sensor B' },
  { name: 'Ambos' },
]

const measurementUnity = [
  { name: 'Celcius' },
  { name: 'Fahrenheit' },
  { name: 'Ambos' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function SettingsPage() {
  const [lightSelected, setLightSelected] = useState(lightSensor[2])
  const [tempetureSelected, setTempetureSelected] = useState(temperatureSensor[2])
  const [humiditySelected, setHumiditySelected] = useState(humiditySensor[2])
  const [measurementSelected, setMeasurementSelected] = useState(measurementUnity[0])
  const router = useRouter()

  const handleExit = (e) => {
    e.preventDefault();
    router.push('/dashboard')
  }

  return (
    <>
      <main className="px-4 pb-12 lg:pb-16">
        <form>
          <div className="space-y-6">
            <div>
              <h1 className="text-lg font-playfair leading-6 text-gray-900">Configuración</h1>
              <p className="mt-1 text-base text-gray-500 font-lato">
                Personaliza a detalle la forma en la cuál quieres recibir tus datos desde Miseri Sense
              </p>
            </div>

            <details>
              <summary className=" text-base font-playfair text-black cursor-pointer">
                Sensores
              </summary>

              <div className="mt-4">
                <RadioGroup value={lightSelected} onChange={setLightSelected}>
                  <RadioGroup.Label className="text-base font-lato text-gray-900">Sensor de luz</RadioGroup.Label>
                  <div className="isolate mt-1 -space-y-px  bg-white shadow-sm">
                    {lightSensor.map((lightSensor) => (
                      <RadioGroup.Option
                        key={lightSensor.name}
                        value={lightSensor}
                        className={({ checked }) =>
                          classNames(
                            checked ? 'bg-gray-50 border-gray-600 z-10' : 'border-gray-200',
                            'relative border p-4 flex cursor-pointer focus:outline-none'
                          )
                        }
                      >
                        {({ active, checked }) => (
                          <>
                            <span
                              className={classNames(
                                checked ? 'bg-gray-600 border-transparent' : 'bg-white border-gray-300',
                                active ? 'ring-2 ring-offset-2 ring-gray-500' : '',
                                'mt-0.5 h-4 w-4 shrink-0 cursor-pointer rounded-full border flex items-center justify-center'
                              )}
                              aria-hidden="true"
                            >
                              <span className="rounded-full bg-white w-1.5 h-1.5" />
                            </span>
                            <span className="ml-3 flex flex-col">
                              <RadioGroup.Label
                                as="span"
                                className={classNames(
                                  checked ? 'text-gray-900' : 'text-gray-900',
                                  'block text-sm font-lato'
                                )}
                              >
                                {lightSensor.name}
                              </RadioGroup.Label>
                            </span>
                          </>
                        )}
                      </RadioGroup.Option>
                    ))}
                  </div>
                </RadioGroup>
              </div>

              <div className="mt-4">
                <RadioGroup value={tempetureSelected} onChange={setTempetureSelected}>
                  <RadioGroup.Label className="text-base font-lato text-gray-900">Sensor de temperatura</RadioGroup.Label>
                  <div className="isolate mt-1 -space-y-px  bg-white shadow-sm">
                    {temperatureSensor.map((temperatureSensor) => (
                      <RadioGroup.Option
                        key={temperatureSensor.name}
                        value={temperatureSensor}
                        className={({ checked }) =>
                          classNames(
                            checked ? 'bg-gray-50 border-gray-600 z-10' : 'border-gray-200',
                            'relative border p-4 flex cursor-pointer focus:outline-none'
                          )
                        }
                      >
                        {({ active, checked }) => (
                          <>
                            <span
                              className={classNames(
                                checked ? 'bg-gray-600 border-transparent' : 'bg-white border-gray-300',
                                active ? 'ring-2 ring-offset-2 ring-gray-500' : '',
                                'mt-0.5 h-4 w-4 shrink-0 cursor-pointer rounded-full border flex items-center justify-center'
                              )}
                              aria-hidden="true"
                            >
                              <span className="rounded-full bg-white w-1.5 h-1.5" />
                            </span>
                            <span className="ml-3 flex flex-col">
                              <RadioGroup.Label
                                as="span"
                                className={classNames(
                                  checked ? 'text-gray-900' : 'text-gray-900',
                                  'block text-sm font-lato'
                                )}
                              >
                                {temperatureSensor.name}
                              </RadioGroup.Label>
                            </span>
                          </>
                        )}
                      </RadioGroup.Option>
                    ))}
                  </div>
                </RadioGroup>
              </div>

              <div className="mt-4">
                <RadioGroup value={humiditySelected} onChange={setHumiditySelected}>
                  <RadioGroup.Label className="text-base font-lato text-gray-900">Sensor de humedad</RadioGroup.Label>
                  <div className="isolate mt-1 -space-y-px  bg-white shadow-sm">
                    {humiditySensor.map((humiditySensor) => (
                      <RadioGroup.Option
                        key={humiditySensor.name}
                        value={humiditySensor}
                        className={({ checked }) =>
                          classNames(
                            checked ? 'bg-gray-50 border-gray-600 z-10' : 'border-gray-200',
                            'relative border p-4 flex cursor-pointer focus:outline-none'
                          )
                        }
                      >
                        {({ active, checked }) => (
                          <>
                            <span
                              className={classNames(
                                checked ? 'bg-gray-600 border-transparent' : 'bg-white border-gray-300',
                                active ? 'ring-2 ring-offset-2 ring-gray-500' : '',
                                'mt-0.5 h-4 w-4 shrink-0 cursor-pointer rounded-full border flex items-center justify-center'
                              )}
                              aria-hidden="true"
                            >
                              <span className="rounded-full bg-white w-1.5 h-1.5" />
                            </span>
                            <span className="ml-3 flex flex-col">
                              <RadioGroup.Label
                                as="span"
                                className={classNames(
                                  checked ? 'text-gray-900' : 'text-gray-900',
                                  'block text-sm font-lato'
                                )}
                              >
                                {humiditySensor.name}
                              </RadioGroup.Label>
                            </span>
                          </>
                        )}
                      </RadioGroup.Option>
                    ))}
                  </div>
                </RadioGroup>
              </div>

            </details>





            <details>

              <summary className="text-base font-playfair text-black cursor-pointer">
                Unidad de medición
              </summary>

              <div className="mt-4">
                <RadioGroup value={measurementSelected} onChange={setMeasurementSelected}>
                  <div className="isolate mt-1 -space-y-px  bg-white shadow-sm">
                    {measurementUnity.map((unity) => (
                      <RadioGroup.Option
                        key={unity.name}
                        value={unity}
                        className={({ checked }) =>
                          classNames(
                            checked ? 'bg-gray-50 border-gray-600 z-10' : 'border-gray-200',
                            'relative border p-4 flex cursor-pointer focus:outline-none'
                          )
                        }
                      >
                        {({ active, checked }) => (
                          <>
                            <span
                              className={classNames(
                                checked ? 'bg-gray-600 border-transparent' : 'bg-white border-gray-300',
                                active ? 'ring-2 ring-offset-2 ring-gray-500' : '',
                                'mt-0.5 h-4 w-4 shrink-0 cursor-pointer rounded-full border flex items-center justify-center'
                              )}
                              aria-hidden="true"
                            >
                              <span className="rounded-full bg-white w-1.5 h-1.5" />
                            </span>
                            <span className="ml-3 flex flex-col">
                              <RadioGroup.Label
                                as="span"
                                className={classNames(
                                  checked ? 'text-gray-900' : 'text-gray-900',
                                  'block text-sm font-lato'
                                )}
                              >
                                {unity.name}
                              </RadioGroup.Label>
                            </span>
                          </>
                        )}
                      </RadioGroup.Option>
                    ))}
                  </div>
                </RadioGroup>
              </div>


            </details>


            <details>

              <summary className="text-base font-playfair text-black cursor-pointer">
                Muestreo de datos
              </summary>
              <div className="mt-4 space-x-6 flex justify-start">
              <div>
                  <label htmlFor="price" className="block text-sm pb-4 font-lato text-gray-700">
                    Tiempo de muestreo
                  </label>
                  <div className="relative mt-1">
                    <input
                      type="text"
                      name="time"
                      id="time"
                      className="block w-full bg-[#F3F6FB] border-gray-400 pl-4 py-1  focus:border-gray-300 focus:ring-gray-300 sm:text-sm"
                      placeholder="5"
                      aria-describedby="price-currency"
                    />
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                      <span className="text-gray-500 sm:text-sm" id="price-currency">
                        seg
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <label htmlFor="price" className="block text-sm pb-4 font-lato text-gray-700">
                    Tiempo de respaldo
                  </label>
                  <div className="relative mt-1 ">
                    <input
                      type="text"
                      name="time"
                      id="time"
                      className="block w-full bg-[#F3F6FB] pl-4 py-1 focus:border-gray-300 focus:ring-gray-300 sm:text-sm"
                      placeholder="5"
                      aria-describedby="price-currency"
                    />
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                      <span className="text-gray-500 sm:text-sm" id="price-currency">
                        seg
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </details>




            <div className="flex justify-end">
              <button
              onClick={handleExit}
                type="button"
                className="rounded-sm border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="ml-3 inline-flex justify-cente rounded-sm border border-transparent bg-[#18181A] py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-black duration-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              >
                Guardar cambios
              </button>
            </div>
          </div>
        </form>
      </main>
    </>
  )
}