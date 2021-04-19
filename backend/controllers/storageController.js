import asyncHandler from 'express-async-handler'
import Storage from '../models/storageModel.js'

// @desc Fetch all storage by user
// @route GET /api/storage
// @access Public
const getAllStorage = asyncHandler(async (req, res) => {
  const allStorage = await Product.find({ user: req.user._id })
  res.json(allStorage)
})

export { getAllStorage }
