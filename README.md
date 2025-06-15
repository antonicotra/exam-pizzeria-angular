# 🍕 Angular Pizzeria Exam Project 🍕

This is a simple pizzeria web application built with Angular, created as a class exam project. It allows users to browse a menu, view pizza details, add items to a cart, and simulate an order.

## Prerequisites

Before you begin, ensure you have the following installed:
*   **Node.js**: This includes `npm` (Node Package Manager).
*   **Git**: (Optional, if you prefer to clone the repository). You can download Git from [git-scm.com](https://git-scm.com/). Alternatively, you can download the project as a ZIP file directly from GitHub.

## Getting Started

1.  **Get the project code**:
    *   **Option 1: Clone the repository (requires Git)**:
        Open a terminal and run (if applicable, replace with your repository URL if you host it elsewhere):
        ```bash
        # git clone https://example.com/your-repo.git
        # cd esame-pizzeria-angular
        ```
    *   **Option 2: Download ZIP**:
        Go to the GitHub repository page and download the project as a ZIP file. Extract it to your desired location. Then, open a terminal in that extracted folder.

    If you are working directly in the project folder you received (e.g., not from GitHub), you can skip this step.

2.  **Install dependencies**:
    Open a terminal in the project's root directory and run:
    ```bash
    npm install
    ```

3.  **Run the development server**:
    Execute the following command to start the application:
    ```bash
    ng serve
    ```
    Navigate to `http://localhost:4200/` in your browser. The app will automatically reload if you change any of the source files.

## Tailwind CSS Setup

This project uses Tailwind CSS for styling. It was configured by:
1.  Installing Tailwind CSS and its peer dependencies: `npm install tailwindcss @tailwindcss/postcss postcss --force`
2.  Creating a [`.postcssrc.json`](./.postcssrc.json) file.
3.  Importing Tailwind CSS in [`src/styles.css`](src/styles.css).
