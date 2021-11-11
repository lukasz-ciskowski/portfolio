import { IOptions, RecursivePartial } from "tsparticles"

export const PARTICLES_OPTIONS: RecursivePartial<IOptions> = {
    particles: {
        number: {
            value: 200,
            density: {
                enable: true,
            },
        },
        color: {
            value: "#fff",
        },
        shape: {
            type: "circle",
            stroke: {
                width: 0,
                color: "#000000",
            },
            polygon: {
                nb_sides: 5,
            },
        },
        opacity: {
            value: 0.4,
            random: false,
            anim: {
                enable: true,
                speed: 0.2,
                opacity_min: 0,
                sync: false,
            },
        },
        size: {
            value: 2,
            random: true,
            anim: {
                enable: true,
                speed: 2,
                size_min: 0,
                sync: false,
            },
        },
        move: {
            enable: true,
            speed: 0.2,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
            },
        },
    },
    detectRetina: true,
}
