"use client";
import Lottie from "lottie-react";
import animationData from "/public/animation.json"; 

export default function LottieAnimation() {
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
            <Lottie animationData={animationData} loop={true} />
        </div>
    );
}
