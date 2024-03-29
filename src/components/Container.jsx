import "../assets/css/container.css";
import TestimonialCard from "./microComponents/TestimonialCard";
import QuestionRow from "./microComponents/QuestionRow";
import { Facebook, Instagram, Twitter } from "react-bootstrap-icons";
import OurWorkers from "./microComponents/OurWorkers";
import workerRecords from "../assets/json/ourWorkers.json";
import PastProducts from "./microComponents/PastProducts";
// import { useEffect, useState } from "react";

const Container = () => {
  // const [workers, setWorkers] = useState([]);

  return (
    <>
      {/* navigation bar */}
      <nav className=" bg-black text-white items-center flex justify-center uppercase h-16">
        <ul className="  flex align-center justify-between w-[52%] px-4 text-xl">
          <a href="" className="navLink hover:rounded-md">
            Home
          </a>
          <a href="" className="navLink hover:rounded-md">
            About Us
          </a>
          <a href="" className="navLink hover:rounded-md">
            Testimonials
          </a>
          <a href="" className="navLink hover:rounded-md">
            Contact
          </a>
        </ul>
      </nav>

      {/* Header with the hero image */}
      <header className="bg-teal-400 pageLogo h-[45rem] w-[100%] flex flex-col justify-around">
        <section className="px-4 text-right">
          <h1 className="text-9xl ">
            fenced<span className="text-stapleGreen">In</span>
          </h1>
          <p className="text-3xl ">Quality and Secure fences for farmers</p>
        </section>
        <section className="flex items-center justify-center p-2">
          <a
            href="#aboutSection"
            className="rounded-xl p-2 text-xl hover:rounded  bg-black text-white  hover:bg-stapleGreen  hover:text-white"
          >
            Welcome
          </a>
        </section>
      </header>
      <main className="mt-4">
        {/* First About section */}
        <h2
          id="aboutSection"
          className="border border-black text-center text-3xl"
        >
          About Us
        </h2>
        <p className="p-2 mx-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
          accusantium exercitationem tempore facilis! Mollitia magni corrupti,
          expedita illo soluta commodi esse voluptatibus quidem sapiente qui
          aut, nihil nemo placeat laborum.
        </p>
        <section className="flex flex-col items-center justify-center">
          <h4 className="text-center text-2xl border w-full">Meet the team</h4>
          <div className="border border-black w-[80rem] text-center">
            {workerRecords && workerRecords
              ? workerRecords.map((record) => {
                  return (
                    <>
                      <OurWorkers
                        key={record.id}
                        fName={record.fName}
                        lName={record.lName}
                        title={record.title}
                        image={record.imgLink}
                      />
                    </>
                  );
                })
              : "noDataOnWorkers"}
          </div>
        </section>

        <section className="flex px-3 mb-3">
          <section>
            {/* mission section */}
            <h4 className="text-center text-xl">Our Mission</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
              fugiat voluptate, quos, quod dolor inventore autem mollitia quas
              harum amet veniam velit impedit doloremque exercitationem fugit.
              Saepe quam repudiandae omnis.
            </p>
          </section>
          <section>
            {/* vision section */}
            <h4 className="text-center text-xl">Our Vision</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni
              incidunt quod nihil cum natus totam, saepe, quo autem distinctio
              animi architecto, quasi officia harum soluta doloribus alias illo
              beatae eaque.
            </p>
          </section>
        </section>
        <section>
          {/* reason for choosing section */}
          <h3 className="text-2xl text-center">Why choose us?</h3>
          <p className="mx-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
            accusamus eligendi at nisi reiciendis vero vitae iure maxime quaerat
            quisquam nesciunt assumenda, impedit a voluptates aliquam! Quae
            fugiat at corporis!
          </p>
        </section>
        <section>
          {/* past product section */}
          <h3 className="text-2xl text-center">Our Products</h3>
          <PastProducts />
        </section>
        <section>
          {/* testimonials section */}
          <h3 className="text-2xl text-center">Testimonials</h3>
          <div className="border border-black flex justify-center mx-10 items-center">
            <TestimonialCard />
          </div>
        </section>
        <section className="border mt-3 border-black h-[19rem]">
          {/* question and answer section */}
          <h3 className="text-center text-2xl h-[20%]">Q/A</h3>
          <ul className=" py-2 flex flex-col items-center justify-around outline outline-black h-[80%]">
            <QuestionRow />
            <QuestionRow />
          </ul>
        </section>
      </main>
      <footer className="bg-black text-stapleGreen flex justify-between">
        {/* site footer, extra links and all that */}
        <section className=" h-24 w-[50%]">
          <h2 className="text-3xl h-[20%]">fencedIn</h2>
          <ul className=" md:w-40 text-3xl p-4 h-[80%] flex items-end justify-between">
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <Facebook />
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <Instagram />
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <Twitter />
            </a>
          </ul>
        </section>
        <section className=" border flex flex-col justify-end text-right border-black w-[50%]">
          <div>
            Send us an email:
            <i>
              <a href="mailto:">support@fencedIn.com</a>
            </i>
          </div>
          <div>
            Contact us <a href="tel:+">000-45-FENCEDIN</a>
          </div>
        </section>
      </footer>
    </>
  );
};

export default Container;
