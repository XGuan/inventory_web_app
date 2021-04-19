import mongoose from 'mongoose'

const storageSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: true,
    },
    countBoxesInStorage: {
      type: Number,
      required: true,
      default: 0,
    },
    cartons: {
      type: Array,
      required: false,
      default: [],
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
)

const Storage = mongoose.model('Storage', storageSchema)

export default Storage
