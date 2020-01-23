var router = require('express').Router();

var user = [
    {
        "id" : 1,
        "name" : "Boris",
        "address" : "Makepe",
        "number" : 698545214
    },
    {
        "id" : 2,
        "name" : "Maéva",
        "address" : "PK17",
        "number" : 698545214

    },
    {
        "id" : 3,
        "name" : "Andréa",
        "address" : "Kotto",
        "number" : 698545214

    },
    {
        "id" : 4,
        "name" : "Diana",
        "address" : "Bonamoussadi",
        "number" : 698545214

    }
];

router.get('/',(req , res) => {
    res.json({
        status : "202 ",
        message : "Hello Express API Work fine !"
    });
});

router.get('/user' , (req , res) => {
    res.json(user);
});

router.get('/user/:id' ,(req , res) => {
    res.json(user[req.params.id-1]);
})

var contactController = require('./controllers/contact-controller');

router.get('/contact' , contactController.index);
router.post('/contact' , contactController.new);

router.get('/contact/:id' , contactController.view);
router.put('/contact/:id' , contactController.update);
router.delete('/contact/:id' , contactController.delete);

module.exports = router;