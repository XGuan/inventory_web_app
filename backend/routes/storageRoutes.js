import express from 'express'
const router = express.Router()
import { getAllStorage } from '../controllerS/productController.js'

router.route('/').get(getAllStorage)

export default router
