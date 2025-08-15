import React, { useState, useEffect } from "react";
import heroImg from "../assets/hero.jpg";

// Enhanced CSS with comprehensive responsive design for phones and tablets
const fullStyles = `
/* Import Google Fonts - use Inter for a clean, modern look */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap');

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
    background-color: #000;
    overflow-x: hidden;
}

/* Base Hero Section Styling */
.hero-section {
    background: radial-gradient(
        circle at top left,
        rgba(10, 36, 99, 1) 0%,
        rgba(0, 0, 0, 1) 100%
    );
    color: #ffffff;
    padding: 3rem 1rem;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
    position: relative;
    z-index: 1;
    min-height: 100vh;
    display: flex;
    align-items: center;
}

/* Container and Layout */
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
    width: 100%;
    box-sizing: border-box;
}

.row {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    width: 100%;
    box-sizing: border-box;
}

.col-md-6 {
    flex: 1;
    min-width: 280px;
    max-width: 100%;
    box-sizing: border-box;
}

/* Typography - Mobile First */
.main-heading {
    font-size: clamp(2rem, 8vw, 4rem);
    line-height: 1.2;
    font-weight: 800;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    margin-bottom: 1rem;
}

.sub-heading {
    font-size: clamp(1.125rem, 4vw, 1.75rem);
    line-height: 1.6;
    font-weight: 600;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
    margin-bottom: 1.5rem;
}

.text-section {
    text-align: center;
}

/* Yellow Text */
.text-yellow {
    color: #FFBF00;
}

/* Animated Changing Word */
.text-changing {
    color: #FFBF00;
    display: inline-block;
    transition: opacity 0.5s ease-in-out;
    min-width: 140px;
}

.fade-in {
    opacity: 1;
}

.fade-out {
    opacity: 0;
}

/* Hero Section Buttons - Specific Classes */
.hero-btn {
    display: inline-block;
    font-weight: 600;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    user-select: none;
    background-color: transparent;
    border: 1px solid transparent;
    padding: 0.875rem 2rem;
    font-size: clamp(1rem, 2.5vw, 1.125rem);
    line-height: 1.5;
    border-radius: 12px;
    transition: all 0.3s ease;
    touch-action: manipulation;
    -webkit-tap-highlight-color: transparent;
}

.hero-btn-cta {
    background-color: #FFC300 !important;
    border: none;
    color: #000000 !important;
    font-weight: bold;
    padding: 1.25rem 2.5rem;
    border-radius: 15px;
    width: 100%;
    max-width: 300px;
    margin: 2rem auto 0;
    display: block;
    position: relative;
    overflow: hidden;
}

.hero-btn-cta::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transition: left 0.5s;
}

.hero-btn-cta:hover::before {
    left: 100%;
}

.hero-btn-cta:hover {
    background-color: #FFC300 !important;
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(255, 195, 0, 0.4);
}

.hero-btn-cta:active {
    transform: translateY(-1px);
}

/* Image Styling - Mobile Optimized */
.big-image {
    width: min(280px, 80vw);
    height: min(280px, 80vw);
    max-width: 350px;
    max-height: 350px;
    object-fit: cover;
    border-radius: 50%;
    display: block;
    margin: 0 auto;
    transition: transform 0.5s ease, box-shadow 0.5s ease;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.35);
    animation: pulse-glow 3s infinite;
}

.img-wrapper {
    position: relative;
    display: inline-block;
    width: min(280px, 80vw);
    height: min(280px, 80vw);
    max-width: 350px;
    max-height: 350px;
    margin: 0 auto;
    transition: transform 0.3s ease;
}

.img-wrapper:hover {
    transform: scale(1.03);
}

@keyframes pulse-glow {
    0% {
        box-shadow: 0 0 0 0 rgba(255, 195, 0, 0.4);
    }
    70% {
        box-shadow: 0 0 0 15px rgba(255, 195, 0, 0);
    }
    100% {
        box-shadow: 0 0 0 0 rgba(255, 195, 0, 0);
    }
}

/* Caption Styling - Mobile Enhanced */
.caption-box-inside {
    background-color: #FFBF00;
    color: #000000;
    padding: clamp(0.75rem, 2vw, 1.2rem);
    border-radius: clamp(12px, 3vw, 18px);
    position: absolute;
    left: 50%;
    bottom: clamp(-15px, -3vw, -25px);
    transform: translateX(-50%);
    width: clamp(200px, 115%, 380px);
    max-width: calc(100vw - 2rem);
    font-size: clamp(0.875rem, 2.2vw, 1.125rem);
    text-align: center;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.35);
    z-index: 2;
    transition: transform 0.3s ease;
    line-height: 1.3;
    box-sizing: border-box;
}

.caption-box-inside strong {
    color: #000000;
    display: block;
    margin-bottom: 0.25rem;
}

/* Stats Section - Mobile Grid */
.stats-container {
    margin-top: 3rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 1.5rem;
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
}

.stat-box {
    text-align: center;
    transition: transform 0.3s ease;
    cursor: pointer;
    padding: 1rem 0.5rem;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.05);
}

.stat-box:hover {
    transform: translateY(-5px);
    background: rgba(255, 195, 0, 0.1);
}

.stat-number {
    font-size: clamp(1.25rem, 4vw, 1.875rem);
    font-weight: bold;
    color: #FFBF00;
    transition: color 0.3s ease;
    line-height: 1.2;
}

.stat-label {
    font-size: clamp(0.75rem, 2vw, 1rem);
    color: #ffffff;
    transition: color 0.3s ease;
    margin-top: 0.25rem;
}

/* Modal Styles - Compact Two-Column Design */
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

.form-group select {
    background-color: rgba(255, 255, 255, 0.12);
    cursor: pointer;
    position: relative;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    border: 2px solid rgba(255, 195, 0, 0.3);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    /* Firefox scrollbar */
    scrollbar-width: thin;
    scrollbar-color: #FFC300 rgba(30, 58, 138, 0.3);
}

.form-group select:hover {
    background-color: rgba(255, 255, 255, 0.2) !important;
    border-color: rgba(255, 195, 0, 0.7) !important;
    box-shadow: 0 6px 20px rgba(255, 195, 0, 0.25) !important;
    transform: translateY(-2px) !important;
}

.form-group select:focus {
    outline: none !important;
    background-color: rgba(255, 255, 255, 0.25) !important;
    border-color: #FFC300 !important;
    box-shadow: 0 0 0 4px rgba(255, 195, 0, 0.2), 0 8px 25px rgba(255, 195, 0, 0.3) !important;
    transform: translateY(-3px) !important;
}

/* Custom scrollbar for dropdown - WebKit browsers */
.form-group select::-webkit-scrollbar {
    width: 12px;
}

.form-group select::-webkit-scrollbar-track {
    background: #1e3a8a;
    border-radius: 6px;
    border: 2px solid #0c1a40;
}

.form-group select::-webkit-scrollbar-thumb {
    background: linear-gradient(45deg, #FFC300 0%, #ff9100 100%);
    border-radius: 6px;
    border: 2px solid #1e3a8a;
    min-height: 20px;
}

.form-group select::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(45deg, #ffd700 0%, #ffa500 100%);
    box-shadow: 0 0 10px rgba(255, 195, 0, 0.6);
}

.form-group select::-webkit-scrollbar-thumb:active {
    background: linear-gradient(45deg, #e6b800 0%, #e68600 100%);
}

.form-group select::-webkit-scrollbar-corner {
    background: #1e3a8a;
}

/* Enhanced dropdown options with better styling */
.form-group select option {
    background-color: #1e3a8a !important;
    color: #ffffff !important;
    padding: 12px 16px !important;
    border: none !important;
    font-size: 0.9rem !important;
    font-weight: 500 !important;
    line-height: 1.4 !important;
    min-height: 48px !important;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1) !important;
}

.form-group select option:hover {
    background-color: #2563eb !important;
    background-image: linear-gradient(90deg, rgba(255, 195, 0, 0.2) 0%, rgba(255, 195, 0, 0.05) 100%) !important;
    color: #FFC300 !important;
    font-weight: 600 !important;
}

.form-group select option:checked,
.form-group select option:selected {
    background-color: #FFC300 !important;
    background-image: linear-gradient(90deg, #FFC300 0%, #ff9100 100%) !important;
    color: #000000 !important;
    font-weight: 700 !important;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2) !important;
}

.form-group select option[disabled] {
    background-color: #374151 !important;
    color: #9CA3AF !important;
    font-style: italic !important;
    opacity: 0.5 !important;
    cursor: not-allowed !important;
}

.form-group select option:first-child {
    color: rgba(255, 255, 255, 0.6) !important;
    font-style: italic !important;
    background-color: #0f172a !important;
    font-weight: 400 !important;
}

/* Additional hover effect for the dropdown arrow */
.custom-select-wrapper:hover::after {
    color: #ffcc33 !important;
    transform: translateY(-50%) scale(1.2) !important;
    transition: all 0.3s ease !important;
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

/* Background Glow Effect */
.modal-bg-glow {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 150%;
    height: 150%;
    background: radial-gradient(
        circle,
        rgba(255, 195, 0, 0.1),
        transparent 70%
    );
    transform: translate(-50%, -50%);
    border-radius: 50%;
    z-index: -1;
}

/* Responsive Breakpoints */
/* Extra small phones (320px - 480px) */
@media screen and (max-width: 480px) {
    .modal-overlay {
        padding: 0.75rem;
    }
    
    .modal-box {
        max-width: calc(100vw - 1.5rem);
        padding: 1rem;
        border-radius: 12px;
    }
    
    .modal-header {
        margin-bottom: 0.75rem;
        padding-right: 2.5rem;
    }
    
    .modal-title {
        font-size: 1rem;
        line-height: 1.2;
    }
    
    .modal-subtitle {
        font-size: 0.75rem;
    }
    
    .close-btn {
        width: 28px;
        height: 28px;
        top: 8px;
        right: 8px;
    }
    
    .demo-form .form-grid {
        grid-template-columns: 1fr;
        gap: 0.75rem;
    }
    
    .form-group input,
    .form-group select {
        min-height: 38px;
        padding: 0.6rem;
        font-size: 0.8rem;
    }
    
    .modal-submit-btn {
        min-height: 42px;
        padding: 0.75rem;
        font-size: 0.85rem;
        margin-top: 1rem;
    }
}

/* Small phones and hero adjustments */
@media screen and (max-width: 480px) {
    .hero-section {
        padding: 2rem 0.75rem;
        min-height: auto;
    }
    
    .container {
        padding: 0 10px;
    }
    
    .row {
        flex-direction: column;
        gap: 2rem;
    }
    
    .col-md-6 {
        min-width: 100%;
    }
    
    .hero-btn-cta {
        padding: 1rem 1.5rem;
        margin-top: 1.5rem;
    }
    
    .stats-container {
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
        margin-top: 2rem;
    }
    
    .stat-box {
        padding: 0.75rem 0.25rem;
    }
}

/* Medium phones and tablets (481px - 767px) */
@media screen and (min-width: 481px) and (max-width: 767px) {
    .hero-section {
        padding: 3rem 1rem;
    }
    
    .stats-container {
        grid-template-columns: repeat(3, 1fr);
    }
    
    .modal-box {
        max-width: min(85vw, 420px);
    }
}

/* Tablets (768px - 1024px) */
@media screen and (min-width: 768px) and (max-width: 1024px) {
    .hero-section {
        padding: 4rem 1.5rem;
    }
    
    .row {
        flex-direction: row;
        align-items: center;
    }
    
    .text-section {
        text-align: left;
    }
    
    .hero-btn-cta {
        max-width: 280px;
        margin-left: 0;
    }
    
    .stats-container {
        grid-template-columns: repeat(3, 1fr);
        max-width: 400px;
        margin-left: 0;
    }
    
    .modal-box {
        max-width: min(75vw, 460px);
    }
}

/* Large tablets and desktops (1025px+) */
@media screen and (min-width: 1025px) {
    .text-section {
        text-align: left;
        padding-right: 2rem;
    }
    
    .hero-btn-cta {
        max-width: 250px;
        margin-left: 0;
    }
    
    .stats-container {
        margin-left: 0;
        justify-content: flex-start;
    }
    
    .modal-box {
        max-width: 480px;
    }
}

/* Landscape and short screens */
@media screen and (orientation: landscape) and (max-height: 600px) {
    .hero-section {
        min-height: auto;
        padding: 2rem 1rem;
    }
    
    .modal-box {
        padding: 1rem 1.25rem;
    }
    
    .modal-header {
        margin-bottom: 0.75rem;
    }
    
    .demo-form .form-grid {
        gap: 0.75rem;
    }
    
    .modal-submit-btn {
        margin-top: 0.75rem;
    }
}

/* Accessibility improvements */
@media (prefers-reduced-motion: reduce) {
    .text-changing,
    .hero-btn-cta,
    .img-wrapper,
    .stat-box,
    .modal-box {
        transition: none;
        animation: none;
    }
    
    .big-image {
        animation: none;
    }
}

/* High contrast mode */
@media (prefers-contrast: high) {
    .modal-box {
        border-width: 3px;
    }
    
    .form-group input,
    .form-group select {
        border-width: 2px;
    }
}

/* Touch device optimizations */
@media (hover: none) and (pointer: coarse) {
    .hero-btn-cta:hover {
        transform: none;
        box-shadow: 0 4px 15px rgba(255, 195, 0, 0.3);
    }
    
    .img-wrapper:hover {
        transform: none;
    }
    
    .stat-box:hover {
        transform: none;
    }
    
    .modal-submit-btn:hover:not(:disabled) {
        transform: none;
        box-shadow: 0 4px 12px rgba(255, 195, 0, 0.3);
    }
    
    .close-btn:hover {
        transform: rotate(90deg);
    }
    
    /* Larger touch targets for mobile */
    .close-btn {
        min-width: 44px;
        min-height: 44px;
    }
    
    .form-group input,
    .form-group select {
        min-height: 48px;
    }
    
    .modal-submit-btn {
        min-height: 48px;
    }
}

/* Utility Classes */
.d-flex { display: flex; }
.flex-column { flex-direction: column; }
.flex-md-row { flex-direction: column; }
@media (min-width: 768px) { .flex-md-row { flex-direction: row; } }
.align-items-center { align-items: center; }
.justify-content-between { justify-content: space-between; }
.justify-content-center { justify-content: center; }
.mb-4 { margin-bottom: 1.5rem; }
.mt-4 { margin-top: 1.5rem; }
.mt-5 { margin-top: 3rem; }
.mt-md-0 { margin-top: 0; }
@media (max-width: 768px) { .mt-md-0 { margin-top: 1.5rem; } }
.px-4 { padding-left: 1.5rem; padding-right: 1.5rem; }
.fw-bold { font-weight: bold; }
.text-white { color: #fff; }
.text-center { text-align: center; }
@media (min-width: 768px) { .text-md-left { text-align: left; } }
.img-fluid { max-width: 100%; height: auto; }
.rounded-circle { border-radius: 50% !important; }
.shadow-lg { box-shadow: 0 1rem 3rem rgba(0,0,0,.175)!important; }
.position-relative { position: relative; }
.gap-5 { gap: 3rem; }
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
            // Option 1: Use WhatsApp Business API (requires server-side setup)
            // const response = await fetch('/api/send-whatsapp', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify({ number: whatsappNumber, message })
            // });
            // return response.ok;
            
            // Option 2: Automatic WhatsApp Web link (opens automatically)
            const whatsappUrl = `https://wa.me/${whatsappNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;
            
            // Auto-open WhatsApp in a new tab
            const whatsappWindow = window.open(whatsappUrl, '_blank', 'width=500,height=600,scrollbars=yes,resizable=yes');
            
            // Optional: Auto-close the WhatsApp window after user presumably sends message
            // setTimeout(() => {
            //     if (whatsappWindow && !whatsappWindow.closed) {
            //         whatsappWindow.close();
            //     }
            // }, 10000); // Close after 10 seconds
            
            return true;
        } catch (error) {
            console.error('WhatsApp send failed:', error);
            return false;
        }
    };

    // Send email automatically
    const sendEmail = async (data) => {
        try {
            // Option 1: Use EmailJS (client-side email service)
            // Uncomment and configure if you want to use EmailJS
            /*
            if (window.emailjs) {
                const result = await window.emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
                    to_email: 'demo@yourchessacademy.com',
                    parent_name: data.parentName,
                    child_name: data.childName,
                    email: data.email,
                    phone: data.phone,
                    age: data.age,
                    source: data.source,
                    message: `New chess demo request from ${data.parentName} for ${data.childName} (Age: ${data.age}).`
                });
                return result.status === 200;
            }
            */
            
            // Option 2: Server-side API call (requires backend)
            /*
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    to: 'demo@yourchessacademy.com',
                    subject: '🎯 New Chess Demo Request',
                    html: `
                        <h2>New Chess Demo Request</h2>
                        <p><strong>Parent:</strong> ${data.parentName}</p>
                        <p><strong>Child:</strong> ${data.childName}</p>
                        <p><strong>Email:</strong> ${data.email}</p>
                        <p><strong>Phone:</strong> ${data.phone}</p>
                        <p><strong>Age:</strong> ${data.age} years</p>
                        <p><strong>Source:</strong> ${data.source}</p>
                    `
                })
            });
            return response.ok;
            */
            
            // Fallback: Auto-open email client with pre-filled content
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
            
            // Auto-open email client
            const emailWindow = window.open(emailUrl, '_blank');
            
            // Check if email client opened successfully
            if (emailWindow) {
                // Close immediately since we just want to trigger the email client
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
            // Send to WhatsApp automatically (no user interaction needed)
            const whatsappSuccess = await sendToWhatsApp(formData);
            
            // Small delay before sending email
            await new Promise(resolve => setTimeout(resolve, 800));
            const emailSuccess = await sendEmail(formData);
            
            // Show success even if one method works
            if (whatsappSuccess || emailSuccess) {
                setIsSubmitting(false);
                setSubmissionStatus("success");
                
                // Auto close after success
                setTimeout(() => {
                    if (onClose) onClose();
                }, 4000); // Give more time to read success message
            } else {
                throw new Error('Both WhatsApp and Email failed');
            }
            
        } catch (error) {
            console.error('Submission failed:', error);
            setIsSubmitting(false);
            setSubmissionStatus("error");
            
            // Auto close after error message
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
                <div className="modal-bg-glow"></div>
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

// Main Hero Component
function App() {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [fade, setFade] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const parentsCount = useCountUp(10000, 3);
    const countriesCount = useCountUp(50, 3);
    const coachesCount = useCountUp(400, 3);

    // Auto-open modal when component mounts
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsModalOpen(true);
        }, 1500); // Open modal after 1.5 seconds

        return () => clearTimeout(timer);
    }, []);

    // Word changing animation effect
    useEffect(() => {
        const words = ["interactive", "productive", "enjoyable", "fun", "educational"];
        const interval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setCurrentWordIndex((prev) => (prev + 1) % words.length);
                setFade(true);
            }, 300);
        }, 2500);
        
        return () => clearInterval(interval);
    }, []);

    const words = ["interactive", "productive", "enjoyable", "fun", "educational"];

    return (
        <>
            <style>{fullStyles}</style>
            
            <section className="hero-section">
                <div className="container">
                    <div className="row d-flex flex-column flex-md-row align-items-center">
                        {/* Left Text Section */}
                        <div className="col-md-6 mb-4 text-section text-center text-md-left">
                            <h1 className="main-heading fw-bold text-white">
                                Learn, Play, <span className="text-yellow">Conquer</span>!
                            </h1>
                            <p className="sub-heading mt-4 text-white">
                                Our Online Chess Classes Are <br />
                                <span className={`text-changing fw-bold ${fade ? "fade-in" : "fade-out"}`}>
                                    {words[currentWordIndex]}
                                </span>{" "}
                                for kids.
                            </p>
                            
                            <button
                                className="hero-btn hero-btn-cta"
                                onClick={() => setIsModalOpen(true)}
                                aria-label="Book a free chess demo class"
                            >
                                Book Free Demo
                            </button>

                            {/* Dynamic Stats Section */}
                            <div className="stats-container">
                                <div className="stat-box">
                                    <div className="stat-number">{parentsCount}+</div>
                                    <div className="stat-label">Parents</div>
                                </div>
                                <div className="stat-box">
                                    <div className="stat-number">{countriesCount}+</div>
                                    <div className="stat-label">Countries</div>
                                </div>
                                <div className="stat-box">
                                    <div className="stat-number">{coachesCount}+</div>
                                    <div className="stat-label">FIDE Rated Coaches</div>
                                </div>
                            </div>
                        </div>

                        {/* Right Image Section */}
                        <div className="col-md-6 text-center mt-5 mt-md-0">
                            <div className="img-wrapper">
                                <img
                                    src={heroImg}
                                    alt="Grandmaster Srinath Narayanan - Captain of Gold-Winning Indian Chess Olympiad Team"
                                    className="img-fluid rounded-circle shadow-lg big-image"
                                    loading="lazy"
                                />
                                <div className="caption-box-inside">
                                    <strong>Grandmaster Srinath Narayanan</strong>
                                    Captain Of The Gold-Winning Indian Chess Olympiad Team
                                </div>
                            </div>
                        </div>
                    </div>
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
