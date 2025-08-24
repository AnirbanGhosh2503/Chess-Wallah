import React, { useState, useEffect } from "react";
import srinath from '../assets/srinath.png'; // Ensure you have this image in the specified path

// Enhanced CSS without navbar/header styles
const fullStyles = `
/* Import Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

* {
    box-sizing: border-box;
}

html {
    overflow-x: hidden;
}

body {
    font-family: 'Inter', sans-serif;
    margin: 0;
    padding: 0;
    background: #f7f7f7;
    overflow-x: hidden;
}

/* Hero Section - Exact pixel match */
.hero-section {
    background: #f7f7f7;
    padding: 2rem 3rem 2rem;
    min-height: 100vh;
    display: flex;
    align-items: center;
    position: relative;
}

.container {
    max-width: 1400px;
    margin: 0 auto;
    width: 100%;
}

.hero-content {
    display: grid;
    grid-template-columns: 55% 45%;
    gap: 3rem;
    align-items: center;
}

/* Left Content - Exact text styling */
.hero-text {
    padding-right: 1rem;
}

.main-heading {
    font-size: 5rem;
    font-weight: 900;
    line-height: 0.95;
    margin-bottom: 1rem;
    color: #1a1a1a;
    letter-spacing: -0.02em;
}

.text-highlight {
    color: #ff8c00;
}

.sub-heading {
    font-size: 1.75rem;
    font-weight: 400;
    line-height: 1.4;
    margin-bottom: 2.5rem;
    color: #555;
}

.rotating-word-container {
    display: inline-block;
    width: 170px;
    text-align: left;
    vertical-align: baseline;
}

.text-orange {
    color: #ff8c00;
    font-weight: 500;
    display: inline-block;
    width: 100%;
    transition: opacity 0.3s ease;
    text-align: left;
}

.text-orange.fade-out {
    opacity: 0;
}

.text-orange.fade-in {
    opacity: 1;
}

.hero-btn {
    background: #4f5fd8;
    color: white;
    border: none;
    padding: 1rem 2.2rem;
    font-size: 1rem;
    font-weight: 600;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 3.5rem;
    box-shadow: 0 4px 12px rgba(79, 95, 216, 0.25);
}

.hero-btn:hover {
    background: #424fb5;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(79, 95, 216, 0.35);
}

.hero-btn::after {
    content: '▶';
    font-size: 0.75rem;
    margin-left: 0.3rem;
}

/* Stats Section - Exact positioning */
.stats-section {
    display: flex;
    gap: 4rem;
    align-items: flex-start;
    margin-top: 0;
}

.stat-item {
    text-align: left;
    position: relative;
}

.stat-item:not(:last-child)::after {
    content: '|';
    position: absolute;
    right: -2rem;
    top: 1rem;
    color: #ddd;
    font-size: 2rem;
    font-weight: 300;
}

.stat-number {
    font-size: 3rem;
    font-weight: 900;
    color: #ff8c00;
    line-height: 1;
    margin-bottom: 0.3rem;
}

.stat-label {
    font-size: 1rem;
    font-weight: 600;
    color: #333;
    margin-bottom: 0.1rem;
}

.stat-sublabel {
    font-size: 1rem;
    font-weight: 500;
    color: #666;
}

/* Right Content - Instructor with blue background matching original */
.hero-image {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 2rem;
}

.instructor-container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 600px;
    height: 600px;
}

/* Blue circular background */
.instructor-bg {
    width: 480px;
    height: 480px;
    background: #4f5fd8;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    box-shadow: 0 20px 50px rgba(79, 95, 216, 0.25);
}

/* Dashed border circle */
.instructor-bg::before {
    content: '';
    position: absolute;
    width: 520px;
    height: 520px;
    border: 3px dashed #4f5fd8;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0.4;
    z-index: 0;
}

.instructor-image {
    width: 800px;
    height: 800px;
    object-fit: cover;
    object-position: center center;
    border-radius: 50%;
    position: relative;
    z-index: 2;
    margin-top: -60px;
}

.instructor-badge {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    background: #ff8c00;
    color: white;
    padding: 1.3rem 2.2rem;
    border-radius: 30px;
    font-weight: 600;
    font-size: 0.9rem;
    min-width: 600px;
    text-align: center;
    z-index: 4;
    box-shadow: 0 15px 40px rgba(255, 140, 0, 0.4);
    line-height: 1.4;
}

.badge-title {
    font-weight: 700;
    font-size: 1.05rem;
    margin-bottom: 0.3rem;
    letter-spacing: 0.3px;
    color: #000;
}

.badge-subtitle {
    font-size: 0.8rem;
    opacity: 1;
    font-weight: 500;
    letter-spacing: 0.2px;
    color: white;
}

/* Large Chess Piece Background Props */
.chess-king-left {
    position: absolute;
    top: 15%;
    left: -20%;
    font-size: 15rem;
    color: rgba(200, 200, 200, 0.15);
    z-index: 0;
    transform: rotate(-20deg);
    user-select: none;
    pointer-events: none;
}

.chess-queen-right {
    position: absolute;
    bottom: 5%;
    right: -25%;
    font-size: 12rem;
    color: rgba(200, 200, 200, 0.12);
    z-index: 0;
    transform: rotate(25deg);
    user-select: none;
    pointer-events: none;
}

/* Decorative Elements - Exact positioning matching image */
.trophy-icon {
    position: absolute;
    top: 5%;
    left: -10%;
    font-size: 3rem;
    z-index: 3;
    filter: drop-shadow(2px 2px 4px rgba(0,0,0,0.1));
}

.star-icon {
    position: absolute;
    top: 15%;
    right: -8%;
    font-size: 2.2rem;
    z-index: 3;
    filter: drop-shadow(2px 2px 4px rgba(0,0,0,0.1));
}

.plus-icon {
    position: absolute;
    bottom: 25%;
    right: -10%;
    font-size: 2.5rem;
    color: #bbb;
    z-index: 3;
    font-weight: 300;
    filter: drop-shadow(1px 1px 2px rgba(0,0,0,0.1));
}

/* Bottom Section */
.bottom-section {
    background: #4c63d2;
    color: white;
    padding: 3rem 0;
    text-align: center;
}

.bottom-title {
    font-size: 3.5rem;
    font-weight: 900;
    margin-bottom: 1rem;
}

.bottom-subtitle {
    font-size: 1.2rem;
    font-weight: 500;
    opacity: 0.9;
}

/* Demo Form Modal - Matching Original Functionality */
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.85);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease, visibility 0s linear 0.3s;
    padding: 1rem;
}

.modal-overlay.show {
    opacity: 1;
    visibility: visible;
    transition: opacity 0.3s ease;
}

.modal-box {
    background: linear-gradient(135deg, #1e3a8a, #0c1a40);
    color: #fff;
    padding: clamp(1.25rem, 2.5vw, 1.75rem);
    border-radius: 16px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6);
    width: 100%;
    max-width: clamp(320px, 85vw, 480px);
    position: relative;
    transform: scale(0.9) translateY(20px);
    opacity: 0;
    transition: all 0.3s ease;
    border: 2px solid #FFC300;
    box-sizing: border-box;
    overflow: visible;
}

.modal-overlay.show .modal-box {
    transform: scale(1) translateY(0);
    opacity: 1;
}

.modal-box.status-view {
    padding: clamp(1.5rem, 4vw, 2.5rem);
    text-align: center;
    max-height: none;
    min-height: auto;
}

.modal-header {
    text-align: center;
    margin-bottom: clamp(1rem, 2vw, 1.5rem);
    padding-right: 3rem;
}

.modal-title {
    font-size: clamp(1.1rem, 2.8vw, 1.4rem);
    font-weight: 700;
    color: #FFBF00;
    margin-bottom: 0.5rem;
    line-height: 1.3;
}

.modal-subtitle {
    font-size: clamp(0.8rem, 2vw, 0.9rem);
    color: #ccc;
    line-height: 1.4;
}

.close-btn {
    position: absolute;
    top: clamp(10px, 2vw, 15px);
    right: clamp(10px, 2vw, 15px);
    background: rgba(0, 0, 0, 0.3);
    border: none;
    color: #FFC300;
    font-size: clamp(1.2rem, 3vw, 1.5rem);
    cursor: pointer;
    transition: all 0.2s ease;
    padding: clamp(0.4rem, 1vw, 0.6rem);
    border-radius: 50%;
    width: clamp(32px, 8vw, 44px);
    height: clamp(32px, 8vw, 44px);
    display: flex;
    align-items: center;
    justify-content: center;
    touch-action: manipulation;
    z-index: 10;
    backdrop-filter: blur(5px);
}

.close-btn:hover,
.close-btn:focus {
    transform: rotate(90deg) scale(1.1);
    color: #ff9100;
    background: rgba(255, 255, 255, 0.2);
}

.close-btn:active {
    transform: rotate(90deg) scale(0.95);
}

/* Form Styling - Two Column Design */
.demo-form {
    width: 100%;
}

.demo-form .form-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: clamp(0.75rem, 1.5vw, 1rem);
    width: 100%;
}

.form-group {
    position: relative;
    width: 100%;
}

.form-group label {
    display: block;
    font-size: clamp(0.7rem, 1.6vw, 0.8rem);
    color: #fff;
    margin-bottom: 0.4rem;
    font-weight: 600;
}

.form-group input,
.form-group select {
    width: 100%;
    padding: clamp(0.6rem, 1.2vw, 0.75rem);
    background-color: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 6px;
    color: #fff;
    font-size: clamp(0.75rem, 1.4vw, 0.85rem);
    transition: all 0.3s ease;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    min-height: clamp(36px, 7vw, 40px);
    box-sizing: border-box;
}

.form-group input:focus,
.form-group select:focus {
    outline: none;
    border-color: #FFC300;
    box-shadow: 0 0 0 3px rgba(255, 195, 0, 0.1);
    background-color: rgba(255, 255, 255, 0.15);
}

.form-group input::placeholder {
    color: rgba(255, 255, 255, 0.6);
    font-size: clamp(0.75rem, 1.6vw, 0.875rem);
}

.custom-select-wrapper {
    position: relative;
    width: 100%;
}

.custom-select-wrapper::after {
    content: '▼';
    font-size: clamp(0.7rem, 1.5vw, 0.85rem);
    color: #FFC300;
    position: absolute;
    right: clamp(0.75rem, 2vw, 1rem);
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
}

.modal-submit-btn {
    grid-column: 1 / -1;
    width: 100%;
    padding: clamp(0.75rem, 1.8vw, 0.9rem);
    margin-top: clamp(1rem, 2vw, 1.25rem);
    background: linear-gradient(to right, #FFC300, #ff9100);
    border: none;
    border-radius: 8px;
    color: #000;
    font-size: clamp(0.8rem, 1.8vw, 0.9rem);
    font-weight: bold;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease;
    min-height: clamp(40px, 8vw, 44px);
    touch-action: manipulation;
    box-sizing: border-box;
}

.modal-submit-btn:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(255, 195, 0, 0.4);
}

.modal-submit-btn:active:not(:disabled) {
    transform: translateY(0);
}

.modal-submit-btn:disabled {
    background: linear-gradient(to right, #999, #666);
    cursor: not-allowed;
    transform: none;
}

.modal-btn-icon {
    margin-left: 0.5rem;
    transition: margin-left 0.3s ease;
    font-size: clamp(1rem, 2.5vw, 1.2rem);
}

.modal-submit-btn:not(:disabled):hover .modal-btn-icon {
    margin-left: 0.75rem;
}

.spinner {
    border: 3px solid rgba(0, 0, 0, 0.1);
    border-top: 3px solid #FFC300;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    animation: spin 1s linear infinite;
    margin-right: 10px;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

/* Status Message Styles */
.status-message {
    padding: 2rem 1rem;
}

.status-icon {
    font-size: clamp(2.5rem, 8vw, 4rem);
    margin-bottom: 1rem;
    display: flex;
    justify-content: center;
}

.success-icon svg {
    color: #FFC300;
}

.error-icon svg {
    color: #ff4d4d;
}

.status-title {
    font-size: clamp(1.25rem, 4vw, 1.5rem);
    font-weight: 700;
    color: #fff;
    margin-bottom: 0.5rem;
}

.status-text {
    font-size: clamp(0.875rem, 2.5vw, 1rem);
    color: #ccc;
    line-height: 1.5;
}

/* Responsive Design */
@media (max-width: 1200px) {
    .hero-content {
        grid-template-columns: 1fr;
        gap: 2rem;
        text-align: center;
    }
    
    .hero-text {
        padding-right: 0;
        order: 2;
    }
    
    .hero-image {
        order: 1;
        padding-left: 0;
    }
    
    .instructor-container {
        width: 500px;
        height: 500px;
    }
    
    .main-heading {
        font-size: 4rem;
    }
    
    .sub-heading {
        font-size: 1.5rem;
    }
    
    .rotating-word-container {
        width: 140px;
    }
    
    .instructor-bg {
        width: 400px;
        height: 400px;
    }
    
    .instructor-image {
        width: 800px;
        height: 800px;
    }
    
    .stats-section {
        justify-content: space-around;
        max-width: 600px;
        margin: 2rem auto 0;
        gap: 2rem;
    }
}

@media (max-width: 1024px) {
    .hero-section {
        padding: 2rem 2rem 2rem;
        min-height: auto;
    }
    
    .instructor-container {
        width: 600px;
        height: 600px;
    }
    
    .main-heading {
        font-size: 3.5rem;
        line-height: 1;
    }
    
    .sub-heading {
        font-size: 1.4rem;
        margin-bottom: 2rem;
    }
    
    .rotating-word-container {
        width: 130px;
    }
    
    .instructor-bg {
        width: 320px;
        height: 320px;
    }
    
    .instructor-image {
        width: 360px;
        height: 360px;
    }
    
    .instructor-badge {
        min-width: 280px;
        padding: 1rem 1.8rem;
        font-size: 0.85rem;
        bottom: -10px;
    }
    
    .badge-title {
        font-size: 0.95rem;
    }
    
    .badge-subtitle {
        font-size: 0.75rem;
    }
}

@media (max-width: 768px) {
    .hero-section {
        padding: 2rem 1rem 2rem;
    }
    
    .hero-content {
        gap: 1.5rem;
    }
    
    .instructor-container {
        width: 320px;
        height: 320px;
    }
    
    .main-heading {
        font-size: 2.8rem;
        margin-bottom: 0.8rem;
    }
    
    .sub-heading {
        font-size: 1.3rem;
        margin-bottom: 1.8rem;
    }
    
    .rotating-word-container {
        width: 120px;
    }
    
    .hero-btn {
        padding: 0.9rem 2rem;
        font-size: 0.95rem;
        margin-bottom: 2.5rem;
    }
    
    .instructor-bg {
        width: 260px;
        height: 260px;
    }
    
    .instructor-image {
        width: 400px;
        height: 400px;
    }
    
    .instructor-badge {
        min-width: 240px;
        padding: 0.9rem 1.5rem;
        font-size: 0.8rem;
        bottom: -15px;
    }
    
    .badge-title {
        font-size: 0.9rem;
        margin-bottom: 0.2rem;
    }
    
    .badge-subtitle {
        font-size: 0.7rem;
    }
    
    .stats-section {
        flex-direction: row;
        justify-content: space-between;
        gap: 0.5rem;
        text-align: center;
        margin-top: 1.5rem;
        max-width: 100%;
    }
    
    .stat-item {
        flex: 1;
    }
    
    .stat-item:not(:last-child)::after {
        display: none;
    }
    
    .stat-number {
        font-size: 1.8rem;
        margin-bottom: 0.2rem;
    }
    
    .stat-label {
        font-size: 0.8rem;
    }
    
    .stat-sublabel {
        font-size: 0.8rem;
    }
    
    .bottom-title {
        font-size: 2.2rem;
        line-height: 1.2;
    }
    
    .bottom-subtitle {
        font-size: 1rem;
    }
    
    .demo-form .form-grid {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 480px) {
    .hero-section {
        padding: 2rem 0.8rem 1.5rem;
    }
    
    .instructor-container {
        width: 280px;
        height: 280px;
    }
    
    .main-heading {
        font-size: 2.2rem;
        margin-bottom: 0.7rem;
    }
    
    .sub-heading {
        font-size: 1.1rem;
        margin-bottom: 1.5rem;
    }
    
    .rotating-word-container {
        width: 100px;
    }
    
    .hero-btn {
        padding: 0.8rem 1.8rem;
        font-size: 0.9rem;
        margin-bottom: 2rem;
    }
    
    .instructor-bg {
        width: 300px;
        height: 300px;
    }
    
    .instructor-image {
        width: 240px;
        height: 240px;
    }
    
    .instructor-badge {
        min-width: 200px;
        padding: 0.8rem 1.2rem;
        font-size: 0.75rem;
        bottom: -20px;
    }
    
    .badge-title {
        font-size: 0.85rem;
        margin-bottom: 0.2rem;
    }
    
    .badge-subtitle {
        font-size: 0.65rem;
    }
    
    .stats-section {
        gap: 1rem;
        margin-top: 1rem;
    }
    
    .stat-number {
        font-size: 1.8rem;
    }
    
    .stat-label,
    .stat-sublabel {
        font-size: 0.85rem;
    }
    
    .bottom-title {
        font-size: 1.8rem;
        padding: 0 1rem;
    }
    
    .bottom-subtitle {
        font-size: 0.9rem;
        padding: 0 1rem;
    }
}

@media (max-width: 360px) {
    .instructor-container {
        width: 250px;
        height: 250px;
    }
    
    .main-heading {
        font-size: 2rem;
    }
    
    .sub-heading {
        font-size: 1rem;
    }
    
    .rotating-word-container {
        width: 90px;
    }
    
    .instructor-bg {
        width: 200px;
        height: 200px;
    }
    
    .instructor-image {
        width: 300px;
        height: 300px;
    }
    
    .instructor-badge {
        min-width: 180px;
        padding: 0.7rem 1rem;
        font-size: 0.7rem;
    }
    
    .badge-title {
        font-size: 0.8rem;
    }
    
    .badge-subtitle {
        font-size: 0.6rem;
    }
    
    .bottom-title {
        font-size: 1.6rem;
    }
}
`;

