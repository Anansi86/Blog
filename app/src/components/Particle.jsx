import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Particle = () => {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: "#0f0e0e",
                    },
                },
                fpsLimit: 120,
                
                particles: {
                    number: {
                        value: 80,
                        density: {
                          enable: true,
                          value_area: 800
                        }
                      },
                      color: {
                        value: "#d42f2f"
                      },
                      shape: {
                        type: "image",
                        stroke: {
                          width: 0,
                          color: "#000000"
                        },
                        polygon: {
                          nb_sides: 5
                        },
                        image: {
                          src: "https://cdn-icons-png.flaticon.com/512/185/185866.png",
                          width: 100,
                          height: 100
                        }
                      },
                      opacity: {
                        value: 20,
                        random: false,
                        anim: {
                          enable: false,
                          speed: 1,
                          opacity_min: 0.1,
                          sync: false
                        }
                      },
                      size: {
                        value: 24.05118091298284,
                        random: true,
                        anim: {
                          enable: false,
                          speed: 40,
                          size_min: 0.1,
                          sync: false
                        }
                      },
                      line_linked: {
                        enable: true,
                        distance: 150,
                        color: "#d216bb",
                        opacity: 0.9379960556063308,
                        width: 5.451601006942778
                      },
                      move: {
                        enable: true,
                        speed: 3.206824121731046,
                        direction: "none",
                        random: false,
                        straight: false,
                        out_mode: "out",
                        bounce: false,
                        attract: {
                          enable: false,
                          rotateX: 600,
                          rotateY: 1200
                        }
                      }
                    },
                    interactivity: {
                      detect_on: "canvas",
                      events: {
                        onhover: {
                          enable: true,
                          mode: "repulse"
                        },
                        onclick: {
                          enable: false,
                          mode: "push"
                        },
                        resize: true
                      },
                      modes: {
                        grab: {
                          distance: 400,
                          line_linked: {
                            opacity: 1
                          }
                        },
                        bubble: {
                          distance: 400,
                          size: 40,
                          duration: 2,
                          opacity: 8,
                          speed: 3
                        },
                        repulse: {
                          distance: 200,
                          duration: 0.4
                        },
                        push: {
                          particles_nb: 4
                        },
                        remove: {
                          particles_nb: 2
                        }
                      }
                    },
                    retina_detect: true
                  
            }}
        />
    );
};

export default Particle