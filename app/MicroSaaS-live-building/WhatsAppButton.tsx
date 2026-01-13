'use client';

import React from 'react';

export default function WhatsAppButton() {
    return (
        <a
            href="https://chat.whatsapp.com/KV8CXIuL8JIJtq0n1rtxLA"
            target="_blank"
            rel="noopener noreferrer"
            style={{
                display: 'inline-block',
                background: '#000',
                color: '#fff',
                fontWeight: 800,
                padding: '16px 40px',
                borderRadius: '8px',
                textTransform: 'uppercase',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'inherit',
                textDecoration: 'none',
                fontSize: '16px',
                textAlign: 'center'
            }}
        >
            Join WhatsApp Group
        </a>
    );
}
