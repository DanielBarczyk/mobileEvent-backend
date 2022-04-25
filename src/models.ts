export interface Event {
    eventId: String;
    eventDate: Date;
    eventName: String;
    eventDescription: String;
    eventLocation: String|undefined;
}

export interface User {
    userId: Number;
    userName: String;
    userEvents: String[];
}