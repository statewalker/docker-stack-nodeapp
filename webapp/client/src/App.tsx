import { MouseEventHandler, PropsWithChildren } from "react";
import { cn } from "./utils"
import defineProperties from "./defineProperties";
import useValues from "./useValues";

const appState = defineProperties({
  counter : 0
}, ["counter"])

function Button(props: PropsWithChildren<{ className? : string, onClick? : MouseEventHandler }>) {
  const className = cn(
    "px-3 py-2 text-l font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
    props.className 
  )
  return (
    <button onClick={props.onClick} className={className}>{props.children}</button>
  )
}

export function App(props : PropsWithChildren<{ className? : string }>) {
  const counter = useValues<number>(() => appState.counter);
  return (
    <div className="bg-white dark:bg-gray-900 w-full h-full flex">
      <div className="m-auto">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Hello, there!
        </h1>
        <div className="flex gap-2 items-stretch text-center">
          <Button onClick={() => appState.counter--}  className="flex-1">Decrease</Button>
          <span  className="flex-auto py-4 text-4xl">{counter}</span>
          <Button onClick={() => appState.counter++} className="flex-1">Increase</Button>
        </div>
      </div>
    </div>
  )
}