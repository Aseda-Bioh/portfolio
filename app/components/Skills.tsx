"use client"
import useInView from "../hooks/useInView";

export default function Skills() {
    const [ref, isVisible] = useInView()

    return (
        <section id="skills" className={`min-h-screen flex items-center justify-center px-6 py-20 will-change-[opacity,transform] transition-opacity duration-7000 ease-out ${isVisible ? 'opacity-100': 'opacity-0'}`} ref={ref}>
            <div className="max-w-4xl w-full flex flex-col gap-12">
                <h2 className="text-4xl font-bold border-b-2 border-cyan-400 pb-2 w-fit font-heading">Skills</h2>

                <div className="flex flex-col gap-4">
                    <h3 className="text-xl font-semibold text-gray-300">Programming Languages</h3>
                    <div className="flex flex-wrap gap-3">
                        <span className="px-4 py-2 border border-white rounded-full text-sm">Python</span>
                        <span className="px-4 py-2 border border-white rounded-full text-sm">TypeScript</span>
                        <span className="px-4 py-2 border border-white rounded-full text-sm">JavaScript</span>
                        <span className="px-4 py-2 border border-white rounded-full text-sm">Dart</span>
                        <span className="px-4 py-2 border border-white rounded-full text-sm">HTML</span>
                        <span className="px-4 py-2 border border-white rounded-full text-sm">CSS</span>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <h3 className="text-xl font-semibold text-gray-300">Frameworks & Libraries</h3>
                    <div className="flex flex-wrap gap-3">
                        <span className="px-4 py-2 border border-white rounded-full text-sm">Next.js</span>
                        <span className="px-4 py-2 border border-white rounded-full text-sm">React</span>
                        <span className="px-4 py-2 border border-white rounded-full text-sm">Flutter</span>
                        <span className="px-4 py-2 border border-white rounded-full text-sm">Tailwind CSS</span>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <h3 className="text-xl font-semibold text-gray-300">Tools & Platforms</h3>
                    <div className="flex flex-wrap gap-3">
                        <span className="px-4 py-2 border border-white rounded-full text-sm">Firebase</span>
                        <span className="px-4 py-2 border border-white rounded-full text-sm">GitHub</span>
                        <span className="px-4 py-2 border border-white rounded-full text-sm">Convex</span>
                        <span className="px-4 py-2 border border-white rounded-full text-sm">Clerk</span>
                        <span className="px-4 py-2 border border-white rounded-full text-sm">Netlify</span>
                        <span className="px-4 py-2 border border-white rounded-full text-sm">PostgreSQL</span>
                        <span className="px-4 py-2 border border-white rounded-full text-sm">MongoDB</span>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <h3 className="text-xl font-semibold text-gray-300">AI/ML</h3>
                    <div className="flex flex-wrap gap-3">
                        <span className="px-4 py-2 border border-white rounded-full text-sm">PyTorch</span>
                        <span className="px-4 py-2 border border-white rounded-full text-sm">Numpy</span>
                    </div>
                </div>
            </div>
        </section>
    )
}