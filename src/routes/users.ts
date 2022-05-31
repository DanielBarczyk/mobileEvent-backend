import express from 'express';
import controller from '../controllers/users';
const router = express.Router();

router.get('/', controller.getUsers);
router.get('/:userId', controller.getUser);
router.get('/:userId/add/:eventId', controller.addTicket);

export = router;