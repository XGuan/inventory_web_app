import express from 'express'
const router = express.Router()
import { getAllStorage } from '../controllerS/storageController.js'
import { protect } from '../middleware/authMiddleware.js'

router.route('/').get(protect, getAllStorage)

export default router
