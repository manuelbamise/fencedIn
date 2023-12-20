import "./App.css";

const App = () => {
  return (
    <>
      <nav className="bg-lime-500 items-center flex justify-center uppercase h-16">
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
      <header className="bg-teal-400">
        <section className="px-4">
          <h1 className="text-9xl ">fencedIn</h1>
          <p className="text-3xl ">Quality and Secure fences for farmers</p>
        </section>
        <section className="flex items-center justify-center p-2">
          <a
            href=""
            className=" border p-2 text-xl rounded ring hover:bg-teal-800 hover:rounded-none hover:text-white"
          >
            Welcome
          </a>
        </section>
      </header>
      <main>
        <h2>About Us</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
          accusantium exercitationem tempore facilis! Mollitia magni corrupti,
          expedita illo soluta commodi esse voluptatibus quidem sapiente qui
          aut, nihil nemo placeat laborum.
        </p>
        <section>
          <section>
            <h4>Our Mission</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
              fugiat voluptate, quos, quod dolor inventore autem mollitia quas
              harum amet veniam velit impedit doloremque exercitationem fugit.
              Saepe quam repudiandae omnis.
            </p>
          </section>
          <section>
            <h4>Our Vision</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni
              incidunt quod nihil cum natus totam, saepe, quo autem distinctio
              animi architecto, quasi officia harum soluta doloribus alias illo
              beatae eaque.
            </p>
          </section>
        </section>
        <section>
          <h3>Why choose us?</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
            accusamus eligendi at nisi reiciendis vero vitae iure maxime quaerat
            quisquam nesciunt assumenda, impedit a voluptates aliquam! Quae
            fugiat at corporis!
          </p>
        </section>
        <section>
          <h3>Testimonials</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Dignissimos molestiae eum voluptatibus ex accusantium provident
            facere ad culpa, dolores deleniti nostrum ipsum rem, omnis eveniet
            consequuntur natus repellat vitae perferendis. Eius, quis laboriosam
            asperiores nostrum perspiciatis itaque porro fuga saepe ab qui
            quidem, harum, minima officiis? Temporibus unde aut culpa provident,
            at pariatur est eius, praesentium dicta iusto enim ipsa.
          </p>
        </section>
        <section>
          <h3>Q/A</h3>
          <ul>
            <li>
              qusetion <br />
              <i>answer</i>
            </li>
          </ul>
        </section>
      </main>
      <footer>
        <section>
          <h2>fencedIn</h2>
          <ul>
            <li>facebook</li>
            <li>instagram</li>
            <li>twitter/X</li>
          </ul>
        </section>
        <section>
          <a href="mailto:">support@fencedIn.com</a>
          <a href="tel:+">Contact us</a>
        </section>
      </footer>
    </>
  );
};

export default App;
