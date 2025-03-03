import { Link } from "react-router-dom";

import IndividualTherapySection from "./Services/IndividualTherapySection";
import CollectiveTherapySection from "./Services/CollectiveTherapySection";
import FormationsSection from "./Services/FormationsSection";
import Faq from "./HomePage/Faq";

export default function Example() {
  return (
    <div className="relative isolate overflow-hidden bg-stone-50">
      <svg
        aria-hidden="true"
        className="absolute inset-0 -z-10 size-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
      >
        <defs>
          <pattern
            x="50%"
            y={-1}
            id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
            width={200}
            height={200}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <rect
          fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)"
          width="100%"
          height="100%"
          strokeWidth={0}
        />
      </svg>
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:shrink-0 lg:pt-8">
          <div className="mt-24 sm:mt-32 lg:mt-16 space-x-6">
            {" "}
            <h1 className="mt-10 text-pretty text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
              Deploy to the cloud with confidence
            </h1>
          </div>

          <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <Link
              to="/contact"
              className="rounded-md bg-amber-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Contact Us
            </Link>
            <Link
              to="/services"
              className="text-sm/6 font-semibold text-amber-800 hover:text-amber-500 "
            >
              Learn more <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
              <img
                alt="App screenshot"
                src="https://media.istockphoto.com/id/1321372162/fr/photo/un-professionnel-de-la-sant%C3%A9-mentale-prend-des-notes-lors-dune-s%C3%A9ance-de-counseling.jpg?s=612x612&w=0&k=20&c=WdZ86Cx4clRHwKwLD46VodFX5LBX1jixlMwKtxh-SSo="
                width={2432}
                height={1442}
                className="w-[76rem] rounded-md shadow-2xl ring-1 ring-gray-900/10"
              />
            </div>
          </div>
        </div>
      </div>
      <IndividualTherapySection />
      <CollectiveTherapySection />
      <FormationsSection />
      <Faq />
    </div>
  );
}
