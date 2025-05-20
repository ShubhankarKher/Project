// DOM Elements
const weatherOptions = document.querySelectorAll('.weather-option');
const resultsSection = document.getElementById('resultsSection');

// Weather-based outfit recommendations data
const outfitRecommendations = {
    hot: {
        title: "Hot Weather Outfit Recommendations",
        description: "When the temperature soars, staying cool and comfortable is key. Light, breathable fabrics in loose cuts will help you beat the heat while still looking stylish.",
        outfits: [
            {
                name: "Everyday Casual",
                items: [
                    "Lightweight cotton t-shirt",
                    "Linen shorts or lightweight cotton shorts",
                    "Sandals or breathable sneakers",
                    "Wide-brimmed hat"
                ]
            },
            {
                name: "Outdoor Activities",
                items: [
                    "Moisture-wicking shirt",
                    "Quick-dry shorts",
                    "Sports sandals or breathable sneakers",
                    "Sunglasses",
                    "Cap or hat with UV protection"
                ]
            }
        ],
        accessories: [
            {
                name: "Essential Accessories",
                items: [
                    "Sunglasses with UV protection",
                    "Wide-brimmed sun hat",
                    "Lightweight scarf (for sun protection)",
                    "Canvas or straw tote bag",
                    "Minimal jewelry (to avoid heat trapping)"
                ]
            }
        ],
        fragrances: [
            {
                name: "Recommended Fragrances",
                items: [
                    "Citrus-based colognes (lemon, lime, grapefruit)",
                    "Light floral scents",
                    "Aquatic or marine notes",
                    "Green tea-based fragrances",
                    "Mint or cucumber notes"
                ]
            }
        ],
        colors: [
            { name: "Light Blue", hex: "#a3c6d8" },
            { name: "White", hex: "#ffffff" },
            { name: "Light Yellow", hex: "#f8eeb4" },
            { name: "Sage Green", hex: "#8ba888" },
            { name: "Light Gray", hex: "#d1d1d1" }
        ],
        tips: [
            "Opt for loose-fitting clothes to allow air circulation",
            "Choose light colors that reflect sunlight rather than absorb it",
            "Natural fabrics like cotton and linen are best for hot weather",
            "Avoid synthetic fabrics like polyester which trap heat",
            "Apply sunscreen regularly even if you're wearing a hat"
        ]
    },
    warm: {
        title: "Warm Weather Outfit Recommendations",
        description: "Warm weather offers versatility in styling while maintaining comfort. It's perfect for layering lighter pieces that can be adjusted as the temperature changes throughout the day.",
        outfits: [
            {
                name: "Casual Daytime",
                items: [
                    "T-shirt or short-sleeve button-up",
                    "Chinos or lightweight jeans",
                    "Loafers or canvas sneakers"
                ]
            },
            {
                name: "Office Appropriate",
                items: [
                    "Light cotton button-up shirt",
                    "Khakis or light wool trousers",
                    "Loafers or leather shoes"
                ]
            }
        ],
        accessories: [
            {
                name: "Stylish Additions",
                items: [
                    "Canvas belt",
                    "Lightweight watch",
                    "Casual bracelet",
                    "Sunglasses",
                    "Baseball cap or panama hat"
                ]
            }
        ],
        fragrances: [
            {
                name: "Recommended Fragrances",
                items: [
                    "Aromatic fragrances with herbs",
                    "Woody-citrus combinations",
                    "Light spicy notes",
                    "Green and fresh scents",
                    "Mild floral blends"
                ]
            }
        ],
        colors: [
            { name: "Light Blue", hex: "#a3c6d8" },
            { name: "Terracotta", hex: "#c87c5b" },
            { name: "Beige", hex: "#f5f5dc" },
            { name: "Sage Green", hex: "#8ba888" },
            { name: "Light Gray", hex: "#d1d1d1" }
        ],
        tips: [
            "Layer with lightweight items that can be removed if it gets hotter",
            "Short sleeves are comfortable but bring a light jacket for evening",
            "Cotton and linen blends work well for warm weather",
            "Avoid dark colors that absorb heat",
            "Opt for breathable shoes to prevent your feet from overheating"
        ]
    },
    cool: {
        title: "Cool Weather Outfit Recommendations",
        description: "Cool weather creates the perfect opportunity for creative layering and richer color palettes. Balance comfort and style with these outfit suggestions.",
        outfits: [
            {
                name: "Casual Everyday",
                items: [
                    "Long-sleeve t-shirt or henley",
                    "Light sweater or cardigan",
                    "Jeans or chinos",
                    "Sneakers or loafers"
                ]
            },
            {
                name: "Smart Casual",
                items: [
                    "Button-up shirt",
                    "Light sweater or blazer",
                    "Chinos or wool trousers",
                    "Chelsea boots or loafers"
                ]
            }
        ],
        accessories: [
            {
                name: "Perfect Complements",
                items: [
                    "Lightweight scarf",
                    "Leather or canvas belt",
                    "Beanie or knit cap",
                    "Leather or fabric watch",
                    "Simple silver or gold accessories"
                ]
            }
        ],
        fragrances: [
            {
                name: "Recommended Fragrances",
                items: [
                    "Woody scents (cedar, sandalwood)",
                    "Spicy notes (cardamom, cinnamon)",
                    "Amber-based fragrances",
                    "Leather or suede notes",
                    "Warm floral blends"
                ]
            }
        ],
        colors: [
            { name: "Navy", hex: "#2a4359" },
            { name: "Burgundy", hex: "#800020" },
            { name: "Olive Green", hex: "#5e7160" },
            { name: "Mustard", hex: "#e1ad01" },
            { name: "Gray", hex: "#808080" }
        ],
        tips: [
            "Layering is key in cool weather - you can add or remove items as needed",
            "A light jacket or sweater is essential for temperature changes",
            "Consider wool or cotton-wool blends for warmth without overheating",
            "Darker colors work well in cooler weather and hide dirt better",
            "Don't forget a lightweight scarf for additional neck warmth"
        ]
    },
    cold: {
        title: "Cold Weather Outfit Recommendations",
        description: "When temperatures drop, prioritize warmth while maintaining style with these cold-weather outfit ideas that combine functionality and fashion.",
        outfits: [
            {
                name: "Everyday Winter",
                items: [
                    "Thermal or long-sleeve t-shirt",
                    "Sweater or fleece",
                    "Winter coat or puffer jacket",
                    "Jeans or heavy trousers",
                    "Boots",
                    "Hat, scarf, and gloves"
                ]
            },
            {
                name: "Formal Winter",
                items: [
                    "Dress shirt",
                    "Wool sweater",
                    "Wool coat or peacoat",
                    "Wool trousers",
                    "Leather boots",
                    "Scarf and leather gloves"
                ]
            }
        ],
        accessories: [
            {
                name: "Winter Essentials",
                items: [
                    "Insulated gloves or mittens",
                    "Thick knit beanie or wool hat",
                    "Chunky scarf",
                    "Thermal socks",
                    "Earmuffs or ear warmers",
                    "Leather belt with a matte finish"
                ]
            }
        ],
        fragrances: [
            {
                name: "Recommended Fragrances",
                items: [
                    "Rich woody scents (oud, cedar)",
                    "Deep spices (cinnamon, clove)",
                    "Smoky or incense notes",
                    "Vanilla or caramel bases",
                    "Balsamic fragrances"
                ]
            }
        ],
        colors: [
            { name: "Deep Navy", hex: "#1a2a3a" },
            { name: "Charcoal", hex: "#333333" },
            { name: "Forest Green", hex: "#2c4c3b" },
            { name: "Burgundy", hex: "#800020" },
            { name: "Camel", hex: "#c19a6b" }
        ],
        tips: [
            "Layer, layer, layer! Multiple thin layers trap heat better than one thick layer",
            "Start with a moisture-wicking base layer to keep sweat away from your body",
            "Wool and fleece are excellent middle layers for insulation",
            "Outer layer should be wind and water-resistant",
            "Don't forget extremities - warm socks, gloves, and a hat prevent heat loss"
        ]
    },
    rainy: {
        title: "Rainy Weather Outfit Recommendations",
        description: "Don't let rain dampen your style. These weather-appropriate outfits and accessories will keep you dry and fashionable during wet weather conditions.",
        outfits: [
            {
                name: "Casual Rain-Ready",
                items: [
                    "Waterproof jacket or rain coat",
                    "Water-resistant pants",
                    "Waterproof boots or shoes",
                    "Umbrella"
                ]
            },
            {
                name: "Office Rain-Ready",
                items: [
                    "Trench coat or waterproof jacket",
                    "Regular work clothes underneath",
                    "Water-resistant shoes (bring office shoes to change into)",
                    "Compact umbrella"
                ]
            }
        ],
        accessories: [
            {
                name: "Rainy Day Necessities",
                items: [
                    "Compact automatic umbrella",
                    "Waterproof hat or cap",
                    "Waterproof watch",
                    "Water-resistant bag or backpack",
                    "Quick-dry scarf"
                ]
            }
        ],
        fragrances: [
            {
                name: "Recommended Fragrances",
                items: [
                    "Petrichor-inspired scents",
                    "Fresh aquatic notes",
                    "Green and earthy fragrances",
                    "Mild citrus with wood bases",
                    "Light musk or amber"
                ]
            }
        ],
        colors: [
            { name: "Navy", hex: "#2a4359" },
            { name: "Forest Green", hex: "#2c4c3b" },
            { name: "Charcoal", hex: "#333333" },
            { name: "Deep Burgundy", hex: "#6e0923" },
            { name: "Khaki", hex: "#baa994" }
        ],
        tips: [
            "Waterproof outerwear is essential - look for items labeled waterproof, not just water-resistant",
            "Dark colors show water stains less than light colors",
            "Quick-drying synthetic fabrics are better than cotton or denim which stay wet",
            "Avoid suede or leather shoes that can be damaged by water",
            "Consider waterproof bags or backpacks to protect belongings"
        ]
    }
};

