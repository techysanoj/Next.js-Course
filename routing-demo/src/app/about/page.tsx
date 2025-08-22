import { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Blog" // only blog irrespective of the parent metadata title pattern
  }, 
};

export default function About() {
    return <h1> About Me</h1>
}