'use client';

import Image from 'next/image';
import styles from './page.module.css';
import RazorpayButton from './RazorpayButton';
import Navbar from './Navbar';

export default function SaaSWebinarPage() {
    return (
        <main className={styles.main}>
            <div className={styles.blocks}>
                <div className={styles.block1}></div>
                <div className={styles.block2}></div>
            </div>

            <Navbar />

            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1 className={styles.headline}>
                        MicroSaaS <br />
                        <span className={styles.yellowText}>Isn&apos;t Hype.</span> <br />
                        It&apos;s Money.
                    </h1>
                    <p className={styles.subheadline}>
                        Discover the Secrets to MicroSaaS Success – Join Our Free Live Webinar and build your passive income stream with AI.
                    </p>

                    <div className={styles.pricing}>
                        Free Webinar · ₹49 Seat Confirmation
                    </div>

                    <div className={styles.eventDetails}>
                        <div className={styles.detailItem}>
                            <span className={styles.detailLabel}>DATE</span>
                            <span className={styles.detailValue}>18 Jan 2026</span>
                        </div>
                        <div className={styles.detailItem}>
                            <span className={styles.detailLabel}>TIME</span>
                            <span className={styles.detailValue}>11 AM IST</span>
                        </div>
                        <div className={styles.detailItem}>
                            <span className={styles.detailLabel}>DURATION</span>
                            <span className={styles.detailValue}>3 Hours</span>
                        </div>
                    </div>

                    <div className={styles.buttonWrapper}>
                        <RazorpayButton />
                    </div>
                </div>

                <div className={styles.heroImage}>
                    <Image
                        src="/srinithin.png"
                        alt="Srinithin Somasundaram"
                        width={700}
                        height={800}
                        className={styles.speakerImg}
                        priority
                    />
                </div>
            </section>

            {/* Speaker Section */}
            <section id="speaker" className={styles.section}>
                <h2 className={styles.sectionTitle}>Your Speaker</h2>
                <div className={styles.card} style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
                    <h3>Srinithin Somasundaram</h3>
                    <p style={{ fontSize: '20px', lineHeight: '1.6' }}>
                        Builder, not a guru. From services → systems → products. <br />
                        Teaching what is being built in real life with high-impact strategies.
                    </p>
                </div>
            </section>

            {/* Outcomes Section */}
            <section id="outcomes" className={styles.section}>
                <h2 className={styles.sectionTitle}>What You&apos;ll Learn</h2>
                <div className={styles.cardGrid}>
                    <div className={styles.card}>
                        <h3>01. Fundamentals</h3>
                        <p>What MicroSaaS really is with real-world examples that generate revenue daily.</p>
                    </div>
                    <div className={styles.card}>
                        <h3>02. Solo Clarity</h3>
                        <p>MicroSaaS vs SaaS: Why solo founders thrive with smaller, highly focused products.</p>
                    </div>
                    <div className={styles.card}>
                        <h3>03. Build with AI</h3>
                        <p>Using ChatGPT, Claude, and Lovable to build functional apps from scratch in hours.</p>
                    </div>
                    <div className={styles.card}>
                        <h3>04. First Revenue</h3>
                        <p>From launch to monetization: deployment and payment setup.</p>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section id="register" className={styles.section}>
                <div className={styles.ctaBox}>
                    <h2 style={{ fontSize: '64px', fontWeight: 900, marginBottom: '20px' }}>Join the Movement</h2>
                    <p style={{ fontSize: '24px', opacity: 0.7, marginBottom: '40px' }}>Limited seats available for the 18th Jan session.</p>
                    <div className={styles.finalButtonWrapper}>
                        <RazorpayButton />
                    </div>
                    <p style={{ marginTop: '40px', fontSize: '14px', opacity: 0.4 }}>* Non-refundable ₹49 seat confirmation fee.</p>
                </div>
            </section>

            {/* Footer */}
            <footer className={styles.footer}>
                <div className={styles.footerContent}>
                    <div>
                        <div className={styles.footerLogo}>MicroSaaS Movement</div>
                        <p style={{ color: '#666', lineHeight: '1.6' }}>Building products that work. Building income that lasts.</p>
                    </div>
                    <div className={styles.footerLinks}>
                        <h4>Program</h4>
                        <ul>
                            <li><a href="#speaker">Speaker</a></li>
                            <li><a href="#outcomes">Outcomes</a></li>
                            <li><a href="#register">Register</a></li>
                        </ul>
                    </div>
                    <div className={styles.footerLinks}>
                        <h4>Company</h4>
                        <ul>
                            <li><a href="https://wa.me/919751755757">Support</a></li>
                        </ul>
                    </div>
                </div>
                <div className={styles.copyright}>
                    <p>© 2026 Srinithin Somasundaram. Powered by yespstudio.</p>
                </div>
            </footer>
        </main >
    );
}
