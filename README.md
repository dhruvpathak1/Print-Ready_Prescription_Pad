# Prescription Pad

A streamlined, local web application designed for Smiles Dental Clinic to generate and print medical prescriptions efficiently.

## 📋 Table of Contents
- [Project Description](#project-description)
- [Key Features](#key-features)
- [Technical Stack](#technical-stack)
- [Dependencies](#dependencies)
- [Project Structure](#project-structure)
- [How to Run](#how-to-run)
- [Usage Guide](#usage-guide)

## 📖 Project Description
The Prescription Pad is a specialized web tool built to simplify the medical prescription workflow. It allows healthcare professionals to quickly select medications, manage patient details, and produce professional-grade printed prescriptions. The application focuses on clean layout and optimized print formatting, ensuring that prescriptions are clear and legible.

## ✨ Key Features
- **Intuitive Selection:** Grouped categories for Antibiotics, Painkillers, Gum paint, Toothpaste, and Miscellaneous medications.
- **Dynamic Entries:** Add multiple medications from pre-defined lists or enter custom "Extra" items.
- **Live Preview:** View added medications in real-time before printing.
- **Print Optimization:** Utilizes specialized Print CSS to ensure the layout fits perfectly on a single page with professional signature placement.
- **Automated Workflow:** Re-initializes for the next patient automatically after a print action.
- **Responsive Layout:** Clean design that works well in modern browsers.

## 🛠 Technical Stack
- **HTML5:** Semantic structure for the prescription form and layout.
- **CSS3:** Advanced styling including `@media print` rules for professional output.
- **JavaScript (Vanilla):** Refactored and modular logic for dynamic content management.

## 📦 Dependencies
This project is built using vanilla technologies and has no external package dependencies, making it lightweight and easy to deploy.
- **Google Fonts:** Uses "Open Sans" for professional typography (requires internet connection).

## 📂 Project Structure
```text
.
├── assets/
│   └── images/
│       ├── icon.ico    # Application Favicon
│       └── icon.jpg    # Alternative Icon Asset
├── css/
│   ├── styles.css     # Main application styles
│   └── print.css      # Print-specific optimizations
├── js/
│   └── script.js      # Core application logic
├── index.html         # Main entry point
└── README.md          # Project documentation
```

## 🚀 How to Run
1. Clone or download the repository to your local machine.
2. Open `index.html` in any modern web browser (Chrome, Firefox, Edge, etc.).
3. No server setup or build process is required.

## 📝 Usage Guide
1. **Patient Details:** Enter the patient's name and select their gender.
2. **Adding Medications:**
   - Use the dropdown menus to select common medications.
   - Click the "Add" button next to the selection.
   - Use the "Extra" text field for custom medications not in the lists.
3. **Managing List:** Use the "Delete" button to remove the last added item if a mistake is made.
4. **Printing:** Click the "Print" button. The application will format the items and open the browser's print dialog.
5. **Reset:** The page will automatically refresh after printing, ready for the next patient.

---
*Developed for professional clinical use.*
