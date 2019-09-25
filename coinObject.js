const coin = {
    state: 0,
    flip: function () {
        this.state = Math.floor(Math.random() * 2);
        console.log(this.state)
        // 1. One point: Randomly set your coin object's "state" property to be either 
        //    0 or 1: use "this.state" to access the "state" property on this object.
    },
    toString: function() {
        if(this.state === 0)    {
            return "Heads"
        }
        else{
            return "Tails"
        }
        // 2. One point: Return the string "Heads" or "Tails", depending on whether
        //    "this.state" is 0 or 1.
    },
    toHTML: function() {
        const image = document.createElement('img');
        let coinImage = "";
            if(this.state === 0)    {
                image.setAttribute("src","images/coinheads.png");
                image.setAttribute("alt","Heads!")
            }
            else{
                image.setAttribute("src","images/cointails.png");
                image.setAttribute("alt","Tails!")
            }
        document.getElementById("coinDisplay").appendChild(image);
        
        // 3. One point: Set the properties of this image element to show either face-up
        //    or face-down, depending on whether this.state is 0 or 1.
        return image;
    }
};


let H2words = document.createElement("h2")
H2words.id = "coinsInWords"
let H2wordsContent = document.createTextNode("20 Coin Flips in Words")
H2words.appendChild(H2wordsContent);
document.getElementsByTagName("main")[0].appendChild(H2words);

let H2pics = document.createElement("h2")
H2pics.id = "coinDisplay"
let H2picsContent = document.createTextNode("20 Coin Flips in Images")
H2pics.appendChild(H2picsContent);
document.getElementsByTagName("main")[0].appendChild(H2pics);
display20Flips()
display20Images()
function display20Flips() {
    const results = [];
        for(let flipCounter = 1; flipCounter <= 20; flipCounter++)  {
            coin.flip();
            let newDivId = "div" + flipCounter;
            let content = flipCounter + ". " + coin.toString() + " ";
            results.push(content);
            writeToPage(newDivId, content)
        }
    console.log("here are the results" + results);
    return results;

    // 4. One point: Use a loop to flip the coin 20 times, each time displaying the result of the flip as a string on the page.  After your loop completes, return an array with the result of each flip.
}
function display20Images() {
    const results = [];
    for(let flipCounterImages = 1; flipCounterImages <= 20; flipCounterImages++)  {
        coin.flip();
        let newDivId = "div" + flipCounterImages;
        let content = coin.toHTML();
        results.push(content);
    }
    console.log(results)
    return results;
    // 5. One point: Use a loop to flip the coin 20 times, and display the results of each flip as an image on the page.  After your loop completes, return an array with result of each flip.
}

function writeToPage(newDivId, content) {
    let newDiv = document.createElement("div");
    newDiv.id = newDivId;
    let divContent = document.createTextNode(content); ///tell bro here's the text content for a node!
    newDiv.appendChild(divContent);
    document.getElementById("coinsInWords").appendChild(newDiv); ///tell bro to add that branch right before HTML's div slot!

}


