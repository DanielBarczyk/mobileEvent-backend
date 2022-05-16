import { Request, Response, NextFunction } from "express";
import connection from "../database";

const getEvents = async (req: Request, res: Response, next: NextFunction) => {
    const query = 'SELECT * FROM EventsV1';

    connection.query(query, (err, results, fields) => {
        res.status(200).json({
            events: results
        });
    });
};

const getEvent = async (req: Request, res: Response, next: NextFunction) => {
    const eventId = req.params.eventId;
    const query = `SELECT * FROM EventsV1 WHERE eventId=${eventId}`;

    connection.query(query, (err, results, fields) => {
        res.status(200).json(results);
    });
};

export default { getEvents, getEvent };