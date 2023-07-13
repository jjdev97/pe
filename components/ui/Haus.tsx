'use client'

import { CheckIcon } from '@heroicons/react/20/solid'

const features2 = [
  {
    name: 'Hausmeistertätigkeiten',
    description: 'Eigentümer fördern mit einem Hausmeister nicht nur den Werterhalt Ihres Objektes, sondern können auch wertvolle Zeit sparen.',
  },
  { name: 'Renovierungs- & Reinigungsarbeiten', 
  description: 'Ich reinige, renoviere, malere und tapeziere fachgerecht.' },
  {
    name: 'Ablesen der Zählerstände',
    description: 'Ich lese die Zählerstände ab und berate Sie um den Jahresverbrauch von Strom, Gas und Wärme richtig einzuschätzen.',
  },
  {
    name: 'Schlüssel Notdienst',
    description: '"Das würde mir doch niemals passieren". Falls doch, rufen Sie einfach an.',
  },
  {
    name: 'Dachflächen- und Dachrinnenreinigung',
    description: 'Perfekter Schutz für Ihr Dach für viele Jahre, durch professionelle Dachreinigungsarbeiten.',
  },
  {
    name: 'Weitere Dienstleistungen',
    description: 'Auf Anfrage übernehme ich gerne auch weitere Dienstleistungen für Ihr Zuhause.',
  },
]

export default function Haus() {
  return (
    <section className="mb-8 bg-black overflow-y-auto">
    <div className="bg-white/5 text-white h-screen py-24 sm:py-32">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-4 gap-y-8 sm:gap-y-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <div>
          <h2 className="text-base font-semibold leading-7 text-white">Ihr Zuhause in besten Händen.</h2>
          <p className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-xl">Hausmeisterdienstleistungen</p>
          <p className="mt-6 text-base leading-7 text-white">
            Hausmeisterdienstleistungen erhalten und steigern den Wert und die Sicherheit Ihrer Immobilie. Außerdem sparen Sie Zeit und Mühe, wenn Sie diese Arbeiten von einem Fachmann durchführen lassen. Ich bin qualifiziert und erfahren in allen Bereichen der Hausmeisterdienstleistungen und kann Ihnen eine hohe Qualität und Zuverlässigkeit garantieren.
          </p>
        </div>
        <dl className="col-span-2 grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2 lg:gap-y-8">
          {features2.map((feature) => (
            <div key={feature.name} className="relative pl-8 sm:pl-9">
              <dt className="font-semibold text-white">
                <CheckIcon className="absolute left-0 top-1 h-4 w-4 text-white" aria-hidden="true" />
                {feature.name}
              </dt>
              <dd className="mt-2">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  </div>  
  </section>
  )
}
