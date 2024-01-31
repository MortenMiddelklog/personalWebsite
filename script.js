const data = [
    {
        name: "info",
        headline: "Morten Pedersbæk",
        text: "I am the culprit behind this website. I have been somewhat technical my whole life in the way I think, always caring about science, math and language. My educations within both biology and multimediadesign gave me a broad knowledge, a wide skillset, and a professional approach to science, digital communication, webdesign and webdevelopment. Click on the links to the left to learn more about me.",
        image: "https://i.ibb.co/8brhXBm/morten.jpg"
    },
    {
        name: "hobbies",
        headline: "About my hobbies",
        text: "I search for old things on beaches and look for food in forrests. I have a small collection of fossils and a pile of mushroom spots. My father has always been an eager mushroom hunter and that has given me a special interest for that part of life. I suppose I am a kind of amateur mycologist. I love all of nature and the world of living things, and often ponder about evolution. Nature and wild life photography is another hobby of mine.",
        image: "https://i.ibb.co/dkRz4yL/fossils.jpg"
    },
    {
        name: "faq",
        headline: "FAQ about me",
        items: [
            {
                question: "What are my core skills?",
                answer: "I am a logical and objective teamworker with a broad knowledge. I have a calm and thoughtful personality and I like to give it my best."
            },
            {
                question: "What are my weaknesses?",
                answer: "I can get nervous when meeting new or many people, and I am not a great multitasker or very fast learner. However I can overcome my nerves, everybody can multitask, and I learn often at a steady pace. My main weakness is that I can be quite boring due to my serious and proffesional approach to things. I like to deal with that with occasional humor."
            },
            {
                question: "How skilled am I at programming?",
                answer: "I am a developer under development. If you split the development into 5 levels: Beginner, basic, intermediate, advanced and expert, I am on the intermediate level. This means I know the basics of python, SQL and javascript and can solve most easy to intermediate exercises."
            },
            {
                question: "What am I motivated by?",
                answer: "I am motivated by knowing that I contribute to the tasks at hand and the small everyday victories. When my skills comes to use and my hands are full it has been a good day at work."
            },
            {
                question: "What is my education?",
                answer: "I am part multimediadesigner and part biologist because I have about half an education in both areas. I am far from an expert in anything but I know the basics of many topics."
            },
            {
                question: "What are my ambitions?",
                answer: "I would like to work with development someday. It is also a dream to be able to combine my technical skills with my passion for nature and science."
            }
        ]
    },
    {
        name: "gallery",
        headline: "Nature photography",
        images: [
            {
                src: "https://i.ibb.co/F3jxyfn/sunrise.jpg",
                alt: "Sunrise"
            },
            {
                src: "https://i.ibb.co/C9WKFhS/lizard.jpg",
                alt: "Lizard"
            },
            {
                src: "https://i.ibb.co/Bw4GWYn/butterflies.jpg",
                alt: "Butterflies"
            },
            {
                src: "https://i.ibb.co/Fbd7B13/funnel-chanterelle.jpg",
                alt: "Funnel chanterelle"
            },
            {
                src: "https://i.ibb.co/gFQft6N/house-sparrow.jpg",
                alt: "House sparrow"
            },
            {
                src: "https://i.ibb.co/2YVcXXg/sunset.jpg",
                alt: "Sunset"
            }
        ]
    },
    {
        name: "code",
        headline: "Talk is cheap",
        items: [ 
            {
                h: "Projects",
                text: "These are some of my favorite pet-projects.",
                links: [
                    "https://mortenmiddelklog.github.io/sqlQuiz/",
                    "https://github.com/MortenMiddelklog/personalWebsite"
                ],
                linkNames: [
                    "SQL quiz",
                    "This website"
                ]
            },
            {
                h: "Certificates",
                text: "View my certificates from freeCodeCamp and HackerRank.",
                links: [
                    "https://www.hackerrank.com/profile/mpedersbaek",
                    "https://www.freecodecamp.org/MortenPedersbk"
                ],
                linkNames: [
                    "HackerRank profile",
                    "freeCodeCamp profile"
                ]
            },
            {
                h: "GitHub",
                text: "Check my code on GitHub",
                links: [
                    "https://github.com/MortenMiddelklog"
                ],
                linkNames: [
                    "GitHub profile"
                ]
            }
        ]
    },
    {
        name: "contact",
        headline: "Get in touch",
        items: [ 
            {
                h: "Find me",
                lines: [
                    "Frejasvej 6, st th",
                    "7000 Fredericia",
                    "Denmark"
                ]
            },
            {
                h: "Phone and email",
                lines: [
                    '<a href="tel:51462065" class="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">51 46 20 65</a>',
                    '<a href="mailto:mpedersbaek@gmail.com" class="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">mpedersbaek@gmail.com</a>'
                ]
            },
            {
                h: "Social media",
                lines: [
                    '<a href="https://www.linkedin.com/in/mpedersbk/" class="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" target="_blank">LinkedIn</a>',
                    '<a href="https://www.facebook.com/m.pedersbaek/" class="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" target="_blank">Facebook</a>'
                ]
            }
        ]
    }
];

