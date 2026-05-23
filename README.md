# Planetary Data Explorer

A responsive React-based web application that presents detailed information about the planets in our solar system through interactive UI sections, data tables, videos, and contact forms.

The project focuses on visualizing planetary facts such as mass, diameter, gravity, and density in a clean and user-friendly format. It was developed collaboratively by a 6-member team using GitHub branches, pull requests, and code reviews.


## Live Deployment

🔗 Live Site:  
https://novara-cohort-capstone-project-group6.netlify.app/



# Team Members

| Name | Role | GitHub |
|------|------|------|
| **Nnamdi** (Team Lead) | Project Structure & Core Setup | https://github.com/Cyphar01 |
| **Ian** (Assistant Team Lead) | PR Reviews & Merging | https://github.com/Monarch-techs |
| **Abdulrahman** | CTA & Entry Setup | https://github.com/abdulrahmanolodeankirun-byte |
| **Samuel** | Hero & Planet Cards | https://github.com/aghasamuel15 |
| **Oladola** | Navigation & Footer | https://github.com/oladola-dev |
| **Emmanuel** | Planet Section | https://github.com/EMMANUELAYOOLA |


# Project Contributions

## Nnamdi — Team Lead
Handled the foundational project setup and styling architecture.

### Contributions
- Project structure setup
- `index.html`
- `Api.jsx`
- `App.css`
- `index.css`
- `VideoSection.jsx`
- General project coordination

### Additional Fixes
Resolved the rendering issue by correcting the export statement in:
`Hero.jsx`
export default Hero;


## Ian — Assistant Team Lead

Responsible for pull request reviews, code merging, and additional project features.

## Contributions
ContactForm.jsx
App.jsx
Added:
favicon.ico
favicon.png
Additional Fixes

Resolved the form submission issue that previously returned:
Something went wrong


## Abdulrahman
## Contributions
CTA.jsx
main.jsx

## Samuel
## Contributions
Hero.jsx
PlanetCard.jsx

## Oladola
## Contributions
Footer.jsx
Header.jsx

## Emmanuel
## Contributions
PlanetSection.jsx


## Technologies Used
React.js
JavaScript (ES6)
CSS3
HTML5
Git & GitHub
Netlify Deployment


## Features
Responsive Navbar
Hero Section
Planetary Data Table
Dynamic Planet Cards
Video Section
Responsive Contact Form
Footer Section
API Data Fetching
Mobile Responsive Design
Smooth Scroll Navigation


## Challenges Encountered

During development, the team encountered a few issues:

1️⃣ Application Not Rendering

The application failed to render due to an incorrect export statement in Hero.jsx.

Fix

Corrected the export line to:
export default Hero;

Resolved by:

Nnamdi

2️⃣ Contact Form Submission Error

The contact form was always returning:
“Something went wrong”
CORS errors during form submission

The issue happened because the frontend React application was trying to call the external form API directly from the browser.

Browsers block many external requests for security reasons using a policy called CORS (Cross-Origin Resource Sharing).

Because the external API did not allow requests directly from our frontend domain, the request failed before reaching the API successfully.

Why We Chose the Netlify Function Solution
Since the project is deployed on Netlify, we used a Netlify Serverless Function as a middle layer.

Instead of:

Frontend → External API ❌

We changed it to:

Frontend → Netlify Function → External API ✅

This works because:

The browser only talks to our own Netlify backend
Netlify server functions do not suffer from browser CORS restrictions
the serverless function performs a secure server-to-server request
This is cleaner, safer, and production-friendly.

How We Implemented the Fix
1. Created a Netlify Function
We created:

netlify/functions/submit.js
The function:

receives form data from the frontend
forwards the data to the external API
returns success/error responses back to the frontend

2. Fixed the Module Error
Initially we got this warning:

CommonJS "exports" variable is treated as a global variable
This happened because the project uses:

"type": "module"
inside package.json.

So Netlify expected ES Modules syntax instead of CommonJS syntax.

We fixed it by changing:

exports.handler = async ()
to:

export async function handler()

3. Fixed the JSON Parse Error
We later encountered:

SyntaxError: Unexpected end of JSON input
This happened because the function tried to parse an empty response as JSON.

We fixed it by:

checking the response properly
handling errors safely
avoiding invalid JSON parsing
After this, the form submission started working correctly.

Resolved by:

Ian

## How to Run the Project Locally

1️⃣ Clone the Repository:

git clone https://github.com/Cyphar01/Novara-Cohort-Group-6-Capstone-Project.git

2️⃣ Pull Latest Changes:

git pull

3️⃣ Switch To Your Branch:

git checkout your-branch-name

4️⃣  Install Dependencies:

npm install

5️⃣ Run Netlify Dev Server:

npx netlify dev

This is important because:

regular npm run dev only runs Vite
Netlify Functions require the Netlify development server
The app will usually run on:

http://localhost:8888


## Project Objective

The goal of this project was to collaboratively build a modern, responsive React application while practicing:

Git branching workflow
Pull requests
Team collaboration
Component-based architecture
Responsive UI development
API integration


## Learning Outcomes

Through this project, the team gained experience in:

Working with React components
Managing GitHub collaboration workflows
Resolving merge conflicts
Debugging React applications
Building responsive interfaces
Deploying applications with Netlify


## Acknowledgements

Special thanks to all team members for their collaboration, reviews, debugging efforts, and successful deployment of the project.