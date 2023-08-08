// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const errorPopup = document.querySelector('#modal');
errorPopup.classList.add('hidden');

const heart = document.querySelector('.like-glyph')

  const input = document.querySelector('.like');
  input.addEventListener('click', () => {
    mimicServerCall()
    .then((data) => {
      console.log(data)
      if(heart.innerText === '♡'){
        heart.innerText = '♥';
        heart.classList.add('activated-heart');
      }else{
        heart.innerText = '♡';
        heart.classList.remove('activated-heart');
      }
    })
    .catch(error => {
      errorPopup.classList.remove('hidden');
      console.log(error.message);
      const errorMessage = document.querySelector('#modal-message');
      errorMessage.textContent = error.message;
      return errorMessage;
    })
    setTimeout(() => { 
      errorPopup.classList.add('hidden');
      },3000);
    });





//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
