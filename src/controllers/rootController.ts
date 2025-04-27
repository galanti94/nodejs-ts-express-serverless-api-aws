import { Request, Response } from "express";

export const rootController = async (request: Request, response: Response) => {
    response.status(200).json({ message: 'Hello World!' });
};