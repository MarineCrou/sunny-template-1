import { Link } from "react-router-dom";
const jobOpenings = [
  {
    id: 1,
    therapy: "Thérapie familiale",
    description:
      "Quos sunt ad dolore ullam qui. Enim et quisquam dicta molestias. Corrupti quo voluptatum eligendi autem labore.",
  },
  {
    id: 2,
    therapy: "Thérapie de Groupe",
    description:
      "Et veniam et officia dolorum rerum. Et voluptas consequatur magni sapiente amet voluptates dolorum. Ut porro aut eveniet.",
  },
];

export default function CollectiveTherapySection() {
  return (
    <div className="bg-white py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto flex max-w-2xl flex-col items-end justify-between gap-16 lg:mx-0 lg:max-w-none lg:flex-row">
          <div className="w-full lg:max-w-lg lg:flex-auto">
            <h2 className="text-pretty text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
              Collective Therapies
            </h2>
            <p className="mt-6 text-xl/8 text-gray-600">
              Diam nunc lacus lacus aliquam turpis enim. Eget hac velit est
              euismod lacus. Est non placerat nam arcu. Cras purus nibh cursus
              sit eu in id.
            </p>
            <img
              alt=""
              src="https://media.istockphoto.com/id/1995180374/fr/photo/groupe-souriant-de-femmes-diverses-assises-sur-une-terrasse-lors-dune-retraite-de-bien-%C3%AAtre.webp?s=1024x1024&w=is&k=20&c=f8RgCwH8YxlNUxl3FokWbN3Lam2hWolIz4ZyZ0KI0YM="
              className="mt-16 aspect-[6/5] w-full rounded-2xl bg-gray-50 object-cover lg:aspect-auto lg:h-[34.5rem]"
            />
          </div>
          <div className="w-full lg:max-w-xl lg:flex-auto">
            <ul className=" divide-gray-100">
              {jobOpenings.map((opening) => (
                <li key={opening.id} className="py-8">
                  <dl className="relative flex flex-wrap gap-x-3">
                    <dt className="sr-only">Role</dt>
                    <dd className="w-full flex-none text-lg font-semibold tracking-tight text-amber-600">
                      <div>
                        {opening.therapy}
                        <span aria-hidden="true" className="absolute inset-0" />
                      </div>
                    </dd>
                    <dt className="sr-only">Description</dt>
                    <dd className="mt-2 w-full flex-none text-base/7 text-gray-600">
                      {opening.description}
                    </dd>
                    <dt className="sr-only">Salary</dt>
                    <dd className="mt-4 text-base/7 font-semibold text-gray-900">
                      {opening.salary}
                    </dd>
                    <dt className="sr-only">Location</dt>
                    <dd className="mt-4 flex items-center gap-x-3 text-base/7 text-gray-500">
                      <svg
                        viewBox="0 0 2 2"
                        aria-hidden="true"
                        className="size-0.5 flex-none fill-gray-300"
                      >
                        <circle r={1} cx={1} cy={1} />
                      </svg>
                      {opening.location}
                    </dd>
                  </dl>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex border-t border-gray-100 pt-8">
              <Link
                href="/contact"
                className="text-sm/6 font-semibold text-amber-600 hover:text-amber-500"
              >
                Nous contacter <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
