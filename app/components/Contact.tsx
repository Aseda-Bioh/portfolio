export default function Contact() {
    return (
        <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-20">
            <div className="max-w-3xl w-full flex flex-col gap-12">
                <h2 className="text-4xl font-bold">Contact</h2>
                <p className="text-gray-300 text-lg">Have a project in mind or want to work together? Feel free to reach out.</p>
                <div className="flex flex-col gap-6">
                    <div className="flex items-center">
                        <span className="text-cyan-400 w-24">Email:</span>
                        <a href="mailto:biohaseda07@gmail.com" className="text-white hover:underline">biohaseda07@gmail.com</a>
                    </div>
                    <div className="flex items-center">
                        <span className="text-cyan-400 w-24">LinkedIn:</span>
                        <a href="https://www.linkedin.com/in/aseda-bioh-2495b1263" className="text-white hover:underline">LinkedIn Profile</a>
                    </div>
                    <div className="flex items-center">
                        <span className="text-cyan-400 w-24">GitHub:</span>
                        <a href="https://github.com/Aseda-Bioh" className="text-white hover:underline">GitHub Profile</a>
                    </div>
                </div>
            </div>
        </section>
    )
}