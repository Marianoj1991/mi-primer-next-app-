import { User, Post } from './models'
import { connectToDb } from './utils'


export const getPosts = async () => {
  try {
    connectToDb()
    const posts = await Post.find()
    return posts
  } catch (err) {
    throw new Error("Error fetching all posts");
    
  }
}

export const getPostById = async (slug) => {
  try {
    connectToDb()
    const post = await Post.findById(slug)
    return post
  } catch (err) {
    console.log(err.message)
    throw new Error('Error fetching post')
  }
}

export const getUsers = async () =>  {
  try {
      connectToDb()
      const users = await User.find()
      return users
    } catch (err) {
      console.log(err.message)
      throw new Error('Error fetching all users')
    }
  }
  
  export const getUser = async (id) =>  {
    try {
      connectToDb()
      const user = await User.findById(id)
      return user
    } catch (err) {
      console.log(err.message)
      throw new Error('Error fetching user')
    }
}
