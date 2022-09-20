import mongoose from 'mongoose'
import ProductMessage from '../models/Products.js'

export const getProducts = async(req, res) => {
    try {
        const postProduct = await ProductMessage.find()
        res.status(200).json(postProduct)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const createProduct = async(req, res) => {
    const product = req.body
    const newProduct = new ProductMessage(product)
    try {
        await newProduct.save()
        res.status(201).json(newProduct)
    } catch (error) {
        res.status(409).json({ message: error.message})
    }
}