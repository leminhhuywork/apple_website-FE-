import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useState } from "react"
import { heroVideo, smallHeroVideo } from "../utils"
import { useEffect } from "react"


const Hero = () => {
    const [videoSrc, setvideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo)


    window.innerWidth < 760 ? useGSAP(() => {
        gsap.to('#hero', { opacity: 1, delay: 2.2 });
        gsap.to('#cta', { opacity: 1, y: -50, delay: 2.2 })
    }) : useGSAP(() => {
        gsap.to('#hero', { opacity: 1, delay: 1.1 });
        gsap.to('#cta', { opacity: 1, y: -50, delay: 1.1 })
    })

    const HandleVideoSrc = () => {
        if (window.innerWidth < 760) {
            setvideoSrc(smallHeroVideo)
        }
        else {
            setvideoSrc(heroVideo)
        }
    }

    useEffect(() => {
        window.addEventListener('resize', HandleVideoSrc)

        return () => {
            window.removeEventListener('resize', HandleVideoSrc)
        }
    }, [])

    return (
        <section className="w-full nav-height bg-black relative">
            <div className="h-5/6 w-full flex-center flex-col">
                <p id="hero" className="hero-title">iPhone 15 Pro</p>

                <div className="md:w-10/12 w-9/12">
                    <video className="pointer-events-none" muted autoPlay playsInline={true} key={videoSrc}>
                        <source src={videoSrc} type="video/mp4" />
                    </video>
                </div>
            </div>
            <div
                id="cta"
                className="flex flex-col items-center opacity-0 translate-y-20"
            >
                <a href="#highlights" className="btn">Buy</a>
                <p className="font-normal text-xl">From $199/month or $999</p>
            </div>
        </section>


    )
}

export default Hero