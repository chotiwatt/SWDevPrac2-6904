import Banner from "@/components/Banner";
import Card from "@/components/Card";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <Banner />
      <section className={styles.venues}>
        <h2>Recommended Venues</h2>
        <div className={styles.cardList}>
          <Card imgSrc="/img/bloom.jpg" venueName="The Bloom Pavilion" />
          <Card imgSrc="/img/sparkspace.jpg" venueName="Spark Space" />
          <Card imgSrc="/img/grandtable.jpg" venueName="The Grand Table" />
        </div>
      </section>
    </main>
  );
}
