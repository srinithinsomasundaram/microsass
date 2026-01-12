'use client';

import { useEffect, useRef } from 'react';

export default function RazorpayButton() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Check if script already exists to avoid duplicates
        const existingScript = document.querySelector('script[src="https://checkout.razorpay.com/v1/payment-button.js"]');

        const form = document.createElement('form');
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/payment-button.js';
        script.setAttribute('data-payment_button_id', 'pl_S2vAQEmQj562RH');
        script.setAttribute('data-redirect_url', 'https://webinar.yespstudio.com/MicroSaaS-live-building/success');
        script.async = true;

        form.appendChild(script);

        if (containerRef.current) {
            containerRef.current.innerHTML = ''; // Clear previous
            containerRef.current.appendChild(form);
        }
    }, []);

    return (
        <div ref={containerRef} className="razorpay-button-container">
            {/* Fallback button in case script fails to load or for styling purposes */}
            <style jsx>{`
        .razorpay-button-container :global(.razorpay-payment-button) {
          display: inline-block !important;
          background: #000 !important;
          color: #fff !important;
          font-weight: 800 !important;
          padding: 16px 40px !important;
          border-radius: 8px !important;
          text-transform: uppercase !important;
          border: none !important;
          cursor: pointer !important;
          font-family: inherit !important;
        }
      `}</style>
        </div>
    );
}
