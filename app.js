document.addEventListener('DOMContentLoaded', async () => {
    const sections = document.querySelectorAll('.faq-section');

    // Initial Load of Content
    await Promise.all(Array.from(sections).map(section => loadSectionContent(section)));

    // Category Toggle Logic
    const categoryHeaders = document.querySelectorAll('.category-header');
    categoryHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const section = header.parentElement;
            section.classList.toggle('expanded');
        });
    });

    // Initialize Interactivity after content is loaded
    initializeSearch();
    initializeNavigation();
});

async function loadSectionContent(section) {
    const contentPath = section.getAttribute('data-content');
    const accordion = section.querySelector('.accordion');

    try {
        const response = await fetch(contentPath);
        if (!response.ok) throw new Error(`Failed to fetch ${contentPath}`);

        const markdown = await response.text();
        const html = parseMarkdownToAccordion(markdown);

        accordion.innerHTML = html;
        attachAccordionEvents(accordion);
    } catch (error) {
        console.error(error);
        accordion.innerHTML = `<div class="error">Error loading content: ${error.message}</div>`;
    }
}

function parseMarkdownToAccordion(markdown) {
    // We split by "### " which we defined as our question headers
    const blocks = markdown.split('### ').filter(b => b.trim() !== '');

    return blocks.map(block => {
        const lines = block.split('\n');
        const question = lines[0].trim();
        const answerMarkdown = lines.slice(1).join('\n').trim();
        const answerHtml = marked.parse(answerMarkdown);

        return `
            <div class="accordion-item">
                <button class="accordion-header">
                    ${question}
                    <span class="accordion-icon">▼</span>
                </button>
                <div class="accordion-content">
                    <div class="accordion-inner">
                        ${answerHtml}
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

function attachAccordionEvents(container) {
    const headers = container.querySelectorAll('.accordion-header');
    headers.forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            const isActive = item.classList.contains('active');

            // Close all items in THIS accordion
            container.querySelectorAll('.accordion-item').forEach(otherItem => {
                otherItem.classList.remove('active');
            });

            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
}

function initializeSearch() {
    const searchInput = document.getElementById('faqSearch');

    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const faqSections = document.querySelectorAll('.faq-section');

        faqSections.forEach(section => {
            let sectionHasVisibleItems = false;
            const items = section.querySelectorAll('.accordion-item');

            items.forEach(item => {
                const question = item.querySelector('.accordion-header').textContent.toLowerCase();
                const answer = item.querySelector('.accordion-inner').textContent.toLowerCase();

                if (question.includes(searchTerm) || answer.includes(searchTerm)) {
                    item.style.display = 'block';
                    sectionHasVisibleItems = true;
                } else {
                    item.style.display = 'none';
                }
            });

            section.style.display = sectionHasVisibleItems ? 'block' : 'none';

            // Auto-expand/collapse based on search results
            if (searchTerm !== "" && sectionHasVisibleItems) {
                section.classList.add('expanded');
            } else if (searchTerm === "") {
                // Return to collapsed state when search is cleared (optional, depends on preference)
                // section.classList.remove('expanded'); 
            }
        });
    });
}

function initializeNavigation() {
    const sections = document.querySelectorAll('.faq-section');
    const navLinks = document.querySelectorAll('.nav-link');

    // Smooth Scroll for Sidebar Links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const id = link.getAttribute('href').substring(1);
            const target = document.getElementById(id);

            if (target) {
                // Expand the section if it's collapsed
                target.classList.add('expanded');

                const topOffset = target.getBoundingClientRect().top + window.pageYOffset - 100;
                window.scrollTo({
                    top: topOffset,
                    behavior: 'smooth'
                });

                // Manually update active state
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            }
        });
    });

    // Intersection Observer for Scroll-Spy
    const observerOptions = {
        root: null,
        rootMargin: '-10% 0px -80% 0px', // Narrow detection band near the top
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');

                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));
}
