import express from 'express';
import { getUsers, createUser, getUser, delUser, updateUser } from '../controllers/users.js'
const router = express.Router();
import { v4 as uuidv4 } from 'uuid';
uuidv4();
// all routes in here

let users = [];

router.get('/', getUsers)


router.post('/', createUser)
// users/2 => req.params
router.get('/:id', getUser)
router.delete('/:id', delUser)

router.patch('/:id', updateUser)

export default router;

