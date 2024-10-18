export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen">
      <form action="" className="flex flex-col gap-y-4">
      <input type="text" placeholder="Email Title" 
      className="bg-slate-400 block p-2 rounded-md placeholder:text-slate-500"/>
      <input type="email" placeholder="To"
      className="bg-slate-400 block p-2 rounded-md placeholder:text-slate-500"/>
      <textarea name="content" placeholder="Write the mail"
      className="bg-slate-400 block p-2 rounded-md placeholder:text-slate-500">
      </textarea>
      <button className="bg-green-600 block p-2 rounded-md hover:bg-green-400">Send</button>
      </form>
      </div>
  )
}