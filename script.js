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

    // Close mobile menu when clicking outside
    document.addEventListener('click', (event) => {
        if (!hamburger.contains(event.target) && !mobileMenu.contains(event.target)) {
            mobileMenu.classList.add('hidden');
        }
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

    // Water effect
    const waterEffect = document.getElementById('water-effect');
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    waterEffect.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 1;

    const geometry = new THREE.PlaneGeometry(2, 2, 128, 128);
    const material = new THREE.ShaderMaterial({
        uniforms: {
            uTime: { value: 0 },
        },
        vertexShader: `
            uniform float uTime;
            varying vec2 vUv;
            void main() {
                vUv = uv;
                vec3 pos = position;
                float freq = 2.0;
                float amp = 0.05;
                float angle = (uTime + position.x) * freq;
                pos.z += sin(angle) * amp;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
            }
        `,
        fragmentShader: `
            uniform float uTime;
            varying vec2 vUv;
            void main() {
                vec2 uv = vUv;
                vec3 color = vec3(0.0, 0.5, 1.0);
                float alpha = 0.2 + 0.1 * sin(uTime + uv.x * 10.0 + uv.y * 10.0);
                gl_FragColor = vec4(color, alpha);
            }
        `,
        transparent: true,
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    function animate(time) {
        requestAnimationFrame(animate);
        material.uniforms.uTime.value = time * 0.001;
        renderer.render(scene, camera);
    }

    animate();

    function resizeHandler() {
        const width = window.innerWidth;
        const height = window.innerHeight;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
    }

    window.addEventListener('resize', resizeHandler);
});