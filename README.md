# TravelTrucks

TravelTrucks is a modern single-page web application for browsing and booking campers. Users can explore available campers, filter them by preferences, save favorites, view detailed information, and submit a booking request through an intuitive interface.

> **Current version:** Desktop-first. Responsive layouts for tablet and mobile devices are planned as a future enhancement.


## Features

- Browse available campers
- Search and filter campers by:
  - Location
  - Vehicle type
  - Equipment
- Detailed camper page with:
  - Image gallery
  - Description
  - Specifications
  - Reviews
  - Booking form
- Booking form validation
- Success notifications using React Hot Toast
- Loading states
- Error handling
- Custom 404 page
- Empty state screens
- Client-side routing with React Router


## Tech Stack

### Frontend

- React
- Vite
- React Router
- Redux Toolkit
- Axios
- Formik
- Yup

### Styling

- CSS Modules

### UI

- React Hot Toast


## Project Structure

```
src/
│
├── api/
├── assets/
├── components/
├── pages/
├── redux/
├── utils/
└── styles/
```

The application follows a feature-based architecture with Redux Toolkit for state management and reusable UI components.


## Getting Started

### Clone repository

```bash
git clone https://github.com/SwissLana/travel-trucks.git
cd travel-trucks
```

### Configure environment variables

The project uses environment variables for API configuration.

Create a `.env` file in the project root (or copy `.env.example`):

```env
VITE_API_BASE_URL=https://66b1f8e71ca8ad33d4f5f63e.mockapi.io
```

### Install dependencies

```bash
npm install
```

### Run development server

```bash
npm run dev
```

### Build production version

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```


## Deployment

The application is configured for deployment on **Vercel**.

Routing support is enabled through `vercel.json`, allowing direct navigation to nested routes such as:

```
/catalog
/catalog/:id
```


## Main Functionality

### Home

Landing page with project introduction and quick navigation.

### Catalog

Browse all available campers with advanced filtering.

### Camper Details

Each camper includes:

- Gallery
- Price
- Rating
- Location
- Description
- Features
- Vehicle specifications
- Reviews
- Booking form

### Booking

Users can submit a booking request using a validated form.


## Future Improvements

Planned improvements include:

- Responsive layout for tablet and mobile devices
- Search optimization
- Pagination with infinite scrolling
- Dark mode
- Unit and integration tests
- Internationalization (i18n)


## Author

**Lana Hürzeler**

Frontend Developer | React | JavaScript | Redux Toolkit

GitHub: https://github.com/SwissLana

## License

This project was created for educational purposes as part of the Neoversity Front-End Development program.