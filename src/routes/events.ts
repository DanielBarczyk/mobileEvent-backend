import express from 'express';
import controller from '../controllers/events';
const router = express.Router();

router.get('/', controller.getEvents);
router.get('/:eventId', controller.getEvent);

export = router;