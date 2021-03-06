# Frontend Mentor - Sunnyside agency landing page solution

This is a solution to the [Sunnyside agency landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/sunnyside-agency-landing-page-7yVs3B6ef). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Links

- Live Site URL: [Add live site URL here](https://sunnyside-kaja.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Desktop first, CSS- mobile first workflow
- Accessibility in mind

### What I learned

- Purely decorative images need an empty alt tag

```html
<img src="./decorative-img.jpg" alt="" />
```

- You can't change color of an svg used in an img tag with the color attribute in CSS, but You can make a filter for it. It's really easy as you can use a site like the one I used: https://codepen.io/sosuke/pen/Pjoqqp

```css
/*prettier-ignore */
.custom-filter {
  filter: 
  /* first make into black */
  brightness(0) saturate(100%) 
  /* now make it the color you want */
  invert(48%) sepia(56%) saturate(305%) hue-rotate(118deg) brightness(72%) contrast(94%);
}
```

- If there are more than 1 navigations you need to give them aria-labels

```html
<nav aria-label="Primary navigation">...</nav>
```

- An article is not a landmark in it self so it needs to be put into one

- Don't put the word "link" into the alt description of imgs in links, otherwise a screen reader will read (example:) "Facebook link link"

- Although you can't transition the display property you can create an animation for it (so for example you can change from display: none in a smooth fashion)

```css
@keyframes fadeIn {
  0% {
    display: none;
    opacity: 0;
    transform: translateX(1000%);
  }
  100% {
    display: inline-block;
    opacity: 1;
    transform: translateX(0);
  }
}
```
