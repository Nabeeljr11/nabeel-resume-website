# Mohammed Nabeel K P - Personal Portfolio Website

A professional personal resume/portfolio website built with valid XHTML 1.0 Strict and CSS for a college web programming assignment.

## Website Structure

```
nabeel-resume-website/
├── css/
│   └── style.css          # External stylesheet for all pages
├── images/
│   └── (place profile.jpg here)
├── index.htm              # Home page with hero section
├── about.htm              # About page with education and skills
├── projects.htm           # Projects page with project cards
├── MyWork.htm             # My Work page with achievements and W3C validator
├── contact.htm            # Contact page with contact information
├── resume.pdf             # (place your resume PDF here)
└── README.md              # This file
```

## Pages Overview

1. **index.htm** - Home page with hero section, introduction, and quick information cards
2. **about.htm** - Detailed about section with education, technical skills, languages, and soft skills
3. **projects.htm** - Showcase of two major projects with technology tags and descriptions
4. **MyWork.htm** - Leadership, achievements, football accomplishments, and W3C XHTML validator badge
5. **contact.htm** - Contact information with email, phone, location, and nationality

## How to Run Locally

1. Clone or download this repository
2. Open any of the `.htm` files in a web browser (double-click the file)
3. Navigate between pages using the navigation menu

## XHTML Validation Instructions

### Validate Each Page Manually

Since the W3C validator cannot validate local files directly, you have two options:

#### Option 1: Upload Files to W3C Validator

1. Go to https://validator.w3.org/
2. Choose "Validate by File Upload"
3. Select each `.htm` file individually and upload
4. Check for validation errors and fix if any appear

#### Option 2: Host Online and Validate

1. Host the website (see GitHub Pages instructions below)
2. Navigate to each page in your browser
3. Use the W3C validator badge on MyWork.htm or manually enter URLs at https://validator.w3.org/

### Expected Validation Results

All pages should validate as **XHTML 1.0 Strict**. The validator on MyWork.htm includes an automatic referer check that will validate the current page when clicked.

## Adding Your Profile Photo

1. Place your profile photo in the `images/` folder
2. Name the file `profile.jpg`
3. The website will automatically display your photo instead of the placeholder
4. Supported formats: JPG, JPEG, PNG
5. Recommended size: 200x200 pixels (square)

## Adding Your Resume PDF

1. Create your resume in PDF format
2. Name the file `resume.pdf`
3. Place it in the root directory (same level as index.htm)
4. The "Download Resume" button on the home page will link to this file

## Hosting on GitHub Pages

### Step 1: Create a GitHub Repository

1. Go to https://github.com and sign in
2. Click the "+" icon and select "New repository"
3. Name the repository (e.g., `nabeel-resume-website`)
4. Make it public (required for free GitHub Pages)
5. Click "Create repository"

### Step 2: Upload Your Files

1. In your new repository, click "uploading an existing file"
2. Drag and drop all files and folders:
   - `css/` folder
   - `images/` folder (if you have profile.jpg)
   - All `.htm` files
   - `resume.pdf` (if you have it)
   - `README.md`
3. Click "Commit changes"

### Step 3: Enable GitHub Pages

1. Go to repository Settings
2. Click "Pages" in the left sidebar
3. Under "Source", select "Deploy from a branch"
4. Select "main" (or "master") branch and "/ (root)" folder
5. Click "Save"

### Step 4: Access Your Website

1. Wait 1-2 minutes for deployment
2. GitHub will provide a URL like: `https://yourusername.github.io/nabeel-resume-website/`
3. Open this URL in your browser to verify the website is live

## Verifying the Online URL

1. Open your GitHub Pages URL in a browser
2. Test all navigation links between pages
3. Check that the resume download link works (if resume.pdf is present)
4. Verify the profile photo displays (if profile.jpg is present)
5. Test the W3C validator badge on MyWork.htm:
   - Click the validator badge
   - It should open validator.w3.org and automatically validate MyWork.htm
   - The page should pass validation

## Testing the XHTML Badge on MyWork.htm

1. Open MyWork.htm in your browser (locally or online)
2. Scroll to the bottom of the page
3. Click the "Valid XHTML 1.0 Strict" badge
4. The W3C validator should open and validate the current page
5. Look for the green checkmark indicating valid XHTML 1.0 Strict

## Technical Specifications

- **DOCTYPE**: XHTML 1.0 Strict
- **Styling**: External CSS (css/style.css)
- **Pages**: 5 HTML pages
- **Responsive Design**: Mobile, tablet, and desktop compatible
- **Frameworks**: None (plain XHTML and CSS only)
- **JavaScript**: Not used (as per assignment requirements)

## Browser Compatibility

The website is designed to work on modern browsers:
- Chrome/Edge (recommended)
- Firefox
- Safari
- Opera

## Assignment Requirements Checklist

- ✅ Four separate HTML5 pages (actually five: index, about, projects, MyWork, contact)
- ✅ Valid XHTML markup on all pages
- ✅ One external cascading style sheet
- ✅ W3C validator compliance
- ✅ Responsive and professional design
- ✅ MyWork.htm page exists with exact name
- ✅ Valid XHTML validator icon/badge on MyWork.htm
- ✅ Validator badge links to validator.w3.org with automatic URL transfer
- ✅ No JavaScript (unless absolutely necessary)
- ✅ Semantic HTML elements used
- ✅ Clean, readable, commented code
- ✅ No frameworks (Bootstrap, Tailwind, React, etc.)
- ✅ No fake resume information
- ✅ Navigation bar on every page
- ✅ Relative links between pages
- ✅ Professional design suitable for CSE student

## File Details

### CSS Features
- CSS reset and normalization
- CSS variables for consistent theming
- Responsive grid and flexbox layouts
- Mobile-first media queries
- Professional color palette
- Accessible contrast ratios

### HTML Features
- XHTML 1.0 Strict DOCTYPE
- Proper namespace declaration
- All elements properly closed
- All attributes quoted
- Lowercase element and attribute names
- Alt attributes on all images
- Semantic heading hierarchy
- Accessible navigation

## Troubleshooting

### Validation Errors
If you encounter validation errors:
1. Check that all tags are properly closed
2. Verify all attributes are quoted
3. Ensure all ampersands (&) are escaped as &amp;
4. Check that all images have alt attributes
5. Verify the DOCTYPE is correct

### Broken Links
If links don't work:
1. Check that all files are in the correct directories
2. Verify file names match exactly (case-sensitive)
3. Ensure relative paths are correct

### Styling Issues
If CSS doesn't load:
1. Verify css/style.css exists
2. Check the link tag path in HTML files
3. Clear browser cache

## Contact

For questions about this website, please use the contact information provided on the contact page.

---

**Note**: This website was created as a college assignment for web programming. All information is based on the provided resume data.
