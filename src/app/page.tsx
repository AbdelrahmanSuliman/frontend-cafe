import { client } from "./sanity/client";
import { HERO_QUERY, OUR_STORY_QUERY } from "./sanity/queries";
import { HeroType } from "./types/heroType";
import Navbar from "./components/navbar";
import MenuSection from "./components/menu-section";
import { OurStoryType } from "./types/our-story-type";
import Image from "next/image";

export default async function Home() {
  const hero = await client.fetch<HeroType>(HERO_QUERY);
  const ourStory = await client.fetch<OurStoryType>(OUR_STORY_QUERY);

  return (
    <>
      <Navbar />
      <div
        className="hero min-h-[60vh] sm:min-h-[70vh] lg:min-h-screen"
        style={{
          backgroundImage: `url(${hero.imageUrl})`,
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-lg">
            <h1 className="mb-5 text-7xl font-bold">{hero.title}</h1>
            <p className="mb-5 text-4xl">{hero.description}</p>
            <div className="flex gap-2 justify-center">
              <button id="explore" className="btn btn-primary p-6 text-xl">
                Shop Now
              </button>
              <a className="btn btn-outline p-6 text-xl" href="#story">
                Our Story
              </a>
            </div>
          </div>
        </div>
      </div>

      <section className="flex-col flex justify-center items-center bg-base-300">
        <div className="px-6 py-12 flex flex-col gap-2 items-center">
          <h1 className="text-4xl font-semibold text-center">
            Explore Our Customers&apos; Favorite Coffees
          </h1>
          <p className="text-2xl text-gray-700 p-6 text-center">
            We&apos;ve curated a collection of our most popular blends to make
            finding your next favorite coffee easy
          </p>
        </div>
        <div className="flex flex-row w-full justify-center">
          <MenuSection featuredSection={true} />
        </div>
        <button
          className="link text-3xl m-12 link-primary link-hover"
          id="story"
        >
          Explore Our Entire Menu
        </button>
      </section>

      <section className="bg-base-200 py-20 px-6" id="story">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-5xl font-bold mb-4 text-primary">Our Story</h2>
            <div className="w-20 h-1 bg-primary mb-6"></div>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              {ourStory?.text.replace(/'/g, "&apos;").replace(/"/g, "&quot;")}
            </p>
            <button className="btn btn-primary text-lg px-8">Visit Us</button>
          </div>

          <div className="flex-1 flex justify-center">
            <Image
              src={ourStory?.imageUrl as string}
              alt="Our Story Image"
              width={500}
              height={500}
              className="rounded-2xl object-cover shadow-lg"
            />
          </div>
        </div>
      </section>

      <section className="w-full h-auto bg-primary p-24">
        <footer className="footer sm:footer-horizontal text-white ">
          <nav>
            <h6 className="footer-title">Services</h6>
            <a href="#explore" className="link link-hover">
              Explore
            </a>
            <a href="#story" className="link link-hover">
              Our Story
            </a>
            <a href="#contact" className="link link-hover">
              Contact Us
            </a>
          </nav>
          <nav>
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>©{" "}
            {new Date().getFullYear()} Pour Caf&eacute;. All rights reserved.
          </nav>
          <form>
            <h6 className="footer-title">Newsletter</h6>
            <fieldset className="w-80">
              <label>Enter your email address</label>
              <div className="join">
                <input
                  type="text"
                  placeholder="Enter Email..."
                  className="input input-bordered join-item text-black"
                />
                <button className="btn btn-secondary join-item">
                  Subscribe
                </button>
              </div>
            </fieldset>
          </form>
        </footer>
      </section>
    </>
  );
}
