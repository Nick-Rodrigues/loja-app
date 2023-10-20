import Image from "next/image";

export default function notFound() {
  return (
    <div>
        <h1>OOPSS! 404</h1>

            <Image
                src="https://prints.ultracoloringpages.com/551ada1f48c923acddbbb135962eebb9.png"
                alt="Camisa"
                width={300}
                height={300}
            />

        <p>Not Found!</p>
    </div>
  )
}
