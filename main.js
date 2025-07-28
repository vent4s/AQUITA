// Global state
let currentCategory = '';
let megaAccordionStates = Array(13).fill(false);
let allCategoriesExpanded = false;

// All categories and subcategories data
const categoriesData = {
    'Comida y Víveres': ['Supermercados', 'Panaderías', 'Abastos bodegas', 'Licorerias'],
    'Comida Rápida': ['Hamburguesas', 'Pizzas', 'Comida a Domicilio'],
    'Restaurantes': ['Gourmet', 'Familiares', 'China y otras partes del mundo'],
    'Autos': ['Repuestos', 'Accesorios', 'Talleres', 'Venta de Aceites', 'Grúas / fletes / camiones'],
    'Motopartes': ['Repuestos Moto', 'Accesorios Moto', 'Talleres Moto'],
    'Servicios': ['Fibra / internet', 'Refrigeración', 'Remodelación', 'Cámaras de seguridad'],
    'Medicina': ['Clínicas', 'Hospitales - CDI', 'Ambulancias', 'Farmacias'],
    'Hospedaje': ['Hoteles', 'Posadas', 'Alquileres'],
    'Empresas': ['Mayoristas', 'Distribuidoras', 'Almacenes'],
    'Deliveris': ['Empresas Delivery', 'Sin empresas'],
    'Streamer': ['Tik tokers', 'IPTV', 'Deportes las gemelas'],
    'Eventos': ['ENVIVOS'],
    'Vestir': ['Ropa', 'Calzado', 'Mixto']
};

// Icons for categories
const categoryIcons = {
    'Comida y Víveres': 'fas fa-shopping-cart',
    'Comida Rápida': 'fas fa-hamburger',
    'Restaurantes': 'fas fa-utensils',
    'Autos': 'fas fa-car',
    'Motopartes': 'fas fa-motorcycle',
    'Servicios': 'fas fa-cogs',
    'Medicina': 'fas fa-medkit',
    'Hospedaje': 'fas fa-bed',
    'Empresas': 'fas fa-building',
    'Deliveris': 'fas fa-truck',
    'Streamer': 'fas fa-video',
    'Eventos': 'fas fa-calendar-alt',
    'Vestir': 'fas fa-tshirt'
};

// Random images for demonstration
const randomImages = [
    'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/2983099/pexels-photo-2983099.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=400'
];

// URLs predefinidas para streaming (solo editables desde código)
const streamingUrls = {
    iptv: 'https://www.youtube.com/embed/jfKfPfyJRdk', // Cambia esta URL por la que desees
    deportes: 'https://www.youtube.com/embed/jfKfPfyJRdk', // Cambia esta URL por la que desees
    envivos: 'https://kick.com/samulx' // Cambia esta URL por la que desees
};

// Sample business data for demonstration
const sampleBusinesses = [
    { name: 'Negocio Ejemplo 1', description: 'Descripción del primer negocio de ejemplo con servicios de calidad.' },
    { name: 'Empresa Demo 2', description: 'Segunda empresa de demostración con excelente atención al cliente.' },
    { name: 'Servicio Local 3', description: 'Tercer servicio local con amplia experiencia en el sector.' },
    { name: 'Comercio Regional 4', description: 'Cuarto comercio regional con precios competitivos y calidad.' },
    { name: 'Tienda Principal 5', description: 'Quinta tienda principal con variedad y excelente ubicación.' },
    { name: 'Centro Comercial 6', description: 'Sexto centro comercial con múltiples opciones y facilidades.' },
    { name: 'cashea prueba 1', description: 'Plataforma digital de pagos y servicios financieros modernos.', specialIcon: 'cashea', website: 'https://www.cashea.app/' },
    { name: 'Negocio Familiar 8', description: 'Octavo negocio familiar con tradición y confianza de años.' }
];

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    setupSearch();
    generateSlidingBanner();
    generateTopCarousel();
    generateCarouselCards();
    showHome();
}

