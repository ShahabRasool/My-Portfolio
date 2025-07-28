
        // Initialize AOS animation
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true
        });

        // Typewriter Effect
        const typewriter = new Typewriter('#typewriter', {
            loop: true,
            delay: 75,
        });
        
        typewriter
            .typeString('Frontend Developer')
            .pauseFor(2000)
            .deleteAll()
            .typeString('Drupal Specialist')
            .pauseFor(2000)
            .deleteAll()
            .typeString('UI/UX Enthusiast')
            .pauseFor(2000)
            .start();

        // Back to Top Button
        const backToTopButton = document.getElementById('backToTop');
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.remove('opacity-0', 'invisible');
                backToTopButton.classList.add('opacity-100', 'visible');
            } else {
                backToTopButton.classList.remove('opacity-100', 'visible');
                backToTopButton.classList.add('opacity-0', 'invisible');
            }
        });

        // Mobile Menu Toggle
        const mobileMenuButton = document.getElementById('mobileMenuButton');
        const mobileMenu = document.getElementById('mobileMenu');
        
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });

        // Project Modal Functionality
        const projectModal = document.getElementById('projectModal');
        const closeModal = document.getElementById('closeModal');
        
        // Sample project data
        const projects = [
            {
                title: "Artori.pk",
                description: "Corporate website built with Drupal 10, focusing on responsive layout and seamless animations. The project involved custom theme development and integration with various Drupal modules to create a dynamic content management system.",
                technologies: ["Drupal 10", "Tailwind CSS", "SwiperJS", "PHP", "Twig"],
                date: "2023 - Present",
                image: "linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)",
                liveLink: "https://artori.pk",
                codeLink: "#",
                features: [
                    "Responsive design for all devices with mobile-first approach",
                    "Custom Drupal theme development from scratch",
                    "Interactive animations and transitions using SwiperJS",
                    "Optimized for performance and SEO best practices",
                    "Accessibility compliant (WCAG 2.1 standards)",
                    "Multilingual support with Drupal's translation system"
                ]
            },
            {
                title: "E-Commerce Dashboard",
                description: "Comprehensive admin dashboard for an e-commerce platform featuring real-time analytics, inventory management, and customer relationship tools.",
                technologies: ["React", "Chart.js", "Material UI", "Node.js", "Express"],
                date: "2022",
                image: "linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)",
                liveLink: "#",
                codeLink: "#",
                features: [
                    "Real-time sales analytics with interactive charts",
                    "Inventory management with low stock alerts",
                    "Customer segmentation and marketing tools",
                    "Order processing workflow",
                    "Role-based access control",
                    "Responsive design for desktop and tablet"
                ]
            },
            {
                title: "Mobile App UI",
                description: "Fitness tracking mobile application UI design with custom components and prototyping for a seamless user experience.",
                technologies: ["Figma", "UI/UX Design", "Prototyping", "Adobe XD"],
                date: "2021",
                image: "linear-gradient(135deg, #10b981 0%, #3b82f6 100%)",
                liveLink: "#",
                codeLink: "#",
                features: [
                    "Custom UI components library",
                    "Interactive prototyping with user flows",
                    "Dark/light mode support",
                    "Accessibility-focused design",
                    "Motion design for smooth transitions",
                    "Design system with consistent typography"
                ]
            }
        ];
        
        // Function to open modal with project details
        function openProjectModal(projectIndex) {
            const project = projects[projectIndex];
            
            document.getElementById('modalTitle').textContent = project.title;
            document.getElementById('modalDescription').textContent = project.description;
            document.getElementById('modalDate').textContent = project.date;
            document.getElementById('modalImage').style.background = project.image;
            document.getElementById('modalLiveLink').href = project.liveLink;
            document.getElementById('modalCodeLink').href = project.codeLink;
            
            // Clear previous tech tags
            const techContainer = document.getElementById('modalTech');
            techContainer.innerHTML = '';
            project.technologies.forEach(tech => {
                const tag = document.createElement('span');
                tag.className = 'bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full';
                tag.textContent = tech;
                techContainer.appendChild(tag);
            });
            
            // Clear previous features
            const featuresContainer = document.getElementById('modalFeatures');
            featuresContainer.innerHTML = '';
            project.features.forEach(feature => {
                const li = document.createElement('li');
                li.textContent = feature;
                featuresContainer.appendChild(li);
            });
            
            // Show modal
            projectModal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        }
        
        // Close modal
        closeModal.addEventListener('click', () => {
            projectModal.classList.add('hidden');
            document.body.style.overflow = 'auto';
        });
        
        // Close modal when clicking outside
        projectModal.addEventListener('click', (e) => {
            if (e.target === projectModal) {
                projectModal.classList.add('hidden');
                document.body.style.overflow = 'auto';
            }
        });
        
        // Add click event to project items and view buttons
        document.querySelectorAll('.project-item, .view-project-btn').forEach((item) => {
            item.addEventListener('click', (e) => {
                // Prevent double triggering when clicking the button inside the project item
                if (e.target.classList.contains('view-project-btn')) {
                    e.stopPropagation();
                }
                const projectIndex = item.closest('.project-item').getAttribute('data-project-index');
                openProjectModal(projectIndex);
            });
        });
    