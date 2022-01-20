import { Router } from "express";
import tradesRoute from './trades.routes';

const router = Router();

router.use('/trades', tradesRoute);

export { router }