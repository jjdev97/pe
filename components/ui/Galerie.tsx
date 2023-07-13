'use client'

import React from 'react';

function Galerie() {
  const images = [
    "https://img.freepik.com/fotos-kostenlos/anordnung-mit-walze-und-buerste_23-2148903439.jpg",
    "https://img.freepik.com/fotos-kostenlos/frau-mit-frachtpaketen-bereit-zum-versand-oder-zum-bewegen-stehend-und-lachend_144627-33470.jpg",
    "https://images.unsplash.com/photo-1660361339436-ddd4b85372da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
    "https://images.unsplash.com/photo-1660361339525-643f7d6eed6b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
    "https://images.unsplash.com/photo-1620393508176-1474bd6f6f9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
    "https://images.unsplash.com/photo-1528223871781-8f4c984f6164?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    "https://images.unsplash.com/photo-1523413307857-ef24c53571ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    "https://img.freepik.com/fotos-kostenlos/aelterer-mann-der-im-feld-mit-blumen-arbeitet_329181-12466.jpg",
  ]
  return (
    <div className="pt-8 bg-white h-screen overflow-x-auto">
    <div className="container mx-auto px-5 lg:px-32 lg:pt-24 bg-white">
      <div className="text-xl mb-5 font-semibold text-black">Eindrücke meiner Arbeit. </div>
      <div className="-m-1 flex flex-wrap md:-m-2">
        {/* {images.map((image) => (
          <div
            className="flex w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-1 md:p-2"
          >
            <img
              className="block mx-auto h-full object-cover object-center rounded-lg shadow-md"
              src={image}
            />
          </div>
        ))} */}
        <div className="flex w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-1 md:p-2">
            <img className="block mx-auto h-full object-cover object-center rounded-lg shadow-md" src="https://img.freepik.com/fotos-kostenlos/anordnung-mit-walze-und-buerste_23-2148903439.jpg" alt="tapezieren" />
            </div>
            <div className="flex w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-1 md:p-2">
            <img className="block mx-auto h-full object-cover object-center rounded-lg shadow-md" src="https://img.freepik.com/fotos-kostenlos/frau-mit-frachtpaketen-bereit-zum-versand-oder-zum-bewegen-stehend-und-lachend_144627-33470.jpg" alt="umzugshilfe" />
            </div>
            <div className="flex w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-1 md:p-2">
            <img className="block mx-auto h-full object-cover object-center rounded-lg shadow-md" src="https://images.unsplash.com/photo-1660361339436-ddd4b85372da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80" alt="grünfpflege_1" />
            </div>
            <div className="flex w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-1 md:p-2">
            <img className="block mx-auto h-full object-cover object-center rounded-lg shadow-md" src="https://images.unsplash.com/photo-1660361339525-643f7d6eed6b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80" alt="grünfpflege_2" />
            </div>
            <div className="flex w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-1 md:p-2">
            <img className="block mx-auto h-full object-cover object-center rounded-lg shadow-md" src="https://images.unsplash.com/photo-1620393508176-1474bd6f6f9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80" alt="grünfpflege_3" />
            </div>
            <div className="flex w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-1 md:p-2">
            <img className="block mx-auto h-full object-cover object-center rounded-lg shadow-md" src="https://images.unsplash.com/photo-1528223871781-8f4c984f6164?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt="dachreinigung" />
            </div>
            <div className="flex w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-1 md:p-2">
            <img className="block mx-auto h-full object-cover object-center rounded-lg shadow-md" src="https://images.unsplash.com/photo-1523413307857-ef24c53571ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" alt="maler arbeit" />
            </div>
            <div className="flex w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-1 md:p-2">
            <img className="block mx-auto h-full object-cover object-center rounded-lg shadow-md" src="https://img.freepik.com/fotos-kostenlos/aelterer-mann-der-im-feld-mit-blumen-arbeitet_329181-12466.jpg" alt="bewaesserung" />
            </div>
    </div>
    </div>
    </div>
  );
}

export default Galerie;