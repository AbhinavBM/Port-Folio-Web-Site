import React, { useEffect, useState } from 'react';
import { Download, ExternalLink, Github, Linkedin, Mail, Menu, Phone, X } from 'lucide-react';

const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Experience', id: 'experience' },
    { label: 'Projects', id: 'projects' },
    { label: 'Skills', id: 'skills' },
    { label: 'Contact', id: 'contact' },
];

const metrics = [
    { label: 'Production Services', value: '7+' },
    { label: 'DSA Problems', value: '700+' },
    { label: 'CGPA', value: '9.04' },
    { label: 'SIH Winner', value: '2023' },
];

const skills = [
    {
        title: 'Backend',
        items: ['Kotlin', 'Java', 'JVM', 'Spring Boot', 'Dropwizard', 'REST APIs', 'GraphQL'],
    },
    {
        title: 'Commerce Systems',
        items: ['Checkout', 'Cart', 'Subscriptions', 'Order Lifecycle', 'Delivery Charge Rules', 'Marketplace Buyer Flows'],
    },
    {
        title: 'Platform',
        items: ['Microservices', 'Feature Flags', 'Canary Rollouts', 'CI/CD', 'Observability', 'On-call Debugging'],
    },
    {
        title: 'Data & Tools',
        items: ['Cosmos DB', 'SQL', 'NoSQL', 'Git', 'GitHub', 'IntelliJ IDEA', 'React'],
    },
];

const experiences = [
    {
        role: 'Software Development Engineer, Backend',
        company: 'Udaan.com',
        date: 'Nov 2025 - Present',
        description:
            'Backend engineer building Kotlin/JVM microservices for e-commerce buyer applications, checkout, subscriptions, feedback, delivery-charge rule handling, and order-management systems handling millions of orders.',
        tags: ['Kotlin', 'Java', 'Dropwizard', 'Spring Boot', 'GraphQL', 'Cosmos DB'],
        bullets: [
            'Shipped production backend changes across checkout, cart, order-form, order-service, constraints, preorder, and postorder services for high-impact commerce flows.',
            'Migrated checkout and cart fee calculation to typed, constraint-backed charge flows covering delivery, handling, platform, fuel surcharge, buyer cutoff, and subscription fee categories.',
            'Built subscription and membership benefit flows with display metadata, empty-cart benefit evaluation, fee handling, and downstream order/postorder propagation.',
            'Implemented logistics and free-shipping support with cart-level offers, progress nudges, dropslot-aware waivers, centralized caching, checkout persistence, and configurable rule management.',
            'Participated in on-call debugging and production issue triage for checkout, delivery-charge, order, repayment, and service-integration issues with feature-flagged and canary rollouts.',
        ],
    },
    {
        role: 'Software Development Engineer Intern, Backend',
        company: 'Udaan.com',
        date: 'Jan 2025 - Sep 2025',
        description:
            'Worked on backend pricing and delivery-charge systems for buyer-facing commerce flows and internal rule-management workflows.',
        tags: ['Kotlin', 'Dropwizard', 'GraphQL', 'Cosmos DB', 'React'],
        bullets: [
            'Implemented day/dropslot and order-level delivery charge algorithms with indexing and GraphQL-based data retrieval, reducing delivery charge escalations and improving buyer transparency.',
            'Designed a strategy-pattern-based rule engine with 11+ parallel calculators for category-specific Minimum Order Value and delivery charge calculations.',
            'Built backend APIs and Azure Cosmos DB operations for 500+ configurable delivery charge rules used by internal rule-management workflows.',
            'Supported a React-based admin console with CRUD, CSV import/export, validation, staging, and feature-flag workflows for safer pricing rule releases.',
        ],
    },
];

