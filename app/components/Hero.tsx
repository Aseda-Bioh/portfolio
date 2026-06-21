"use client"
import useInView from "../hooks/useInView"

export default function Hero() {
    const [ref, isVisible] = useInView()
    return (
        <section className={`flex flex-col items-center justify-center min-h-screen text-center px-6 gap-6 will-change-[opacity,transform] transition-opacity duration-7000 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`} ref={ref}>
            <p className="text-cyan-400">Hi, I&apos;m Aseda</p>
            <h1 className="text-6xl font-bold max-w-3xl font-heading bg-linear-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent leading-tight">I Build Scalable, Efficient Web & Mobile Apps</h1>
            <p className="text-lg max-w-xl text-gray-400">A hardworking and passionate full stack developer dedicated to building web and mobile applications that meet your exact needs</p>
            <a href="#projects" className="bg-linear-to-r from-cyan-400 to-purple-500 hover:scale-105 transition-transform duration-200 text-black px-6 py-3 rounded-full font-semibold mt-4">View my work</a>
        </section>
    )
}