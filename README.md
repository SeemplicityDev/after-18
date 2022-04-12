# After-18

![Are you sure?](https://github.com/SeemplicityDev/after-18/blob/main/images/are-you-sure.png?raw=true)

## Brief

A browser extension that works only on Github’s “pull request” pages, and changes the text on the “Merge” button after a given hour (18:00 in our case) to remind the developer about the consequences of pressing that button.

## Installation Instructions

Clone the repository:

```sh
git clone https://github.com/SeemplicityDev/after-18.git
```

### Firefox

* Go to add-ons page (`about:addons`)
* Open "Tools for all add-ons" (the "cog" button next to "Manage Your Extensions), and select "Debug Add-ons"  
(or go directly to `about:debugging#/runtime/this-firefox` page )
* Click on `Load Temporary Add-on...`
* Navigate to the `after-18` directory and select `manifest.json` file

### Chromium-based browsers

* Open Chrome
* Go to the Chrome Extensions page (`chrome://extensions/`)
* Click on `Load unpacked`
* Choose the `after-18` directory
