import { Request, Response } from "express";

export const testPostController = (request: Request, response: Response) => {
    response.status(201).json({ message: 'Data created!' });
};