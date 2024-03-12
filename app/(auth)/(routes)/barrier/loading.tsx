import { Loader2 } from "lucide-react"


const page = () => {

    return (
        <div className="w-full mt-24 flex justify-center">
            <div className="flex flex-col items-center gap-2 px-4">
                <Loader2 className="h-8 w-8 animate-spin text-zinc-800" />
                <h3 className="font-semibold text-xl">Welcome back to [Restaurant Name]! 🍽️</h3>
                <p className='text-center'>Delighted to see you again! Get ready to enjoy our delicious dishes and friendly service. Sit tight and let the feast begin! 🎉.</p>
                <p>Youre almost done.</p>
            </div>
        </div>
    )
}

export default page