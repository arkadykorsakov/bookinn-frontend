import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button';
import { useNavigate } from 'react-router';
import { ADMIN_ROOMS_PATH, ROOMS_PATH } from '../../constants/routes';
import AddBookingButton from './AddBookingButton';

function RoomCard(props) {
	const navigate = useNavigate();
	return <div
		className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
		<img
			src={props.room.imageUrl}
			alt="Номер"
			className="w-full h-48 object-cover"
		/>
		<div className="p-4">
			{props.isAdmin && <>
				{props.room.isBooked ?
					<span
						className="bg-red-400 text-white inline-block my-2 px-3 py-1 rounded-full text-sm font-semibold">Забронировано</span>
					: <span
						className="bg-green-500 text-white inline-block my-2 px-3 py-1 rounded-full text-sm font-semibold">Свободно</span>}
			</>}
			<div className="flex items-center gap-5 flex-wrap">
				{!props.isAdmin && <>
					<Button onClick={() => navigate(`${ROOMS_PATH}/${props.room.id}`)}>
						Посмотреть
					</Button>
					<AddBookingButton roomId={props.room.id} imageUrl={props.room.imageUrl} />
				</>}
				{props.isAdmin && <>
					<Button onClick={() => navigate(`${ADMIN_ROOMS_PATH}/${props.room.id}`)}>
						Посмотреть
					</Button>
				</>}
			</div>
		</div>
	</div>;
}

RoomCard.propTypes = {
	room: PropTypes.shape({
		imageUrl: PropTypes.string.isRequired,
		id: PropTypes.string.isRequired,
		isBooked: PropTypes.bool.isRequired,
	}).isRequired,
	isAdmin: PropTypes.bool,
};


export default RoomCard;
