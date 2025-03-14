# Ember.js Trial Task - Warehouse Manager

This application manages products and warehouse positions using **Ember.js**.

## Table of Contents

- [Installation](#installation)
- [Data Handling](#data-handling)
- [Functionality](#functionality)
- [Technologies](#technologies)
- [Usage](#usage)
- [Development](#development)
- [Planned Features](#planned-features)
- [Author](#author)

## Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/daevne/warehouse-manager.git
   cd warehouse-manager
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Start the application:**

   ```sh
   ember serve
   ```

   The project will be available at **[http://localhost:4200/](http://localhost:4200/)**.

## Data Handling

The application loads products and warehouse positions from a static JSON file (`/data/mock-data.json`). Data management is handled by the **DataHandlerService** in Ember.js. Products and positions are stored in the **Ember Store**, and modifications are saved in **localStorage**.

### Data Loading Process:

1. On startup, the app checks if there are saved positions in **localStorage**.
2. If saved data exists, it is used; otherwise, data is fetched from the JSON file.
3. The fetched data is pushed into the Ember Store for easy access.

### Updating Positions:

- Users can modify the warehouse position of products.
- Changes are immediately saved in **localStorage** and reflected in the UI.
- The Ember Store is used for data updates.

## Functionality

✅ Display products\
✅ Modify product warehouse positions\
✅ Search products in the product list\
✅ Save data in **localStorage**\
✅ Use **Ember Store** for data management\
❌ (Not yet) Adding new products and positions\
❌ (Not yet) Validation\

## Technologies

- **Frontend:** Ember.js (Octane edition)
- **Styling:** Boostrap CSS
- **Data Management:** Ember Data, Ember Store, localStorage
- **Linting & Formatting:** ESLint, Stylelint, Prettier, Ember Template Lint
- **Testing:** QUnit, Ember Test Helpers
- **Build Tools:** Ember CLI, Webpack

## Usage

- The homepage displays a grid layout with product cards, each showing their warehouse position.
- Positions can be modified, with drag and drop and changes are saved immediately.
- A separate page provides a list of products with a search function, allowing users to select a new position from a dropdown menu.
- Data is loaded from a static JSON file and managed through the Ember Store.

## Development

If you want to contribute:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-new-functionality`
3. Implement changes and commit: `git commit -m "Added new functionality"`
4. Push the changes: `git push origin feature-new-functionality`
5. Open a Pull Request.

## Planned Features

🚀 **Implement Mirage.js** for dynamic API simulation\
🧪 **Add tests** using QUnit and Ember Testing Library\
📌 **Improve UI/UX** with enhanced styling and usability\
🔄 **Optimize data handling** for better performance and scalability
