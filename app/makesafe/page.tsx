import { MdOutlineHealthAndSafety } from "react-icons/md";
import { Header } from "~/components/navigation";
import Image from 'next/image';

const features = [
  {
    name: 'Structural Code Compliance',
    description:
      'whether your managing a recent fire or a decades old abandoned row home; we can help/ We are the most experienced team in Philadelphia working with these make safe compliance porjects. Safety is our name. let us take care of the risky stuff. ',
    icon: MdOutlineHealthAndSafety,
  },
  {
    name: 'Post Fire Response',
    description: 'After fires run their course often the water damage from the firefighters causes substancial structural vulnerabilities. We are ready to spring into action day or not and shore up compromised structures and get pumps discharging water, fans drying interior elements. Give us a call today.',
    icon: MdOutlineHealthAndSafety,
  },
  {
    name: 'Unauthorized / Unpermitted Work Make Safes',
    description: 'We are not here to judge, but the judge said you gotta get a third party in to safe things up. We can help with that too. ',
    icon: MdOutlineHealthAndSafety,
  },
]

export default function Resources() {
  return (
    <section id="navigation">
        <Header></Header> 
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">T. Savage Construction</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Makes Safe in Philadelphia</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                When buildings need rescued; T Savage can get it done.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <Image
            src="public/images/monkeybidness1.png"
            alt="temp"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
    </section>
  )
}
