import { Request, Response, NextFunction } from "express";
import connection from "../database";

const getUsers = async (req: Request, res: Response, next: NextFunction) => {
    const query = 'SELECT * FROM UsersV1';

    connection.query(query, (err, results, fields) => {
        res.status(200).json(results);
    });
};

const getUser = async (req: Request, res: Response, next: NextFunction) => {
    const userId = req.params.userId;
    const query = `SELECT * FROM UsersV1 WHERE userId=${userId}`;
    
    connection.query(query, (err, results, fields) => {
        res.status(200).json(results);
    });
};

export default { getUsers, getUser };