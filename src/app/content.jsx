import { Fragment } from "react";

import { Building2Icon, SunIcon, MapIcon, MapPinIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import GoogleMapsEmbed from "~/components/google-maps-embed";
import {
  convertKilogramsToTons,
  estimateWorldwideRubbish,
} from "~/util/estimation";

function Content() {
  return (
    <Fragment>
      <div className="container mx-3 md:mx-auto mb-32">
        <div className="mt-[12vh]">
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 text-sm rounded-3xl bg-lime-200">
                X6 C2.2
              </span>
              <span className="text-sm text-black/50 dark:text-white/50">
                Earth Month
              </span>
            </div>
          </div>
          <h1 className="text-6xl text-center font-bold mt-10 mb-8">
            Chichen Itza
          </h1>
          <div className="flex">
            <Image
              className="w-full rounded-xl object-fill"
              src="/el-castillo-sunset.jpeg"
              alt="Chichen Itza at sunset, with El Castillo in the foreground and a pink and purple sky in the background."
              width={1920}
              height={1080}
            />
          </div>
          <main>
            <section className="mt-10">
              <p className="text-black/60 dark:text-white/60">
                Kukulcan's pyramid, also known as El Castillo (Spanish for "the
                Castle"), is a majestic Mesoamerican step-pyramid that holds a
                central place in the Mayan archaeological site of Chichen Itza,
                located in Mexico's Yucatan Peninsula, having been built
                over&nbsp;
                <b>5,100 years ago</b>.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 xl:gap-12 [&_p]:text-justify mt-12">
                <div>
                  <div>
                    <div className="flex flex-col items-center gap-1">
                      <Building2Icon size={18} aria-hidden="true" />
                      <h2 className="mt-0 text-lg">Imposing Structure</h2>
                    </div>
                    <p>
                      The pyramid's grandeur is undeniable. It's the tallest
                      pyramid at Chichen Itza, standing at a height of
                      around&nbsp;
                      <b>24 meters</b> (<b>78 feet</b>) on a rectangular base
                      with sides measuring <b>55.5 meters</b> (<b>182 feet</b>)
                      wide. On top of the highest platform rests a six-meter
                      tall temple, adding to its impressive stature.
                    </p>
                  </div>
                </div>
                <div>
                  <div>
                    <div className="flex flex-col items-center gap-1">
                      <MapIcon size={18} aria-hidden="true" />
                      <h2 className="mt-0 text-lg">Architectural Marvel</h2>
                    </div>
                    <p>
                      The design showcases the remarkable precision and planning
                      of the Maya. Each of the four sides features a grand
                      staircase with <b>91 steps</b>. Adding the temple at the
                      summit brings the total number of steps to <b>365</b>,
                      symbolically corresponding to the days in a solar year
                      according to the Maya calendar.
                    </p>
                  </div>
                </div>
                <div>
                  <div>
                    <div className="flex flex-col items-center gap-1">
                      <SunIcon size={18} aria-hidden="true" />
                      <h2 className="mt-0 text-lg">Symbolic Significance</h2>
                    </div>
                    <p>
                      The pyramid's very name, Kukulcan, is steeped in Mayan
                      mythology. Kukulcan is the feathered serpent god, a deity
                      representing wind, creation, and life. The pyramid itself
                      is believed to serve as a giant representation of this
                      revered god.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <section className="grid grid-cols-1 sm:grid-cols-2 grid-rows-1 mt-24">
              <div>
                <div className="flex items-center gap-1 pointer-events-none select-none">
                  <MapPinIcon size={20} className="text-gray-500" />
                  <span className="text-gray-500">97751 Yucatan, Mexico</span>
                </div>
                <GoogleMapsEmbed />
              </div>
              <div>
                <h3 className="text-center mb-3">Intriguing Features</h3>
                <ul className="flex flex-col gap-3">
                  <li className="text-lg text-justify">
                    <b>The Play of Light and Shadow:</b> Twice a year during the
                    spring and autumn equinoxes, the setting sun creates a
                    fascinating illusion on the northern staircase. The shadows
                    cast by the steps take the shape of seven triangles that
                    gradually descend the pyramid, culminating in a serpent's
                    head at the base - a captivating representation of the
                    descending Kukulcan.
                  </li>
                  <li className="text-lg text-justify">
                    <b>A Hidden Depth:</b> Modern exploration has unveiled a
                    fascinating secret beneath the pyramid. Researchers
                    discovered a large cenote, a natural sinkhole, directly
                    under the structure. This adds another layer of intrigue to
                    the pyramid's story, leaving us to wonder about the
                    significance of this geographical feature to the Maya who
                    built it.
                  </li>
                </ul>
                <h3 className="text-center">A lasting Legacy</h3>
                <p>
                  Kukulcan's pyramid stands as a testament to the architectural
                  and astronomical ingenuity of the Mayan civilization. It
                  continues to be a major draw for visitors, a powerful symbol
                  of a bygone era, and a reminder of the deep connection the
                  Maya held with their gods and the natural world.
                </p>
              </div>
            </section>
            <section className="mt-32 rounded-xl p-3">
              <div className="flex flex-col justify-center items-center">
                <h2 className="text-center font-bold">
                  Why we chose this monument
                </h2>
                <div
                  aria-hidden="true"
                  className="h-[1px] w-[min(100%,_300px)] bg-zinc-500 mt-2"
                />
              </div>
              <div className="md:max-w-screen-sm lg:max-w-screen-lg mx-3 md:mx-auto">
                <p className="text-justify">
                  The human race generates&nbsp;
                  <b>2.12 billion tons of rubbish every year</b> and given that
                  the weight of Kukulcan's pyramid is <i>estimated</i>&nbsp;
                  between&nbsp;
                  <b>6.5 and 13 million tons</b>,&nbsp;
                  <span className="bg-lime-200 p-1">
                    the human race generates over&nbsp;
                    <b>326 pyramids of rubbish every year</b>
                  </span>
                  .
                </p>
                <p className="mt-2 text-center">
                  This is why we chose this monument to raise awareness about
                  the importance of recycling and reducing waste.
                </p>
              </div>

              <h3 className="text-3xl text-center">Just today</h3>
              <div className="flex justify-center">
                <span
                  className="bg-gray-500/80 h-[1px] w-[min(100%,_55px)] mt-1 mb-3"
                  aria-hidden="true"
                />
              </div>

              <div className="flex justify-center">
                <span className="text-3xl text-center">
                  The world has produced&nbsp;
                  <b>
                    {new Intl.NumberFormat("en", {
                      maximumFractionDigits: 0,
                    }).format(
                      convertKilogramsToTons(estimateWorldwideRubbish())
                    )}
                  </b>
                  &nbsp;tons of rubbish
                </span>
              </div>
            </section>
          </main>
        </div>
      </div>
      <footer className="w-screen p-5 border-t border-t-gray-200 dark:border-t-gray-800">
        <div className="container mx-auto text-zinc-500">
          <span className="text-sm">
            Made w/ ❤️ by students at&nbsp;
            <Link
              href="https://www.ef.co.uk/ilsd/schools/manchester/"
              target="_blank"
              className="underline text-blue-600/80"
            >
              EF Manchester
            </Link>
            .
          </span>
        </div>
      </footer>
    </Fragment>
  );
}

export default Content;
