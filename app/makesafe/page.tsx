import { MdOutlineHealthAndSafety } from "react-icons/md";
import { Header } from "~/components/header";

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
    name: 'Database backups.',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
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
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.washingtonpost.com%2Frw%2F2010-2019%2FWashingtonPost%2F2014%2F07%2F05%2FNational-Politics%2FImages%2FFatal_Rowhouse_Fire-0324e-4621.jpg%3Fuuid%3DSfOFpgSdEeSP0DpmPfporA&f=1&nofb=1&ipt=5f21db4fd1ea0daa5fa3a0ec1b3a695b5d9530bc0e558d00647676f9f668005c&ipo=images"
            alt="Product screenshot"
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
