import { Header } from "~/components/navigation";

const stats = [
        { id: 1, name: 'Fires Happen', value: 'MAKE SAFE' },
        { id: 2, name: 'Structural Instability', value: 'MAKE SAFE' },
        { id: 3, name: 'City Compliance', value: 'MAKE SAFE' },
      ]
      
      export default function Page() {
        return (
        <section id="make safe">
        <Header />
        <text className="text-base leading-7 text-gray-600">Resources</text>
          <div className="bg-white py-24 sm:py-32">            
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                {stats.map((stat) => (
                  <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                    <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
                    <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>
        )
      }