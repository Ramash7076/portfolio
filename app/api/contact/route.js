
import clientPromise from '@/lib/mongodb'
import { Resend } from 'resend';


const resend = new Resend(process.env.RESEND_API_KEY);

async function sendEmailNotification({ name, email, message }) {
  await resend.emails.send({
    from: "Portfolio Notification <onboarding@resend.dev>",
    to: process.env.MY_EMAIL,
    subject: "New Contact Form Message",
    html: `
      <h2>New Message Received</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
  });
}

// async function sendWhatsAppNotification({name, email, message}) {

//   const url = `https://graph.facebook.com/v22.0/${process.env.WHATSAPP_PHONE_NUMBER_ID}/messages`;

//   const payload = {
//     messaging_product: "whatsapp",
//     to: process.env.MY_PHONE_NUMBER,
//     type: "text",
//     text: {
//       body: `New Contact Message\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`
//     }
//   };



//   let a = await fetch(url, {
//     method: "POST",
//     headers: {
//       "Authorization": `Bearer ${process.env.WHATSAPP_TOKEN}`,
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify(payload)
//   });
//   let b = await a.json()


// }


export async function POST(req) {


  try {
    const body = await req.json()
    const client = await clientPromise
    const db = client.db('portfolio')

    const collection = db.collection('contact')
    const result = await collection.insertOne(body)
    // await sendWhatsAppNotification({
    //   name: body.name,
    //   email: body.email,
    //   message: body.message
    // });

    await sendEmailNotification({
      name: body.name,
      email: body.email,
      message: body.message
    });


    return Response.json({ success: true, message: "Database created successfully" })
  } catch (error) {
    return Response.json({ success: false, error: error.message })
  }
}

