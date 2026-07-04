import Image from "next/image";
import Link from "next/link";
import Rust from '@/src/assets/images/rust_cohle.jpeg'

const articlesData = [
  {
    slug: 'o universo tende ao caos',
    date: 'jul 4, 2026',
    href: '/artigos/o-universo-tende-ao-caos'
  },
  {
    slug: 'quando você percebe que não dá mais pra seguir sem você',
    date: 'abr 4, 2024',
    href: '/artigos/quando-voce-percebe-que-nao-da-mais-pra-seguir-sem-voce'
  }
]

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center">
      <main className="flex w-full max-w-3xl flex-col items-center bg-white py-32 px-16 sm:items-start p-6">
        <div className="md:mt-40 flex gap-4 flex-col w-full items-center md:items-start">
          <Image loading="eager" src={Rust} alt="Rust Cohle sentado no chão fumando um cigarro" className="rounded-full w-50" />
          <h1 className="text-black font-bold text-xl">é só um canto na internet</h1>
        </div>

          <div className="mt-10 flex flex-col gap-10 md:gap-5 w-full">
            {articlesData.map(article => (
              <Link key={article.slug} href={article.href} className="flex flex-col md:flex-row md:justify-between">
                <span>{article.slug}</span>
                <span className="text-xs md:text-sm text-[#b5b8bb]">{article.date}</span>
              </Link>
            ))}
          </div>
      </main>
    </div>
  );
}
