import { v4 as uuidv4 } from 'uuid';

let users = [ ]

//get all users - GET request
export const getUsers = (req, res) => {
    res.send(users);
}

//post new user - POST request
export const createUser = (req, res) => {
    const user = req.body;

    users.push({ ...user, id: uuidv4() });

    res.send(`User with the name ${user.firstName} added to the database`)
}

//get a user by id - GET request
export const getUserById = (req, res) => {
    const { id } = req.params;
    
    const foundUser = users.find((user) => user.id == id);

    res.send(foundUser);
}

//delete a user by id - DELETE request
export const deleteUser = (req, res) => {
    const { id } = req.params;

    users = users.filter((user) => user.id != id);
    res.send(`User with the id ${id} deleted from the database`);
}

//update a user info - PATCH request chamges partially, 
//while PUT request overrides all the info
export const updateUser = (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, age } = req.body;

    const user = users.find((user) => user.id === id);
    
    if(firstName) user.firstName = firstName;
    if(lastName) user.lastName = lastName;
    if(age) user.age = age;

    res.send(`User with the id ${id} has been updated`)
}