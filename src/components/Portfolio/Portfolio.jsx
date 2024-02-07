import React, { useEffect } from "react";
import img1 from "../../assets/imgs/port1.png";
import img2 from "../../assets/imgs/port2.png";
import img3 from "../../assets/imgs/port3.png";
import BsModal from "../BsModal/BsModal";

export default function Portfolio() {
  const images = [img1, img2, img3];

  useEffect(() => {
    const openModalBtns = document.querySelectorAll(
      'a[data-bs-toggle="modal"]'
    );
    const lightboxImage = document.querySelector("#lightboxImage");

    openModalBtns.forEach((btn) => {
      const clickHandler = () => {
        let index = parseInt(btn.getAttribute("data-index"));
        const imageSrc = images[index];
        lightboxImage.setAttribute("src", imageSrc);
      };
      btn.addEventListener("click", clickHandler);
    });
  });

  return (
    <>
      <div className="portfolio container py-5 flex-column">
        <div className="secondaryColor text-center">
          <h1 className="py-3 text-uppercase fw-bold">Portfolio Component</h1>

          <p className="d-flex align-items-center justify-content-center">
            <span className="divider mainBg "></span>
            <i className="fa-solid fa-star mx-3"></i>
            <span className="divider mainBg"></span>
          </p>
        </div>

        <div className="images py-3">
          <div className="row g-4">
            <div className="col-md-4">
              <div className="imgBox position-relative">
                <a
                  data-bs-toggle="modal"
                  data-bs-target="#workModal"
                  data-index="0"
                >
                  <img src={img1} alt="" className="w-100 " />
                  <i className="fa-solid fa-plus"></i>
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="imgBox position-relative">
                <a
                  data-bs-toggle="modal"
                  data-bs-target="#workModal"
                  data-index="1"
                >
                  <img src={img2} alt="" className="w-100 " />
                  <i className="fa-solid fa-plus"></i>
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="imgBox position-relative">
                <a
                  data-bs-toggle="modal"
                  data-bs-target="#workModal"
                  data-index="2"
                >
                  <img src={img3} alt="" className="w-100 " />
                  <i className="fa-solid fa-plus"></i>
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="imgBox position-relative">
                <a
                  data-bs-toggle="modal"
                  data-bs-target="#workModal"
                  data-index="0"
                >
                  <img src={img1} alt="" className="w-100 " />
                  <i className="fa-solid fa-plus"></i>
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="imgBox position-relative">
                <a
                  data-bs-toggle="modal"
                  data-bs-target="#workModal"
                  data-index="1"
                >
                  <img src={img2} alt="" className="w-100 " />
                  <i className="fa-solid fa-plus"></i>
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="imgBox position-relative">
                <a
                  data-bs-toggle="modal"
                  data-bs-target="#workModal"
                  data-index="2"
                >
                  <img src={img3} alt="" className="w-100 " />
                  <i className="fa-solid fa-plus"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <BsModal />
      </div>
    </>
  );
}
