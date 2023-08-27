/**
 * Here we're creating an array of strings that will contain all the image file
 * names we have. As we add more images to the `character-pics` folder, we will
 * add those file names here as well.
 *
 * We're using the `.map` function to iterate over the array and prepend the
 * folder name that the files are located in so we don't have to manually type
 * them out.
 *
 * Example:
 *
 * BEFORE - 'link-zelda-info.png'
 * AFTER  - './character-pics/link-zelda-info.png'
 *
 * Notice how we start with a string of just the file name but we transform it
 * to a string with the file path (folder name + file name).
 */
const images = [
  'ganon-zelda-info.png',
  'hestu-zelda-info.png',
  'impa-zelda-info.png',
  'link-zelda-info.png',
  'zelda-zelda-info.png',
].map(fileName => `./character-pics/${fileName}`)

const characterList = document.querySelector('#character-list')

/**
 * Here we're using another built-in array method in JavaScript - `.forEach` -
 * to iterate through our images array and do something for each item in the
 * array. This is the type of stuff that can be done with a for-loop, but it's
 * much cleaner to use built-in JavaScript array methods if you can.
 */
images.forEach(src => {
  /**
   * Create 2 DOM elements:
   * 1. An <li>, which is the list item
   * 2. An <img> which will display the image
   */
  const li = document.createElement('li')
  const img = document.createElement('img')

  // Set the image "src" property to the photo's file path in our system.
  img.src = src

  // Add a class name to the list item so we can target it with CSS later.
  li.classList.add('character-item')

  // Append the image to the list item - <li><img src="..." /></li>
  li.appendChild(img)

  /**
   * Append the list item to the unordered list in the DOM.
   * This will finally show the items on the screen!
   */
  characterList.appendChild(li)
})
