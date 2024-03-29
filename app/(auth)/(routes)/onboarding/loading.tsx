import { Loader2 } from "lucide-react"


const page = () =>{

    return (
        <div className="w-full mt-24 flex justify-center">
        <div className="flex flex-col items-center gap-2">
          <Loader2 className="h-8 w-8 animate-spin text-zinc-800" />
          <h3 className="font-semibold text-xl">preparing your account ...</h3>
          <p>You will be redirected automatically.</p>
        </div>
      </div>
    )
}

export default page