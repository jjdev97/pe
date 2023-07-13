'use client'

import { CheckIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Grünflächenpflege',
    description: 'Grünflächen und Grünanlagen prägen Ortsbilder, dienen als „grüne Lungen“ und sind unverzichtbar.',
  },
  { name: 'Heckenschnitt', 
  description: 'Gepflegte Hecken setzen Akzente. Damit sie dicht wachsen, müssen sie regelmäßig beschnitten werden.' },
  {
    name: 'Baumfällung und -pflege',
    description: 'Ich unterstütze Sie bei sämtlichen Pflegemaßnahmen rund um den Baum. Dabei ist mein primäres Ziel vitale und verkehrssichere Bäume zu erhalten bzw. entwickeln.',
  },
  {
    name: 'Unkraut und Laubbeseitigung',
    description: 'Ich kümmere mich um eine fachgerechte Entsorgung des Unkrauts und sorge dafür, dass Ihr Garten auch in Zukunft ein Ort zum Träumen bleibt.',
  },
  { name: 'Bewässerung von Grünflächen', description: 'Reduzieren Sie den Austausch vertrockneter Pflanzen und garantieren Sie gesundes Wachstum in Ihrem Garten.' },
  { name: 'Erdarbeiten', description: 'Werden hier Fehler gemacht, ist das gesamte Bauprojekt in Gefahr.' },
  {
    name: 'Winterdienst',
    description: 'Der Grundstückseigentümer ist zwischen 7.00 – 22.00 Uhr für die Winterwartung auf dem Bürgersteig verantwortlich. Ich räume gerne für Sie den Weg frei.',
  },
  {
    name: 'Weitere Dienstleistungen',
    description: 'Auf Anfrage übernehme ich gerne auch weitere Dienstleistungen in Ihrem Garten.',
  },
]

export default function Garten() {
  return (
    <section className=" bg-white overflow-y-auto">
    <div className="bg-white h-screen py-16 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div>
            <h2 className="text-base font-semibold leading-7 gap-x-4 gap-y-5 text-indigo-600">Ihr Garten in besten Händen.</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Grünpflege</p>
            <p className="mt-6 text-base leading-7 text-gray-600">
              Ein gepflegter Garten verbessert das Wohlbefinden und die Lebensqualität. Sie haben keine Zeit, sich selbst um Ihren Garten zu kümmern? Kein Problem. Ich helfe gerne.
            </p>
            </div>
          <dl className="col-span-2 grid grid-cols-1 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:gap-y-8">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-9">
                <dt className="font-semibold text-gray-900">
                  <CheckIcon className="absolute left-0 top-1 h-5 w-5 text-indigo-500" aria-hidden="true" />
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
