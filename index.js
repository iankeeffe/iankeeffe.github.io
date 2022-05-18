// from https://bobbyhadz.com/blog/javascript-change-button-text-on-click

const btn = document.getElementById('mode');



// ✅ Change button text on click
btn.addEventListener('click', function handleClick() {
    const collection = document.getElementById("outer");
    const reg = document.getElementById("reg");
    if (btn.textContent == 'Light Mode') {
        btn.textContent = 'Dark Mode';
        collection.style.backgroundColor = "black";
        reg.style.backgroundColor = "black";
        document.querySelector("html").style.background = "black"
    }

    else {
        btn.textContent = 'Light Mode';
        console.log("hi")
        collection.style.backgroundColor = "white";
        reg.style.backgroundColor = "white";
        document.querySelector("html").style.background = "white"
    }



});

/**
 * ✅ If you need to change the button's inner HTML use:
 *  - `innerHTML` instead of `textContent`
 */