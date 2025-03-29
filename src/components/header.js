import React from 'react';
import { NavLink } from 'react-router';
import { ReactComponent as CloseIcon } from '../assets/icons/CloseIcon.svg';
import { ReactComponent as BurgerIcon } from '../assets/icons/BurgerIcon.svg';
import { ADMIN_ROOMS_PATH, CLIENT_BOOKINGS_PATH, ROOMS_PATH } from '../constants/routes';


const LINKS = {
	user: [
		{ to: ROOMS_PATH, label: 'Комнаты' },
		{ to: CLIENT_BOOKINGS_PATH, label: 'Мои брони' },
	],
	admin: [
		{ to: ADMIN_ROOMS_PATH, label: 'Комнаты' },
	],
};

export default function Header() {
	const isAuthenticated = true;
	const role = 'user';
	const [menuOpen, setMenuOpen] = React.useState(false);
	const menuRef = React.useRef(null);

	const toggleMenu = () => setMenuOpen(!menuOpen);
	const closeMenu = () => setMenuOpen(false);

	React.useEffect(() => {
		function handleClickOutside(event) {
			if (menuRef.current && !menuRef.current.contains(event.target)) {
				closeMenu();
			}
		}

		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	return (
		<header className="bg-[#e7ebf2] shadow-md p-4 flex justify-between items-center">
			<div className="text-xl font-bold">
				{isAuthenticated ?
					<NavLink to={role === 'user' ? ROOMS_PATH : ADMIN_ROOMS_PATH}>BookInn</NavLink> : 'BookInn'}
			</div>
			{isAuthenticated && role in LINKS && (
				<nav ref={menuRef}>
					<button
						className="md:hidden"
						onClick={toggleMenu}
						aria-label="Toggle Menu"
					>
						{menuOpen ? (
							<BurgerIcon className="w-6 h-6" />
						) : (
							<CloseIcon className="w-6 h-6" />
						)}
					</button>
					<ul
						className={`md:flex gap-4 absolute md:static bg-[#d5dce8] md:bg-transparent shadow-md md:shadow-none top-14 right-4 p-4 rounded-lg md:p-0 transition-transform ${menuOpen ? 'block' : 'hidden md:flex'}`}
						onClick={closeMenu}
					>
						{LINKS[role].map((link) => (
							<li key={link.to}>
								<NavLink to={link.to}
										 className={({ isActive }) => isActive ? 'font-bold' : 'font-normal'}>{link.label}</NavLink>
							</li>
						))}
					</ul>
				</nav>
			)}
		</header>
	);
}
