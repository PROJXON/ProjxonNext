"use client";

import { useEffect } from "react";
import AOS from "aos";

const AOSWrapper = () => {
    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);

    return null; // nothing to render
};

export default AOSWrapper;