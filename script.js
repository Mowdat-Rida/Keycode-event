const insert = document.getElementById('insert')

window.addEventListener('keydown', (event) => {//(event): The parameter representing the event object that contains details about the event that occurred.
  insert.innerHTML = `
  <div class="key">
  ${event.key === ' ' ? 'Space' : event.key} 
  <smallboxes>event.key</smallboxes>
</div>

<div  class="key ">
  ${event.keyCode}
  <smallboxes>event.keyCode</smallboxes>
</div>

<div class="key">
  ${event.code}
  <smallboxes>event.code</smallboxes>
</div>
  `
})
//Template Literal Placeholder: Allows embedding JavaScript expressions inside the string. Whatever is inside $ {} will be evaluated and inserted into the string.
//If event.key is a space, it returns the string 'Space'; otherwise, it returns the actual key value.
//Inserts the value of event.keyCode into the HTML. keyCode is a numerical representation of the key pressed.

