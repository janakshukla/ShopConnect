document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide icons
    lucide.createIcons();

    // Initialize GSAP and ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Loading animation
    const loadingScreen = document.getElementById('loading-screen');
    gsap.to(loadingScreen, {
        opacity: 0,
        duration: 1,
        delay: 1,
        onComplete: () => {
            loadingScreen.style.display = 'none';
            animateHeroSection();
        }
    });

    // Hamburger menu
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile-menu');
    hamburger.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Scroll to section
    const scrollButtons = document.querySelectorAll('[data-section]');
    scrollButtons.forEach(button => {
        button.addEventListener('click', () => {
            const sectionId = button.getAttribute('data-section');
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
                if (!mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                }
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
        featureElement.className = 'feature-card bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700';
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
        { name: 'John D.', role: 'Local Business Owner', quote: 'ShopConnect has helped my small business reach new customers. It\'s been a game-changer for us!' },
        { name: 'Lisa M.', role: 'Foodie', quote: 'I love trying new restaurants, and ShopConnect makes it so easy to find hidden gems wherever I go.' },
        { name: 'Alex K.', role: 'Digital Nomad', quote: 'As someone who travels frequently, ShopConnect has become my go-to app for exploring new cities like a local.' },
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

    // Animations
    function animateHeroSection() {
        const tl = gsap.timeline();
        tl.from('.hero-image-1', { opacity: 0, scale: 1.2, duration: 1 })
          .from('.hero-image-2', { opacity: 0, scale: 1.2, duration: 1 }, '-=0.5')
          .from('.hero-image-3', { opacity: 0, scale: 1.2, duration: 1 }, '-=0.5')
          .from('#hero h2', { opacity: 0, y: 50, duration: 1 }, '-=0.5')
          .from('#hero p', { opacity: 0, y: 50, duration: 1 }, '-=0.5');
    }

    gsap.from('header', {
        scrollTrigger: {
            trigger: 'header',
            start: 'top top',
            end: 'bottom top',
            scrub: true,
        },
        backgroundColor: 'rgba(31, 41, 55, 0)',
        duration: 1,
    });

    gsap.from('.about-content', {
        scrollTrigger: {
            trigger: '#about',
            start: 'top center',
        },
        x: -100,
        opacity: 0,
        duration: 1,
    });

    gsap.from('.our-vision', {
        scrollTrigger: {
            trigger: '#about',
            start: 'top center',
        },
        opacity: 0,
        scale: 0.8,
        duration: 1,
    });

    gsap.from('.feature-card', {
        scrollTrigger: {
            trigger: '#features',
            start: 'top center',
        },
        opacity: 0,
        scale: 0.8,
        stagger: 0.2,
        duration: 0.8,
    });

    gsap.from('#testimonials-grid > div', {
        scrollTrigger: {
            trigger: '#testimonials',
            start: 'top center',
        },
        x: 100,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
    });

    gsap.from('.contact-info, .contact-form', {
        scrollTrigger: {
            trigger: '#contact',
            start: 'top center',
        },
        y: 50,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
    });
});