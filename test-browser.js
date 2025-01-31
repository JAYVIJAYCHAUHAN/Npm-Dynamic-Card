import { createCard } from './card.js';

// 1. Basic Card
const basicCardData = {
    image: "https://picsum.photos/600/300",
    imageAlt: "A beautiful landscape",
    title: "Explore the World",
    description: "Discover amazing places and experiences.",
    buttons: [
        { text: "Book Now", url: "https://example.com/book" },
        { text: "Learn More", url: "https://example.com/learn" }
    ],
    height: "300px", // Custom height
    width: "80%", // Custom width
    color: "#e3f2fd" // Custom color
};

const basicCard = createCard(basicCardData, "basic");
document.body.appendChild(basicCard);

// 2. Profile Card
const profileCardData = {
    image: "https://picsum.photos/600/300",
    imageAlt: "Profile Image",
    name: "John Doe",
    role: "Web Developer",
    socialLinks: [
        { url: "https://twitter.com", icon: "fab fa-twitter" },
        { url: "https://linkedin.com", icon: "fab fa-linkedin" },
        { url: "https://github.com", icon: "fab fa-github" }
    ],
    height: "250px", // Custom height
    width: "250px", // Custom width
    color: "#fff3e0" // Custom color
};

const profileCard = createCard(profileCardData, "profile");
document.body.appendChild(profileCard);

// 3. Product Card
const productCardData = {
    image: "https://picsum.photos/600/300",
    imageAlt: "Product Image",
    title: "Awesome Product",
    price: 49.99,
    rating: 4,
    button: { text: "Add to Cart", url: "https://example.com/cart" },
    height: "350px", // Custom height
    width: "300px", // Custom width
    color: "#fce4ec" // Custom color
};

const productCard = createCard(productCardData, "product");
document.body.appendChild(productCard);

// 4. Testimonial Card
const testimonialCardData = {
    image: "https://picsum.photos/600/300",
    imageAlt: "Testimonial Image",
    quote: "This product changed my life!",
    author: "Jane Doe",
    role: "Happy Customer",
    height: "300px", // Custom height
    width: "80%", // Custom width
    color: "#fff8e1" // Custom color
};

const testimonialCard = createCard(testimonialCardData, "testimonial");
document.body.appendChild(testimonialCard);

// 5. News Card
const newsCardData = {
    image: "https://picsum.photos/600/300",
    imageAlt: "News Image",
    title: "Breaking News",
    description: "A major event just happened.",
    button: { text: "Read More", url: "https://example.com/news" },
    height: "300px", // Custom height
    width: "80%", // Custom width
    color: "#e0f7fa" // Custom color
};

const newsCard = createCard(newsCardData, "news");
document.body.appendChild(newsCard);

// 6. Service Card
const serviceCardData = {
    icon: "fa-cogs",
    title: "Web Development",
    description: "We build amazing websites.",
    button: { text: "Learn More", url: "https://example.com/services" },
    height: "250px", // Custom height
    width: "250px", // Custom width
    color: "#f3e5f5" // Custom color
};

const serviceCard = createCard(serviceCardData, "service");
document.body.appendChild(serviceCard);

// 7. Team Card
const teamCardData = {
    image: "https://picsum.photos/600/300",
    imageAlt: "Team Member Image",
    name: "John Doe",
    role: "Web Developer",
    bio: "Passionate about building great user experiences.",
    height: "300px", // Custom height
    width: "80%", // Custom width
    color: "#e8f5e9" // Custom color
};

const teamCard = createCard(teamCardData, "team");
document.body.appendChild(teamCard);

// 8. Pricing Card
const pricingCardData = {
    title: "Premium Plan",
    price: 99.99,
    features: ["Feature 1", "Feature 2", "Feature 3"],
    button: { text: "Buy Now", url: "https://example.com/pricing" },
    height: "350px", // Custom height
    width: "300px", // Custom width
    color: "#fff3e0" // Custom color
};

const pricingCard = createCard(pricingCardData, "pricing");
document.body.appendChild(pricingCard);

// 9. Blog Card
const blogCardData = {
    image: "https://picsum.photos/600/300",
    imageAlt: "Blog Image",
    title: "How to Build a Dynamic Card Component",
    author: "John Doe",
    date: "October 10, 2023",
    button: { text: "Read More", url: "https://example.com/blog" },
    height: "300px", // Custom height
    width: "80%", // Custom width
    color: "#e3f2fd" // Custom color
};

const blogCard = createCard(blogCardData, "blog");
document.body.appendChild(blogCard);

// 10. Event Card
const eventCardData = {
    image: "https://picsum.photos/600/300",
    imageAlt: "Event Image",
    title: "Tech Conference 2023",
    date: "November 15, 2023",
    location: "New York, NY",
    button: { text: "Register Now", url: "https://example.com/event" },
    height: "300px", // Custom height
    width: "80%", // Custom width
    color: "#fff8e1" // Custom color
};

const eventCard = createCard(eventCardData, "event");
document.body.appendChild(eventCard);