"use strict";

const { Member, Address } = require("../Model");

exports.member = (req, res) => {
	res.render("index");
};

exports.asign = async (req, res) => {
	let isOkay = true;

	await Member.findAll({
		attributes: ["user_id"],
	}).then((result) => {
		for (let i = 0; i < result.length; i++) {
			// console.log(result[i].dataValues["user_id"], req.body.id, 123123123123);
			if (result[i].dataValues["user_id"] === req.body.id) {
				isOkay = false;
				// console.log(isOkay, i);
			}
		}
		// console.log(result[0].dataValues, 1123123);
	});

	if (isOkay) {
		const data = {
			user_id: req.body.id,
			user_pw: req.body.password,
			user_name: req.body.name,
		};
		const address = {
			city: req.body["시"],
			dong: req.body["구"],
			remaining_address: req.body["동"],
		};
		await Address.create(address).then((result) => {
			data["address_id"] = result.dataValues["address_id"];
			Member.create(data).then((result) => {
				// console.log(result);
			});
		});
	}
	// console.log(isOkay);
	res.send(isOkay);
};
