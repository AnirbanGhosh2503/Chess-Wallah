import React, { useState, useEffect } from "react";
import srinath from '../assets/srinath.png'; // Ensure you have this image in the specified path

// Enhanced CSS without modal
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

/* ULTRA TINY MODAL DESIGN - Interactive & Animated */
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at center, rgba(79, 95, 216, 0.3), rgba(0, 0, 0, 0.9));
    backdrop-filter: blur(8px);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.5s ease, visibility 0s linear 0.5s;
    padding: 1rem;
    animation: modalBackgroundPulse 6s ease-in-out infinite;
}

@keyframes modalBackgroundPulse {
    0%, 100% { background: radial-gradient(circle at center, rgba(79, 95, 216, 0.2), rgba(0, 0, 0, 0.85)); }
    50% { background: radial-gradient(circle at center, rgba(255, 140, 0, 0.25), rgba(0, 0, 0, 0.9)); }
}

.modal-overlay.show {
    opacity: 1;
    visibility: visible;
    transition: opacity 0.5s ease;
}

.modal-box {
    background: linear-gradient(135deg, #ffffff 0%, #f8f9ff 50%, #fff5e6 100%);
    color: #333;
    padding: 1rem;
    border-radius: 16px;
    box-shadow: 
        0 25px 50px rgba(0, 0, 0, 0.4),
        0 0 0 1px rgba(255, 255, 255, 0.2),
        inset 0 1px 0 rgba(255, 255, 255, 0.4);
    width: 100%;
    max-width: 280px;
    max-height: 75vh;
    position: relative;
    transform: scale(0.5) translateY(100px) rotateX(20deg);
    opacity: 0;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    box-sizing: border-box;
    overflow-y: auto;
    border: 3px solid transparent;
    background-clip: padding-box;
    animation: modalFloat 4s ease-in-out infinite;
}

@keyframes modalFloat {
    0%, 100% { transform: scale(1) translateY(0) rotateX(0deg); }
    25% { transform: scale(1.02) translateY(-2px) rotateX(1deg); }
    50% { transform: scale(1) translateY(-4px) rotateX(0deg); }
    75% { transform: scale(1.02) translateY(-2px) rotateX(-1deg); }
}

.modal-box::before {
    content: '';
    position: absolute;
    top: -3px;
    left: -3px;
    right: -3px;
    bottom: -3px;
    background: linear-gradient(45deg, #4f5fd8, #ff8c00, #4f5fd8, #ff8c00);
    background-size: 400% 400%;
    border-radius: 18px;
    z-index: -1;
    animation: gradientShift 3s ease infinite;
}

@keyframes gradientShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}

.modal-overlay.show .modal-box {
    transform: scale(1) translateY(0) rotateX(0deg);
    opacity: 1;
}

.modal-box.status-view {
    padding: 1.2rem;
    text-align: center;
    max-width: 240px;
    animation: successPulse 2s ease-in-out infinite;
}

@keyframes successPulse {
    0%, 100% { box-shadow: 0 25px 50px rgba(0, 0, 0, 0.4), 0 0 20px rgba(40, 167, 69, 0.3); }
    50% { box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5), 0 0 30px rgba(40, 167, 69, 0.5); }
}

/* Tiny Header */
.tiny-header {
    text-align: center;
    margin-bottom: 0.8rem;
    padding-right: 1.5rem;
}

.tiny-title {
    font-size: 0.9rem;
    font-weight: 800;
    color: #1a1a1a;
    margin-bottom: 0.2rem;
    line-height: 1.2;
}

.tiny-subtitle {
    font-size: 0.6rem;
    color: #666;
    line-height: 1.3;
    font-weight: 500;
}

/* Tiny Close Button */
.tiny-close-btn {
    position: absolute;
    top: -4px;
    right: -4px;
    background: #ff4757;
    border: none;
    color: white;
    font-size: 0.8rem;
    cursor: pointer;
    transition: all 0.2s ease;
    padding: 0;
    border-radius: 50%;
    width: 22px;
    height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
    box-shadow: 0 2px 6px rgba(255, 71, 87, 0.4);
}

