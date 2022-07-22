import { useState } from "react";
import "./Gallery.css";
import {
  FaChevronCircleLeft,
  FaChevronCircleRight,
  FaTimesCircle,
} from "react-icons/fa";

const Gallery = () => {
  const galleryImages = [
    {
      img: "https://i.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68",
    },
    {
      img: "https://i.picsum.photos/id/1008/5616/3744.jpg?hmac=906z84ml4jhqPMsm4ObF9aZhCRC-t2S_Sy0RLvYWZwY",
    },
    {
      img: "https://i.picsum.photos/id/1011/5472/3648.jpg?hmac=Koo9845x2akkVzVFX3xxAc9BCkeGYA9VRVfLE4f0Zzk",
    },
    {
      img: "https://i.picsum.photos/id/1018/3914/2935.jpg?hmac=3N43cQcvTE8NItexePvXvYBrAoGbRssNMpuvuWlwMKg",
    },
    {
      img: "https://i.picsum.photos/id/1025/4951/3301.jpg?hmac=_aGh5AtoOChip_iaMo8ZvvytfEojcgqbCH7dzaz-H8Y",
    },
    {
      img: "https://i.picsum.photos/id/1023/3955/2094.jpg?hmac=AW_7mARdoPWuI7sr6SG8t-2fScyyewuNscwMWtQRawU",
    },
    {
      img: "https://i.picsum.photos/id/1024/1920/1280.jpg?hmac=-PIpG7j_fRwN8Qtfnsc3M8-kC3yb0XYOBfVzlPSuVII",
    },
  ];

  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = (index) => {
    setSlideNumber(index);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const prevSlide = () => {
    slideNumber === 0
      ? setSlideNumber(galleryImages.length - 1)
      : setSlideNumber(slideNumber - 1);
  };

  const nextSlide = () => {
    slideNumber === galleryImages.length - 1
      ? setSlideNumber(0)
      : setSlideNumber(slideNumber + 1);
  };

  return (
    <div>
      <div className="galleryTitle">Gallery</div>
      {openModal && (
        <div className="sliderWrap">
          <FaTimesCircle
            className="btnClose"
            onClick={handleCloseModal}
            size={22}
          />
          <FaChevronCircleLeft
            className="btnPrev"
            onClick={prevSlide}
            size={22}
          />
          <FaChevronCircleRight
            className="btnNext"
            onClick={nextSlide}
            size={22}
          />
          <div className="fullScreenImage">
            <img src={galleryImages[slideNumber].img} alt="" />
          </div>
        </div>
      )}
      <div className="galleryWrap">
        {galleryImages &&
          galleryImages.map((slide, index) => {
            return (
              <div
                className="single"
                key={index}
                onClick={() => handleOpenModal(index)}
              >
                <img src={slide.img} alt="" />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Gallery;
