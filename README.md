# URL Shortener Project

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

## Usage
- To create a short URL, [describe the process].
- To access analytics, [provide instructions on how users can view analytics].
- ...

## Contribution
Contributions are welcome! Please follow the [Contribution Guidelines](CONTRIBUTING.md).

## License
This project is licensed under the [Specify License] - see the [LICENSE.md](LICENSE.md) file for details.
