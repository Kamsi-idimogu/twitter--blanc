# Twitter blanc

A simple full stack Twitter Clone application. The application allows users to create accounts, post tweets, follow other users, and like tweets.

## Technology Stack

<div style="display: flex; justify-content: center; align-items: center; gap: 10px;">
  <img src="./img/react.svg" alt="react" width="20"/>
  <img src="./img/typescript.svg" alt="typescript" width="20"/>
  <img src="./img/nextjs.svg" alt="next js" width="20"/>
  <img src="./img/tailwindcss-icon.svg" alt="tailwind css" width="20"/>
  <img src="./img/prisma.svg" alt="prisma" width="20"/>
  <img src="./img/mongodb-icon.svg" alt="mongo db" width="10"/>
  <img src="./img/vercel-logo.svg" alt="vercel" width="40"/>
  <img src="./img/nodejs.svg" alt="node js" width="30"/>
  
</div>


- **React** - A JavaScript library for building user interfaces.
- **Next.js** - A minimal and flexible Node.js web application framework that provides a set of robust features for web and mobile applications.
- **Node.js** - An open-source, cross-platform JavaScript runtime environment that executes JavaScript code outside a web browser.
- **MongoDB** - A document-oriented NoSQL database used for high volume data storage.

## Features
- Authentication system
- Notification system
- Following functionality
- Comments / Replies
- Likes functionality
- Image Upload using Base64 strings
- Prisma ORM with MongoDB
- Responsive Layout
- 1 To Many Relations (User - Post)
- Many To Many Relations (Post - Comment)
- Vercel Deployment

## Getting Started
Check out the [website](https://github.com/Kamsi-idimogu/twitter--blanc)

**Or**

Complete the following steps:

### Prerequisites
- Node v14.x

### Installation
1. Clone the repository
    ```sh
    git clone https://github.com/Kamsi-idimogu/twitter--blanc.git
    ```

2. Install dependencies in the client folder
    ```sh
    cd twitter-blanc
    npm i
    ```

3. Create a **'.env'** file in the client folder and add the following environment variables:
    ```sh
    DATABASE_URL=<your-mongodb-uri>
    NEXTAUTH_JWT_SECRET=<your-jwt-secret>
    NEXTAUTH_SECRET=<your-jwt-secret>
    ```

4. Start the app
    ```sh
    npm run dev
    ```