.tiny-close-btn:hover {
    background: #ff3742;
    transform: scale(1.1);
}

/* Ultra Compact Form */
.tiny-form {
    width: 100%;
}

.tiny-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 0.4rem;
    margin-bottom: 0.6rem;
}

.tiny-input {
    width: 100%;
    padding: 0.4rem;
    background: #f8f9fa;
    border: 1px solid #e8eaed;
    border-radius: 4px;
    color: #333;
    font-size: 0.65rem;
    font-weight: 500;
    transition: all 0.3s ease;
    box-sizing: border-box;
    outline: none;
    min-height: 28px;
}

.tiny-input:focus {
    border-color: #4f5fd8;
    box-shadow: 0 0 0 2px rgba(79, 95, 216, 0.1);
    background: white;
}

.tiny-input::placeholder {
    color: #999;
    font-size: 0.6rem;
    font-weight: 400;
}

.tiny-select {
    width: 100%;
    padding: 0.4rem;
    background: #f8f9fa;
    border: 1px solid #e8eaed;
    border-radius: 4px;
    color: #333;
    font-size: 0.65rem;
    font-weight: 500;
    transition: all 0.3s ease;
    box-sizing: border-box;
    outline: none;
    min-height: 28px;
    appearance: none;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e");
    background-position: right 0.4rem center;
    background-repeat: no-repeat;
    background-size: 0.8rem;
    padding-right: 1.8rem;
}

.tiny-select:focus {
    border-color: #4f5fd8;
    box-shadow: 0 0 0 2px rgba(79, 95, 216, 0.1);
    background-color: white;
}