// Event listeners
weatherOptions.forEach(option => {
    option.addEventListener('click', () => {
        // Clear previous selection
        weatherOptions.forEach(opt => opt.classList.remove('selected'));
        
        // Add selected class
        option.classList.add('selected');
        
        // Generate recommendations based on selected weather
        const weatherType = option.dataset.weather;
        
        // Save selection to local storage
        localStorage.setItem('selectedWeather', weatherType);
        
        generateRecommendations(weatherType);
    });
});

// Check for saved weather preference on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedWeather = localStorage.getItem('selectedWeather');
    
    if (savedWeather) {
        // Find the saved weather option and trigger a click on it
        const savedOption = document.querySelector(`.weather-option[data-weather="${savedWeather}"]`);
        if (savedOption) {
            savedOption.click();
        }
    }
});

// Generate outfit recommendations based on weather type
function generateRecommendations(weatherType) {
    // Show loading animation
    resultsSection.innerHTML = `
        <div class="loading">
            <div class="loading-spinner"></div>
        </div>
    `;
    
    // Simulate loading (can be removed in production)
    setTimeout(() => {
        // Get data for selected weather
        const data = outfitRecommendations[weatherType];
        
        // Create result content
        let resultHTML = `
            <div class="result-content">
                <div class="result-header">
                    <h3>${data.title}</h3>
                    <p>${data.description}</p>
                </div>
                
                <div class="outfit-suggestion">
                    <h4>Recommended Outfits</h4>
        `;
        
        // Add outfit options
        data.outfits.forEach(outfit => {
            resultHTML += `
                <h5>${outfit.name}</h5>
                <div class="outfit-items">
            `;
            
            outfit.items.forEach(item => {
                resultHTML += `<span class="outfit-item">${item}</span>`;
            });
            
            resultHTML += `</div>`;
        });
        
        // Add accessories section
        resultHTML += `
            <div class="accessories-suggestion">
                <h4>Accessories</h4>
        `;
        
        data.accessories.forEach(accessory => {
            resultHTML += `
                <h5>${accessory.name}</h5>
                <div class="accessories-items">
            `;
            
            accessory.items.forEach(item => {
                resultHTML += `<span class="accessory-item">${item}</span>`;
            });
            
            resultHTML += `</div>`;
        });
        
        // Add fragrance section
        resultHTML += `
            <div class="fragrance-suggestion">
                <h4>Fragrances</h4>
        `;
        
        data.fragrances.forEach(fragrance => {
            resultHTML += `
                <h5>${fragrance.name}</h5>
                <div class="fragrance-items">
            `;
            
            fragrance.items.forEach(item => {
                resultHTML += `<span class="fragrance-item">${item}</span>`;
            });
            
            resultHTML += `</div>`;
        });
        
        // Add color palette
        resultHTML += `
            <div class="color-suggestions">
                <h4>Recommended Colors</h4>
                <div class="color-palette">
        `;
        
        data.colors.forEach(color => {
            resultHTML += `
                <div class="color-sample" style="background-color: ${color.hex};" data-color="${color.name}" data-hex="${color.hex}"></div>
            `;
        });
        
        resultHTML += `
                </div>
            </div>
            
            <div class="outfit-tips">
                <h4>Styling Tips</h4>
                <ul class="tips-list">
        `;
        
        data.tips.forEach(tip => {
            resultHTML += `<li>${tip}</li>`;
        });
        
        resultHTML += `
                </ul>
            </div>
        </div>`;
        
        // Update results section
        resultsSection.innerHTML = resultHTML;
        
        // Add event listeners to color samples
        const colorSamples = document.querySelectorAll('.color-sample');
        colorSamples.forEach(sample => {
            sample.addEventListener('click', function() {
                // Toggle expanded class
                this.classList.toggle('expanded');
                
                // If expanded, add color name
                if (this.classList.contains('expanded')) {
                    const colorName = this.getAttribute('data-color');
                    const nameElement = document.createElement('span');
                    nameElement.className = 'color-name';
                    nameElement.textContent = colorName;
                    this.appendChild(nameElement);
                    
                    // Reset other expanded samples
                    colorSamples.forEach(otherSample => {
                        if (otherSample !== this && otherSample.classList.contains('expanded')) {
                            otherSample.classList.remove('expanded');
                            const nameToRemove = otherSample.querySelector('.color-name');
                            if (nameToRemove) nameToRemove.remove();
                        }
                    });
                } else {
                    // Remove color name if not expanded
                    const nameToRemove = this.querySelector('.color-name');
                    if (nameToRemove) nameToRemove.remove();
                }
            });
        });
        
        // Scroll to results
        resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 500); // Adjust loading time as needed
} 