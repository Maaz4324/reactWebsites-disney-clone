import React from "react";
import avatar1 from "../images/avatar1.jpg";
import andor from "../images/andor.jpg";
import goghs from "../images/goghs.jpg";

function MovieCarousel() {
  return (
    <div>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active w-100">
            <div className="flex rounded bg-boxDark w-11/12 mx-auto pl-5 justify-between">
              <div className="head w-2/5 flex items-start justify-center flex-col">
                <h1 className="text-4xl">Avatar</h1>
                <h4 className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Suscipit architecto veniam laudantium quaerat officiis, velit
                  in odio animi, nostrum sequi optio magni nam obcaecati dolorem
                  temporibus necessitatibus eligendi molestiae asperiores.
                </h4>
              </div>
              <div className="bg-avatar1 w-4/5 h-set bg-no-repeat bg-cover bg-center"></div>
            </div>
          </div>
          <div className="carousel-item w-100">
            <div className="flex rounded bg-boxDark w-11/12 mx-auto pl-5 justify-between">
              <div className="head w-2/5 flex items-start justify-center flex-col">
                <h1 className="text-4xl">Andor</h1>
                <h4 className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Suscipit architecto veniam laudantium quaerat officiis, velit
                  in odio animi, nostrum sequi optio magni nam obcaecati dolorem
                  temporibus necessitatibus eligendi molestiae asperiores.
                </h4>
              </div>
              <div className="bg-andor w-4/5 h-set bg-no-repeat bg-cover bg-center"></div>
            </div>
          </div>
          <div className="carousel-item w-100">
            <div className="flex  rounded bg-boxDark w-11/12 mx-auto pl-5 justify-between">
              <div className="head w-2/5 flex items-start justify-center flex-col">
                <h1 className="text-4xl">
                  The Guardians of the Galaxy Holiday Special
                </h1>
                <h4 className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Suscipit architecto veniam laudantium quaerat officiis, velit
                  in odio animi, nostrum sequi optio magni nam obcaecati dolorem
                  temporibus necessitatibus eligendi molestiae asperiores.
                </h4>
              </div>
              <div className="bg-goghs w-4/5 h-set bg-no-repeat bg-cover bg-center"></div>
            </div>
          </div>
          <div className="carousel-item w-100">
            <div className="flex  rounded bg-boxDark w-11/12 mx-auto pl-5 justify-between">
              <div className="head w-2/5 flex items-start justify-center flex-col">
                <h1 className="text-4xl">Zootopia</h1>
                <h4 className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Suscipit architecto veniam laudantium quaerat officiis, velit
                  in odio animi, nostrum sequi optio magni nam obcaecati dolorem
                  temporibus necessitatibus eligendi molestiae asperiores.
                </h4>
              </div>
              <div className="bg-zootopia w-4/5 h-set bg-no-repeat bg-cover bg-center"></div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev absolute"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default MovieCarousel;
