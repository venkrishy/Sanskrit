# Plan to Update the Left Navigation Bar

This plan outlines the steps to update the left navigation bar to match the contents of the `curriculum` folder.

## 1. Analyze Existing Code

*   Examine the code for the left navigation bar to understand its current implementation.
*   Locate the relevant component file, likely in `src/components` or `src/pages`.
*   Identify the data source for the navigation links.

## 2. Generate New Navigation Structure

*   Create a new data structure (e.g., an array of objects) that represents the desired navigation hierarchy based on the `curriculum` folder.
*   Each object in the data structure will contain:
    *   `title`: The title for the navigation link.
    *   `path`: The path to the corresponding markdown file.
    *   `children`: An array of child objects for nested navigation.

## 3. Update the Navigation Component

*   Replace the old, hardcoded navigation structure with the new, dynamically generated one.
*   Modify the component's code to read from the new data structure.
*   Render the navigation links recursively to handle nested items.

## 4. Implement File Loading and Display

*   Add functionality to fetch the content of the selected markdown file when a navigation link is clicked.
*   Use a library like `react-markdown` to render the markdown content as HTML.
*   Display the rendered HTML in the main content area of the page.

## 5. Create a script to generate the curriculum data

*   Create a script that will scan the `curriculum` directory and generate a JSON file containing the navigation structure.
*   This script will be run manually whenever the `curriculum` folder is updated.
*   The generated JSON file will be imported into the navigation component.
