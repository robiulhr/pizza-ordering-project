const { response } = require("express");
const Menu = require("../../models/menu")


function homeController() {
    return {
        async index(req, res) {

            const menus = await Menu.find();
            res.render("home", { pizaas: menus })
        }
    }
}

module.exports = homeController