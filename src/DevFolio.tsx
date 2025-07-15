import React, { useState, useEffect } from 'react';

const DevFolio: React.FC = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    // Contact form state
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    // Smooth scroll to section
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setActiveSection(sectionId);
        }
    };

    // Update active section on scroll
    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'about', 'services', 'portfolio', 'contact'];
            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            if (current) setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Handle form input changes
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // Handle form submission
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            // Basic validation
            if (!formData.name || !formData.email || !formData.subject || !formData.message) {
                throw new Error('Please fill in all fields');
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formData.email)) {
                throw new Error('Please enter a valid email address');
            }

            // Use Formspree for email sending (free service)
            const response = await fetch('https://formspree.io/f/xgvzeyvy', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                    _replyto: formData.email,
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to send message');
            }

            // Reset form and show success
            setFormData({ name: '', email: '', subject: '', message: '' });
            setSubmitStatus('success');

            // Reset success message after 5 seconds
            setTimeout(() => setSubmitStatus('idle'), 5000);

        } catch (error) {
            console.error('Error sending message:', error);
            setSubmitStatus('error');

            // Reset error message after 5 seconds
            setTimeout(() => setSubmitStatus('idle'), 5000);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-black text-white">
            {/* Navigation */}
            <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50">
                <div className="max-w-7xl mx-auto px-6 py-6">
                    <div className="flex justify-between items-center">
                        <div className="text-2xl font-bold text-white">
                            DevFolio
                        </div>
                        <div className="hidden md:flex space-x-8">
                            <button
                                onClick={() => scrollToSection('home')}
                                className={`hover:text-gray-300 transition-colors ${activeSection === 'home' ? 'border-b-2 border-white pb-1' : ''}`}
                            >
                                Home
                            </button>
                            <button
                                onClick={() => scrollToSection('about')}
                                className={`hover:text-gray-300 transition-colors ${activeSection === 'about' ? 'border-b-2 border-white pb-1' : ''}`}
                            >
                                About
                            </button>
                            <button
                                onClick={() => scrollToSection('services')}
                                className={`hover:text-gray-300 transition-colors ${activeSection === 'services' ? 'border-b-2 border-white pb-1' : ''}`}
                            >
                                Services
                            </button>
                            <button
                                onClick={() => scrollToSection('portfolio')}
                                className={`hover:text-gray-300 transition-colors ${activeSection === 'portfolio' ? 'border-b-2 border-white pb-1' : ''}`}
                            >
                                Portfolio
                            </button>
                            <div className="relative">
                                <button
                                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                    className="flex items-center text-white hover:text-gray-300 transition-colors"
                                >
                                    More
                                    <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                {isDropdownOpen && (
                                    <div className="absolute top-full left-0 mt-2 w-48 bg-gray-900 rounded-md shadow-lg border border-gray-700">
                                        <button onClick={() => scrollToSection('about')} className="block w-full text-left px-4 py-2 text-white hover:bg-gray-800">
                                            Skills
                                        </button>
                                        <button onClick={() => scrollToSection('portfolio')} className="block w-full text-left px-4 py-2 text-white hover:bg-gray-800">
                                            Experience
                                        </button>
                                        <a href="/resume.pdf" className="block px-4 py-2 text-white hover:bg-gray-800">
                                            Resume
                                        </a>
                                    </div>
                                )}
                            </div>
                            <button
                                onClick={() => scrollToSection('contact')}
                                className={`hover:text-gray-300 transition-colors ${activeSection === 'contact' ? 'border-b-2 border-white pb-1' : ''}`}
                            >
                                Contact
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            <section
                id="home"
                className="min-h-screen flex flex-col md:flex-row items-center justify-center relative px-6 bg-black"
            >
                {/* Left: Text */}
                <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left py-12 md:py-0 md:pl-[10%] md:ml-[5%] max-w-[500px] z-10 relative">
                    <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight tracking-tight whitespace-nowrap">
                        I am Abhinav B M
                    </h1>
                    <p className="text-xl md:text-3xl lg:text-4xl text-white font-light tracking-wide mb-8">
                        Software Development Engineer
                    </p>
                    <div className="flex justify-center md:justify-start space-x-6">
                        <button
                            onClick={() => scrollToSection("portfolio")}
                            className="bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors font-medium"
                        >
                            View My Work
                        </button>
                        <button
                            onClick={() => scrollToSection("contact")}
                            className="border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition-colors font-medium"
                        >
                            Get In Touch
                        </button>
                    </div>
                </div>

                {/* Right: Image */}
                <div className="w-full md:w-1/2 flex justify-center md:justify-end md:pr-12 relative z-0">
                    <img
                        src="https://i.imghippo.com/files/GVsZ2749Eg.jpeg"
                        alt="Abhinav B M"
                        className="w-auto max-h-[50vh] md:max-h-[90vh] object-contain rounded-lg shadow-lg scale-115"
                    />
                </div>
            </section>











            {/* About Section */}
            <section id="about" className="py-20 bg-gray-900">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">About Me</h2>
                        <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                            Backend-focused full-stack developer with a passion for building scalable microservices using Kotlin, Java, and Node.js.
                            Experienced in designing clean architectures, developing high-performance backend systems, and solving complex problems collaboratively.
                            Also proficient in optimizing frontend performance with React.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-2xl font-bold mb-6">Education</h3>
                            <div className="space-y-6">
                                <div className="border-l-4 border-white pl-6">
                                    <h4 className="text-xl font-semibold">B.E. in Computer Science Engineering   and     Cyber Security</h4>
                                    <p className="text-gray-300">M S Ramaiah Institute of Technology</p>
                                    <p className="text-gray-400">2021 - 07/2025 | GPA: 9.04/10</p>
                                </div>
                                <div className="border-l-4 border-gray-600 pl-6">
                                    <h4 className="text-xl font-semibold">12th - CBSE</h4>
                                    <p className="text-gray-300">Lady Anusuya Singhania Educational Academy</p>
                                    <p className="text-gray-400">2020 - 2021 | 90.8%</p>
                                </div>
                                <div className="border-l-4 border-gray-600 pl-6">
                                    <h4 className="text-xl font-semibold">10th - SSLC</h4>
                                    <p className="text-gray-300">Saandeepani English School</p>
                                    <p className="text-gray-400">2018 - 2019 | 95.8%</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold mb-6">Key Skills</h3>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="text-lg font-semibold text-blue-400">Backend</h4>
                                    <p className="text-gray-300">Java SpringBoot, Kotlin DropWizard, Node.js, SQL, NoSQL</p>
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-blue-400">Frontend</h4>
                                    <p className="text-gray-300">React.js, HTML, CSS, Material UI, React Optimization</p>
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-blue-400">Technical Concepts</h4>
                                    <p className="text-gray-300">Design Patterns, Operating Systems, Computer Networks, Database Management</p>
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-blue-400">DSA</h4>
                                    <p className="text-gray-300">500+ problems solved on LeetCode, GFG, CodeForces</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Key Achievements Section */}
                    <div className="mt-16">
                        <h3 className="text-2xl font-bold mb-8 text-center">Key Achievements</h3>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-gradient-to-r from-yellow-600 to-yellow-800 p-6 rounded-lg">
                                <h4 className="text-xl font-semibold mb-2">🏆 Smart India Hackathon Winner</h4>
                                <p className="text-gray-100">Winner of the Smart India Hackathon for developing innovative tech solutions; ranked among the top 5 teams nationwide.</p>
                            </div>
                            <div className="bg-gradient-to-r from-purple-600 to-purple-800 p-6 rounded-lg">
                                <h4 className="text-xl font-semibold mb-2">🚀 Unisys Innovation Program Finalist</h4>
                                <p className="text-gray-100">Finalist in the Unisys Innovation Program, selected among 1000+ national teams.</p>
                            </div>
                        </div>
                    </div>

                    {/* Volunteering Section */}
                    <div className="mt-16">
                        <h3 className="text-2xl font-bold mb-8 text-center">Volunteering</h3>
                        <div className="bg-gray-800 p-6 rounded-lg">
                            <h4 className="text-xl font-semibold mb-2">Core Member - Artisec RIT</h4>
                            <p className="text-gray-400 mb-2">2022 - 2023</p>
                            <p className="text-gray-300">Organized workshops on GitHub, cybersecurity, AI, and prompt engineering</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-20 bg-black">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">Services</h2>
                        <p className="text-xl text-gray-300">What I can do for you</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-gray-900 p-8 rounded-lg hover:bg-gray-800 transition-colors">
                            <div className="text-4xl mb-4">🚀</div>
                            <h3 className="text-2xl font-bold mb-4">Backend Development</h3>
                            <p className="text-gray-300">
                                Scalable microservices with Java Spring Boot, Kotlin Dropwizard, and Node.js.
                                Expert in designing clean architectures and high-performance systems.
                            </p>
                        </div>

                        <div className="bg-gray-900 p-8 rounded-lg hover:bg-gray-800 transition-colors">
                            <div className="text-4xl mb-4">💻</div>
                            <h3 className="text-2xl font-bold mb-4">Full Stack Development</h3>
                            <p className="text-gray-300">
                                End-to-end web applications with React.js, TypeScript, and modern frontend tools.
                                Performance optimization and responsive design.
                            </p>
                        </div>

                        <div className="bg-gray-900 p-8 rounded-lg hover:bg-gray-800 transition-colors">
                            <div className="text-4xl mb-4">☁️</div>
                            <h3 className="text-2xl font-bold mb-4">Cloud & DevOps</h3>
                            <p className="text-gray-300">
                                AWS deployment, Docker containerization, CI/CD pipelines with GitHub Actions.
                                Automated deployment and infrastructure management.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Portfolio Section */}
            <section id="portfolio" className="py-20 bg-gray-900">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">Portfolio</h2>
                        <p className="text-xl text-gray-300">My recent work and projects</p>
                    </div>

                    <div className="space-y-16">
                        {/* Experience */}
                        <div>
                            <h3 className="text-2xl font-bold mb-8">Experience</h3>
                            <div className="space-y-8">
                                <div className="border-l-4 border-blue-500 pl-6">
                                    <h4 className="text-xl font-semibold">Software Development Engineer Intern</h4>
                                    <p className="text-blue-400">Udaan.com • Bangalore, Karnataka</p>
                                    <p className="text-gray-400 mb-3">Jan 2025 - Present</p>
                                    <p className="text-gray-300 text-sm mb-3">Software Development Engineer intern (Java, Kotlin, React) • An e-commerce company focused on B2B business</p>

                                    {/* Skills used */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        <span className="bg-orange-600 text-xs px-3 py-1 rounded">Kotlin</span>
                                        <span className="bg-blue-600 text-xs px-3 py-1 rounded">Dropwizard</span>
                                        <span className="bg-green-600 text-xs px-3 py-1 rounded">React</span>
                                        <span className="bg-purple-600 text-xs px-3 py-1 rounded">Material UI</span>
                                        <span className="bg-cyan-600 text-xs px-3 py-1 rounded">Tailwind CSS</span>
                                        <span className="bg-red-600 text-xs px-3 py-1 rounded">Redis</span>
                                        <span className="bg-yellow-600 text-xs px-3 py-1 rounded">Java</span>
                                    </div>

                                    <ul className="text-gray-300 space-y-2 text-sm">
                                        <li>• Contributed to a Kotlin + Dropwizard microservice for computing delivery and logistics charges using dynamic, rule-based slabs impacting 100K+ orders per month on the Udaan Buyer App</li>
                                        <li>• Redesigned the delivery charge engine for same-day multi-order aggregation (by buyer × category × cutoff), implemented identifier-based logic across 4+ services (Cart, OF, Constraint, etc.), and eliminated duplicate charge edge cases, reducing buyer complaints</li>
                                        <li>• Optimized delivery charge computation and database write path during order placement (checkout), reducing P99 latency to 650ms and ensuring accurate, real-time charge application at scale</li>
                                        <li>• Built a Debug Console in React (Material UI + Tailwind CSS) to help BizOps and Finance teams validate charge computations based on order details, weight, warehouse, and 10+ other dynamic factors</li>
                                        <li>• Enabled seamless handling of 1,000+ rules through a user-friendly interface</li>
                                    </ul>
                                </div>

                                <div className="border-l-4 border-green-500 pl-6">
                                    <h4 className="text-xl font-semibold">Free Lance - Full Stack Web Development</h4>
                                    <p className="text-green-400">AaMaRa Technologies • Remote</p>
                                    <p className="text-gray-400 mb-3">01/2024 - 06/2024</p>
                                    <a href="https://table-ganj.vercel.app" className="text-blue-400 hover:text-blue-300 text-sm block mb-2">🔗 table-ganj.vercel.app</a>
                                    <p className="text-gray-300 text-sm mb-3">Remote software development freelancing</p>

                                    {/* Skills used */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        <span className="bg-blue-600 text-xs px-3 py-1 rounded">React</span>
                                        <span className="bg-green-600 text-xs px-3 py-1 rounded">TypeScript</span>
                                        <span className="bg-purple-600 text-xs px-3 py-1 rounded">Redux</span>
                                        <span className="bg-yellow-600 text-xs px-3 py-1 rounded">Node.js</span>
                                        <span className="bg-orange-600 text-xs px-3 py-1 rounded">AWS S3</span>
                                        <span className="bg-gray-600 text-xs px-3 py-1 rounded">MongoDB</span>
                                    </div>

                                    <ul className="text-gray-300 space-y-2 text-sm">
                                        <li>• Led the development of a comprehensive Table Management Tool, handling both frontend and backend tasks</li>
                                        <li>• Designed and implemented 20+ APIs with Node.js, integrating client-side caching for optimized performance</li>
                                        <li>• Utilized AWS S3 for media storage and MongoDB for data handling</li>
                                        <li>• Engineered a production-grade React + TypeScript frontend using Redux, with performance optimizations such as lazy loading, code splitting, memoization, and profiling tools</li>
                                        <li>• Achieved 25% improvement in overall performance and 20% reduction in initial load time</li>
                                        <li>• Deployed the tool, now serving over 200 monthly users at a country club, including supporting a donation service</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Projects */}
                        <div>
                            <h3 className="text-2xl font-bold mb-8">Key Projects</h3>
                            <div className="space-y-8">
                                <div className="bg-gray-800 p-6 rounded-lg">
                                    <h4 className="text-xl font-semibold mb-2">Smart India Hackathon - Centralized Firewall 🏆</h4>
                                    <p className="text-gray-400 text-sm mb-2">03/2024 • Ahmedabad, India</p>
                                    <div className="flex flex-wrap gap-2 mb-3">
                                        <a href="https://github.com/AbhinavBM/Centralized-Firewall" className="text-blue-400 hover:text-blue-300 text-sm">🔗 GitHub Repository</a>
                                        <a href="https://centralized-fire-wall-front-end.vercel.app/" className="text-blue-400 hover:text-blue-300 text-sm">🌐 Live Demo</a>
                                    </div>
                                    <p className="text-gray-300 mb-4 text-sm">
                                        Engineered a full-stack centralized firewall management system using Node.js/Express.js, MongoDB, and React.js.
                                        Implemented secure JWT-based REST APIs, supporting application-endpoint mapping, real-time traffic monitoring, RBAC,
                                        automated policy synchronization, and centralized configuration management. Implemented eBPF programs with custom BPF maps
                                        for high-performance Linux packet filtering, and integrated PyDivert for Windows packet interception.
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="bg-blue-600 text-xs px-3 py-1 rounded">Node.js</span>
                                        <span className="bg-green-600 text-xs px-3 py-1 rounded">React.js</span>
                                        <span className="bg-purple-600 text-xs px-3 py-1 rounded">eBPF</span>
                                        <span className="bg-orange-600 text-xs px-3 py-1 rounded">MongoDB</span>
                                        <span className="bg-red-600 text-xs px-3 py-1 rounded">PyDivert</span>
                                    </div>
                                </div>

                                <div className="bg-gray-800 p-6 rounded-lg">
                                    <h4 className="text-xl font-semibold mb-2">Simple CI/CD Setup Project</h4>
                                    <p className="text-gray-400 text-sm mb-2">05/2025</p>
                                    <a href="https://github.com/AbhinavBM/java-jar-test" className="text-blue-400 hover:text-blue-300 text-sm block mb-3">🔗 GitHub Repository</a>
                                    <p className="text-gray-300 mb-4 text-sm">
                                        Built and Dockerized a Java JAR application with GitHub Actions CI/CD and EC2 Bash deployment, enabling push-to-deploy with 80% less manual overhead.
                                        Developed and packaged a modular Java application into an executable JAR, reducing setup time for new environments by 90%.
                                        Containerized the application using Docker to enable consistent deployment across local and cloud environments.
                                        Automated deployment to AWS EC2 with a 100-line custom Bash script, provisioning instances, configuring SSH, and starting the service with zero manual steps.
                                        Designed and implemented a CI/CD pipeline via GitHub Actions, enabling one-click deployment with every push to main, reducing deployment errors by ~80%.
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="bg-orange-600 text-xs px-3 py-1 rounded">Java</span>
                                        <span className="bg-blue-600 text-xs px-3 py-1 rounded">Docker</span>
                                        <span className="bg-yellow-600 text-xs px-3 py-1 rounded">AWS EC2</span>
                                        <span className="bg-gray-600 text-xs px-3 py-1 rounded">GitHub Actions</span>
                                        <span className="bg-green-600 text-xs px-3 py-1 rounded">Bash</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20 bg-black">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
                        <p className="text-xl text-gray-300">Let's discuss your next project</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
                            <div className="space-y-6">
                                <div className="flex items-center space-x-4">
                                    <div className="bg-blue-600 p-3 rounded-full">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-gray-300">Email</p>
                                        <p className="text-white">abhinavankole06@gmail.com</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <div className="bg-green-600 p-3 rounded-full">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-gray-300">Phone</p>
                                        <p className="text-white">+91 7892525180</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <div className="bg-purple-600 p-3 rounded-full">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-gray-300">Location</p>
                                        <p className="text-white">Bangalore, Karnataka</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8">
                                <h4 className="text-xl font-semibold mb-4">Connect with me</h4>
                                <div className="flex space-x-4">
                                    <a href="https://linkedin.com/in/abhinav-b-m-2b7659173/" className="bg-blue-600 p-3 rounded-full hover:bg-blue-700 transition-colors">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                        </svg>
                                    </a>
                                    <a href="https://github.com/AbhinavBM" className="bg-gray-600 p-3 rounded-full hover:bg-gray-700 transition-colors">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold mb-8">Send Message</h3>

                            {/* Status Messages */}
                            {submitStatus === 'success' && (
                                <div className="mb-6 p-4 bg-green-600 rounded-lg">
                                    <p className="text-white">✅ Message prepared! Your email client should open shortly.</p>
                                </div>
                            )}

                            {submitStatus === 'error' && (
                                <div className="mb-6 p-4 bg-red-600 rounded-lg">
                                    <p className="text-white">❌ Please fill in all fields with valid information.</p>
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        placeholder="Your Name"
                                        required
                                        className="w-full p-4 bg-gray-800 rounded-lg border border-gray-700 focus:border-blue-500 focus:outline-none text-white placeholder-gray-400"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="Your Email"
                                        required
                                        className="w-full p-4 bg-gray-800 rounded-lg border border-gray-700 focus:border-blue-500 focus:outline-none text-white placeholder-gray-400"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        placeholder="Subject"
                                        required
                                        className="w-full p-4 bg-gray-800 rounded-lg border border-gray-700 focus:border-blue-500 focus:outline-none text-white placeholder-gray-400"
                                    />
                                </div>
                                <div>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        placeholder="Your Message"
                                        rows={5}
                                        required
                                        className="w-full p-4 bg-gray-800 rounded-lg border border-gray-700 focus:border-blue-500 focus:outline-none text-white placeholder-gray-400 resize-vertical"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`w-full py-4 rounded-lg font-medium transition-all duration-200 ${
                                        isSubmitting
                                            ? 'bg-gray-600 cursor-not-allowed'
                                            : 'bg-blue-600 hover:bg-blue-700 hover:shadow-lg transform hover:scale-105'
                                    } text-white`}
                                >
                                    {isSubmitting ? (
                                        <span className="flex items-center justify-center">
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Preparing Message...
                                        </span>
                                    ) : (
                                        'Send Message'
                                    )}
                                </button>
                            </form>

                            <div className="mt-6 text-center">
                                <p className="text-gray-400 text-sm">
                                    📧 This will open your default email client with the message ready to send.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 py-8">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <p className="text-gray-400">© 2025 Abhinav B M. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default DevFolio;

