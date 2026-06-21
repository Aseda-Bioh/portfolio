"use client"
import useInView from "../hooks/useInView";

export default function Education() {
    const [ref, isVisible] = useInView()
    return (
        <section id="education" className={`min-h-screen flex items-center justify-center px-6 py-20 will-change-[opacity,transform] transition-opacity duration-7000 ease-out ${isVisible ? 'opacity-100': 'opacity-0'}`} ref={ref}>
            <div className="max-w-3xl w-full flex flex-col gap-6">
                <h2 className="text-4xl font-bold mb-10 font-heading">Education</h2>

                <div className="border-l-2 border-cyan-400 pl-6 flex flex-col gap-2">
                    <p className="text-gray-400 text-sm">2019-2022</p>
                    <h3 className="text-xl font-bold text-cyan-400">St. Augustine&apos;s College</h3>
                    <p className="text-gray-300">West African Secondary School Certificate Examination (WASSCE)</p>
                    <p className="text-gray-400">General Science</p>
                </div>
                <div className="border-l-2 border-cyan-400 pl-6 flex flex-col gap-2">
                    <p className="text-gray-400 text-sm">2022-2026</p>
                    <h3 className="text-xl font-bold text-cyan-400">Ashesi University</h3>
                    <p className="text-gray-300">B. Sc. Computer Science</p>
                    <p className="text-gray-400">Computer Science</p>
                </div>
            </div>
        </section>
    )
}