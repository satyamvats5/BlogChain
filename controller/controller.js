exports.setKey = (req, res, next) => {
    const public = req.body.public;
    const private = req.body.private;

    req.session.public = public;
    req.session.private = private;

    console.log("Privet: - ", private);
    console.log("Public:- ", public);
    
    return res
        .status(201)
        .json({status: 200, message: "Hases updated successfully"});
}

exports.getKey = (req, res, next) => {
    const public = req.session.public;
    const private = req.session.private;
    return res
        .status(200)
        .json({status: 200, public: public, private: private})

}