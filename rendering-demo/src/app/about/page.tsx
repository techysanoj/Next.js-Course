import { useState } from "react"

export default function AboutPage() {
    console.log("About server components") // it will show server (then the msg) tells it is a server component by default
    // const [name, setName] = useState(""); //-> we will get the error while using this because it is a server component

    return <h1>About Page {new Date(). toLocaleDateString()}</h1>
}