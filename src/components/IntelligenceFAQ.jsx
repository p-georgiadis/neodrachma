// neo-drachma-vite/src/components/IntelligenceFAQ.jsx
import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext.jsx';
import { getText } from '../translations';


export default function IntelligenceFAQ() {
    const [activeIndex, setActiveIndex] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const { language } = useLanguage();

    const faqs = [
        {
            question: getText(language, 'faq', 'q1'),
            answer: getText(language, 'faq', 'a1'),
            category: getText(language, 'faq', 'legal')
        },
        {
            question: getText(language, 'faq', 'q2'),
            answer: getText(language, 'faq', 'a2'),
            category: getText(language, 'faq', 'technical')
        },
        {
            question: getText(language, 'faq', 'q3'),
            answer: getText(language, 'faq', 'a3'),
            category: getText(language, 'faq', 'practical')
        },
        {
            question: getText(language, 'faq', 'q4'),
            answer: getText(language, 'faq', 'a4'),
            category: getText(language, 'faq', 'economic')
        },
        {
            question: getText(language, 'faq', 'q5'),
            answer: getText(language, 'faq', 'a5'),
            category: getText(language, 'faq', 'practical')
        },
        {
            question: getText(language, 'faq', 'q6'),
            answer: getText(language, 'faq', 'a6'),
            category: getText(language, 'faq', 'technical')
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
                <div className="classified-header">{getText(language, 'faq', 'topSecret')}</div>
                <h2 className="atomic-title">{getText(language, 'faq', 'intelligence')}</h2>
                <div className="subtitle-bar">{getText(language, 'faq', 'protocol')}</div>
            </div>

            <div className="intel-search">
                <div className="search-container">
                    <span className="search-icon" aria-hidden="true">⌕</span>
                    <input
                        type="text"
                        placeholder={getText(language, 'faq', 'search')}
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
                    {[getText(language, 'faq', 'legal'), getText(language, 'faq', 'technical'), 
                      getText(language, 'faq', 'practical'), getText(language, 'faq', 'economic')].map(category => (
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
                        <div className="no-results-text">{getText(language, 'faq', 'noResults')}</div>
                        <div className="no-results-subtext">{getText(language, 'faq', 'adjustSearch')}</div>
                    </div>
                )}
            </div>
        </section>
    );
}
