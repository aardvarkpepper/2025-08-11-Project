Cats of the World
![Cats of the World](image.png)
Image credit: Google Gemini AI.

## Setup

This project is best viewed with Chrome, due to CSS styling that may not work with other browsers.

Starting in base directory, started setting up project with

npm create vite@latest 2025-08-11-Project -- --template react-ts
cd 2025-08-11-Project
npm install
npm install react-router-dom

From there, I changed index.html to update the title shown in browser tab, and later pasted in code to use Google fonts.  Then updated src>main.tsx to import BrowserRouter, and wrap App.

## Live Demo

https://reliable-maamoul-e075ef.netlify.app/

## Development Process

Per assignment instructions, I started from Frontend Mentor 'challenge' at http://frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca.  I read through the instructions to get an idea of how the project would need to be built.  Thought about how data would be passed from one element to another, how users would pass from viewing one element to another.  Then thought about initial styling; how elements would need to be structured to conform with dynamic styling when window size changed.

## Challenges Faced

A few minor challenges, mostly from unfamiliarity or insufficient ideation.

For example, I hadn't thought through how useFetch would pass data from one element to the next; I used useFetch in two different places thinking state would transfer, but turns out each instantiation is different.  I could have switched to simple passing state up and down, but implemented a context and provider for practice.

Tweaking CSS was a bit of a bother, not because of any technical challenge, but due to lack of specifications.  Frontend Mentor did not provide enough detail or examples to handle edge cases, or generally instructions on dynamic resizing in a range of window sizes.  For example, most countries in full screen display the flag to the left of printed material, but China has fourteen neighboring countries, causing flex-wrap to display the flag above printed material.  Alternately, changing the printed material to exceed the y-axis dimensions of the flag would have broken the mold, only in a different way.  Nepal has a flag different to the more common rectangular type.

Color contrast between flags and the background colors was a bit of an issue too.  Monaco has a flag with white on an edge, and a squarish shape.  Germany has a flag with black on the edge and a lengthy rectangular shape.

Typescript a bit of a bother too, mostly defining types and such.  After practice through previous assignments (and this assignment), I've gotten to being able to resolve errors that pop up.

Bit of a odd spot where I used the .json provided by Frontend Mentor, then switched to fetch, and discovered the two had different data structures.

Netlify will not deploy code that is considered to have Typescript 'errors', even if those errors do not prevent code from being run, including variables not being used even in context files.  When this happens, the deploy seems to be 'deploying'.  After twenty minutes had passed, I poked things and discovered the deploy hadn't worked; I changed code to suit.

## Solutions Implemented

It works pretty much as intended.  Could have put in a jolly lot more work to get pixel-perfect results, but the assignment isn't graded on those criteria.

There are some oddities, like accounting for irregular flag sizes, accounting for flags with white or black on their edges, countries with long names.  I think I could use HTML Canvas to sample colors and get appropriately contrasting colors, or write exceptions.  However, I left off as switching to dark mode typically makes dimensions clear.

## Potential Improvements

There's some oddities like entering 'mur' in the search field displays the country of Comoros, 'ham' displays the country of Bahamas, and so on.  This is reflective of inputs/outputs of the API, nothing to do with the implementations I wrote.  The behavior could be explained better to users, but doing so was outside the scope of the assignment.

Error functions work as intended, but are a bit plain to my mind.  I suppose that's all right.

## Resources

Used code I'd written in previous assignments, particularly Module 10 Skills Based Assessment.

https://htmlcolors.com/hsl-to-hex
https://fonts.google.com/icons
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import/with
https://www.geeksforgeeks.org/reactjs/react-onkeydown-event/
https://css-tricks.com/dropdown-default-styling/
https://developer.chrome.com/blog/a-customizable-select
https://stackoverflow.com/questions/65823778/how-can-i-define-type-for-setstate-when-react-dispatchreact-setstateactionstri
https://www.w3schools.com/css/css3_object-fit.asp
https://www.quora.com/How-do-you-fix-a-declared-but-its-value-is-never-read-false-positive-error-in-Typescript

Note:  Developer stated huge bandwidth consumption and cost were ongoing issues, so updated fetch methods to request only required data.
https://gitlab.com/restcountries/restcountries/-/issues/265
https://www.worldatlas.com/articles/what-languages-are-spoken-in-bosnia-and-herzegovina.html
https://typeofnan.dev/how-to-add-thousandths-place-comma-every-three-digits-in-javascript/

## Design Decisions - Select Styling With Recent Chrome Changes

Select (dropdown) options apparently cannot be normally customized with CSS styling, possibly for security reasons.  The Frontend Mentor uses a dropdown with CSS styling, possibly created with div tags and customized behavior.

However, select elements are identified and used by tools like screen readers.  Customized controls and ARIA labeling may be used with customized divs to improve accessibility, but I've read screen readers may not account for ARIA labeling.

So, I went with a select element, styling with recent implementations in Chrome that may not work with other browsers, per https://developer.chrome.com/blog/a-customizable-select.  Even in Chrome, some functionality of select elements is apparently disabled, but the code functions as required for this assignment.

## Design Decisions - Changes to Frontend Mentor Sample

The example provided by Frontend Mentor showed Belgium's 'native name' as België.  This is from Dutch, the most commonly spoken language in Belgium, listed third(last) in nativeName.

The pattern would seem to use the last element in native Name.  But Bosnia and Herzegovina's most commonly spoken language is Bosnian, listed first in nativeName.  (Most common is Bosnian, per https://www.worldatlas.com/articles/what-languages-are-spoken-in-bosnia-and-herzegovina.html).

There is no unique field indicating a country's primary language.

The example provided by Frontend Mentor showed Belgium's border countries as France, Germany, and Netherlands.  Luxembourg was not included.  However, I could find no reason why Luxembourg was not included, so included it in this assignment.  All countries listed in the database as bordering a country are listed.

There are further some minor formatting differences.

The completed code, however, is responsive to window size changes, and pixel-perfect recreation is *not one of the grading criteria*.  (If it were, I would merely do media queries and set up two distinct views, using Figma for near-pixel-perfect results as with previous assignments.)

I did use Figma to get exact pixel dimensions for some elements and spacing.

https://www.figma.com/design/X9pKhlTqwUZCOfAU1mpx1J/Projects?node-id=0-1&t=hxQ8HNNd3q5581In-1