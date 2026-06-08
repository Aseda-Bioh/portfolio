export default function Projects() {
    return (
        <section id="projects" className="min-h-screen flex items-center justify-center px-6 py-20">
            <div className="max-w-4xl w-full flex flex-col gap-12">
                <h2 className="text-4xl font-bold">Projects</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="border border-cyan-400 rounded-2xl p-6 flex flex-col gap-4">
                        <h3 className="text-xl font-bold text-cyan-400">ArcFound</h3>
                        <p className="text-gray-300 text-sm leading-relaxed text-justify">
                            A full stack platform that connects startup founders with investors while protecting their intellectual property. Founders can pitch their ideas and attract funding without compromising ownership.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            <span className=" bg-white px-4 py-2 rounded-full text-sm text-black">Next.js</span>
                            <span className=" bg-white px-4 py-2 rounded-full text-sm text-black">React</span>
                            <span className=" bg-white px-4 py-2 rounded-full text-sm text-black">Firebase</span>
                            <span className=" bg-white px-4 py-2 rounded-full text-sm text-black">Netlify</span>
                            <span className=" bg-white px-4 py-2 rounded-full text-sm text-black">Clerk</span>
                            <span className=" bg-white px-4 py-2 rounded-full text-sm text-black">Convex</span>
                        </div>
                        <a href="https://www.tryarcfound.com" target="_blank" className="hover:text-white underline">www.tryarcfound.com</a>
                    </div>
                    <div className="border border-cyan-400 rounded-2xl p-6 flex flex-col gap-4">
                        <h3 className="text-xl font-bold text-cyan-400">SmartTraffic</h3>
                        <p className="text-gray-300 text-sm leading-relaxed text-justify">
                            A simulation-based intelligent traffic control system that uses reinforcement learning to optimize general traffic flow and automatically prioritize emergency vehicles — reducing response times in critical situations.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            <span className=" bg-white px-4 py-2 rounded-full text-sm text-black">Python</span>
                            <span className=" bg-white px-4 py-2 rounded-full text-sm text-black">SUMO</span>
                            <span className=" bg-white px-4 py-2 rounded-full text-sm text-black">FastApi</span>
                            <span className=" bg-white px-4 py-2 rounded-full text-sm text-black">Flutter</span>
                            <span className=" bg-white px-4 py-2 rounded-full text-sm text-black">Dart</span>
                        </div>
                        <a href="https://github.com/jka26/traffic_control_capstone" target="_blank" className="hover:text-white underline">SmartTraffic</a>
                    </div>
                    <div className="border border-cyan-400 rounded-2xl p-6 flex flex-col gap-4">
                        <h3 className="text-xl font-bold text-cyan-400">AshesiLife</h3>
                        <p className="text-gray-300 text-sm leading-relaxed text-justify">
                            A mobile app that brings campus life at Ashesi University together in one place. Students can discover and follow campus events, subscribe to clubs and committees, receive real-time notifications and report issues directly through the app.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            <span className=" bg-white px-4 py-2 rounded-full text-sm text-black">Flutter</span>
                            <span className=" bg-white px-4 py-2 rounded-full text-sm text-black">Dart</span>
                            <span className=" bg-white px-4 py-2 rounded-full text-sm text-black">Firebase</span>
                        </div>
                        <a href="https://github.com/billionzz798/ASHESI-LIFE" target="_blank" className="hover:text-white underline">AshesiLife</a>
                    </div>
                    <div className="border border-cyan-400 rounded-2xl p-6 flex flex-col gap-4">
                        <h3 className="text-xl font-bold text-cyan-400">VoiceLog</h3>
                        <p className="text-gray-300 text-sm leading-relaxed text-justify">
                            A mobile app that silently records meetings in the background, then automatically generates a concise summary and extracts action items — identifying who is responsible for each task.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            <span className=" bg-white px-4 py-2 rounded-full text-sm text-black">Flutter</span>
                            <span className=" bg-white px-4 py-2 rounded-full text-sm text-black">Dart</span>
                        </div>
                        <a href="https://github.com/Aseda-Bioh/VoiceLog" target="_blank" className="hover:text-white underline">VoiceLog</a>
                    </div>
                </div>
            </div>
        </section>
    )
}