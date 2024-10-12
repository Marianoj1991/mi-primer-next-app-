'use server'

import { revalidatePath } from "next/cache"
import { Post } from "./models"
import { connectToDb } from "./utils"

export async function addPost (formData) {
  // la directiva useServer dentro de la funcion no me funciono
  // "use server"
  connectToDb()
  const { title, desc, slug, userId } = Object.fromEntries(formData)
  console.log(title, desc, slug, userId)

  const post = new Post({title, desc, slug, userId})

  await post.save()
  console.log('Post saved on DDBB')
  revalidatePath('/blog')
}

export async function deletePost (formData) {
  // la directiva useServer dentro de la funcion no me funciono
  // "use server"

  const { id } = Object.fromEntries(formData)

  connectToDb()

  await Post.findByIdAndDelete(id)

  console.log('Post deleted')
  revalidatePath('/blog')
}