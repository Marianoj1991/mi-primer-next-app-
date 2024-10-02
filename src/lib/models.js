import mongoose, { Schema, model } from 'mongoose'

const userSchema = new Schema({
  userName: {
    type: String,
    required: true,
    unique: true,
    min: 3,
    max: 20
  },
  email: {
    type: String,
    required: true,
    unique: true,
    max: 50
  },
  password: {
    type: String
  },
  img: {
    type: String,
    required: true
  },
  isAdmin: {
    type: Boolean,
    default: false 
  }
}, {timestamps: true}
)


const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    img: {
      type: String
    },
    userId: {
      type: String,
      required: true 
    },
    slug: {
      type: String,
      required: true,
      unique: true
    }
  },
  { timestamps: true }
)

export const User = mongoose.models.Users || model('Users', userSchema)
export const Post = mongoose.models.Posts || model('Posts', postSchema)

