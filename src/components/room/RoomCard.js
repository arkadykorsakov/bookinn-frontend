import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button';
import { useNavigate } from 'react-router';
import { ROOMS_PATH } from '../../constants/routes';

function RoomCard(props) {
	const navigate = useNavigate();
	return <div
		className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
		<img
			src={props.room.imageUrl}
			alt="Номер"
			className="w-full h-48 object-cover"
		/>
		<div className="p-4 flex flex-col items-start">
			<Button onClick={()=>navigate(`${ROOMS_PATH}/${props.room.id}`)}>
				Посмотреть
			</Button>
		</div>
	</div>
}

RoomCard.propTypes = {
	room: PropTypes.shape({
		imageUrl: PropTypes.string.isRequired,
		id: PropTypes.string.isRequired,
	}).isRequired,
};


export default RoomCard;