function updateNav(btn) {
    navLinks.forEach((link) => {
        if (link.classList.contains("custom-active")) {
            link.classList.remove("custom-active");
        }
    });
    btn.classList.add("custom-active");
}


const content = document.getElementById("content");
const infoBtn = document.getElementById("info-btn");
const aboutBtn = document.getElementById("about-btn");
const faqBtn = document.getElementById("faq-btn");
const galleryBtn = document.getElementById("gallery-btn");
const codeBtn = document.getElementById("code-btn");
const contactBtn = document.getElementById("contact-btn");
const navLinks = document.querySelectorAll(".nav-link");


const divElem = document.createElement("div");
const imgDivElem = divElem.cloneNode();
divElem.classList.add("d-flex", "flex-column", "justify-content-center", "w-100", "h-100", "p-4")
divElem.style.maxWidth = "1000px";
imgDivElem.style.maxWidth = "500px";


const h1Elem = document.createElement("h1");
h1Elem.classList.add("display-5");

const pElem = document.createElement("p");
const aElem = document.createElement("a");

const imgElem = document.createElement("img");
imgElem.classList.add("img-fluid", "m-auto");

function infoReveal(index) {
    const h1 = h1Elem.cloneNode();
    const p = pElem.cloneNode();
    const img = imgElem.cloneNode();
    const div = divElem.cloneNode();

    h1.innerText = data[index].headline;

    p.innerText = data[index].text;

    img.src = data[index].image;
    imgDivElem.replaceChildren(img);
    div.append(h1, p, imgDivElem);
    content.replaceChildren(div);
}

function faqReveal() {
    const h1 = h1Elem.cloneNode();
    const div = document.createElement("div");
    const outer = div.cloneNode();
    const container = div.cloneNode();
    const faqContainer = div.cloneNode();
    const qContainer = div.cloneNode();
    const question = document.createElement("h5");
    const answer = document.createElement("p");

    container.classList.add("container-fluid");
    faqContainer.classList.add("row", "row-cols-1", "row-cols-md-2", "row-cols-lg-3", "g-5")
    qContainer.classList.add("col");
    h1.innerText = data[2].headline;
    h1.classList.add("my-4")

    data[2].items.forEach((item) => {
        const qc = qContainer.cloneNode();
        const qs = question.cloneNode();
        qs.innerText = item.question;
        const a = answer.cloneNode();
        a.innerText = item.answer;
        qc.append(qs, a);
        faqContainer.appendChild(qc);
        container.appendChild(faqContainer);
    });
    outer.classList.add("w-75", "d-flex", "flex-column", "justify-content-center");
    outer.replaceChildren(h1, faqContainer);
    content.replaceChildren(outer);
}


