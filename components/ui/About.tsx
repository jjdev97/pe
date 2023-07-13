'use client'

import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import {
  AcademicCapIcon,
  CheckCircleIcon,
  HandRaisedIcon,
  RocketLaunchIcon,
  SparklesIcon,
  SunIcon,
  UserGroupIcon,
} from '@heroicons/react/20/solid'

const benefits = [
  'Termintreu und Kundenorientiert',
  'hohe Qualität zu fairen Preisen',
  'Dienstleistungen am Haus und Garten',
  'Kostenlose Beratung und Angebotserstellung',
  'Kostenlose Anfahrt im Kreis Düren',
  'Langjährige Erfahrung',
]

export default function About() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
<div className="h-screen overflow-y-auto">
  {/* CTA section */}
  <div className="relative isolate -z-10 mt-8 sm:mt-8">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto flex flex-col gap-6 bg-white/5 px-4 py-8 ring-1 ring-white/10 sm:rounded-3xl sm:p-6 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-10 xl:gap-x-10">
        <img
          className="h-60 w-full object-cover shadow-xl lg:h-80 lg:w-96 lg:flex-none lg:rounded-2xl"
          src="/logo-weiss1.jpeg"
          alt="t-shirt bedruckt mit dem Logo von Patrick Eckstein"
        />
        <div className="w-full flex-auto">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
            Wilkommen auf meiner Seite
          </h2>
          <p className="mt-4 text-base leading-6 text-gray-300 sm:text-lg sm:leading-7">
            Mein Name ist <strong className="font-bold tracking-tight text-white">Patrick Eckstein</strong> und ich bin im Bereich Garten- und Hausmeisterdienstleistungen tätig. Ich habe Erfahrung in allen Arten von <strong className="font-bold tracking-tight text-white">Gartenarbeiten</strong>, von der Rasenpflege über Hecken- und Baumschnitt bis hin zur Gartengestaltung. Außerdem biete ich Ihnen <strong className="font-bold tracking-tight text-white">professionelle Hausmeisterdienstleistungen</strong> an, wie z.B. Kleinreparaturen, Renovierungen, Entrümpelungen und Winterdienst.
          </p>
          <ul className="mt-6 grid gap-y-2 text-sm leading-5 text-white sm:grid-cols-2 sm:text-base sm:leading-6 lg:grid-cols-3 lg:text-lg lg:leading-7">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-center gap-2">
                <CheckCircleIcon className="h-5 w-4 flex-none" aria-hidden="true" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <a href="#" className="text-sm font-semibold leading-5 text-indigo-400">
              Erfahre mehr über meine Arbeit <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div
      className="absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center blur-3xl"
      aria-hidden="true"
    >
      <div
        className="aspect-[1318/752] w-[82.375rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25"
        style={{
          clipPath:
            'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
        }}
      />
    </div>
  </div>
</div>
  )
}
