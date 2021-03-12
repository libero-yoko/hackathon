
// var myAudio = new Audio(chrome.runtime.getURL("/Volumes/ExternalHDD/Documents/05_Codesmith/Hackathon/meow.mp3"));
// get the data from that website
// 


// const contents = $('#contents') /// document.getElementsByTagName("header")
// const contentsParent = contents.parent();
// contents.remove();
// contentsParent.prepend('<img id="prepended" src="https://unsplash.it/1200/800?image=" + image.id >');
// contentsParent.prepend('<div id="inspo">Get back to achieving your coding dreams</div>');

// document.getElementsByTagName("header")
// document.getElementsByTagName("p").innerText;
const cat1 = document.querySelectorAll('p, header, head, h1, h2, h3, li, ul, caption, span, title');
console.log(cat1.length)
var catCount = 0;

for (let i = 0; i < cat1.length; i++) {
    if(cat1[i].innerHTML.includes(" cat ")){
      document.body.style.backgroundImage = "url('http://studio-libero.com/img/cat1.png')";
      document.body.style.backgroundImage.backgroundSize = "120px 120px";
    }

    // document.body.style.backgroundImage = "url('img_tree.png')";
    
    // cat1[i].innerHTML = cat1[i].innerHTML.replace(/cat/gi, catImg)
    if(!cat1[i].innerHTML.includes("http")){
      if(cat1[i].innerHTML.includes("cat")) catCount += 1;
      cat1[i].innerHTML = cat1[i].innerHTML.replace(/cat/gi, "<img src='http://studio-libero.com/img/cat.png' height ='20' style='padding-top:7px'>")
    }
}

alert("Kitty power: " + catCount);


// {/* <p id="demo">   This element has extra spacing     and contains <span>a span element</span>.</p>
// innerText returns: "This element has extra spacing and contains a span element."
// innerHTML returns: "   This element has extra spacing     and contains <span>a span element</span>."
// textContent returns: "   This element has extra spacing    and contains a span element." */}