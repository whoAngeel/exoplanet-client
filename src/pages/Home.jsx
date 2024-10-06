import {OrbitControls} from "@react-three/drei";
import {Canvas} from "@react-three/fiber";
import {Suspense, useEffect, useState} from "react";
import {GiConcentrationOrb} from "react-icons/gi";
import Earth from "../../public/earth/Earth";
import Pegasi from "../../public/51PegasiB/Pegasi";
import Kepler452b from "../../public/kepler452b/Kepler452b";
import Corot7bfiery from "../../public/corot7bfiery/Corot7bfiery";
import Kepler186f from "../../public/kepler186f/Kepler186f";
import Kepler22b from "../../public/kepler22b/Kepler22b";
import Proxima from "../../public/proxima/Proxima";
import {ARButton, XR} from "@react-three/xr";
import images from "../constants/images";
import {Link, useNavigate} from "react-router-dom";

function Home() {
    const navigate = useNavigate();
    const [dialogo, setDialogo] = useState(1);
    const [instrucciones, setInstrucciones] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false); // Estado para mostrar/ocultar dropdown
    const [dropdownPosition, setDropdownPosition] = useState({x: 0, y: 0}); // Estado para la posición del dropdown

    const handleMeshClick = (event) => {
        // Obtener la posición del clic
        const {clientX, clientY} = event;
        setDropdownPosition({x: clientX, y: clientY}); // Actualiza la posición del dropdown
        setShowDropdown(!showDropdown); // Muestra el dropdown
    };

    // Función para cerrar el dropdown
    const closeDropdown = () => {
        setShowDropdown(false);
    };

    useEffect(() => {
        // Mostrar el modal al cargar la página
        console.log(instrucciones);
        var modal = document.getElementById("bienvenida");
        if (modal) modal.showModal();
    }, []);
    return (
        <div style={{position: "relative", width: "100vw", height: "100vh"}}>
            <div
                className="text-black top-[10px] right-[10px] absolute  rounded-xl p-2	z-30"
                style={{backgroundColor: "rgba(255, 255, 255, 0.8)"}}
            >
                <button className="text-center" onClick={() => navigate("/v2")}>
                    <GiConcentrationOrb size="30px" className="mx-auto"/>

                    <p className="text-sm font-bold">Colección</p>
                </button>
            </div>
            {showDropdown && (
                <div
                    style={{
                        position: "absolute",
                        top: dropdownPosition.y,
                        left: dropdownPosition.x,
                        zIndex: 1,
                        backgroundColor: "white",
                        border: "1px solid #ccc",
                        borderRadius: "4px",
                        padding: "10px",
                        boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
                    }}
                >
                    <ul>
                        <li>
                            <Link
                                className='text-black text-xl'
                                to='/minigame/Tierra'>Quiz</Link>
                        </li>
                    </ul>
                    <button className='text-black text-xl' onClick={closeDropdown}>Cerrar</button>
                </div>
            )}
            {/* Elementos HTML superpuestos */}
            {instrucciones && (
                <div
                    style={{
                        position: "absolute",
                        top: "10px",
                        left: "10px",
                        zIndex: 1,
                        backgroundColor: "rgba(255, 255, 255)",
                        padding: "10px",
                        borderRadius: "8px",
                    }}
                    className="text-black"
                >
                    <div className="flex flex-row">
                        <div>
                            <img src={images.laika} className="w-24"/>
                        </div>
                        <div className="max-w-80">
                            <h1 className="font-semibold ">Comencemos</h1>
                            {dialogo == 1 && (
                                <p>
                                    Como puedes ver en la parte de abajo tienes a un conocido y
                                    famoso planeta, nuestro planeta Tierra, este será nuestro
                                    punto de inicio
                                </p>
                            )}
                            {dialogo == 2 && (
                                <p>
                                    Presionando sobre el planeta se te desplegaran las diferentes
                                    actividades que puedes hacer en el
                                </p>
                            )}
                            <button
                                className="btn ml-56"
                                onClick={() => {
                                    setDialogo(dialogo + 1);
                                }}
                            >
                                Siguiente
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <ARButton/>
            <Canvas style={{position: "absolute", top: 0, left: 0, zIndex: 0}}>
                <XR>
                    <ambientLight/>
                    <OrbitControls/>
                    <Suspense fallback={null}>
                        <mesh position={[0, 0, -2.7]} onClick={handleMeshClick}>
                            <Earth/>
                        </mesh>
                    </Suspense>
                </XR>
            </Canvas>
            {!instrucciones && (
                <dialog id="bienvenida"
                        className="modal modal-open fixed inset-0 flex items-center justify-center !w-[100%] !max-w-[100%] ">
                    <div className="modal-box  max-w-5xl flex flex-row sm:flex-col mt-5">
                        <div>
                            <img src={images.laika} className="sm:w-48 w-96 mt-5"/>
                        </div>
                        <div>
                            <h3 className="font-bold text-5xl sm:text-3xl">Hola!</h3>
                            <p className="py-4 sm:text-xl">
                                Mi nombre es Laika y te doy la bienvenida a nuestro universo..{" "}
                                <br/>
                                ¿Estas listo para adentrarte a esta aventura conmigo y descubrir
                                nuevos planetas?
                                <br/>
                                Cumple con cada uno de los retos que encuentres, aprendamos y
                                descubramos que los limites solo los pone tu mente
                            </p>
                            <div className="modal-action">
                                <form method="dialog">
                                    {/* if there is a button, it will close the modal */}
                                    <button
                                        className="btn text-2xl sm:text-xl"
                                        onClick={() => setInstrucciones(true)}
                                    >
                                        Adelante
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </dialog>
            )}
        </div>
    );
}

export default Home;
