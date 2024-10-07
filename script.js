document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide icons
    lucide.createIcons();

    // Scroll to section
    const scrollButtons = document.querySelectorAll('[data-section]');
    scrollButtons.forEach(button => {
        button.addEventListener('click', () => {
            const sectionId = button.getAttribute('data-section');
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Scroll to top button
    const scrollToTopButton = document.getElementById('scroll-to-top');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            scrollToTopButton.classList.remove('hidden');
        } else {
            scrollToTopButton.classList.add('hidden');
        }
    });
    scrollToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Animate sections on scroll
    const sections = document.querySelectorAll('section');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    // Populate features
    const featuresGrid = document.getElementById('features-grid');
    const features = [
        { icon: 'shopping-bag', title: 'Discover Shops', description: 'Find the best clothing and shoe stores in town' },
        { icon: 'utensils', title: 'Explore Restaurants', description: 'Uncover local eateries and culinary delights' },
        { icon: 'map-pin', title: 'City Guides', description: 'Get personalized recommendations for each city' },
        { icon: 'star', title: 'User Reviews', description: 'Read and write reviews to help others' },
        { icon: 'instagram', title: 'Social Integration', description: 'Share your discoveries on other social platforms' },
        { icon: 'map', title: 'Interactive Maps', description: 'Easily navigate to your chosen destinations' },
    ];

    features.forEach(feature => {
        const featureElement = document.createElement('div');
        featureElement.className = 'bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700';
        featureElement.innerHTML = `
            <i data-lucide="${feature.icon}" class="w-12 h-12 text-orange-400 mb-4"></i>
            <h4 class="text-xl font-semibold mb-2 text-blue-400">${feature.title}</h4>
            <p class="text-gray-300">${feature.description}</p>
        `;
        featuresGrid.appendChild(featureElement);
    });

    // Populate testimonials
    const testimonialsGrid = document.getElementById('testimonials-grid');
    const testimonials = [
        { name: 'Sarah L.', role: 'Fashion Enthusiast', quote: 'ShopConnect has revolutionized how I discover new boutiques. It\'s like having a personal shopping guide in my pocket!' },
        { name: 'Mike R.', role: 'Food Blogger', quote: 'As a food blogger, ShopConnect has been invaluable in finding hidden culinary gems in every city I visit.' },
        { name: 'Emma T.', role: 'Travel Vlogger', quote: 'ShopConnect is now an essential part of my travel planning. It helps me create content by finding unique local shops and restaurants.' },
    ];

    testimonials.forEach(testimonial => {
        const testimonialElement = document.createElement('div');
        testimonialElement.className = 'bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700';
        testimonialElement.innerHTML = `
            <p class="text-gray-300 mb-4 italic">"${testimonial.quote}"</p>
            <p class="text-blue-400 font-semibold">${testimonial.name}</p>
            <p class="text-gray-400 text-sm">${testimonial.role}</p>
        `;
        testimonialsGrid.appendChild(testimonialElement);
    });

    // Re-initialize Lucide icons after dynamic content is added
    lucide.createIcons();
});