function generateTopCarousel() {
    const topCarouselTrack = document.getElementById('topCarouselTrack');
    
    // Create multiple sets of cards for continuous scrolling
    for (let set = 0; set < 3; set++) {
        // Create 8 cards per set
        for (let i = 0; i < 8; i++) {
            const business = sampleBusinesses[i % sampleBusinesses.length];
            const randomCategory = Object.keys(categoriesData)[Math.floor(Math.random() * Object.keys(categoriesData).length)];
            const randomSubcategory = categoriesData[randomCategory][Math.floor(Math.random() * categoriesData[randomCategory].length)];
            const randomImage = randomImages[Math.floor(Math.random() * randomImages.length)];
            
            const card = document.createElement('div');
            card.className = 'carousel-card';
            
            card.innerHTML = `
                <div class="category-tag">${randomCategory}</div>
                <div class="carousel-card-image" style="background-image: url('${randomImage}')"></div>
                <div class="carousel-card-content">
                    <h3>${business.name}</h3>
                    <p>${business.description}</p>
                </div>
            `;
            
            card.onclick = () => showCategory(randomSubcategory);
            
            topCarouselTrack.appendChild(card);
        }
    }
}

function toggleMegaAccordion(index) {
    const megaAccordionItems = document.querySelectorAll('.mega-accordion-item');
    const targetItem = megaAccordionItems[index];
    
    // Close all other accordions
    megaAccordionItems.forEach((item, i) => {
        if (i !== index) {
            item.classList.remove('active');
            megaAccordionStates[i] = false;
        }
    });
    
    // Toggle the clicked accordion
    megaAccordionStates[index] = !megaAccordionStates[index];
    
    if (megaAccordionStates[index]) {
        targetItem.classList.add('active');
    } else {
        targetItem.classList.remove('active');
    }
}

function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
}

function performSearch() {
    const searchTerm = document.getElementById('searchInput').value.trim();
    
    if (searchTerm === '') {
        alert('Por favor ingresa un término de búsqueda');
        return;
    }
    
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    
    // Show search results page
    document.getElementById('searchResults').classList.add('active');
    
    // Update search title
    document.getElementById('searchTitle').textContent = `Resultados para: "${searchTerm}"`;
    
    // Generate search results
    generateSearchResults(searchTerm);
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function generateSearchResults(searchTerm) {
    const searchCardsGrid = document.getElementById('searchCardsGrid');
    searchCardsGrid.innerHTML = '';
    
    // Generate 4-6 random results
    const numberOfResults = Math.floor(Math.random() * 3) + 4;
    
    for (let i = 0; i < numberOfResults; i++) {
        const business = {
            name: `${searchTerm} - Resultado ${i + 1}`,
            description: `Negocio relacionado con "${searchTerm}" con excelente servicio y calidad.`
        };
        const randomImage = randomImages[Math.floor(Math.random() * randomImages.length)];
        
        const card = createBusinessCard(business, randomImage, i);
        searchCardsGrid.appendChild(card);
    }
    
    // Observe cards for animation
    setTimeout(() => {
        const cards = searchCardsGrid.querySelectorAll('.business-card');
        cards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(card);
        });
    }, 100);
}

function generateSlidingBanner() {
    const bannerContent = document.getElementById('bannerContent');
    const allSubcategories = [];
    
    // Collect all subcategories with their parent categories
    Object.keys(categoriesData).forEach(category => {
        categoriesData[category].forEach(subcategory => {
            allSubcategories.push({
                category: category,
                subcategory: subcategory,
                icon: categoryIcons[category]
            });
        });
    });
    
    // Shuffle and create banner items
    const shuffled = allSubcategories.sort(() => 0.5 - Math.random());
    
    // Create multiple sets for continuous scrolling
    for (let set = 0; set < 3; set++) {
        shuffled.forEach(item => {
            const bannerItem = document.createElement('div');
            bannerItem.className = 'banner-item';
            bannerItem.innerHTML = `
                <i class="${item.icon}"></i>
                ${item.category} - ${item.subcategory}
            `;
            bannerItem.onclick = () => showCategory(item.subcategory);
            bannerContent.appendChild(bannerItem);
        });
    }
}

function generateCarouselCards() {
    const carouselTrack = document.getElementById('carouselTrack');
    
    // Create multiple sets of cards for continuous scrolling
    for (let set = 0; set < 3; set++) {
        // Create 8 cards per set
        for (let i = 0; i < 8; i++) {
            const business = sampleBusinesses[i % sampleBusinesses.length];
            const randomCategory = Object.keys(categoriesData)[Math.floor(Math.random() * Object.keys(categoriesData).length)];
            const randomSubcategory = categoriesData[randomCategory][Math.floor(Math.random() * categoriesData[randomCategory].length)];
            const randomImage = randomImages[Math.floor(Math.random() * randomImages.length)];
            
            const card = document.createElement('div');
            card.className = 'carousel-card';
            
            card.innerHTML = `
                <div class="category-tag">${randomCategory}</div>
                <div class="carousel-card-image" style="background-image: url('${randomImage}')"></div>
                <div class="carousel-card-content">
                    <h3>${business.name}</h3>
                    <p>${business.description}</p>
                </div>
            `;
            
            card.onclick = () => showCategory(randomSubcategory);
            
            carouselTrack.appendChild(card);
        }
    }
}

