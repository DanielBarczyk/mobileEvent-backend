import { Request, Response, NextFunction, query } from "express";
import connection from "../database";
import { getEventSize } from "../init";

const getEvents = async (req: Request, res: Response, next: NextFunction) => {
    let query = 'SELECT * FROM Events';

    if (req.query.category) {
        query += ` WHERE eventCategory=${req.query.category}`
    } else if (req.query.user) {
        query += ` INNER JOIN Tickets USING (eventId) WHERE userId=${req.query.user}`;
    }

    connection.query(query, (err, results, fields) => {
        res.status(200).json({
            events: results
        });
    });
};

const getEvent = async (req: Request, res: Response, next: NextFunction) => {
    const eventId = req.params.eventId;
    let query = `SELECT * FROM Events WHERE eventId=${eventId}`;
    
    connection.query(query, (err, results, fields) => {
        res.status(200).json(results);
    });
};

const addEvent = async (req: Request, res: Response, next: NextFunction) => {
    const eventDate: String = req.body.eventDate;
    const eventName: String = req.body.eventName;
    const eventDescription: String = req.body.eventDescription;
    const eventLocation: String = req.body.eventLocation;
    const eventCategory: String = req.body.eventCategory;
    const latitude: Number = req.body.latitude;
    const longitude: Number = req.body.longitude;
    const eventId: Number = getEventSize();

    const query = `Insert into Events (eventId, eventDate, eventName, eventDescription, eventLocation, eventCategory, latitude, longitude) VALUES (${eventId}, ${eventDate}, ${eventName}, ${eventDescription}, ${eventLocation}, ${eventCategory}, ${latitude}, ${longitude})`;
    
    connection.query(query, (err, results, fields) => {
        res.status(200).json({
            status: '200'
        });
    });
}

export default { getEvents, getEvent, addEvent };