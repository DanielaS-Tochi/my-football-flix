import React from "react";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.home}>
      {/* Banner */}
      <div className={styles.banner}>
      <iframe src="https://www.youtube.com/embed/z5ThJIMUHPg?autoplay=1&loop=1&playlist=z5ThJIMUHPg" title="Goles Cuartos de Final 2024" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen className={styles.bannerVideo}></iframe>
        <div className={styles.bannerContent}>
          <button className={styles.bannerCategory}>Libertadores</button>
        </div>
      </div>

      {/* Sección de videos */}
      <div className={styles.videosSection}>
        <h2 className={styles.sectionTitle}>Videos</h2>
        <div className={styles.card}>
          <img
            src="https://www.youtube.com/embed/z5ThJIMUHPg?si=S-FIQijnSGCKlpib"
            alt="Video de goles de la Copa Libertadores"
            className={styles.cardImage}
          />
          <div className={styles.cardContent}>
            <button className={styles.cardCategory}>Libertadores</button>
            <h3 className={styles.cardTitle}>Título:</h3>
            <p className={styles.cardDescription}>
              Descripción breve del video...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
