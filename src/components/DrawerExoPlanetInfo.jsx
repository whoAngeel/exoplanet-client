import { Drawer } from "react-drag-mobile-drawer";
import "../index.css";
function DrawerExoPlanetInfo({ open, setOpen, exoplanet }) {
	return (
		<Drawer
			open={open}
			onRequestClose={() => setOpen(!open)}
			direction="bottom"
			modalElementClass="modal"
		>
			<div>
				<h1>{exoplanet.name}</h1>
			</div>
		</Drawer>
	);
}

export default DrawerExoPlanetInfo;
