'use strict';

// Now this time, we will actually start by selecting everything that we're gonna need  for this project so that's usually what we do when we build a project like this. So we select the elements that we need, and then we store the selections into variables. Okay, and then we can use them over and over again.  So that's way better than selecting the same elements over and over again, like we did in the last project.
// So again, we need to select the modal, the overlay, the close modal button, and then of course, the show modal buttons.
// we select an element using the selector, but then this time, we actually store the results of the selection so the selected element in this variable okay.
/*
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

const openModal = function () {
  //log to the console the text content of the button that was clicked.
  // now each of these three buttons here has their own event handler function attached to it. We attached this function here now to all of the three buttons.
  //And so now we take that selected element and on there we can read the class list property. Just keep in mind that we do not use the dot here. So the dot is only for the selector. But here we are not anymore selecting anything. We're just passing in the name of the class.
  modal.classList.remove('hidden');
  //adding and removing classes, like we just did here, is the main way in which we change styles on websites.
  // So, usually when you need to manipulate styles on a page, then always just export the styles into a class, and then use the class just like we did here.
  overlay.classList.remove('hidden');
  //so now this variable here is what holds the function value. So what I can do now is to here specify that closeModal function. we also made it more readable. More expressive, and more declarative.  So right now, when we read this code here, it's a lot easier to understand.
};
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i += 1)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// So to recap, if you want to use the same function in multiple event listeners, then you need to specify that function as a separate function, like this one here. And then you can pass that function as an argument to multiple "add event listener" methods.
*/

// 81. Handling an “Esc”, Keypress Event
// Now, keyboard events are so-called global events because they do not happen on one specific element..
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
// console.log(btnsOpenModal);

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i += 1)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

//So by using add a event listener here on the document we are basically listening for events everywhere. So no matter where they happen on the page, they will always trigger the event handler that we're going to specify here. There are actually three types of events for the keyboard. There is the key down the key press or the key up.
// so the name of this event is just key down and this event will happen as soon as we hit any key on the keyboard.
// So how will we know which key was actually pressed If this event here happens for all the keys? Well the information about which key was pressed will be stored in the event that is going to occur as soon as any key is pressed.
//So remember, as I hit any key here on the keyboard, a key down event is generated and our list and our function here. So our handler function is waiting for that event to happen. And anytime that an event like this occurs JavaScript does in fact generate an object. And that object contains all the information about the event itself, and we can then actually access that object indeed event handler function. And anytime that an event like this occurs JavaScript does in fact generate an object. And that object contains all the information about the event itself, and we can then actually access that object indeed event handler function.
// So again, when an event happened we can have access to information about that event in the event handler function just like this one. Now up until this point, we have never looked at that event.  We only just listened for it and then reacted to it. But this time we actually need to look at the event object in order to figure out which key was pressed. Well, what we need to do is to give this function here a parameter.
// So then as the event occurs JavaScript, we'll call this function with the event object as an argument. And once more, this works because we do not call this function here or selves. We do not call the function. We only define it here. So we say Hey, JavaScript call function when a key down event happens. And when you do so please pass in the event object as an argument.
document.addEventListener('keydown', function (e) {
  console.log(e.key);
  // if the pressed key is escape and if the model does not contain the hidden class, then execute disfunction to close the model().
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
