import Image from "next/image";
import styles from "../styles/Home.module.css";
import Banner from "./components/Banner";
import Card from "./components/card";


async function handleViewStoreBtnClick () {
  'use server';
  console.log("View btn");
}

export default async function Home() {
  
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Banner
         buttonText="View stores nearby" 
         handleOnClick={handleViewStoreBtnClick} 
        />
        <div className={styles.heroImage}>
          <Image
            src="/static/heroImage.png" 
            alt="coffee image" 
            width={700} height={400} 
          />
        </div>
        <Card
         name="Dark horse coffe" 
         imageUrl="/static/heroImage.png" 
         href="/coffee-store/darkhorse-coffee" 
        />
      </main>
    </div>
  )
}
