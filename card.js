export function createCard(data, type = "basic") {
    const card = document.createElement("div");
    card.classList.add("dynamic-card", `card-${type}`);

     // Apply custom height, width, and color using CSS variables
     if (data.height) {
        card.style.setProperty("--card-height", data.height);
    } else {
        card.style.setProperty("--card-height", "auto");
    }

    const screenWidth = window.innerWidth;
    let cardWidth = "90%";  // Default width
    if (screenWidth < 768) {
        cardWidth = "100%";  // Full width for smaller screens
    } else if (screenWidth < 1024) {
        cardWidth = "95%";   // Adjusted width for medium screens
    }

    card.style.setProperty("--card-width", cardWidth);

    if (data.color) {
        card.style.setProperty("--card-color", data.color);
    }


    switch (type) {
        case "profile":
            return createProfileCard(card, data);
        case "product":
            return createProductCard(card, data);
        case "testimonial":
            return createTestimonialCard(card, data);
        case "news":
            return createNewsCard(card, data);
        case "service":
            return createServiceCard(card, data);
        case "team":
            return createTeamCard(card, data);
        case "pricing":
            return createPricingCard(card, data);
        case "blog":
            return createBlogCard(card, data);
        case "event":
            return createEventCard(card, data);
        default:
            return createBasicCard(card, data);
    }
}

function createBasicCard(card, data) {
    // Basic card implementation
    if (data.image) {
        const img = document.createElement("img");
        img.src = data.image;
        img.alt = data.imageAlt || "Card Image";
        img.classList.add("card-image");
        card.appendChild(img);
    }

    if (data.title) {
        const title = document.createElement("h3");
        title.textContent = data.title;
        title.classList.add("card-title");
        card.appendChild(title);
    }

    if (data.description) {
        const description = document.createElement("p");
        description.textContent = data.description;
        description.classList.add("card-description");
        card.appendChild(description);
    }

    if (data.buttons && Array.isArray(data.buttons)) {
        const buttonContainer = document.createElement("div");
        buttonContainer.classList.add("card-buttons");

        data.buttons.forEach((button) => {
            const btn = document.createElement("a");
            btn.href = button.url || "#";
            btn.textContent = button.text;
            btn.classList.add("card-button");
            if (button.style) {
                Object.assign(btn.style, button.style);
            }
            buttonContainer.appendChild(btn);
        });

        card.appendChild(buttonContainer);
    }

    return card;
}

function createProfileCard(card, data) {
    // Profile card implementation
    if (data.image) {
        const img = document.createElement("img");
        img.src = data.image;
        img.alt = data.imageAlt || "Profile Image";
        img.classList.add("card-image", "profile-image");
        card.appendChild(img);
    }

    if (data.name) {
        const name = document.createElement("h3");
        name.textContent = data.name;
        name.classList.add("card-title");
        card.appendChild(name);
    }

    if (data.role) {
        const role = document.createElement("p");
        role.textContent = data.role;
        role.classList.add("card-description");
        card.appendChild(role);
    }

    if (data.socialLinks && Array.isArray(data.socialLinks)) {
        const socialContainer = document.createElement("div");
        socialContainer.classList.add("card-social-links");

        data.socialLinks.forEach((link) => {
            const socialLink = document.createElement("a");
            socialLink.href = link.url || "#";
            socialLink.innerHTML = `<i class="${link.icon}"></i>`;
            socialLink.classList.add("card-social-link");
            socialContainer.appendChild(socialLink);
        });

        card.appendChild(socialContainer);
    }

    return card;
}

function createProductCard(card, data) {
    // Product card implementation
    if (data.image) {
        const img = document.createElement("img");
        img.src = data.image;
        img.alt = data.imageAlt || "Product Image";
        img.classList.add("card-image");
        card.appendChild(img);
    }

    if (data.title) {
        const title = document.createElement("h3");
        title.textContent = data.title;
        title.classList.add("card-title");
        card.appendChild(title);
    }

    if (data.price) {
        const price = document.createElement("p");
        price.textContent = `$${data.price}`;
        price.classList.add("card-price");
        card.appendChild(price);
    }

    if (data.rating) {
        const rating = document.createElement("div");
        rating.classList.add("card-rating");

        for (let i = 0; i < 5; i++) {
            const star = document.createElement("i");
            star.classList.add("fas", "fa-star");
            if (i < data.rating) {
                star.classList.add("active");
            }
            rating.appendChild(star);
        }

        card.appendChild(rating);
    }

    if (data.button) {
        const button = document.createElement("a");
        button.href = data.button.url || "#";
        button.textContent = data.button.text;
        button.classList.add("card-button");
        card.appendChild(button);
    }

    return card;
}

function createTestimonialCard(card, data) {
    // Testimonial card implementation
    if (data.image) {
        const img = document.createElement("img");
        img.src = data.image;
        img.alt = data.imageAlt || "Testimonial Image";
        img.classList.add("card-image", "testimonial-image");
        card.appendChild(img);
    }

    if (data.quote) {
        const quote = document.createElement("blockquote");
        quote.textContent = data.quote;
        quote.classList.add("card-quote");
        card.appendChild(quote);
    }

    if (data.author) {
        const author = document.createElement("p");
        author.textContent = data.author;
        author.classList.add("card-author");
        card.appendChild(author);
    }

    if (data.role) {
        const role = document.createElement("p");
        role.textContent = data.role;
        role.classList.add("card-role");
        card.appendChild(role);
    }

    return card;
}

