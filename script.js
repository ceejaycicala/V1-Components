// header
class THeader extends HTMLElement {
    connectedCallback() {
        const selected = this.getAttribute("selected") || "";

        this.innerHTML = `
        <header>
            <div class="nav-container">
                <nav class="navbar">
                    <div class="logo-links">
                        <div class="nav-logo-wrapper">
                            <a href="index.html" class="nav-logo-link">
                                <img src="img/icon1.png" alt="Logo" class="nav-logo" />
                            </a>
                        </div>
                        <a href="index.html" class="nav-logo-link">
                            <p class="page-name"> </p>
                        </a>
                    </div>

                    <div class="nav-links">
                        <a href="index.html" class="${selected === "home" ? "selectedPage" : ""}">Home</a>
                        <a href="contact.html" class="${selected === "contact" ? "selectedPage" : ""}">Contact</a>
                        <a href="projects.html" class="${selected === "projects" ? "selectedPage" : ""}">Projects</a>
                    </div>

                    <!-- Github -->
                    <div class="nav-actions">
                        <a href="https://github.com/ceejaycicala" target="_blank" rel="noopener noreferrer" class="nav-social" aria-label="GitHub">
                            <svg class="topIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="24" height="24">
                                <path fill="currentColor" d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"/>
                            </svg>
                            <span class="tooltip">Github</span>
                        </a>
                        
                        <!-- LinkedIn -->
                        <a href="https://www.linkedin.com/in/ceejaycicala" target="_blank" rel="noopener noreferrer" class="nav-social" aria-label="LinkedIn">
                            <svg class="topIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="24" height="24">
                                <path fill="currentColor" d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"/>
                            </svg>
                            <span class="tooltip">LinkedIn</span>
                        </a>
                        
                        <!-- Light/Dark Theme -->
                        <div class="mode-toggle-wrapper" style="position: relative;">
                            <button onclick="toggle()" id="mode-toggle" aria-label="Toggle light/dark mode">
                                <span class="icon-dark">
                                    <!-- Moon (dark mode active icon) -->
                                    <svg class="topIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
                                        <path xmlns="http://www.w3.org/2000/svg" d="M524.8 938.666667h-4.266667a439.893333 439.893333 0 0 1-313.173333-134.4 446.293333 446.293333 0 0 1-11.093333-597.333334 432.213333 432.213333 0 0 1 170.666666-116.906666 42.666667 42.666667 0 0 1 45.226667 9.386666 42.666667 42.666667 0 0 1 10.24 42.666667 358.4 358.4 0 0 0 82.773333 375.893333 361.386667 361.386667 0 0 0 376.746667 82.773334 42.666667 42.666667 0 0 1 54.186667 55.04A433.493333 433.493333 0 0 1 836.266667 810.666667a438.613333 438.613333 0 0 1-311.466667 128z"/>
                                    </svg>
                                </span>    
                                <span class="icon-light">
                                    <svg class="topIcon">
                                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                        <g id="SVGRepo_iconCarrier"> 
                                        <rect width="24" height="24" fill="none"></rect> 
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12Z" fill="currentColor"></path>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C12.5523 2 13 2.44772 13 3V5C13 5.55228 12.5523 6 12 6C11.4477 6 11 5.55228 11 5V3C11 2.44772 11.4477 2 12 2Z" fill="currentColor"></path>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M19.7071 4.29289C20.0976 4.68342 20.0976 5.31658 19.7071 5.70711L17.7071 7.70711C17.3166 8.09763 16.6834 8.09763 16.2929 7.70711C15.9024 7.31658 15.9024 6.68342 16.2929 6.29289L18.2929 4.29289C18.6834 3.90237 19.3166 3.90237 19.7071 4.29289Z" fill="currentColor"></path>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M18 12C18 11.4477 18.4477 11 19 11H21C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13H19C18.4477 13 18 12.5523 18 12Z" fill="currentColor"></path>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M16.2929 16.2929C16.6834 15.9024 17.3166 15.9024 17.7071 16.2929L19.7071 18.2929C20.0976 18.6834 20.0976 19.3166 19.7071 19.7071C19.3166 20.0976 18.6834 20.0976 18.2929 19.7071L16.2929 17.7071C15.9024 17.3166 15.9024 16.6834 16.2929 16.2929Z" fill="currentColor"></path>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 18C12.5523 18 13 18.4477 13 19V21C13 21.5523 12.5523 22 12 22C11.4477 22 11 21.5523 11 21V19C11 18.4477 11.4477 18 12 18Z" fill="currentColor"></path>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.70711 16.2929C8.09763 16.6834 8.09763 17.3166 7.70711 17.7071L5.70711 19.7071C5.31658 20.0976 4.68342 20.0976 4.29289 19.7071C3.90237 19.3166 3.90237 18.6834 4.29289 18.2929L6.29289 16.2929C6.68342 15.9024 7.31658 15.9024 7.70711 16.2929Z" fill="currentColor"></path>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 11.4477 2.44772 11 3 11H5C5.55228 11 6 11.4477 6 12C6 12.5523 5.55228 13 5 13H3C2.44772 13 2 12.5523 2 12Z" fill="currentColor"></path>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.29289 4.29289C4.68342 3.90237 5.31658 3.90237 5.70711 4.29289L7.70711 6.29289C8.09763 6.68342 8.09763 7.31658 7.70711 7.70711C7.31658 8.09763 6.68342 8.09763 6.29289 7.70711L4.29289 5.70711C3.90237 5.31658 3.90237 4.68342 4.29289 4.29289Z" fill="currentColor"></path>
                                        </g>
                                    </svg>
                                </span>
                            </button>
                            <span class="tooltip">Appearance</span>
                        </div>
                    </div> 
                </nav>
            </div>
        </header>
        `;
    }
}
customElements.define("t-header", THeader);