const projects = [
    {
        title: 'Centralized Firewall',
        subtitle: 'Smart India Hackathon Winner 2023',
        link: 'https://github.com/AbhinavBM/Centralized-Firewall',
        demo: 'https://centralized-fire-wall-front-end.vercel.app/',
        description:
            'Built a centralized firewall with domain-, port-, and application-specific allow/block rules, real-time traffic monitoring, role-based access control, and packet filtering across Windows and Linux.',
        tags: ['Node.js', 'Express.js', 'React', 'MongoDB', 'Python', 'PyDivert', 'mitmproxy', 'eBPF'],
    },
    {
        title: 'Table Management Platform',
        subtitle: 'Full-stack freelance project',
        link: 'https://table-ganj.vercel.app',
        description:
            'Delivered a production React and Node.js table-management tool with 20+ APIs, MongoDB persistence, AWS S3 media storage, Redux state management, and frontend performance optimizations.',
        tags: ['React', 'TypeScript', 'Redux', 'Node.js', 'MongoDB', 'AWS S3'],
    },
    {
        title: 'Java CI/CD Deployment',
        subtitle: 'Deployment automation project',
        link: 'https://github.com/AbhinavBM/java-jar-test',
        description:
            'Built and dockerized a Java JAR application with GitHub Actions and EC2 Bash deployment automation to reduce manual deployment effort and environment setup time.',
        tags: ['Java', 'Docker', 'GitHub Actions', 'AWS EC2', 'Bash'],
    },
];

const achievements = [
    'Smart India Hackathon Winner 2023 for a centralized firewall solution.',
    'Unisys Innovation Program Finalist.',
    'LeetCode rating 1840+ with 700+ DSA problems solved.',
    'B.E. Computer Science Engineering and Cyber Security, M S Ramaiah Institute of Technology, CGPA 9.04.',
];

