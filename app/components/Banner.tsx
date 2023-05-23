"use client";

import { MouseEvent } from "react";
import styles from "./banner.module.css";

interface BannerProps {
    buttonText: string;
    // handleOnClick(event: MouseEvent<HTMLButtonElement>): void;
    handleOnClick(): void;
}

const Banner = ({ buttonText, handleOnClick }: BannerProps) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                <span className={styles.title1}>Bean</span>
                <span className={styles.title2}>Spot</span>
            </h1>
            <p className={styles.subTitle}>Discover the amazing local coffee shop!</p>
            <div className={styles.buttonWrapper}>
                <button onClick={() => handleOnClick()} className={styles.button}>{buttonText}</button>
            </div>
        </div>
    );
};

export default Banner;