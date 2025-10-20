# Profile Card Component

A responsive, accessible profile card component built with semantic HTML, CSS, and vanilla JavaScript.

## Live Demo

[View Live Demo]https://emmytronix.github.io/Profile-Card/

## Features

- Semantic HTML structure
- Fully responsive design (mobile, tablet, desktop)
- Accessible to keyboard users and screen readers
- Form validation with accessible error messages
- Dark mode support
- Dynamic time display in milliseconds
- Testable with data-testid attributes for automated testing

## Project Structure

### Pages
- `index.html` - Profile Card (Stage 0)
- `contact.html` - Contact Form with validation (Stage 1)
- `about.html` - About Me reflective page (Stage 1)

### Assets
- `styles.css` - Responsive styling with modern CSS
- `script.js` - JavaScript for profile card functionality
- `contact.js` - JavaScript for form validation

## Requirements Met

### Profile Card (Stage 0)
- ✅ All required elements with proper data-testid attributes
- ✅ Semantic HTML (article, figure, nav, section, headers)
- ✅ Current time displayed in milliseconds using Date.now()
- ✅ Avatar with alt text
- ✅ Social links opening in new tabs with security attributes
- ✅ Separate hobbies and dislikes lists
- ✅ Keyboard navigation with visible focus styles
- ✅ Responsive layout at various breakpoints

### Contact Form (Stage 1)
- ✅ Form with all required fields and proper data-testid attributes
- ✅ Client-side validation with appropriate error messages
- ✅ Accessible form with labels and aria-describedby for errors
- ✅ Success message only shown after valid submission
- ✅ Fully keyboard accessible
- ✅ Responsive design

### About Me Page (Stage 1)
- ✅ All required sections with proper data-testid attributes
- ✅ Semantic structure with main, section, headings
- ✅ Reflective content in each required area
- ✅ Responsive design
- ✅ Accessible navigation

## Running Locally

1. Clone this repository:
```
git clone https://github.com/your-username/profile-card.git
```

2. Navigate to the project folder:
```
cd profile-card
```

3. Open `index.html` in your browser:
- Double-click the file in your file explorer, or
- Use a local development server like Live Server (VS Code extension)

## Testing

This component is built with testability in mind. All elements have the required data-testid attributes:

- Profile card: `test-profile-card`
- User name: `test-user-name`
- Biography: `test-user-bio`
- Current time: `test-user-time`
- Avatar: `test-user-avatar`
- Social links container: `test-user-social-links`
- Individual social links: `test-user-social-github`, etc.
- Hobbies list: `test-user-hobbies`
- Dislikes list: `test-user-dislikes`

## Customization

To customize the profile information:

1. Update the user details in `index.html`
2. Replace the avatar image URL with your own
3. Add or remove social media links as needed
4. Modify the hobbies and dislikes lists

## Browser Support

This component works in all modern browsers (Chrome, Firefox, Safari, Edge).