function repositionFloatingCards() {
    // This function is no longer needed but kept for compatibility
}

// Remove the old floating cards function
function generateFloatingCards() {
    // Replaced by generateCarouselCards
}

function generateFloatingCards() {
    const floatingCardsContainer = document.getElementById('floatingCards');
    
    // Create 6 floating cards with random businesses
    for (let i = 0; i < 6; i++) {
        const business = sampleBusinesses[i % sampleBusinesses.length];
        const randomCategory = Object.keys(categoriesData)[Math.floor(Math.random() * Object.keys(categoriesData).length)];
        const randomSubcategory = categoriesData[randomCategory][Math.floor(Math.random() * categoriesData[randomCategory].length)];
        
        const card = document.createElement('div');
        card.className = 'floating-card';
        
        // Random positioning
        const randomTop = Math.random() * 300;
        const randomLeft = Math.random() * (window.innerWidth - 300);
        
        card.style.top = randomTop + 'px';
        card.style.left = randomLeft + 'px';
        
        card.innerHTML = `
            <div class="category-tag">${randomCategory}</div>
            <h3>${business.name}</h3>
            <p>${business.description}</p>
        `;
        
        card.onclick = () => showCategory(randomSubcategory);
        
        floatingCardsContainer.appendChild(card);
    }
    
    // Reposition cards on window resize
    window.addEventListener('resize', repositionFloatingCards);
}

function toggleAllCategories() {
    const megaAccordionItems = document.querySelectorAll('.mega-accordion-item');
    
    // Toggle all accordions
    allCategoriesExpanded = !allCategoriesExpanded;
    
    megaAccordionItems.forEach((item, index) => {
        if (allCategoriesExpanded) {
            item.classList.add('active');
            megaAccordionStates[index] = true;
        } else {
            item.classList.remove('active');
            megaAccordionStates[index] = false;
        }
    });
}

