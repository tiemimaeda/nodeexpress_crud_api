import express from 'express';

const router = express.Router();

const users = [
    {
        firstName: "Tiemi",
        lastName: "Maeda",
        age: 31
    },
    {
        firstName: "Bruno",
        lastName: "Davanzo",
        age: 26
    }
]

router.get('/', (req, res) => {
    console.log(users);
    res.send(users);
});

router.post('/', (req, res) => {
    
});

export default router;