function createNewsCard(card, data) {
    // News card implementation
    if (data.image) {
        const img = document.createElement("img");
        img.src = data.image;
        img.alt = data.imageAlt || "News Image";
        img.classList.add("card-image");
        card.appendChild(img);
    }

    if (data.title) {
        const title = document.createElement("h3");
        title.textContent = data.title;
        title.classList.add("card-title");
        card.appendChild(title);
    }

    if (data.description) {
        const description = document.createElement("p");
        description.textContent = data.description;
        description.classList.add("card-description");
        card.appendChild(description);
    }

    if (data.button) {
        const button = document.createElement("a");
        button.href = data.button.url || "#";
        button.textContent = data.button.text;
        button.classList.add("card-button");
        card.appendChild(button);
    }

    return card;
}

function createServiceCard(card, data) {
    // Service card implementation
    if (data.icon) {
        const icon = document.createElement("i");
        icon.classList.add("fas", data.icon);
        icon.classList.add("card-icon");
        card.appendChild(icon);
    }

    if (data.title) {
        const title = document.createElement("h3");
        title.textContent = data.title;
        title.classList.add("card-title");
        card.appendChild(title);
    }

    if (data.description) {
        const description = document.createElement("p");
        description.textContent = data.description;
        description.classList.add("card-description");
        card.appendChild(description);
    }

    if (data.button) {
        const button = document.createElement("a");
        button.href = data.button.url || "#";
        button.textContent = data.button.text;
        button.classList.add("card-button");
        card.appendChild(button);
    }

    return card;
}

function createTeamCard(card, data) {
    // Team card implementation
    if (data.image) {
        const img = document.createElement("img");
        img.src = data.image;
        img.alt = data.imageAlt || "Team Member Image";
        img.classList.add("card-image", "team-image");
        card.appendChild(img);
    }

    if (data.name) {
        const name = document.createElement("h3");
        name.textContent = data.name;
        name.classList.add("card-title");
        card.appendChild(name);
    }

    if (data.role) {
        const role = document.createElement("p");
        role.textContent = data.role;
        role.classList.add("card-role");
        card.appendChild(role);
    }

    if (data.bio) {
        const bio = document.createElement("p");
        bio.textContent = data.bio;
        bio.classList.add("card-bio");
        card.appendChild(bio);
    }

    return card;
}

function createPricingCard(card, data) {
    // Pricing card implementation
    if (data.title) {
        const title = document.createElement("h3");
        title.textContent = data.title;
        title.classList.add("card-title");
        card.appendChild(title);
    }

    if (data.price) {
        const price = document.createElement("p");
        price.textContent = `$${data.price}`;
        price.classList.add("card-price");
        card.appendChild(price);
    }

    if (data.features && Array.isArray(data.features)) {
        const featuresList = document.createElement("ul");
        featuresList.classList.add("card-features");

        data.features.forEach((feature) => {
            const li = document.createElement("li");
            li.textContent = feature;
            featuresList.appendChild(li);
        });

        card.appendChild(featuresList);
    }

    if (data.button) {
        const button = document.createElement("a");
        button.href = data.button.url || "#";
        button.textContent = data.button.text;
        button.classList.add("card-button");
        card.appendChild(button);
    }

    return card;
}

function createBlogCard(card, data) {
    // Blog card implementation
    if (data.image) {
        const img = document.createElement("img");
        img.src = data.image;
        img.alt = data.imageAlt || "Blog Image";
        img.classList.add("card-image");
        card.appendChild(img);
    }

    if (data.title) {
        const title = document.createElement("h3");
        title.textContent = data.title;
        title.classList.add("card-title");
        card.appendChild(title);
    }

    if (data.author) {
        const author = document.createElement("p");
        author.textContent = `By ${data.author}`;
        author.classList.add("card-author");
        card.appendChild(author);
    }

    if (data.date) {
        const date = document.createElement("p");
        date.textContent = data.date;
        date.classList.add("card-date");
        card.appendChild(date);
    }

    if (data.button) {
        const button = document.createElement("a");
        button.href = data.button.url || "#";
        button.textContent = data.button.text;
        button.classList.add("card-button");
        card.appendChild(button);
    }

    return card;
}

function createEventCard(card, data) {
    // Event card implementation
    if (data.image) {
        const img = document.createElement("img");
        img.src = data.image;
        img.alt = data.imageAlt || "Event Image";
        img.classList.add("card-image");
        card.appendChild(img);
    }

    if (data.title) {
        const title = document.createElement("h3");
        title.textContent = data.title;
        title.classList.add("card-title");
        card.appendChild(title);
    }

    if (data.date) {
        const date = document.createElement("p");
        date.textContent = data.date;
        date.classList.add("card-date");
        card.appendChild(date);
    }

    if (data.location) {
        const location = document.createElement("p");
        location.textContent = data.location;
        location.classList.add("card-location");
        card.appendChild(location);
    }

    if (data.button) {
        const button = document.createElement("a");
        button.href = data.button.url || "#";
        button.textContent = data.button.text;
        button.classList.add("card-button");
        card.appendChild(button);
    }

    return card;
}