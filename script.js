// We need to select the modal, the overlay, the close modal button, and then of course, the show modal buttons.
// we select an element using the selector, but then this time, we actually store the results of the selection so the selected element in this variable okay.

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
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

document.addEventListener('keydown', function (e) {
  console.log(e.key);

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// If you want to use the same function in multiple event listeners, then you need to specify that function as a separate function, like this one here. And then you can pass that function as an argument to multiple "add event listener" methods.

// 81. Handling an “Esc”, Keypress Event
// Now, keyboard events are so-called global events because they do not happen on one specific element..

// So by using add a event listener here on the document we are basically listening for events everywhere. So no matter where they happen on the page, they will always trigger the event handler that we're going to specify here. There are actually three types of events for the keyboard. There is the key down the key press or the key up.
// So the name of this event is just key down and this event will happen as soon as we hit any key on the keyboard.
// So how will we know which key was actually pressed If this event here happens for all the keys? Well the information about which key was pressed will be stored in the event that is going to occur as soon as any key is pressed.
// So remember, as I hit any key here on the keyboard, a key down event is generated and our list and our function here. So our handler function is waiting for that event to happen. And anytime that an event like this occurs JavaScript does in fact generate an object. And that object contains all the information about the event itself, and we can then actually access that object indeed event handler function. And anytime that an event like this occurs JavaScript does in fact generate an object. And that object contains all the information about the event itself, and we can then actually access that object indeed event handler function.
// So again, when an event happened we can have access to information about that event in the event handler function just like this one. Now up until this point, we have never looked at that event.  We only just listened for it and then reacted to it. But this time we actually need to look at the event object in order to figure out which key was pressed. Well, what we need to do is to give this function here a parameter.
// So then as the event occurs JavaScript, we'll call this function with the event object as an argument. And once more, this works because we do not call this function here or selves. We do not call the function. We only define it here. So we say Hey, JavaScript call function when a key down event happens. And when you do so please pass in the event object as an argument.

// document.addEventListener('keydown', function (e) {
//   console.log(e.key);
//   // if the pressed key is escape and if the model does not contain the hidden class, then execute disfunction to close the model().
//   if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
//     closeModal();
//   }
// });
