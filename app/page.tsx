import Link from "next/link";


export default function Home() {
  return (
    <main className="bg-grey_light w-full h-screen flex items-center">
    
    <div className='flex flex-col mx-auto gap-10'>
        
        <Link href={"/site1"} className="btn-prac inline-block">
          Pruinboom
        </Link>
      
     
          
        <Link href={"/site2"} className="btn-prac inline-block">
          Clinique
        </Link>

        <Link href={"/site3"} className="btn-prac inline-block">
          Celares
        </Link>

        <Link href={"/tailwind"} className="btn-prac inline-block">
          Tailwind
        </Link>

        <Link href={"/react"} className="btn-prac inline-block">
          Celares
        </Link>
       
        </div>

    
    </main>
  );
}
