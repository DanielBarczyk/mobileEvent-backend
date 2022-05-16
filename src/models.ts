export interface Event {
    eventId: Number;
    eventDate: Date;
    eventName: String;
    eventDescription: String;
    eventLocation: String|undefined;
    latitude: Number|undefined;
    longitude: Number|undefined;
}

export interface User {
    userId: Number;
    userName: String;
    userEvents: String[];
}