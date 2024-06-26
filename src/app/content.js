import { Fragment } from "react";

import { Building2Icon, SunIcon, MapIcon, MapPinIcon, CrownIcon, Globe2Icon, RecycleIcon } from "lucide-react";
import Image from "next/image";

import GoogleMapsEmbed from "~/components/google-maps-embed";
import {
  convertKilogramsToTons,
  estimateWorldwideRubbish,
} from "~/util/estimation";
import { RECYCLING_TIPS } from "./constants";

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
          <div className="flex justify-center items-center flex-col">
            <Image
              className="w-full rounded-xl object-fill"
              src="/el-castillo-sunset.jpeg"
              alt="Chichen Itza at sunset, with El Castillo in the foreground and a pink and purple sky in the background."
              width={1920}
              height={1080}
            />
            <span className='text-sm text-zinc-400 mt-3 italic' aria-hidden='true'>
              Chichen Itza at sunset, with El Castillo in the foreground and a pink and purple sky in the background.
            </span>
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
                      <span className="mt-0 text-lg font-semibold">Imposing Structure</span>
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
                      <span className="mt-0 text-lg font-semibold">Architectural Marvel</span>
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
                      <span className="mt-0 text-lg font-semibold">Symbolic Significance</span>
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
                  className="h-[1px] w-[min(100%,_300px)] bg-zinc-500/80 mb-5"
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

              <h3 className="text-3xl text-center mt-3">Just today</h3>
              <div className="flex justify-center">
                <span
                  className="bg-gray-500/80 h-[1px] w-[min(100%,_300px)] mt-0.5 mb-3"
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
      <div className="bg-gradient-to-b from-white dark:from-black via-zinc-300 to-black dark:to-white">
        <section className="pt-32 container mx-auto">
          <div className="flex flex-col justify-center items-center">
            <Image
              className="w-full rounded-xl object-fill shadow-xl border border-gray-800"
              src="/man-among-rubbish-in-ghana.avif"
              alt="A man sitting among rubbish in Ghana, with a large pile of waste in the background."
              width={1920}
              height={1080}
            />
            <span className='text-sm text-zinc-400 mt-3 italic' aria-hidden='true'>
              A man sitting among rubbish in Ghana, with a large pile of waste in the background.
            </span>
          </div>
        </section>
      </div>
      <div className="bg-black dark:bg-white text-white dark:text-black pb-32">
        <div className="container mx-auto">
          <div className='flex items-center justify-center pt-36'>
            <h2 className="text-center w-fit relative">
              <span className="w-fit">Global Waste Generation</span>
              <Globe2Icon size={48} className='absolute top-12 -right-14' aria-hidden='true' />
            </h2>
          </div>
          <p className='text-center'>
            Studies suggest the world produces around <span className='bg-lime-200 text-black p-1'>2.12 billion tons of municipal solid waste</span> (MSW) annually.
          </p>
        </div>
        <div className='container mx-3 sm:mx-auto pt-5'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 [&_span]:text-center'>
            <span>
              <b>Scale of the Problem:</b><br /> The world generates a staggering amount of waste
              every year. Estimates suggest around 2.12 billion tons of municipal solid waste (MSW)
              is produced globally.
            </span>
            <span>
              <b>Types of Waste:</b><br /> MSW refers to everyday household waste, but it doesn't
              capture the full picture. Other waste streams include electronic waste (e-waste),
              construction and demolition waste, and industrial waste.
            </span>
            <span>
              <b>Growing Problem:</b><br /> Waste generation is expected to rise significantly in
              the coming decades, driven by factors like population growth and increasing consumption.
            </span>
          </div>
        </div>
        <div className="container mx-auto">
          <div className='flex items-center justify-center pt-36'>
            <h2 className="text-center w-fit relative">
              <span className="w-fit">Rubbish Generation in the United Kingdom</span>
              <CrownIcon size={48} className='absolute top-12 -right-14' aria-hidden='true' />
            </h2>
          </div>
          <p className='text-center'>
            Estimates suggest figures around <span className="bg-lime-200 text-black p-1">30.6
              million tons</span> of household waste were produced in the UK in 2021.
          </p>
        </div>
        <div className='container mx-3 sm:mx-auto pt-5'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10 [&_span]:text-center'>
            <span>
              <b>National Numbers:</b><br /> While the exact daily or monthly figures for Manchester
              are unavailable, the UK provides some national context.
            </span>
            <span>
              <b>Yearly Generation:</b><br /> In the UK, data suggests roughly 290 million tonnes of
              waste were produced in 2008, with household waste alone reaching almost 30 million
              tonnes in 2012 according to the Waste Atlas Platform.
            </span>
            <span>
              <b>Waste per Capita:</b><br /> The average person in the UK throws away a little over
              a thousand pounds of waste per year, with variations depending on location.
            </span>
          </div>
        </div>
      </div>
      <div className='bg-gradient-to-b from-black dark:from-white to-green-400 dark:to-green-900 h-36' />
      <div className='bg-green-400 dark:bg-green-900 pt-32 pb-24'>
        <div className='flex justify-center items-center'>
          <RecycleIcon size={48} aria-hidden='true' />
        </div>
        <h2 className='text-center font-bold mb-5'>
          Tips to Recycling Better
        </h2>
        <div className='container mx-3 sm:mx-auto pt-5'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10 [&_span]:text-center'>
            {RECYCLING_TIPS.map(function ({ topic, tip }) {
              return (
                <div key={topic}>
                  <span className='font-semibold text-lg'>{topic}:</span>
                  <p>{tip}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Content;
