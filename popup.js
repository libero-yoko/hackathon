// Collections of neko images
const catImages = []
// Collections of meow sounds

// Dogsound


// Saves select box and checkbox state in chrome.storage
// using the popup
function save_options() {
  var color = document.getElementById('cat').value;
  var likesColor = document.getElementById('like').checked;
  chrome.storage.sync.set({
    favoriteColor: color,
    likesColor: likesColor
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the popup
// stored in chrome.storage.
function restore_options() {
  // Use default value cat = 'ame' and likesColor = true.
  chrome.storage.sync.get({
    favoriteColor: 'ame',
    likesColor: true
  }, function(items) {
    document.getElementById('cat').value = items.favoriteColor;
    document.getElementById('like').checked = items.likesColor;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);

// Retrieves the value

var x = document.getElementById("myAudio"); 
var y = new Audio('bark.mp3')

// Plays an audio
function playAudio() { 
  // if the check box is cheked, play dog audio, if not play cat audio
  if(document.getElementById('like').checked){
    y.play();
  } else {
    x.play(); 
  }

} 

// Stops the audio
function pauseAudio() { 
  x.pause(); 
}

// Adds eventlisner to the audio buttons so they can invoke the specified functions
document.getElementById('playAudio').addEventListener('click',
playAudio);


var catcount = document.getElementById('cat_times');
catcount.textContent = 'Cat Count:' + catCount;