import connection from "./database";

let EVENT_SIZE: number;
let USER_SIZE: number;
let TICKET_SIZE: number;

export function init() {
    if (!process.env.DATABASE_NAME) {
        throw new Error("DATABASE_NAME not set");
    }
    if (!process.env.DATABASE_HOST) {
        throw new Error("DATABASE_HOST not set");
    }
    if (!process.env.DATABASE_USER) {
        throw new Error("DATABASE_USER not set");
    }
    if (!process.env.DATABASE_PASSWORD) {
        throw new Error("DATABASE_PASSWORD not set");
    }


    const eventQuery = 'SELECT COUNT(*) AS count FROM Events';
    const userQuery = 'SELECT COUNT(*) AS count FROM Users';
    const ticketQuery = 'SELECT COUNT(*) AS count FROM Tickets';

    connection.query(eventQuery, (err, results, fields) => {
        EVENT_SIZE = JSON.parse(JSON.stringify(results))[0].count;	
    });

    connection.query(userQuery, (err, results, fields) => {
        USER_SIZE = JSON.parse(JSON.stringify(results))[0].count;
    });

    connection.query(ticketQuery, (err, results, fields) => {
        TICKET_SIZE = JSON.parse(JSON.stringify(results))[0].count;
    });
}

export function getEventSize() {
    EVENT_SIZE++;
    return EVENT_SIZE;
}

export function getUserSize() {
    USER_SIZE++;
    return USER_SIZE;
}

export function getTicketSize() {
    TICKET_SIZE++;
    return TICKET_SIZE;
}
