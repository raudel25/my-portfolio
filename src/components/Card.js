import React from "react";
import {
  CalendarIcon,
  LocationMarkerIcon,
} from "@heroicons/react/solid";


export default function Card({ item }) {
  return (
    <div className="p-4 md:w-1/2 w-full">
      <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded-lg shadow-lg flex flex-col items-center text-center">
        {/* Imagen */}
        <img
          alt="company"
          src={item.image}
          className="w-20 h-20 object-cover object-center rounded-full mb-4"
        />

        {/* Nombre y Empresa */}
        <h2 className="title-font font-semibold text-white text-lg">
          {item.name}
        </h2>
        <p className="text-gray-400 text-sm mb-2">{item.company}</p>

        {/* Ubicación */}
        <div className="flex items-center text-gray-400 text-xs mb-3">
          <LocationMarkerIcon className="w-4 h-4 mr-1" />
          <span>{item.location}</span>
        </div>

        {/* Fechas */}
        <div className="flex items-center text-gray-400 text-xs mb-4">
          <CalendarIcon className="w-4 h-4 mr-2" />
          <div className="flex flex-wrap justify-center">
            {item.dates.map((d, ind) => (
              <span key={ind} className="flex items-center">
                {d[0]} - {d[1]}
                {ind !== item.dates.length - 1 && (
                  <span className="h-4 w-px bg-gray-600 mx-2" />
                )}
              </span>
            ))}
          </div>
        </div>

        {/* Descripción */}
        <p className="leading-relaxed text-sm mb-4">{item.quote}</p>

        {/* Skills */}
        <div className="flex flex-wrap gap-2 justify-center">
          {item.skills.map((skill, idx) => (
            <span
              key={idx}
              className="px-2 py-1 bg-green-600 bg-opacity-20 text-green-400 rounded-full text-xs font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
