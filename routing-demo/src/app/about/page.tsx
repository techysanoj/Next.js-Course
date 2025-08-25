import { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Blog" // only blog irrespective of the parent metadata title pattern
  }, 
};

export default async function About() {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("intentional delay");
    }, 2000);
  });
    return <h1> About Me</h1>
}