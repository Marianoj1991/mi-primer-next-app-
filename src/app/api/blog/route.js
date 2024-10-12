import { Post } from "@/lib/models"
import { connectToDb } from "@/lib/utils"
import { NextResponse } from "next/server"


export async function GET (request, {params}) {

  const {slug} = params

  try {

    connectToDb()

    const post = await Post.findById(slug)
    console.log('Post founded')
    return NextResponse.json(post)

  } catch (err){ 
    console.log('ERROR:', err)
  }
}