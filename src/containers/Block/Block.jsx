import React from "react";

// assets
import "../../assets/styles/containers/block.scss"


function Block() {

  return (
    <div className="lsn-block">
      <section className="lsn-section">
        <p className="lsn-section__text">Blog</p>
        <div className="lsn-button">
          <button className="lsn-button-pink"></button>
          <button className="lsn-button-pink"></button>
          <button className="lsn-button-pink"></button>
          <button className="lsn-button-pink"></button>
        </div>
      </section>
      <article className="lsn-article">
        <p className="lsn-article__text">News</p>
        <div className="lsn-button">
          <button className="lsn-button-blue"></button>
          <button className="lsn-button-blue"></button>
          <button className="lsn-button-blue"></button>
        </div>
      </article>
    </div>
  );
}

export default Block;
