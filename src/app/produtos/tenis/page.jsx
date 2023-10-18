import Link from "next/link"
import Image from "next/image"

export default function Tenis() {
  return (
    <div>
       <h1>Tenis</h1> 
       <div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus sapiente sit in repellat ea ipsam quia recusandae error praesentium voluptates incidunt unde, quaerat, harum molestias deleniti aliquid? Doloribus, tenetur molestias.</p>
        <figure>
            <Image
                src="https://prints.ultracoloringpages.com/f2522c31eeb209bf2b9e8819912f6546.png"
                alt="Camisa"
                width={300}
                height={300}
            />
        </figure>
       </div>
    </div>
  )
}