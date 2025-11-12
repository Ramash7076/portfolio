
import clientPromise from '@/lib/mongodb'

export async function POST(req) {
  

  try {
    const body = await req.json()
    const client = await clientPromise
    const db = client.db('portfolio')

    const collection = await db.collection('contact')
    const result = await collection.insertOne({
        name: body.name,
        email: body.email,
        message: body.message
    })
    return Response.json({ success: true, message: "Database created successfully"})
  } catch (error) {
    return Response.json({ success: false, error: error.message })
  }
}