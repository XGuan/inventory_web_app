import mongoose from 'mongoose'

const cartonSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: false,
    },
    countItemsInCarton: {
      type: Number,
      required: true,
      default: 0,
    },
    items: {
      type: Array,
      required: false,
      default: [],
    },
    byStorage: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Storage',
    },
  },
  {
    timestamps: true,
  }
)

const Carton = mongoose.model('Carton', cartonSchema)

export default Carton
