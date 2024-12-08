// CategoryPage.js
import React from 'react';

const CategoryPage = () => {
  // If you want to display a specific category without parameters, you can hardcode it
  const category = 'YourCategory'; 

  return (
    <div style={{ color: 'white', textAlign: 'center', marginTop: '50px' }}>
      <h1>{category} Category Page</h1>
      {/* Add content for the category page */}
    </div>
  );
};

export default CategoryPage;
