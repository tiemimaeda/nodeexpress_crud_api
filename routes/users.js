import express from 'express';
import { createUser, getUsers, getUserById, deleteUser, updateUser } from '../controllers/users.js'

const router = express.Router();

//get all users - GET request
router.get('/', getUsers);

//post new user - POST request
router.post('/', createUser);

//get a user by id - GET request
router.get('/:id', getUserById);

//delete a user by id - DELETE request
router.delete('/:id', deleteUser);

//update a user info - PATCH request chamges partially, 
//while PUT request overrides all the info
router.patch('/:id', updateUser);

export default router;