function showHome() {
    currentCategory = '';
    allCategoriesExpanded = false;
    
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    
    // Show home page
    document.getElementById('home').classList.add('active');
    
    // Close all mega accordions
    const megaAccordionItems = document.querySelectorAll('.mega-accordion-item');
    megaAccordionItems.forEach((item, index) => {
        item.classList.remove('active');
        megaAccordionStates[index] = false;
    });
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showCategory(categoryName) {
    currentCategory = categoryName;
    
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    
    // Check if it's a streaming category
    if (categoryName === 'IPTV') {
        document.getElementById('iptvPage').classList.add('active');
        setupIPTVPage();
    } else if (categoryName === 'Deportes las gemelas') {
        document.getElementById('deportesPage').classList.add('active');
        setupDeportesPage();
    } else if (categoryName === 'ENVIVOS') {
        document.getElementById('envivosPage').classList.add('active');
        setupEnvivosPage();
    } else {
        // Show regular category page
        document.getElementById('category').classList.add('active');
        // Update category title
        document.getElementById('categoryTitle').textContent = categoryName;
        // Generate business cards
        generateBusinessCards();
    }
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function generateBusinessCards() {
    const cardsGrid = document.getElementById('cardsGrid');
    cardsGrid.innerHTML = '';
    
    // Generate 6-8 random cards for each category
    const numberOfCards = Math.floor(Math.random() * 3) + 6; // 6 to 8 cards
    
    for (let i = 0; i < numberOfCards; i++) {
        const business = sampleBusinesses[i % sampleBusinesses.length];
        const randomImage = randomImages[Math.floor(Math.random() * randomImages.length)];
        
        const card = createBusinessCard(business, randomImage, i);
        cardsGrid.appendChild(card);
    }
}

function createBusinessCard(business, imageUrl, index) {
    const card = document.createElement('div');
    card.className = 'business-card';
    
    // Determinar si es cashea para usar icono especial
    const socialIcons = business.specialIcon === 'cashea' ? `
        <a href="https://facebook.com" target="_blank" class="social-icon facebook" title="Facebook">
            <i class="fab fa-facebook-f"></i>
        </a>
        <a href="https://instagram.com" target="_blank" class="social-icon instagram" title="Instagram">
            <i class="fab fa-instagram"></i>
        </a>
        <a href="https://tiktok.com" target="_blank" class="social-icon tiktok" title="TikTok">
            <i class="fab fa-tiktok"></i>
        </a>
        <a href="${business.website}" target="_blank" class="social-icon cashea" title="Cashea">
            <i class="fas fa-credit-card"></i>
        </a>
    ` : `
        <a href="https://facebook.com" target="_blank" class="social-icon facebook" title="Facebook">
            <i class="fab fa-facebook-f"></i>
        </a>
        <a href="https://instagram.com" target="_blank" class="social-icon instagram" title="Instagram">
            <i class="fab fa-instagram"></i>
        </a>
        <a href="https://tiktok.com" target="_blank" class="social-icon tiktok" title="TikTok">
            <i class="fab fa-tiktok"></i>
        </a>
    `;
    
    const websiteUrl = business.website || `https://ejemplo.com/negocio-${index + 1}`;
    
    card.innerHTML = `
        <div class="card-image" style="background-image: url('${imageUrl}')">
            <div class="social-icons">
                ${socialIcons}
            </div>
        </div>
        <div class="card-content">
            <h3 class="card-title">${business.name}</h3>
            <p class="card-description">${business.description}</p>
            <div class="card-buttons">
                <a href="${websiteUrl}" target="_blank" class="card-button website-btn">
                    <i class="fas fa-globe"></i> Website
                </a>
                <a href="https://maps.google.com/?q=empresa+${encodeURIComponent(business.name)}" target="_blank" class="card-button location-btn">
                    <i class="fas fa-map-marker-alt"></i> Ubicación
                </a>
            </div>
        </div>
    `;
    
    return card;
}

// Utility function to get random image
function getRandomImage() {
    return randomImages[Math.floor(Math.random() * randomImages.length)];
}

// Handle window resize
window.addEventListener('resize', function() {
    // Window resize handling is simplified since sidebar is always visible
});

// Smooth scrolling for internal links
document.addEventListener('click', function(e) {
    if (e.target.matches('a[href^="#"]')) {
        e.preventDefault();
        const target = document.querySelector(e.target.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
});

// Add loading animation for images
document.addEventListener('DOMContentLoaded', function() {
    // Deshabilitar menú contextual en las transmisiones
    document.addEventListener('contextmenu', function(e) {
        const streamingContainers = [
            'iptvPlayer', 'deportesPlayer', 'envivosPlayer',
            'iptv-player-container', 'deportes-player-container', 'envivos-player-container',
            'iframe-overlay'
        ];
        
        if (streamingContainers.some(id => 
            e.target.id === id || 
            e.target.closest(`#${id}`) || 
            e.target.closest(`.${id}`) ||
            e.target.classList.contains('iframe-overlay')
        )) {
            e.preventDefault();
            return false;
        }
    });
    
    // Deshabilitar teclas de desarrollador solo en páginas de transmisión
    document.addEventListener('keydown', function(e) {
        const streamingPages = ['iptvPage', 'deportesPage', 'envivosPage'];
        const currentPage = document.querySelector('.page.active');
        
        if (currentPage && streamingPages.includes(currentPage.id)) {
            // Solo bloquear teclas de desarrollador, no navegación
            if (e.key === 'F12' || 
                (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'C' || e.key === 'J')) ||
                (e.ctrlKey && (e.key === 'u' || e.key === 'U'))) {
                e.preventDefault();
                e.stopPropagation();
                return false;
            }
        }
    });
    
    // Protección adicional en pantalla completa
    document.addEventListener('fullscreenchange', function() {
        if (document.fullscreenElement) {
            // Solo bloquear en elementos de transmisión
            const streamingElements = document.querySelectorAll('.iptv-player, .deportes-player, .envivos-player');
            streamingElements.forEach(el => {
                el.style.userSelect = 'none';
                el.style.webkitUserSelect = 'none';
                el.style.mozUserSelect = 'none';
                el.style.msUserSelect = 'none';
            });
        } else {
            // Restaurar cuando sale de pantalla completa
            const streamingElements = document.querySelectorAll('.iptv-player, .deportes-player, .envivos-player');
            streamingElements.forEach(el => {
                el.style.userSelect = '';
                el.style.webkitUserSelect = '';
                el.style.mozUserSelect = '';
                el.style.msUserSelect = '';
            });
        }
    });
    
    const images = document.querySelectorAll('.card-image');
    
    images.forEach(img => {
        const imageUrl = img.style.backgroundImage.slice(5, -2);
        const tempImg = new Image();
        
        tempImg.onload = function() {
            img.classList.add('loaded');
        };
        
        tempImg.src = imageUrl;
    });
});

// Add intersection observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe cards for animation
function observeCards() {
    const cards = document.querySelectorAll('.business-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

// Call observe cards when generating business cards
const originalGenerateBusinessCards = generateBusinessCards;
generateBusinessCards = function() {
    originalGenerateBusinessCards();
    setTimeout(observeCards, 100);
};

// IPTV Page Setup
function setupIPTVPage() {
    const iptvPlayer = document.getElementById('iptvPlayer');
    iptvPlayer.innerHTML = `
        <iframe 
            src="${streamingUrls.iptv}" 
            width="100%" 
            height="100%" 
            frameborder="0" 
            allowfullscreen
            allow="autoplay; encrypted-media">
        </iframe>
    `;
    
    // Add chat container after the player container
    const iptvContainer = document.querySelector('.iptv-container');
    const existingChat = iptvContainer.querySelector('.chat-container');
    if (existingChat) {
        existingChat.remove();
    }
    
    const chatContainer = document.createElement('div');
    chatContainer.className = 'chat-container';
    chatContainer.innerHTML = `
        <div class="chat-header">
            <i class="fas fa-comments"></i>
            <span>Chat en Vivo</span>
        </div>
        <div class="chat-messages" id="iptvChatMessages">
            <div class="chat-message">
                <span class="chat-user">Usuario1:</span>
                <span class="chat-text">¡Excelente transmisión!</span>
            </div>
            <div class="chat-message">
                <span class="chat-user">Usuario2:</span>
                <span class="chat-text">Muy buena calidad</span>
            </div>
            <div class="chat-message">
                <span class="chat-user">StreamFan:</span>
                <span class="chat-text">Me encanta este canal</span>
            </div>
        </div>
        <div class="chat-input-container">
            <input type="text" class="chat-input" id="iptvChatInput" placeholder="Escribe tu mensaje..." onkeypress="handleChatKeyPress(event, 'iptv')">
            <div class="chat-icons">
                <i class="fas fa-smile" title="😊" onclick="addEmoji('😊', 'iptv')"></i>
                <i class="fas fa-heart" title="❤️" onclick="addEmoji('❤️', 'iptv')"></i>
                <i class="fas fa-thumbs-up" title="👍" onclick="addEmoji('👍', 'iptv')"></i>
                <i class="fas fa-fire" title="🔥" onclick="addEmoji('🔥', 'iptv')"></i>
            </div>
            <button class="chat-send-btn" onclick="sendChatMessage('iptv')">
                <i class="fas fa-paper-plane"></i>
            </button>
        </div>
    `;
    
    iptvContainer.appendChild(chatContainer);
}

// Deportes Page Setup
function setupDeportesPage() {
    const deportesPlayer = document.getElementById('deportesPlayer');
    deportesPlayer.innerHTML = `
        <iframe 
            src="${streamingUrls.deportes}" 
            width="100%" 
            height="100%" 
            frameborder="0" 
            allowfullscreen
            allow="autoplay; encrypted-media">
        </iframe>
    `;
    
    // Add chat container after the player container
    const deportesContainer = document.querySelector('.deportes-container');
    const existingChat = deportesContainer.querySelector('.chat-container');
    if (existingChat) {
        existingChat.remove();
    }
    
    const chatContainer = document.createElement('div');
    chatContainer.className = 'chat-container';
    chatContainer.innerHTML = `
        <div class="chat-header">
            <i class="fas fa-comments"></i>
            <span>Chat Deportivo</span>
        </div>
        <div class="chat-messages" id="deportesChatMessages">
            <div class="chat-message">
                <span class="chat-user">Fanático1:</span>
                <span class="chat-text">¡Qué golazo!</span>
            </div>
            <div class="chat-message">
                <span class="chat-user">Deportista:</span>
                <span class="chat-text">Excelente jugada</span>
            </div>
            <div class="chat-message">
                <span class="chat-user">FutbolLover:</span>
                <span class="chat-text">¡Vamos equipo!</span>
            </div>
        </div>
        <div class="chat-input-container">
            <input type="text" class="chat-input" id="deportesChatInput" placeholder="Comenta sobre el juego..." onkeypress="handleChatKeyPress(event, 'deportes')">
            <div class="chat-icons">
                <i class="fas fa-futbol" title="⚽" onclick="addEmoji('⚽', 'deportes')"></i>
                <i class="fas fa-trophy" title="🏆" onclick="addEmoji('🏆', 'deportes')"></i>
                <i class="fas fa-fire" title="🔥" onclick="addEmoji('🔥', 'deportes')"></i>
                <i class="fas fa-heart" title="❤️" onclick="addEmoji('❤️', 'deportes')"></i>
            </div>
            <button class="chat-send-btn" onclick="sendChatMessage('deportes')">
                <i class="fas fa-paper-plane"></i>
            </button>
        </div>
    `;
    
    deportesContainer.appendChild(chatContainer);
}

// Fullscreen functions
function toggleFullscreen(elementId) {
    const element = document.getElementById(elementId);
    if (!document.fullscreenElement) {
        element.requestFullscreen().catch(err => {
            console.log('Error al entrar en pantalla completa:', err);
        });
    } else {
        document.exitFullscreen().catch(err => {
            console.log('Error al salir de pantalla completa:', err);
        });
    }
}

// Envivos Page Setup
function setupEnvivosPage() {
    const envivosPlayer = document.getElementById('envivosPlayer');
    envivosPlayer.innerHTML = `
        <iframe 
            src="${streamingUrls.envivos}" 
            width="100%" 
            height="100%" 
            frameborder="0" 
            allowfullscreen
            allow="autoplay; encrypted-media">
        </iframe>
    `;
    
    // Add chat container after the player container
    const envivosContainer = document.querySelector('.envivos-container');
    const existingChat = envivosContainer.querySelector('.chat-container');
    if (existingChat) {
        existingChat.remove();
    }
    
    const chatContainer = document.createElement('div');
    chatContainer.className = 'chat-container';
    chatContainer.innerHTML = `
        <div class="chat-header">
            <i class="fas fa-broadcast-tower"></i>
            <span>Chat en Vivo</span>
        </div>
        <div class="chat-messages" id="envivosChatMessages">
            <div class="chat-message">
                <span class="chat-user">Espectador1:</span>
                <span class="chat-text">¡Evento increíble!</span>
            </div>
            <div class="chat-message">
                <span class="chat-user">Fan:</span>
                <span class="chat-text">Muy buena transmisión</span>
            </div>
            <div class="chat-message">
                <span class="chat-user">LiveViewer:</span>
                <span class="chat-text">Saludos a todos!</span>
            </div>
        </div>
        <div class="chat-input-container">
            <input type="text" class="chat-input" id="envivosChatInput" placeholder="Únete a la conversación..." onkeypress="handleChatKeyPress(event, 'envivos')">
            <div class="chat-icons">
                <i class="fas fa-star" title="⭐" onclick="addEmoji('⭐', 'envivos')"></i>
                <i class="fas fa-clap" title="👏" onclick="addEmoji('👏', 'envivos')"></i>
                <i class="fas fa-heart" title="❤️" onclick="addEmoji('❤️', 'envivos')"></i>
                <i class="fas fa-laugh" title="😂" onclick="addEmoji('😂', 'envivos')"></i>
            </div>
            <button class="chat-send-btn" onclick="sendChatMessage('envivos')">
                <i class="fas fa-paper-plane"></i>
            </button>
        </div>
    `;
    
    envivosContainer.appendChild(chatContainer);
}



// Chat functionality
function sendChatMessage(chatType) {
    const inputId = `${chatType}ChatInput`;
    const messagesId = `${chatType}ChatMessages`;
    const input = document.getElementById(inputId);
    const messages = document.getElementById(messagesId);
    const messageText = input.value.trim();
    
    if (messageText === '') return;
    
    // Create new message
    const messageDiv = document.createElement('div');
    messageDiv.className = 'chat-message';
    messageDiv.innerHTML = `
        <span class="chat-user">Tú:</span>
        <span class="chat-text">${messageText}</span>
    `;
    
    // Add message to chat
    messages.appendChild(messageDiv);
    
    // Scroll to bottom
    messages.scrollTop = messages.scrollHeight;
    
    // Clear input
    input.value = '';
    
    
}

function addEmoji(emoji, chatType) {
    const inputId = `${chatType}ChatInput`;
    const input = document.getElementById(inputId);
    input.value += emoji;
    input.focus();
}

function handleChatKeyPress(event, chatType) {
    if (event.key === 'Enter') {
        sendChatMessage(chatType);
    }
}
