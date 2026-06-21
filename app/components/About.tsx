"use client"
import Image from "next/image";
import useInView from "../hooks/useInView";

export default function About() {
    const [ref, isVisible] = useInView()
    return (
        <section id="about" className={`min-h-screen flex items-center justify-center px-6 py-20 will-change-[opacity,transform] transition-opacity duration-7000 ease-out ${isVisible ? 'opacity-100': 'opacity-0'}`} ref={ref}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl w-full items-center">
                <div className="flex flex-col gap-6">
                    <h2 className="text-4xl font-bold font-heading">About Me</h2>
                    <p className="text-gray-300 leading-relaxed text-justify">I&apos;m a recent Computer Science graduate from Ashesi University in Ghana. I&apos;m ambitious, driven and passionate about building software. There&apos;s something uniquely satisfying about taking an idea that exists only in your head and turning it into a fully functioning application. Beyond tech, I&apos;ve spent the last few years investing in myself across the board — financial freedom, health and personal relationships — and it&apos;s been quite the journey.</p>
                    <p className="text-gray-300 leading-relaxed text-justify">I specialize in building web and mobile applications that are efficient, maintainable and scalable. My go-to stack includes Next.js, React, Python and Flutter, and I&apos;ve recently been exploring how to weave AI into the products I build, which has opened up a lot of exciting possibilities.</p>
                    <p className="text-gray-300 leading-relaxed text-justify">When I&apos;m not coding, you&apos;ll find me gaming. EA FC is a staple, and I&apos;ve recently fallen into the world of Red Dead Redemption. I also love hanging out with friends, travelling and keeping up with the latest in tech.</p>
                </div>
                <Image
                    src="/profile.jpeg"
                    alt="Aseda Bioh"
                    width={400}
                    height={400}
                    className="rounded-2xl w-full object-cover" 
                />
            </div>
        </section>
    )
}