// const { User } = require("../chatModel");

exports.main = (req, res) => {
	res.render("index");
};
exports.upload = (req,res) => {
	res.render('upload');
};

exports.product = (req,res) => {
	res.render('product');
};
