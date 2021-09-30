import data from './data.js';

// Document Setup
const documentSetup = () =>{

    // Title of document
    const documentTitle = document.querySelector("title");
    // Set title equal to the name of the house
    documentTitle.innerHTML = data[0].name;

}

// Navbar Setup
const navbarSetup = () =>{

    // Navbar container
    const navbarContainer = document.querySelector("#navbar");

    // Create logo with the name of the house
    const navTitle = document.createElement("h1");
    navTitle.innerHTML = data[0].name;
    navTitle.className = "nav-title";
    navbarContainer.appendChild(navTitle);

    // Create Button Container
    const buttonContainer = document.createElement("div");
    buttonContainer.className = "nav-button-container";

    // Create contact button in nav
    const learnMoreButton = document.createElement("button");
    learnMoreButton.innerHTML = "Learn More";
    learnMoreButton.className = "nav-learnMore-button nav-button";
    learnMoreButton.onclick = scrollToInfo;
    buttonContainer.appendChild(learnMoreButton);
    
    // Create contact button in nav
    const contactButton = document.createElement("button");
    contactButton.innerHTML = "Contact";
    contactButton.className = "nav-contact-button nav-button";
    contactButton.onclick = scrollToContact;
    buttonContainer.appendChild(contactButton);

    // Add button container to navbar
    navbarContainer.appendChild(buttonContainer);

}

// Hero Setup
const heroSetup = () =>{

    // Get the hero container
    const heroContainer = document.querySelector("#hero-container");

    // Create text for hero
    const heroText = document.createElement("h1");
    heroText.innerHTML = data[0].name;
    heroText.className = "hero-text";
    heroContainer.appendChild(heroText);
    
    // Create learn more button
    const learnMoreButton = document.createElement("button");
    learnMoreButton.innerHTML = "Learn More";
    learnMoreButton.className = "hero-button";
    learnMoreButton.onclick = scrollToInfo;
    heroContainer.appendChild(learnMoreButton);

}

