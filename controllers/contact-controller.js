var Contact = require('../models/contact');

exports.index = (req , res) => {
    Contact.get((err , contacts) => {
        if(err)
        {
            res.json({
                status : "302",
                message : "Error"
            });
        }

        res.json({
            status : 202,
            message : "Retrieved data is success",
            data : contacts
        });
    });
};

exports.new = (req , res) => {
    var contact = new Contact();
    contact.name = req.body.name ? req.body.name : contact.name;
    contact.email = req.body.email;
    contact.gender = req.body.gender;
    contact.phone = req.body.phone;

    contact.save((err) =>{
        if(err){
            res.json(err);
        }

        res.json({
            status : 202,
            message : "New User Added",
            data : contact
        });
    });
}

exports.view = (req , res) => {
    Contact.findById(req.params.id ,(err , contact) => {
        if(err){
            res.json(err);
        }

        res.json({
            status : 202,
            message : "Details contact loading ...",
            data : contact
        });
    });
}

exports.update = (req , res) => {
    Contact.findById(req.params.id , (err , contact) =>{
        if(err)
        {
            res.json(err);
        }

        contact.name = req.body.name ? req.body.name : contact.name;
        contact.email = req.body.email;
        contact.gender = req.body.gender;
        contact.phone = req.body.phone;

        contact.save((err , contact) => {
            if(err)
            {
                res.json(err);
            }

            res.json({
                status : 202 , 
                message : "Updated Success",
                data : contact
            });
        });

    });
};

        exports.delete = (req , res) => {
            Contact.remove(req.params.id , (err) => {
                if(err)
                {
                    res.json(err);
                }

                res.json({
                    status : 202,
                    message : "Contact delete success"
                });

            });
        };