// navbar scroll effect
function updateNavScroll() {
    const nav = document.querySelector(".nav-container");
    if (!nav) return;

    if (window.scrollY > 50) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
}

window.addEventListener("load", updateNavScroll);
window.addEventListener("scroll", updateNavScroll);


// footer
function getOrdinal(day) {
    if (day > 3 && day < 21) return 'th'; // 4–20 is always "th"
    switch (day % 10) {
        case 1: return 'st';
        case 2: return 'nd';
        case 3: return 'rd';
        default: return 'th';
    }
}

class TFooter extends HTMLElement {
    connectedCallback() {
        const currentYear = new Date().getFullYear();

        fetch('last_modified.txt')
            .then(res => res.text())
            .then(date => {
                const d = new Date(date);

                // Manual formatting to match "12 November 2025, at 04:21 PM"
                const day = d.getDate();
                const ordinal = getOrdinal(day);
                const month = d.toLocaleString("en-AU", { month: "long" });
                const year = d.getFullYear();
                let hours = d.getHours();
                const minutes = String(d.getMinutes()).padStart(2, "0");

                const formattedDate = `${day}${ordinal} of ${month} ${year}</span>, at <span class="text-code">${String(hours).padStart(2, '0')}:${minutes}`;


                this.innerHTML = `
                    <footer class="footer">
                        <div class="footer-top">
                            <div class="footer-logo">Ceejay Cicala</div>
                            <div class="footer-links-wrapper">
                                <div class="footer-column">
                                    <div class="footer-title">MAIN</div>
                                    <a href="#">Home</a>
                                    <a href="#">Projects</a>
                                </div>
                                <div class="footer-column">
                                    <div class="footer-title">CONTACT</div>
                                    <a href="mailto:ceejay.cicala@proton.me">Email</a>
                                    <a href="contact.html">The Rest</a>
                                </div>
                            </div>
                        </div>
                        <div class="footer-bottom">
                            <div class="footer-bottom-left">
                                <span class="copyright-text">
                                    &copy; ${currentYear} Ceejay Cicala. • 
                                    <span>
                                        <a class="footer-out-link" href="license.txt">license.txt</a> • 
                                        <a class="footer-out-link" href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA 4.0</a>
                                    </span>
                                </span>
                                <span><a href="#" class="back-to-top-text">↑ Back to top</a></span>
                            </div>
                            <div class="footer-bottom-right">
                                <span>Last Updated on: <span class="text-code">${formattedDate}</span>  AEST</span>
                                <span class="cursive"> Such is Life</span>
                            </div>
                        </div>
                    </footer>
                `;
            }
        );
    }
}

customElements.define("t-footer", TFooter);



// ~~~ Check for light mode ~~~
let defaultMode = "dark"; 
const body = document.body;
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
const prefersLight = window.matchMedia("(prefers-color-scheme: light)");

function applyTheme(mode) {
    body.classList.toggle("light", mode === "light");
}

function toggle() {
    document.body.classList.toggle("light");
}
window.toggle = toggle;

// Apply default
if (defaultMode === "light") {
    applyTheme("light");
} else {
    applyTheme(prefersDark.matches ? "dark" : "light");
}


// Listen for system changes
prefersLight.addEventListener("change", e => {
    if (e.matches) applyTheme("light");
});
prefersDark.addEventListener("change", e => {
    if (e.matches) applyTheme("dark");
});


// ~~~ Scroll Down From Hero ~~~
const scrollBtn = document.querySelector('.scroll-down-icon-wrapper');
scrollBtn.addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({
        top: 300,
        left: 0,
        behavior: 'smooth'
    });
});