// Info Setup
const infoSetup = () =>{

    // Get info container from dom
    const infoContainer = document.querySelector("#info-container");

    // <----------------------------------------------->

    // Create container for info text
    const infoTextContainer = document.createElement("div");
    infoTextContainer.className = "info-text-container";

    // Add name to the info text container
    const nameText = document.createElement("h2");
    nameText.innerHTML = data[0].name;
    nameText.className = "info-text";
    infoTextContainer.appendChild(nameText);

    // Add address to the info text container
    const addressText = document.createElement("h3");
    addressText.innerHTML = data[0].address;
    addressText.className = "info-text-lead";
    infoTextContainer.appendChild(addressText);

    // <----------------------------------------------->


    // Create container for info text 2
    const infoTextContainer2 = document.createElement("div");
    infoTextContainer2.className = "info-text-container";
    infoTextContainer2.id = "info-text-container-2";

    // Add name to the info text container
    const infoText = document.createElement("h2");
    infoText.innerHTML = "The Century";
    infoText.className = "info-text";
    infoTextContainer2.appendChild(infoText);

    // Add address to the info text container
    const infoTextLead = document.createElement("h3");
    infoTextLead.innerHTML = "The Cavalli Penthouse set within the 38th floor of the coveted Century building is a bold design statement by the Jumbo Collection. With sprawling south facing views overlooking the Pacific Ocean.";
    infoTextLead.className = "info-text-lead";
    infoTextContainer2.appendChild(infoTextLead);

    // Create container for image
    const infoTextContainer2Img = document.createElement("div");
    infoTextContainer2Img.className = "info-text-img";
    infoTextContainer2Img.id = "info-text-img-2";

    // <----------------------------------------------->

    // Create container for info text 3
    const infoTextContainer3 = document.createElement("div");
    infoTextContainer3.className = "info-text-container";
    infoTextContainer3.id = "info-text-container-3";

    // Add name to the info text container
    const infoText3 = document.createElement("h2");
    infoText3.innerHTML = "The Kitchen";
    infoText3.className = "info-text";
    infoTextContainer3.appendChild(infoText3);

    // Add address to the info text container
    const infoTextLead3 = document.createElement("h3");
    infoTextLead3.innerHTML = "The interior boasts a flexible layout with a Gianfranco Ferre designed kitchen. The kitchen features a waterfall quartz island completed with Viking appliances.";
    infoTextLead3.className = "info-text-lead";
    infoTextContainer3.appendChild(infoTextLead3);

    // Create container for image
    const infoTextContainer3Img = document.createElement("div");
    infoTextContainer3Img.className = "info-text-img";
    infoTextContainer3Img.id = "info-text-img-3";
    
    // <----------------------------------------------->
    // Create container for info text 4
    const infoTextContainer4 = document.createElement("div");
    infoTextContainer4.className = "info-text-container";
    infoTextContainer4.id = "info-text-container-4";

    // Add name to the info text container
    const infoText4 = document.createElement("h2");
    infoText4.innerHTML = "The Living Room";
    infoText4.className = "info-text";
    infoTextContainer4.appendChild(infoText4);

    // Add address to the info text container
    const infoTextLead4 = document.createElement("h3");
    infoTextLead4.innerHTML = "This newly-renovated penthouse showcases custom finishes and furnishings from Cavalli and Ferre included in the purchase.";
    infoTextLead4.className = "info-text-lead";
    infoTextContainer4.appendChild(infoTextLead4);

    // Create container for image
    const infoTextContainer4Img = document.createElement("div");
    infoTextContainer4Img.className = "info-text-img";
    infoTextContainer4Img.id = "info-text-img-4";
    
    // <----------------------------------------------->

    // Add items to the containers
    infoContainer.appendChild(infoTextContainer);
    infoContainer.appendChild(infoTextContainer2);
    infoContainer.appendChild(infoTextContainer2Img);
    infoContainer.appendChild(infoTextContainer3Img);
    infoContainer.appendChild(infoTextContainer3);
    infoContainer.appendChild(infoTextContainer4);
    infoContainer.appendChild(infoTextContainer4Img);

}

// Views
const viewsSetup = () =>{

    // Get views container
    const viewsContainer = document.querySelector("#views-container");
    // Create view1
    const view1 = document.createElement("div");
    view1.className = "view";
    view1.id = "view-1";
    // Create view2
    const view2 = document.createElement("div");
    view2.className = "view";
    view2.id = "view-2";
    // Create view3
    const view3 = document.createElement("div");
    view3.className = "view";
    view3.id = "view-3";

    // Add views to container
    viewsContainer.appendChild(view1);
    viewsContainer.appendChild(view2);
    viewsContainer.appendChild(view3);

}

// Stats Setup
const statsSetup = () =>{

    document.querySelector("#stat-1").innerHTML = data[0].bedrooms;
    document.querySelector("#stat-2").innerHTML = data[0].bathrooms;
    document.querySelector("#stat-3").innerHTML = data[0].parking;
    document.querySelector("#stat-4").innerHTML = data[0].type;
    document.querySelector("#stat-5").innerHTML = data[0].built;
    document.querySelector("#stat-6").innerHTML = data[0].sqft;
    document.querySelector("#stat-7").innerHTML = data[0].price;
    document.querySelector("#stat-8").innerHTML = data[0].hoa;
    document.querySelector("#stat-9").innerHTML = data[0].ppsqft;

}

// Scroll to info section function
const scrollToInfo = () =>{

    const infoSection = document.querySelector("#info-container");
    infoSection.scrollIntoView(true);

}

// Scroll to contact section function
const scrollToContact = () =>{

    const contactSection = document.querySelector("#contact-container");
    contactSection.scrollIntoView(true);

}



// Run
const run = () => {

    // Setup Document
    documentSetup();
    // Setup Navbar
    navbarSetup();
    // Setup Hero
    heroSetup();
    // Setup Info
    infoSetup();
    // Setup Views
    viewsSetup();
    // Setup Stats
    statsSetup();

}



run();