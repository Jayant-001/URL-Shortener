# [URL Shortener Project](https://shorturl-01.vercel.app/)

## Overview
This project is a URL shortener web application that allows users to create short URLs for long links. It features Redis caching for improved performance, analytics to track short URL clicks, and seamless redirection from short to long URLs.

## Features
- **Short URL Generation:** Easily create short URLs for long links.
- **Redis Caching:** Utilizes Redis to cache user requests for quicker response times.
- **Redirection:** When users enter a short URL, they are redirected to the corresponding long URL.
- **Analytics:** Provides insights into short URL usage, including click timestamps and total clicks.

## Technologies Used
- **Frontend:** Next.js, Tailwind CSS, React.js, React Query, Axios, IO Redis, React hot toast
- **Backend:** Node.js, nanoid (to generate a unique ID)
- **Database:** Mongo DB
- **Caching:** Redis
- **Other Technologies:** ESLint

## Setup Instructions
1. Clone the repository: `git clone https://github.com/Jayant-001/URL-Shortener`
2. Install dependencies: `npm install` or `yarn install`
3. Configure environment variables provided in `.env.example` file.
4. Run the application: `npm run dev` or `yarn run dev`


### Environment Variables

1. REDIS_URL
2. SERVER_URL
3. NEXT_PUBLIC_SERVER_URL
4. MONGO_URL


## Usage
- To create a short URL, Go to https://shorturl-01.vercel.app, Paste long URL and click on `Shorten URL` button to get short URL.
- To access analytics, click on `Get your URL analytics` on Home page or go to https://shorturl-01.vercel.app/analytics, paste your short key and click on `Search` button.


## Contribution
Contributions are welcome!


## Feedback

If you have any feedback, please reach out to me at jayant.gupta.dln@gmail.com

##

Connect with us:
- Email: [jayant.gupta.dln@gmail.com](jayant.gupta.dln@gmail.com)
- LinkedIn: [@jayant-cse](https://www.linkedin.com/in/jayant-cse/)
- Website: [https://jayant-gupta.vercel.app](https://jayant-gupta.vercel.app)