import React from "react";



export const Slide = React.memo(function (StackedCarouselSlideProps) {
  const {
    data,
    dataIndex,
    isCenterSlide,
    swipeTo,
    slideIndex
  } = StackedCarouselSlideProps;

  const coverImage = data[dataIndex].image;
  const text = data[dataIndex].text;
  const studentName = data[dataIndex].studentName;


  return (
    <div className="card-card" draggable={false}>
      <div >
        <div
          className="fill"
          onClick={() => {
            if (!isCenterSlide) swipeTo(slideIndex);
          }}
        />
      </div>
      <div className="fill">
        <div className="description">
          <img
            style={{ width: 100 }}
            alt="j"
            className="cover-image"
            src={coverImage}
          />
          <p>{text}</p>
          <h3>{studentName}</h3>
        </div>
      </div>
    </div>
  );
});
