import React from "react";

const MenuCard = ({ Menudata }) => {
  return (
    <>
      <section className="main-card--cointainer">
        {Menudata.map((curElem) => {
          const { id, name, category, image, description } = curElem;
          return (
            <div className="card-container" key={id}>
              <div className="card">
                <div className="card-body">
                  <span className="card-number card-circle subtle">{id}</span>
                  <span className="card-author subtle">{name}</span>
                  <span className="card-title">{name}</span>
                  <span className="card-description subtle">{description}</span>
                  <div className="card-read">Read</div>
                  <div>
                    <img src={image} alt="images" className="card-media" />
                    <span className="card-tag subtle">Order Now</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default MenuCard;
