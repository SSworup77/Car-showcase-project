import { CustomFilter, Hero, SearchBar } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <main className='overflow-hidden'>
      <Hero/>
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home_text-container">
          <h1 className="text-4xl font-extrabold text-black-100">Car Catalogue</h1>
          <p>Explore the collection of cars</p>
        </div>
        <div className="home__fiters">
          <SearchBar/>
          <div className="home__filter-container">
            <CustomFilter/>
            <CustomFilter/>
          </div>

        </div>

      </div>
    </main>
  );
}
