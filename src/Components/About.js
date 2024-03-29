import React from "react";

export default function About() {
  return (
    <>
      <div className="container display-4">
        ABOUT <b>US</b>
      </div>
        <div id="list-example" className="list-group">
          <a className="list-group-item list-group-item-action" href="#list-item-1">
            Item 1
          </a>
          <a className="list-group-item list-group-item-action" href="#list-item-2">
            Item2
          </a>
          <a className="list-group-item list-group-item-action" href="#list-item-3">
            Item 3
          </a>
          <a className="list-group-item list-group-item-action" href="#list-item-4">
            Item 4
          </a>
        </div>
        <div
          data-spy="scroll"
          data-target="#list-example"
          data-offset="0"
          className="scrollspy-example"
        >
          <h4 id="list-item-1">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt voluptatem, voluptas maxime, consectetur atque tempora sapiente aut quis ab recusandae accusamus aspernatur inventore dignissimos accusantium provident alias temporibus tempore. Pariatur illo amet saepe minus suscipit debitis aut expedita! Delectus enim fuga, eum eligendi laboriosam explicabo.</h4>
          <p>...</p>
          <h4 id="list-item-2">Item 2</h4>
          <p>...</p>
          <h4 id="list-item-3">Item 3</h4>
          <p>...</p>
          <h4 id="list-item-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi in cumque animi nam placeat voluptas, ducimus, iure quod molestias aliquam suscipit aut. Officia, repudiandae minima? Veritatis perspiciatis dolore et eligendi enim praesentium corrupti inventore eius officiis veniam repellat facilis reiciendis doloremque adipisci, sint a suscipit delectus minima labore quo eos fugit provident doloribus atque! Libero, deleniti ad. Fugiat nihil reiciendis culpa modi incidunt atque. Ducimus impedit quisquam incidunt recusandae? Ipsa aperiam itaque molestiae commodi nobis fugiat sit temporibus reprehenderit blanditiis odio incidunt nemo consequatur sequi, voluptatem vel consequuntur exercitationem, ratione ipsum, a necessitatibus nihil. Consectetur nisi impedit fugit quaerat similique!</h4>
          <p>...</p>
      </div>
    </>
  );
}
