export const PENDING = 0
export const BOOKED = 1
export const REJECTED = 2
export const CANCELLED = 3

export const STATUSES = {
	[PENDING]: 'В ожидании',
	[BOOKED]: 'Забронировано',
	[REJECTED]: 'Отклонено',
	[CANCELLED]: 'Отменено',
}
