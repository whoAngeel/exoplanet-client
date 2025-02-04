import { Environment, OrbitControls, Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import { GiConcentrationOrb } from "react-icons/gi";
import Earth from "../../public/earth/Earth";
import Pegasi from "../../public/51PegasiB/Pegasi";
import Kepler452b from "../../public/kepler452b/Kepler452b";
import Corot7bfiery from "../../public/corot7bfiery/Corot7bfiery";
import Kepler186f from "../../public/kepler186f/Kepler186f";
import Kepler22b from "../../public/kepler22b/Kepler22b";
import Proxima from "../../public/proxima/Proxima";
import { ARButton, XR } from "@react-three/xr";
import images from "../constants/images";
import { Flex, Progress } from "antd";
import video from "../assets/video/viaje.mp4";
import { green, red } from "@ant-design/colors";
import { Link, useNavigate } from "react-router-dom";
import { GiGunshot } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { limpiar } from "../redux/puntos.slice";

function Home() {
  const navigate = useNavigate();
  const [dialogo, setDialogo] = useState(1);
  const [planeta, setPlaneta] = useState(1);
  const [video, setVideo] = useState(false);
  const [instrucciones, setInstrucciones] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false); // Estado para mostrar/ocultar dropdown
  const [dropdownPosition, setDropdownPosition] = useState({ x: 0, y: 0 }); // Estado para la posición del dropdown
  const { puntos } = useSelector((state) => state.puntos);
  const dispatch = useDispatch();
  const [showVideo, setShowVideo] = useState(false);
  const bienvenidaModal = useRef(null);

  // Función que se ejecuta cuando se presiona el botón
  const handleShowVideo = () => {
    setShowVideo(true);
    setPlaneta(planeta + 1);
	dispatch(limpiar())
  };

  // Función para ocultar el video después de que termina
  const handleVideoEnd = () => {
    setShowVideo(false);
  };

  const handleMeshClick = (event) => {
    // Obtener la posición del clic
    const { clientX, clientY } = event;
    setDropdownPosition({ x: clientX, y: clientY }); // Actualiza la posición del dropdown
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

    if (localStorage.getItem("bienvenida") === "true") {
      if (bienvenidaModal.current) bienvenidaModal.current.click();
    } else {
      localStorage.setItem("bienvenida", "true");
    }
  }, []);
  return (
    <div style={{ position: "relative", width: "100vw", height: "100vh" }}>
      <div
        className="text-black top-[10px] right-[120px] absolute  rounded-xl p-2	z-30"
        style={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }}
      >
        {/* Botón para mostrar el video */}
		{puntos >= 50  && 
		<button onClick={handleShowVideo} >
		<GiGunshot size="40" />
	  </button>
		}
        

        {/* Si showVideo es true, muestra el video */}
        {showVideo && (
          <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
            {/* Video en pantalla completa sin controles y que se reproduce automáticamente */}
            <video
              className="w-full h-full object-cover"
              autoPlay
              muted
              onEnded={handleVideoEnd} // Oculta el video cuando termina
            >
              <source src={video} type="video/mp4" />
              Tu navegador no soporta la etiqueta de video.
            </video>
          </div>
        )}
      </div>

      <div
        className="text-black top-[10px] right-[10px] absolute  rounded-xl p-2	z-30"
        style={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }}
      >
        <button className="text-center" onClick={() => navigate("/v2")}>
          <GiConcentrationOrb size="30px" className="mx-auto" />

          <p className="text-sm font-bold">Colección</p>
        </button>
      </div>
      <div
        className="text-black top-[10px] sm:right-[62%]  right-[200px] absolute  rounded-xl p-2	z-30"
        style={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }}
      >
        <Flex gap="small" vertical>
          <Progress
            percent={100}
            steps={5}
            size="small"
            strokeColor={green[6]}
          />
          <Progress
            percent={puntos * 2}
            steps={5}
            strokeColor={[green[6], green[6], red[5]]}
          />
        </Flex>
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
              <Link className="text-black text-xl" to="/minigame/Tierra">
                Quiz
              </Link>
            </li>
            <li>
              <Link
                className="text-black text-xl"
                to="https://www.nasa.gov/?search=Earth&language=en-US"
              >
                Recursos
              </Link>
            </li>
          </ul>
          <button className="text-black text-xl" onClick={closeDropdown}>
            Cerrar
          </button>
        </div>
      )}
      {/* Dialogo para 100% */}
      {puntos >= 50  && (
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
          className="text-black sm:mt-20"
        >
          <div className="flex flex-row">
            <div>
              <img src={images.laika} className="w-24" />
            </div>
            <div className="max-w-80">
              <h1 className="font-semibold ">Felicidades</h1>
              <p>
                Completaste lo necesario para poder movernos de aquí,
				para eso tiene un nuevo boton arriba a la derecha <br/>
				provemoslo
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Elementos HTML superpuestos */}
      {instrucciones && dialogo <= 3 && puntos == 0 && (
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
          className="text-black sm:mt-20"
        >
          <div className="flex flex-row">
            <div>
              <img src={images.laika} className="w-24" />
            </div>
            <div className="max-w-80">
              <h1 className="font-semibold ">Comencemos</h1>
              {dialogo == 1 && puntos == 0 && (
                <p>
                  Como puedes ver en la parte de abajo tienes a un conocido y
                  famoso planeta, nuestro planeta Tierra, este será nuestro
                  punto de inicio
                </p>
              )}
              {dialogo == 2 && puntos == 0 && (
                <p>
                  Presionando sobre el planeta se te desplegaran las diferentes
                  actividades que puedes hacer en el
                </p>
              )}
              {dialogo == 3 && puntos == 0 && (
                <p>
                  Provemos con un quiz, si obtienes un 100 podremos cambiar de
                  escenario
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

      <ARButton className="mb-10">Ver con AR</ARButton>
      <Canvas
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 0,
        }}
        onCreated={(state) => {
          state.gl.setClearColor("#0e0e10"); // Cambia el color a tu preferencia
        }}
      >
        <XR>
          <ambientLight />
          <OrbitControls />
          <Suspense fallback={null}>
            <mesh position={[0, 0, -2.7]} onClick={handleMeshClick}>
              {planeta == 1 && <Earth />}
              {planeta == 2 && <Pegasi />}
            </mesh>
          </Suspense>
        </XR>

        <Stars
          radius={200}
          depth={100}
          count={10000}
          factor={20}
          saturation={0}
          fade
          speed={1}
        />
        <Environment preset="city" />
      </Canvas>
      {!instrucciones && puntos == 0 && (
        <dialog
          id="bienvenida"
          className="modal modal-open fixed inset-0 flex items-center justify-center !w-[100%] !max-w-[100%] "
        >
          <div className="modal-box  max-w-5xl flex flex-row sm:flex-col mt-5">
            <div>
              <img src={images.laika} className="sm:w-48 w-96 mt-5" />
            </div>
            <div>
              <h3 className="font-bold text-5xl sm:text-3xl">Hola!</h3>
              <p className="py-4 sm:text-xl">
                Mi nombre es Laika y te doy la bienvenida a nuestro universo..{" "}
                <br />
                ¿Estas listo para adentrarte a esta aventura conmigo y descubrir
                nuevos planetas?
                <br />
                Cumple con cada uno de los retos que encuentres, aprendamos y
                descubramos que los limites solo los pone tu mente
              </p>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button, it will close the modal */}
                  <button
                    className="btn text-2xl sm:text-xl"
                    ref={bienvenidaModal}
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
