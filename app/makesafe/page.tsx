import React from "react";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { Header } from "~/app/makesafe/header";

const features = [
  {
    name: 'Structural Code Compliance',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: MdOutlineHealthAndSafety,
  },
  {
    name: 'Post Fire Response',
    description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
    icon: MdOutlineHealthAndSafety,
  },
  {
    name: 'IBS and IRC Compliance.',
    description: 'T Savage has an award winning Make Safe team. our mantra is "get in and get out and leave things safe enough we can sleep at night. our .',
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
        </div>
      </div>
    </div>
    </section>
  )
}