const DevFolio: React.FC = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const scrollToSection = (sectionId: string) => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
        setActiveSection(sectionId);
        setIsMenuOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            const current = navItems.find(({ id }) => {
                const element = document.getElementById(id);
                if (!element) return false;
                const rect = element.getBoundingClientRect();
                return rect.top <= 120 && rect.bottom >= 120;
            });

            if (current) setActiveSection(current.id);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!formData.name || !formData.email || !formData.subject || !formData.message || !emailRegex.test(formData.email)) {
                throw new Error('Invalid form data');
            }

            const response = await fetch('https://formspree.io/f/xgvzeyvy', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...formData, _replyto: formData.email }),
            });

            if (!response.ok) throw new Error('Failed to send message');

            setFormData({ name: '', email: '', subject: '', message: '' });
            setSubmitStatus('success');
        } catch (error) {
            console.error('Error sending message:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
            setTimeout(() => setSubmitStatus('idle'), 5000);
        }
    };

    return (
        <div className="min-h-screen bg-slate-950 text-slate-100">
            <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-slate-950/90 backdrop-blur">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                    <button onClick={() => scrollToSection('home')} className="text-left text-lg font-semibold tracking-wide">
                        Abhinav B M
                    </button>

                    <div className="hidden items-center gap-7 md:flex">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className={`text-sm transition-colors ${
                                    activeSection === item.id ? 'text-white' : 'text-slate-300 hover:text-white'
                                }`}
                            >
                                {item.label}
                            </button>
                        ))}
                        <a
                            href="/resume.pdf"
                            className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
                        >
                            <Download size={16} />
                            Resume
                        </a>
                    </div>

                    <button className="md:hidden" onClick={() => setIsMenuOpen((value) => !value)} aria-label="Toggle menu">
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {isMenuOpen && (
                    <div className="border-t border-white/10 bg-slate-950 px-6 py-4 md:hidden">
                        <div className="flex flex-col gap-4">
                            {navItems.map((item) => (
                                <button key={item.id} onClick={() => scrollToSection(item.id)} className="text-left text-slate-200">
                                    {item.label}
                                </button>
                            ))}
                            <a href="/resume.pdf" className="inline-flex items-center gap-2 text-slate-200">
                                <Download size={16} />
                                Resume
                            </a>
                        </div>
                    </div>
                )}
            </nav>

            <main>
                <section id="home" className="min-h-screen px-6 pt-28">
                    <div className="mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-center gap-12 md:grid-cols-[1.15fr_0.85fr]">
                        <div>
                            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">
                                Backend Software Engineer
                            </p>
                            <h1 className="max-w-4xl text-5xl font-bold leading-tight text-white md:text-7xl">
                                Building production commerce systems on Kotlin/JVM.
                            </h1>
                            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                                Software Development Engineer with production experience in buyer-facing e-commerce systems across checkout, cart,
                                subscriptions, delivery-charge rule handling, feedback, and order lifecycle platforms handling millions of orders.
                            </p>

                            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                                <button
                                    onClick={() => scrollToSection('experience')}
                                    className="rounded-md bg-cyan-300 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-200"
                                >
                                    View Experience
                                </button>
                                <a
                                    href="/resume.pdf"
                                    className="inline-flex items-center justify-center gap-2 rounded-md border border-white/25 px-6 py-3 font-semibold text-white transition hover:border-white hover:bg-white/10"
                                >
                                    <Download size={18} />
                                    Download Resume
                                </a>
                            </div>

                            <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
                                {metrics.map((metric) => (
                                    <div key={metric.label} className="border-l border-cyan-300/50 pl-4">
                                        <div className="text-3xl font-bold text-white">{metric.value}</div>
                                        <div className="mt-1 text-sm text-slate-400">{metric.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative mx-auto w-full max-w-sm md:max-w-md">
                            <div className="absolute inset-4 rounded-2xl bg-cyan-300/20 blur-3xl" />
                            <img
                                src="https://i.imghippo.com/files/GVsZ2749Eg.jpeg"
                                alt="Abhinav B M"
                                className="relative aspect-[4/5] w-full rounded-xl border border-white/10 object-cover shadow-2xl"
                            />
                        </div>
                    </div>
                </section>

                <section id="experience" className="border-t border-white/10 bg-slate-900 px-6 py-24">
                    <div className="mx-auto max-w-7xl">
                        <div className="mb-12 max-w-3xl">
                            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">Experience</p>
                            <h2 className="mt-3 text-4xl font-bold text-white">Production Backend Work</h2>
                            <p className="mt-4 text-slate-300">
                                Focused on compatibility-sensitive backend changes, rule-driven charge calculation, API design, safe rollouts,
                                observability, and on-call debugging for commerce workflows.
                            </p>
                        </div>

                        <div className="space-y-8">
                            {experiences.map((experience) => (
                                <article key={experience.role} className="rounded-lg border border-white/10 bg-slate-950 p-6 md:p-8">
                                    <div className="flex flex-col justify-between gap-4 md:flex-row">
                                        <div>
                                            <h3 className="text-2xl font-semibold text-white">{experience.role}</h3>
                                            <p className="mt-1 text-cyan-300">{experience.company}</p>
                                        </div>
                                        <p className="text-sm font-medium text-slate-400">{experience.date}</p>
                                    </div>

                                    <p className="mt-5 max-w-5xl leading-7 text-slate-300">{experience.description}</p>

                                    <div className="mt-5 flex flex-wrap gap-2">
                                        {experience.tags.map((tag) => (
                                            <span key={tag} className="rounded-md bg-white/10 px-3 py-1 text-xs font-medium text-slate-200">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <ul className="mt-6 grid gap-3 text-sm leading-6 text-slate-300 md:grid-cols-2">
                                        {experience.bullets.map((bullet) => (
                                            <li key={bullet} className="border-l border-cyan-300/40 pl-4">
                                                {bullet}
                                            </li>
                                        ))}
                                    </ul>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="projects" className="border-t border-white/10 bg-slate-950 px-6 py-24">
                    <div className="mx-auto max-w-7xl">
                        <div className="mb-12 max-w-3xl">
                            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">Projects</p>
                            <h2 className="mt-3 text-4xl font-bold text-white">Selected Engineering Work</h2>
                        </div>

                        <div className="grid gap-6 lg:grid-cols-3">
                            {projects.map((project) => (
                                <article key={project.title} className="flex h-full flex-col rounded-lg border border-white/10 bg-slate-900 p-6">
                                    <div className="flex-1">
                                        <p className="text-sm text-cyan-300">{project.subtitle}</p>
                                        <h3 className="mt-2 text-2xl font-semibold text-white">{project.title}</h3>
                                        <p className="mt-4 text-sm leading-6 text-slate-300">{project.description}</p>
                                    </div>

                                    <div className="mt-5 flex flex-wrap gap-2">
                                        {project.tags.map((tag) => (
                                            <span key={tag} className="rounded-md bg-slate-800 px-3 py-1 text-xs text-slate-200">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="mt-6 flex flex-wrap gap-4 text-sm font-semibold">
                                        <a href={project.link} className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200">
                                            Open <ExternalLink size={15} />
                                        </a>
                                        {project.demo && (
                                            <a href={project.demo} className="inline-flex items-center gap-2 text-slate-300 hover:text-white">
                                                Demo <ExternalLink size={15} />
                                            </a>
                                        )}
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="skills" className="border-t border-white/10 bg-slate-900 px-6 py-24">
                    <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">Skills</p>
                            <h2 className="mt-3 text-4xl font-bold text-white">Backend-first profile for SDE-1 roles.</h2>
                            <p className="mt-5 leading-7 text-slate-300">
                                Strongest fit: backend, commerce platform, fintech-adjacent, marketplace, order-management, and rule-engine teams.
                            </p>

                            <div className="mt-8 rounded-lg border border-white/10 bg-slate-950 p-6">
                                <h3 className="text-xl font-semibold text-white">Education & Achievements</h3>
                                <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-300">
                                    {achievements.map((achievement) => (
                                        <li key={achievement} className="border-l border-cyan-300/40 pl-4">
                                            {achievement}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">
                            {skills.map((group) => (
                                <div key={group.title} className="rounded-lg border border-white/10 bg-slate-950 p-6">
                                    <h3 className="text-lg font-semibold text-white">{group.title}</h3>
                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {group.items.map((item) => (
                                            <span key={item} className="rounded-md bg-white/10 px-3 py-1 text-sm text-slate-200">
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="contact" className="border-t border-white/10 bg-slate-950 px-6 py-24">
                    <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">Contact</p>
                            <h2 className="mt-3 text-4xl font-bold text-white">Let us connect.</h2>
                            <p className="mt-5 max-w-xl leading-7 text-slate-300">
                                Open to backend SDE-1 opportunities across product engineering, commerce platforms, fintech systems, and marketplace teams.
                            </p>

                            <div className="mt-8 space-y-4">
                                <a href="mailto:abhinavankole06@gmail.com" className="flex items-center gap-3 text-slate-200 hover:text-white">
                                    <Mail size={20} />
                                    abhinavankole06@gmail.com
                                </a>
                                <a href="tel:+917892525180" className="flex items-center gap-3 text-slate-200 hover:text-white">
                                    <Phone size={20} />
                                    +91 7892525180
                                </a>
                                <a
                                    href="https://linkedin.com/in/abhinav-b-m-2b7659173/"
                                    className="flex items-center gap-3 text-slate-200 hover:text-white"
                                >
                                    <Linkedin size={20} />
                                    linkedin.com/in/abhinav-b-m-2b7659173
                                </a>
                                <a href="https://github.com/AbhinavBM" className="flex items-center gap-3 text-slate-200 hover:text-white">
                                    <Github size={20} />
                                    github.com/AbhinavBM
                                </a>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className="rounded-lg border border-white/10 bg-slate-900 p-6">
                            <h3 className="text-2xl font-semibold text-white">Send Message</h3>

                            {submitStatus === 'success' && (
                                <div className="mt-5 rounded-md border border-emerald-400/40 bg-emerald-500/10 p-3 text-sm text-emerald-200">
                                    Message sent successfully.
                                </div>
                            )}
                            {submitStatus === 'error' && (
                                <div className="mt-5 rounded-md border border-red-400/40 bg-red-500/10 p-3 text-sm text-red-200">
                                    Please fill all fields with a valid email.
                                </div>
                            )}

                            <div className="mt-6 grid gap-4">
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    placeholder="Your Name"
                                    required
                                    className="rounded-md border border-white/10 bg-slate-950 p-4 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300"
                                />
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="Your Email"
                                    required
                                    className="rounded-md border border-white/10 bg-slate-950 p-4 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300"
                                />
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    placeholder="Subject"
                                    required
                                    className="rounded-md border border-white/10 bg-slate-950 p-4 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300"
                                />
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    placeholder="Your Message"
                                    rows={5}
                                    required
                                    className="resize-y rounded-md border border-white/10 bg-slate-950 p-4 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300"
                                />
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="rounded-md bg-cyan-300 px-6 py-4 font-semibold text-slate-950 transition hover:bg-cyan-200 disabled:cursor-not-allowed disabled:bg-slate-600 disabled:text-slate-300"
                                >
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </button>
                            </div>
                        </form>
                    </div>
                </section>
            </main>

            <footer className="border-t border-white/10 bg-slate-950 px-6 py-8 text-center text-sm text-slate-400">
                © 2026 Abhinav B M. Backend Software Engineer.
            </footer>
        </div>
    );
};

export default DevFolio;