/* Tiny Submit Button */
.tiny-submit-btn {
    width: 100%;
    padding: 0.5rem;
    margin-top: 0.6rem;
    background: linear-gradient(135deg, #ff8c00, #ff7200);
    border: none;
    border-radius: 4px;
    color: white;
    font-size: 0.65rem;
    font-weight: 700;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.3rem;
    transition: all 0.3s ease;
    text-transform: uppercase;
    letter-spacing: 0.3px;
    min-height: 32px;
    box-shadow: 0 4px 8px rgba(255, 140, 0, 0.3);
}

.tiny-submit-btn:hover:not(:disabled) {
    transform: translateY(-1px);
    box-shadow: 0 6px 12px rgba(255, 140, 0, 0.4);
}

.tiny-submit-btn:active:not(:disabled) {
    transform: translateY(0);
}

.tiny-submit-btn:disabled {
    background: #ccc;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
}

.tiny-spinner {
    border: 1.5px solid rgba(255, 255, 255, 0.3);
    border-top: 1.5px solid white;
    border-radius: 50%;
    width: 12px;
    height: 12px;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

/* Tiny Trust Section */
.tiny-trust {
    background: #f8f9fa;
    margin: 0.6rem -1rem 0;
    padding: 0.5rem 1rem;
    border-radius: 0 0 8px 8px;
    text-align: center;
    border-top: 1px solid #e8eaed;
}

.tiny-trust-text {
    font-size: 0.55rem;
    color: #666;
    font-weight: 600;
    margin-bottom: 0.3rem;
    text-transform: uppercase;
    letter-spacing: 0.3px;
}

.tiny-trust-stats {
    display: flex;
    justify-content: center;
    gap: 0.8rem;
    align-items: center;
}

.tiny-trust-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.1rem;
}

.tiny-trust-number {
    font-size: 0.7rem;
    font-weight: 800;
    color: #ff8c00;
}

.tiny-trust-label {
    font-size: 0.5rem;
    color: #666;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.2px;
}

/* Status Messages */
.tiny-status {
    text-align: center;
    padding: 0.8rem 0;
}

.tiny-status-icon {
    font-size: 2rem;
    margin-bottom: 0.5rem;
}

.success-icon {
    color: #28a745;
}

.error-icon {
    color: #dc3545;
}

.tiny-status-title {
    font-size: 0.9rem;
    font-weight: 800;
    margin-bottom: 0.3rem;
    color: #1a1a1a;
}

.tiny-status-text {
    font-size: 0.65rem;
    color: #666;
    line-height: 1.4;
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
    
    .stats-section {
        flex-direction: row;
        justify-content: space-between;
        gap: 0.5rem;
        margin-top: 1.5rem;
        max-width: 100%;
    }
    
    .stat-item:not(:last-child)::after {
        display: none;
    }
    
    .stat-number {
        font-size: 1.8rem;
        margin-bottom: 0.2rem;
    }
    
    .stat-label,
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
    
    /* Even tinier for tablets */
    .modal-overlay {
        padding: 0.8rem;
    }
    
    .modal-box {
        max-width: 260px;
        padding: 0.8rem;
        max-height: 70vh;
    }
    
    .tiny-title {
        font-size: 0.8rem;
    }
    
    .tiny-subtitle {
        font-size: 0.55rem;
    }
    
    .tiny-input,
    .tiny-select {
        font-size: 0.6rem;
        padding: 0.35rem;
        min-height: 26px;
    }
    
    .tiny-input::placeholder {
        font-size: 0.55rem;
    }
    
    .tiny-submit-btn {
        font-size: 0.6rem;
        padding: 0.45rem;
        min-height: 30px;
    }
    
    .tiny-trust-number {
        font-size: 0.65rem;
    }
    
    .tiny-trust-label {
        font-size: 0.45rem;
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
    
    .instructor-bg {
        width: 200px;
        height: 200px;
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
    
    .bottom-title {
        font-size: 1.8rem;
        padding: 0 1rem;
    }
    
    .bottom-subtitle {
        font-size: 0.9rem;
        padding: 0 1rem;
    }
    
    /* Ultra tiny for phones */
    .modal-overlay {
        padding: 0.5rem;
    }
    
    .modal-box {
        max-width: 240px;
        padding: 0.7rem;
        max-height: 75vh;
        border-radius: 6px;
    }
    
    .modal-box.status-view {
        max-width: 220px;
        padding: 1rem;
    }
    
    .tiny-header {
        margin-bottom: 0.6rem;
        padding-right: 1.3rem;
    }
    
    .tiny-title {
        font-size: 0.75rem;
    }
    
    .tiny-subtitle {
        font-size: 0.5rem;
    }
    
    .tiny-close-btn {
        width: 20px;
        height: 20px;
        font-size: 0.7rem;
        top: -3px;
        right: -3px;
    }
    
    .tiny-grid {
        gap: 0.35rem;
        margin-bottom: 0.5rem;
    }
    
    .tiny-input,
    .tiny-select {
        font-size: 0.55rem;
        padding: 0.3rem;
        min-height: 24px;
    }
    
    .tiny-input::placeholder {
        font-size: 0.5rem;
    }
    
    .tiny-select {
        padding-right: 1.5rem;
        background-size: 0.7rem;
    }
    
    .tiny-submit-btn {
        font-size: 0.55rem;
        padding: 0.4rem;
        min-height: 28px;
        margin-top: 0.5rem;
    }
    
    .tiny-trust {
        padding: 0.4rem 0.7rem;
        margin-top: 0.5rem;
    }
    
    .tiny-trust-text {
        font-size: 0.5rem;
        margin-bottom: 0.25rem;
    }
    
    .tiny-trust-stats {
        gap: 0.6rem;
    }
    
    .tiny-trust-number {
        font-size: 0.6rem;
    }
    
    .tiny-trust-label {
        font-size: 0.4rem;
    }
    
    .tiny-status-icon {
        font-size: 1.8rem;
        margin-bottom: 0.4rem;
    }
    
    .tiny-status-title {
        font-size: 0.8rem;
    }
    
    .tiny-status-text {
        font-size: 0.6rem;
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
        width: 180px;
        height: 180px;
    }
    
    .instructor-image {
        width: 220px;
        height: 220px;
    }
    
    .instructor-badge {
        min-width: 180px;
        padding: 0.7rem 1rem;
        font-size: 0.7rem;
    }
    
    .bottom-title {
        font-size: 1.6rem;
    }
    
    /* Extremely tiny for very small screens */
    .modal-overlay {
        padding: 0.3rem;
    }
    
    .modal-box {
        max-width: 220px;
        padding: 0.6rem;
        border-radius: 4px;
    }
    
    .modal-box.status-view {
        max-width: 200px;
        padding: 0.8rem;
    }
    
    .tiny-header {
        margin-bottom: 0.5rem;
        padding-right: 1.2rem;
    }
    
    .tiny-title {
        font-size: 0.7rem;
    }
    
    .tiny-subtitle {
        font-size: 0.45rem;
    }
    
    .tiny-close-btn {
        width: 18px;
        height: 18px;
        font-size: 0.65rem;
    }
    
    .tiny-grid {
        gap: 0.3rem;
        margin-bottom: 0.4rem;
    }
    
    .tiny-input,
    .tiny-select {
        font-size: 0.5rem;
        padding: 0.25rem;
        min-height: 22px;
    }
    
    .tiny-input::placeholder {
        font-size: 0.45rem;
    }
    
    .tiny-select {
        padding-right: 1.3rem;
        background-size: 0.6rem;
    }
    
    .tiny-submit-btn {
        font-size: 0.5rem;
        padding: 0.35rem;
        min-height: 26px;
        margin-top: 0.4rem;
    }
    
    .tiny-trust {
        padding: 0.35rem 0.6rem;
        margin-top: 0.4rem;
    }
    
    .tiny-trust-text {
        font-size: 0.45rem;
        margin-bottom: 0.2rem;
    }
    
    .tiny-trust-stats {
        gap: 0.5rem;
    }
    
    .tiny-trust-number {
        font-size: 0.55rem;
    }
    
    .tiny-trust-label {
        font-size: 0.35rem;
    }
    
    .tiny-status-icon {
        font-size: 1.6rem;
        margin-bottom: 0.3rem;
    }
    
    .tiny-status-title {
        font-size: 0.75rem;
    }
    
    .tiny-status-text {
        font-size: 0.55rem;
    }
    
    .tiny-spinner {
        width: 10px;
        height: 10px;
        border-width: 1px;
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
        const whatsappNumber = "9475959839";
        const message = `New Demo Booking:
Parent Email: ${data.email}
Parent Name: ${data.parentName}
Child Name: ${data.childName}
Phone: ${data.phone}
Age: ${data.age}
Source: ${data.source}`;
        
        try {
            const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');
            return true;
        } catch (error) {
            console.error('WhatsApp send failed:', error);
            return false;
        }
    };

    // Send email using emailjs
    const sendEmail = async (data) => {
        try {
            const emailjs = window.emailjs;
            if (emailjs) {
                await emailjs.send(
                    "service_1q6rbrf",
                    "template_ysdx28v",
                    data,
                    "PUmhM-4_UpXyOPN1M"
                );
                return true;
            }
            return false;
        } catch (error) {
            console.error('Email send failed:', error);
            return false;
        }
    };

    // Handles form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmissionStatus(null);

        try {
            await sendToWhatsApp(formData);
            await sendEmail(formData);
            
            setIsSubmitting(false);
            setSubmissionStatus("success");
            
            setTimeout(() => {
                if (onClose) onClose();
            }, 3000);
            
        } catch (error) {
            console.error('Submission failed:', error);
            setIsSubmitting(false);
            setSubmissionStatus("error");
            
            setTimeout(() => {
                if (onClose) onClose();
            }, 3000);
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
            <div className="tiny-header">
                <h2 className="tiny-title">Free Chess Demo</h2>
                <p className="tiny-subtitle">Join 6450+ families worldwide</p>
            </div>

            <form onSubmit={handleSubmit} className="tiny-form">
                <div className="tiny-grid">
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="tiny-input"
                        autoComplete="email"
                    />
                    
                    <input
                        type="text"
                        name="parentName"
                        placeholder="Parent Name"
                        value={formData.parentName}
                        onChange={handleChange}
                        required
                        className="tiny-input"
                        autoComplete="name"
                    />
                    
                    <input
                        type="text"
                        name="childName"
                        placeholder="Child's Name"
                        value={formData.childName}
                        onChange={handleChange}
                        required
                        className="tiny-input"
                        autoComplete="off"
                    />
                    
                    <input
                        type="tel"
                        name="phone"
                        placeholder="WhatsApp Number"
                        pattern="[0-9]{10}"
                        maxLength="10"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="tiny-input"
                        autoComplete="tel"
                    />
                    
                    <select 
                        name="age" 
                        value={formData.age}
                        onChange={handleChange} 
                        required
                        className="tiny-select"
                    >
                        <option value="">Age</option>
                        {[...Array(18)].map((_, i) => (
                            <option key={i} value={i + 3}>
                                {i + 3}
                            </option>
                        ))}
                    </select>
                    
                    <select 
                        name="source" 
                        value={formData.source}
                        onChange={handleChange} 
                        required
                        className="tiny-select"
                    >
                        <option value="">How you found us?</option>
                        <option value="Facebook">Facebook</option>
                        <option value="Instagram">Instagram</option>
                        <option value="Google">Google</option>
                        <option value="YouTube">YouTube</option>
                        <option value="Word of Mouth">Friend</option>
                        <option value="Others">Others</option>
                    </select>
                </div>

                <button type="submit" className="tiny-submit-btn" disabled={isSubmitting}>
                    {isSubmitting ? (
                        <>
                            <div className="tiny-spinner"></div>
                            <span>Booking...</span>
                        </>
                    ) : (
                        <>
                            <span>Book Demo</span>
                            <span>🚀</span>
                        </>
                    )}
                </button>
            </form>

            <div className="tiny-trust">
                <p className="tiny-trust-text">Trusted by</p>
                <div className="tiny-trust-stats">
                    <div className="tiny-trust-item">
                        <div className="tiny-trust-number">6450+</div>
                        <div className="tiny-trust-label">Parents</div>
                    </div>
                    <div className="tiny-trust-item">
                        <div className="tiny-trust-number">32+</div>
                        <div className="tiny-trust-label">Countries</div>
                    </div>
                    <div className="tiny-trust-item">
                        <div className="tiny-trust-number">256+</div>
                        <div className="tiny-trust-label">Coaches</div>
                    </div>
                </div>
            </div>
        </>
    );

    // Status message content
    const renderStatusMessage = () => (
        <div className="tiny-status">
            {submissionStatus === "success" ? (
                <>
                    <div className="tiny-status-icon success-icon">✅</div>
                    <h3 className="tiny-status-title">Demo Booked!</h3>
                    <p className="tiny-status-text">
                        We'll contact you on WhatsApp within 24 hours!
                    </p>
                </>
            ) : (
                <>
                    <div className="tiny-status-icon error-icon">❌</div>
                    <h3 className="tiny-status-title">Error</h3>
                    <p className="tiny-status-text">
                        Please try again or contact us directly.
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
                    className="tiny-close-btn"
                    onClick={handleClose}
                    aria-label="Close modal"
                >
                    ×
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
            }, 300);
        }, interval);

        return () => clearInterval(timer);
    }, [words, interval]);

    return { currentWord: words[currentIndex], isVisible };
};

// Main Component
function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const parentsCount = useCountUp(6450, 3);
    const countriesCount = useCountUp(32, 3);
    const coachesCount = useCountUp(256, 3);

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

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsModalOpen(true);
        }, 3000);

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
