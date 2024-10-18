export default function Home() {

  async function sendMail(formData: FormData) {
  "use server"
  const title = formData.get("title")
  const to = formData.get("to")
  const content = formData.get("content")

  if (!title || !to || !content) {
    throw new Error("Missing fields")
  }
  console.log({title, to, content})
}
  return (
    <div className="flex items-center justify-center h-screen">
      <form action={sendMail} className="flex flex-col gap-y-4">
      <input name="title" type="text" placeholder="Email Title" 
      className="bg-slate-400 block p-2 rounded-md placeholder:text-slate-500"/>
      <input name="to" type="email" placeholder="To"
      className="bg-slate-400 block p-2 rounded-md placeholder:text-slate-500"/>
      <textarea name="content" placeholder="Write the mail"
      className="bg-slate-400 block p-2 rounded-md placeholder:text-slate-500">
      </textarea>
      <button className="bg-green-600 block p-2 rounded-md hover:bg-green-400">Send</button>
      </form>
      </div>
  )
}