// Component to handle the modal logic and UI
const FreeDemoModal = ({ isOpen, onClose }) => {
    // State for form data
    const [formData, setFormData] = useState({
        email: "",
        parentName: "",
        childName: "",
        phone: "",
        age: "",
        source: "",
    });

    // State to manage modal visibility
    const [show, setShow] = useState(false);
    // State for submission status
    const [isSubmitting, setIsSubmitting] = useState(false);
    // State for showing success/error message
    const [submissionStatus, setSubmissionStatus] = useState(null);

    // Effect to control modal visibility based on parent prop
    useEffect(() => {
        if (isOpen) {
            setShow(true);
            setSubmissionStatus(null);
            // Prevent body scroll when modal is open
            document.body.style.overflow = 'hidden';
        } else {
            setShow(false);
            document.body.style.overflow = 'unset';
        }
        
        // Cleanup function to restore scroll
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    // Handles form input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Send to WhatsApp automatically
    const sendToWhatsApp = async (data) => {
        const whatsappNumber = "+1234567890"; // Replace with your WhatsApp number (include country code)
        const message = `🎯 *New Chess Demo Request!*

👨‍👩‍👧‍👦 *Parent:* ${data.parentName}
👶 *Child:* ${data.childName}
📧 *Email:* ${data.email}
📱 *Phone:* ${data.phone}
🎂 *Age:* ${data.age} years
📢 *Source:* ${data.source}

Please contact them for the demo class! ♟️`;
        
        try {
            const whatsappUrl = `https://wa.me/${whatsappNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;
            const whatsappWindow = window.open(whatsappUrl, '_blank', 'width=500,height=600,scrollbars=yes,resizable=yes');
            return true;
        } catch (error) {
            console.error('WhatsApp send failed:', error);
            return false;
        }
    };

    // Send email automatically
    const sendEmail = async (data) => {
        try {
            const emailAddress = "demo@yourchessacademy.com"; // Replace with your email
            const subject = "🎯 New Chess Demo Request";
            const body = `New Chess Demo Request Details:

Parent's Name: ${data.parentName}
Child's Name: ${data.childName}
Email: ${data.email}
Phone: ${data.phone}
Age: ${data.age} years
How they heard about us: ${data.source}

Please contact them to schedule the demo class.

Best regards,
Chess Academy Website`;
            
            const emailUrl = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            const emailWindow = window.open(emailUrl, '_blank');
            
            if (emailWindow) {
                setTimeout(() => {
                    emailWindow.close();
                }, 1000);
                return true;
            }
            
            return false;
        } catch (error) {
            console.error('Email send failed:', error);
            return false;
        }
    };

    // Handles form submission with automatic messaging
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmissionStatus(null);

        try {
            const whatsappSuccess = await sendToWhatsApp(formData);
            await new Promise(resolve => setTimeout(resolve, 800));
            const emailSuccess = await sendEmail(formData);
            
            if (whatsappSuccess || emailSuccess) {
                setIsSubmitting(false);
                setSubmissionStatus("success");
                
                setTimeout(() => {
                    if (onClose) onClose();
                }, 4000);
            } else {
                throw new Error('Both WhatsApp and Email failed');
            }
            
        } catch (error) {
            console.error('Submission failed:', error);
            setIsSubmitting(false);
            setSubmissionStatus("error");
            
            setTimeout(() => {
                if (onClose) onClose();
            }, 5000);
        }
    };

    // Handle modal close
    const handleClose = () => {
        setShow(false);
        if (onClose) onClose();
    };

    // Handle overlay click
    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            handleClose();
        }
    };

    if (!show) return null;

    // Form content
    const renderFormContent = () => (
        <>
            <div className="modal-header">
                <h2 className="modal-title">Elevate Your Child's Future</h2>
                <p className="modal-subtitle">
                    Book a free, personalized demo class to unlock their potential.
                </p>
            </div>
            <form onSubmit={handleSubmit} className="demo-form">
                <div className="form-grid">
                    <div className="form-group">
                        <label htmlFor="email">Parent's Email ID</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Your email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            autoComplete="email"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="parentName">Parent's Name</label>
                        <input
                            type="text"
                            id="parentName"
                            name="parentName"
                            placeholder="Your name"
                            value={formData.parentName}
                            onChange={handleChange}
                            required
                            autoComplete="name"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="childName">Child's Name</label>
                        <input
                            type="text"
                            id="childName"
                            name="childName"
                            placeholder="Child's name"
                            value={formData.childName}
                            onChange={handleChange}
                            required
                            autoComplete="off"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone (WhatsApp)</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            placeholder="10-digit mobile"
                            pattern="[0-9]{10}"
                            maxLength="10"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            autoComplete="tel"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="age">Age</label>
                        <div className="custom-select-wrapper">
                            <select 
                                id="age" 
                                name="age" 
                                value={formData.age}
                                onChange={handleChange} 
                                required
                            >
                                <option value="">Select Age</option>
                                {[...Array(18)].map((_, i) => (
                                    <option key={i} value={i + 3}>
                                        {i + 3} years old
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="source">How did you hear about us?</label>
                        <div className="custom-select-wrapper">
                            <select 
                                id="source" 
                                name="source" 
                                value={formData.source}
                                onChange={handleChange} 
                                required
                            >
                                <option value="">Select</option>
                                <option value="Facebook">Facebook</option>
                                <option value="Instagram">Instagram</option>
                                <option value="Google">Google</option>
                                <option value="YouTube">YouTube</option>
                                <option value="Word of Mouth">Word of Mouth</option>
                                <option value="Others">Others</option>
                            </select>
                        </div>
                    </div>
                </div>
                <button type="submit" className="modal-submit-btn" disabled={isSubmitting}>
                    {isSubmitting ? (
                        <>
                            <div className="spinner"></div>
                            <span className="btn-text">Sending automatically...</span>
                        </>
                    ) : (
                        <>
                            <span className="btn-text">Book My Demo</span>
                            <span className="modal-btn-icon">→</span>
                        </>
                    )}
                </button>
            </form>
        </>
    );

    // Status message content
    const renderStatusMessage = () => (
        <div className="status-message">
            {submissionStatus === "success" ? (
                <>
                    <div className="status-icon success-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-8.77"></path>
                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                    </div>
                    <h3 className="status-title">Success!</h3>
                    <p className="status-text">
                        Your request has been sent automatically! We'll contact you shortly to schedule the demo.
                    </p>
                </>
            ) : (
                <>
                    <div className="status-icon error-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="12" y1="8" x2="12" y2="12"></line>
                            <line x1="12" y1="16" x2="12.01" y2="16"></line>
                        </svg>
                    </div>
                    <h3 className="status-title">Oops!</h3>
                    <p className="status-text">
                        Something went wrong with the automatic submission. Please try again or contact us directly.
                    </p>
                </>
            )}
        </div>
    );

    return (
        <div 
            className={`modal-overlay ${show ? "show" : ""}`}
            onClick={handleOverlayClick}
        >
            <div className={`modal-box ${submissionStatus ? "status-view" : ""}`}>
                <button
                    className="close-btn"
                    onClick={handleClose}
                    aria-label="Close modal"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
                {submissionStatus ? renderStatusMessage() : renderFormContent()}
            </div>
        </div>
    );
};

// Custom hook for counting animation
const useCountUp = (end, duration) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const endValue = parseInt(end.toString().replace(/,/g, ''), 10);
        const stepTime = 10;
        const totalSteps = duration * 1000 / stepTime;
        const increment = endValue / totalSteps;

        const timer = setInterval(() => {
            start += increment;
            if (start >= endValue) {
                setCount(endValue);
                clearInterval(timer);
            } else {
                setCount(Math.ceil(start));
            }
        }, stepTime);

        return () => clearInterval(timer);
    }, [end, duration]);

    return count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

// Custom hook for rotating text animation
const useRotatingText = (words, interval = 3000) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setInterval(() => {
            setIsVisible(false);
            
            setTimeout(() => {
                setCurrentIndex((prevIndex) => 
                    prevIndex === words.length - 1 ? 0 : prevIndex + 1
                );
                setIsVisible(true);
            }, 300); // Half second for fade transition
        }, interval);

        return () => clearInterval(timer);
    }, [words, interval]);

    return { currentWord: words[currentIndex], isVisible };
};

// Main Component without navbar
function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const parentsCount = useCountUp(6450, 3);
    const countriesCount = useCountUp(32, 3);
    const coachesCount = useCountUp(256, 3);

    // Chess-related words for rotation
    const rotatingWords = [
        "enjoyable",
        "strategic",
        "engaging",
        "exciting",
        "rewarding",
        "intellectual", 
        "challenging",
        "fun-filled",
        "inspiring",
        "empowering"
    ];

    const { currentWord, isVisible } = useRotatingText(rotatingWords, 3000);

    // Auto-open modal when component mounts
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsModalOpen(true);
        }, 3000); // Open modal after 3 seconds

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <style>{fullStyles}</style>
            
            {/* Hero Section */}
            <section className="hero-section">
                <div className="container">
                    <div className="hero-content">
                        {/* Left Content */}
                        <div className="hero-text">
                            <h1 className="main-heading">
                                Learn, Play, <span className="text-highlight">Conquer!</span>
                            </h1>
                            <p className="sub-heading">
                                Our Online Chess Classes Are<br />
                                <span className="rotating-word-container">
                                    <span className={`text-orange ${isVisible ? 'fade-in' : 'fade-out'}`}>
                                        {currentWord}
                                    </span>
                                </span> for kids.
                            </p>
                            
                            <button 
                                className="hero-btn"
                                onClick={() => setIsModalOpen(true)}
                            >
                                Book Free Demo
                            </button>

                            {/* Stats Section */}
                            <div className="stats-section">
                                <div className="stat-item">
                                    <div className="stat-label">Trusted</div>
                                    <div className="stat-number">{parentsCount}+</div>
                                    <div className="stat-sublabel">Parents</div>
                                </div>
                                <div className="stat-item">
                                    <div className="stat-label">In</div>
                                    <div className="stat-number">{countriesCount}+</div>
                                    <div className="stat-sublabel">Countries</div>
                                </div>
                                <div className="stat-item">
                                    <div className="stat-label">FIDE Rated</div>
                                    <div className="stat-number">{coachesCount}+</div>
                                    <div className="stat-sublabel">Coaches</div>
                                </div>
                            </div>
                        </div>

                        {/* Right Content - Instructor */}
                        <div className="hero-image">
                            <div className="instructor-container">
                                
                                <img 
                                    src={srinath} 
                                    alt="Grandmaster Srinath Narayanan - Chess Instructor"
                                    className="instructor-image"
                                />
                                
                                <div className="instructor-badge">
                                    <div className="badge-title">Grandmaster Srinath Narayanan</div>
                                    <div className="badge-subtitle">Captain Of The Gold-Winning Indian Chess Olympiad Team</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom Section */}
            <section className="bottom-section">
                <div className="container">
                    <h2 className="bottom-title">Curriculum Curated & Coaches Mentored by GM Srinath</h2>
                    <p className="bottom-subtitle">World-class chess education designed for excellence</p>
                </div>
            </section>

            {/* Modal Component */}
            <FreeDemoModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </>
    );
}

export default App;
