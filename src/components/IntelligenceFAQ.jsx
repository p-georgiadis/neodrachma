// neo-drachma-vite/src/components/IntelligenceFAQ.jsx
import React, { useState } from 'react';

export default function IntelligenceFAQ() {
    const [activeIndex, setActiveIndex] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    const faqs = [
        {
            question: "Is NeoDrachma legal under Greek and EU law?",
            answer: "NeoDrachma operates as a utility token and complies with all relevant regulations...",
            category: "LEGAL"
        },
        {
            question: "How is NeoDrachma different from other cryptocurrencies?",
            answer: "Unlike global cryptocurrencies, NeoDrachma is specifically designed for the Greek context...",
            category: "TECHNICAL"
        },
        {
            question: "How can Greek citizens acquire NeoDrachma?",
            answer: "NeoDrachma will be available through multiple channels designed for maximum accessibility...",
            category: "PRACTICAL"
        },
        {
            question: "Is NeoDrachma a good investment opportunity?",
            answer: "NeoDrachma is designed as a utility token for the Greek economy, not primarily as a speculative...",
            category: "ECONOMIC"
        },
        {
            question: "How will NeoDrachma benefit average Greek citizens?",
            answer: "NeoDrachma provides several immediate benefits: reduced transaction fees...",
            category: "PRACTICAL"
        },
        {
            question: "What technology underpins the NeoDrachma system?",
            answer: "NeoDrachma is built on an energy-efficient blockchain specifically optimized for the Mediterranean region...",
            category: "TECHNICAL"
        }
    ];

    const filteredFaqs = searchTerm
        ? faqs.filter(faq =>
            faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
            faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
            faq.category.toLowerCase().includes(searchTerm.toLowerCase())
        )
        : faqs;

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const handleCategoryClick = (category) => {
        setSearchTerm(searchTerm === category ? '' : category);
    };

    return (
        <section id="faq" className="section americana-section intel-section">
            <div className="section-header">
                <div className="classified-header">TOP SECRET</div>
                <h2 className="atomic-title">INTELLIGENCE BRIEFING</h2>
                <div className="subtitle-bar">CITIZEN INFORMATION PROTOCOL</div>
            </div>

            <div className="intel-search">
                <div className="search-container">
                    <span className="search-icon" aria-hidden="true">⌕</span>
                    <input
                        type="text"
                        placeholder="SEARCH INTELLIGENCE DATABASE..."
                        className="search-input"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        aria-label="Search FAQs"
                    />
                    {searchTerm && (
                        <button
                            className="clear-search"
                            onClick={() => setSearchTerm('')}
                            aria-label="Clear search"
                        >
                            ×
                        </button>
                    )}
                </div>

                <div className="category-filters" role="radiogroup" aria-label="Filter by category">
                    {["LEGAL", "TECHNICAL", "PRACTICAL", "ECONOMIC"].map(category => (
                        <span
                            key={category}
                            className={`category-tag ${searchTerm === category ? 'active' : ''}`}
                            onClick={() => handleCategoryClick(category)}
                            role="radio"
                            aria-checked={searchTerm === category}
                            tabIndex="0"
                        >
              {category}
            </span>
                    ))}
                </div>
            </div>

            <div className="faq-container">
                {filteredFaqs.length > 0 ? (
                    filteredFaqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`faq-item atomic-faq ${activeIndex === index ? 'active' : ''}`}
                            onClick={() => toggleFAQ(index)}
                        >
                            <div
                                className="faq-header"
                                role="button"
                                aria-expanded={activeIndex === index}
                                tabIndex="0"
                            >
                                <div className="faq-question atomic-question">
                                    {faq.question}
                                </div>
                                <span className="faq-category">{faq.category}</span>
                            </div>
                            <div
                                className="faq-answer atomic-answer"
                                id={`faq-answer-${index}`}
                                style={{ display: activeIndex === index ? 'block' : 'none' }}
                            >
                                {faq.answer}
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="no-results" role="alert">
                        <div className="no-results-icon" aria-hidden="true">!</div>
                        <div className="no-results-text">NO INTELLIGENCE RECORDS FOUND</div>
                        <div className="no-results-subtext">Adjust search parameters or contact your sector commander</div>
                    </div>
                )}
            </div>
        </section>
    );
}
