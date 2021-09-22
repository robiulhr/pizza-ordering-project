function cartController() {
    return {
        index(req, res) {
            res.render("costomers/cart")
        }
    }
}

module.exports = cartController