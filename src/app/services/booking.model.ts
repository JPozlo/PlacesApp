export class Booking {
    constructor(
        public id: string,
        public placeID: string,
        public userID: string,
        public placeTitle: string,
        public guestNumber: number
    ) { }
}