function galleryReveal() {
    const h1 = h1Elem.cloneNode();
    const div = document.createElement("div");
    const outer = div.cloneNode();
    const container = div.cloneNode();
    const innerContainer = div.cloneNode();
    const iContainer = div.cloneNode();
    const head = document.createElement("h5");
    const img = imgElem.cloneNode();

    container.classList.add("container-fluid");
    innerContainer.classList.add("row", "row-cols-1", "row-cols-md-2", "row-cols-lg-3", "g-5")
    iContainer.classList.add("col");
    h1.innerText = data[3].headline;
    h1.classList.add("my-4", "ms-2")

    data[3].images.forEach((image) => {
        const ic = iContainer.cloneNode();
        const h = head.cloneNode();
        h.innerText = image.alt;
        const i = img.cloneNode();
        i.src = image.src;
        i.alt = image.alt;
        i.title = image.alt
        ic.append(h, i);
        innerContainer.appendChild(ic);
        container.appendChild(innerContainer);
    });
    outer.classList.add("w-75", "d-flex", "flex-column", "justify-content-center", "pb-5");
    outer.replaceChildren(h1, container);
    content.replaceChildren(outer);
}



function codeReveal() {
    const h1 = h1Elem.cloneNode();
    const div = document.createElement("div");
    const outer = div.cloneNode();
    const container = div.cloneNode();
    const innerContainer = div.cloneNode();
    const colContainer = div.cloneNode();
    const head = document.createElement("h5");
    const aContainer = div.cloneNode();
    container.classList.add("container-fluid");
    innerContainer.classList.add("row", "row-cols-1", "row-cols-lg-3", "g-5")
    colContainer.classList.add("col");
    h1.innerText = data[4].headline;
    h1.classList.add("my-4", "ms-2")

    data[4].items.forEach((item) => {
        const subH = head.cloneNode();
        subH.innerText = item.h;
        const p = pElem.cloneNode();
        p.innerText = item.text;
        const lc = aContainer.cloneNode();
        lc.classList.add("d-flex", "flex-column", "flex-wrap")

        item.links.forEach((link, i) => {
            const a = aElem.cloneNode();
            a.href = link;
            a.innerText = item.linkNames[i];
            a.classList.add("link-light", "mb-2", "link-offset-2", "link-underline-opacity-25", "link-underline-opacity-100-hover");
            a.target = "_blank";
            lc.appendChild(a);
        });
        const cc = colContainer.cloneNode();
        cc.append(subH, p, lc);
        innerContainer.appendChild(cc);
    });

    container.appendChild(innerContainer);
    outer.classList.add("w-75", "d-flex", "flex-column", "justify-content-center", "pb-5");
    outer.replaceChildren(h1, container);
    content.replaceChildren(outer);

}


function contactReveal() {
    const h1 = h1Elem.cloneNode();
    const div = document.createElement("div");
    const outer = div.cloneNode();
    const container = div.cloneNode();
    const innerContainer = div.cloneNode();
    const colContainer = div.cloneNode();
    const head = document.createElement("h5");
    const aContainer = div.cloneNode();
    container.classList.add("container-fluid");
    innerContainer.classList.add("row", "row-cols-1", "row-cols-lg-3", "g-5")
    colContainer.classList.add("col");
    h1.innerText = data[5].headline;
    h1.classList.add("my-4", "ms-2")

    data[5].items.forEach((item) => {
        const subH = head.cloneNode();
        subH.innerText = item.h;
        
        const lc = aContainer.cloneNode();
        lc.classList.add("d-flex", "flex-column", "flex-wrap");

        item.lines.forEach((line) => {
            const p = pElem.cloneNode();
            p.innerHTML = line;
            p.classList.add("mb-1");
            lc.appendChild(p);
        });
        const cc = colContainer.cloneNode();
        cc.append(subH, lc);
        innerContainer.appendChild(cc);
    });

    container.appendChild(innerContainer);
    outer.classList.add("w-75", "d-flex", "flex-column", "justify-content-center", "pb-5");
    outer.replaceChildren(h1, container);
    content.replaceChildren(outer);
}



infoBtn.addEventListener("click", () => {
    infoReveal(0);
    updateNav(infoBtn);
});


aboutBtn.addEventListener("click", () => {
    infoReveal(1);
    updateNav(aboutBtn);
});

faqBtn.addEventListener("click", () => {
    faqReveal();
    updateNav(faqBtn);
});

galleryBtn.addEventListener("click", () => {
    galleryReveal();
    updateNav(galleryBtn);
});

codeBtn.addEventListener("click", () => {
    codeReveal();
    updateNav(codeBtn);
});

contactBtn.addEventListener("click", () => {
    contactReveal();
    updateNav(contactBtn);
});

infoReveal(0);