"use client";
import React from 'react'
import {
  CloudIcon,
  LightBulbIcon,
  Battery100Icon,
  FireIcon,
  ExclamationTriangleIcon,
  EyeDropperIcon,
} from "@heroicons/react/24/outline";
import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/20/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const stats = [
  {
    id: 1,
    name: "Calidad de aire",
    stat: "Buena",
    icon: CloudIcon,
    change: "Similar a la de ayer",
    changeType: "increase",
  },
  {
    id: 2,
    name: "Gas",
    stat: "0.72%",
    icon: ExclamationTriangleIcon,
    change: "0.03%",
    changeType: "decrase",
  },
  {
    id: 3,
    name: "Intensidad de luz",
    stat: "87.37%",
    icon: LightBulbIcon,
    change: "31%",
    changeType: "increase",
  },
  {
    id: 4,
    name: "Niveles de humedad",
    stat: "86%",
    icon: EyeDropperIcon,
    change: "67%",
    changeType: "increase",
  },
  {
    id: 5,
    name: "Temperatura",
    stat: "23.4°",
    icon: FireIcon,
    change: "0.4%",
    changeType: "increase",
  },
  {
    id: 6,
    name: "Batería",
    stat: "63%",
    icon: Battery100Icon,
    change: "3.2%",
    changeType: "decrease",
  },
];

export default function DashboardPage() {
  return (
    <>
      <div>
        <div className="flex flex-col">
          <main className="flex-1">
            <div className='px-4 pb-12 lg:pb-16'>
              <div>
                <h1 className="text-lg font-playfair leading-6 text-gray-900">
                  Datos en tiempo real
                </h1>
              </div>
              <div>
                <div>
                  {/* Starts here */}
                  <div>
                    <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                      {stats.map((item) => (
                        <div
                          key={item.id}
                          className="relative overflow-hidden rounded-lg bg-white px-4 pt-5 pb-12 shadow sm:px-6 sm:pt-6"
                        >
                          <dt>
                            <div className="absolute rounded-md bg-[#18181A] p-3">
                              <item.icon
                                className="h-6 w-6 text-white"
                                aria-hidden="true"
                              />
                            </div>
                            <p className="ml-16 truncate text-sm font-medium text-gray-500">
                              {item.name}
                            </p>
                          </dt>
                          <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
                            <p className="text-2xl font-semibold text-[#18181A]">
                              {item.stat}
                            </p>
                            <p
                              className={classNames(
                                item.changeType === "increase"
                                  ? "text-green-600"
                                  : "text-red-600",
                                "ml-2 flex items-baseline text-sm font-semibold"
                              )}
                            >
                              {item.changeType === "increase" ? (
                                <ArrowUpIcon
                                  className="h-5 w-5 flex-shrink-0 self-center text-green-500"
                                  aria-hidden="true"
                                />
                              ) : (
                                <ArrowDownIcon
                                  className="h-5 w-5 flex-shrink-0 self-center text-red-500"
                                  aria-hidden="true"
                                />
                              )}
                              <span className="sr-only">
                                {" "}
                                {item.changeType === "increase"
                                  ? "Increased"
                                  : "Decreased"}{" "}
                                by{" "}
                              </span>
                              {item.change}
                            </p>
                            <div className="absolute inset-x-0 bottom-0 bg-gray-50 px-4 py-4 sm:px-6"></div>
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                  {/* Ends here */}
                </div>
                <div className="py-4">
                  <div className="h-64 rounded-lg border-4 border-dashed border-gray-200" />
                </div>
                {/* /End replace */}
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
