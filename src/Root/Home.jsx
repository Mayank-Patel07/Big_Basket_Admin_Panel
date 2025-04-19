import React from "react";
import "./Root.css";

export default function Home() {
  return (
    <>
      <section class="Home">
        <h1 class="heading">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="90"
            height="60"
            fill="currentColor"
            class="bi bi-cart-fill m-1"
            viewBox="0 0 16 16"
          >
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
          </svg>
          <span className="text-center">Big Basket</span>
        </h1>
        <p class="HomePara">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident ut
          explicabo repellendus! Repudiandae accusamus quas placeat ratione
          necessitatibus voluptates sunt earum laudantium saepe aliquid illo
          officia illum nobis, debitis iste ipsam possimus molestiae tempore quo
          ea eos architecto. Quis, quae rem. Molestias, rem? Consequuntur
          aspernatur tempore reiciendis molestias, delectus dolor.
        </p>
      </section>
    </>
  );
}
