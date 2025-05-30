const { Op, where } = require("sequelize")
const { Product } = require("../models/productModel");

exports.paginateProduct = async (req, res) => {
    try {
        let page = parseInt(req.query.page) || 1
        let limit = parseInt(req.query.limit) || 2
        let offset = (page - 1) * limit

        let products = await Product.findAll({
            limit: limit,
            offset: offset
        })
        if (products.length == 0) {
            return res.status(400).json({ msg: "Products Not Found" })
        }
        return res.status(200).json({ msg: "Found Products", products: products })


    }
    catch (err) {
        res.status(500).json({ msg: "Something Went Wrong", err: err.message })
    }
}
exports.FilterAndPaginate = async (req, res) => {
    try {
        let { pricemin, pricemax, name, category, limit = 2, page = 1 } = req.query;

        let whereCondition = {
            ...(name && { name: { [Op.like]: `%${name}%` } }),
            ...(category && { category: category }),
            ...(pricemax, pricemin && { price: { [Op.between]: [pricemin, pricemax] } })
        }
        let offset = parseInt((page - 1)) * limit

        let products = await Product.findAll({ where: whereCondition, limit: parseInt(limit), offset: offset })

        if (products.length == 0) {
            return res.status(400).json({ msg: "Products Not Found" })
        }
        return res.status(200).json({ msg: "Found Products", products: products })
    }
    catch (err) {
        res.status(500).json({ msg: "Something Went wrong", err: err.message })
    }
}


        exports.paginateSorting = async (req, res) => {
            try {
                const { limit = 2, page = 1 } = req.query
                const { sortBy, order } = req.query
                let offset = parseInt((page - 1)) * limit
                let products = await Product.findAll({
                    limit: parseInt(limit),
                    offset: parseInt(offset),
                    order: [[sortBy, order]]
                })
                res.status(200).json({msg:"Sorted",products:products})

            }
            catch (err) {
                res.json(err.message)

            }
        }
