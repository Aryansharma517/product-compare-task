# Product Compare Task

This is a Vite-based React project that allows users to view product details and compare products using Ant Design tables.

## Features
- Navbar and Sidebar navigation
- Product Details page with an Ant Design table
- Compare Products page for side-by-side comparison
- Sorting and pagination for product details
- Prevents duplicate product comparisons
- Highlights compared attributes
- Persistent theme using local storage
- Hosted on Vercel

## Live Demo
[View Deployed App](https://product-compare-task.vercel.app/)

## Installation

1. Clone the repository:
   ```sh
   git clone git@github.com:Aryansharma517/product-compare-task.git
   cd product-compare-task
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```

## API Usage
This project fetches product data from:
[DummyJSON API](https://dummyjson.com/products)

### Displayed Attributes:
- Title
- Description
- Price
- Discount Percentage
- Brand
- Category
- Image (thumbnail)

## Deployment
The project is deployed on Vercel. To deploy manually:
1. Install Vercel CLI:
   ```sh
   npm install -g vercel
   ```
2. Run the deployment command:
   ```sh
   vercel
   ```

## Technologies Used
- Vite
- React
- React Router
- Ant Design
- Vercel (for deployment)

## Contributing
Feel free to fork the repository and submit a pull request!

