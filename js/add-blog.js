function printError(error, msg) {
    
}

function displayBlogForm() {
    document.getElementById('addBlogForm').style.display = "block"
}

function hideBlogForm() {
    document.getElementById('titleInput').value = "";    
    document.getElementById('bodyInput').value = "";

    document.getElementById('addBlogForm').style.display = "none";
}

function newBlog() {

    var title = document.getElementById('titleInput').value;
    document.getElementById('titleInput').value = "";

    var text = document.getElementById('bodyInput').value;
    document.getElementById('bodyInput').value = "";




    //create rowDiv
    var rowDiv = document.createElement('div');
    rowDiv.className = "row"

    //create cardDeck
    var cardDeckDiv = document.createElement('div');
    cardDeckDiv.className = "card-deck mb-6 text-center";

    //create card
    var cardDiv = document.createElement('div');
    cardDiv.className = "card mb-4 shadow-sm";

    //create cardHeaderDiv
    var cardHeaderDiv = document.createElement('div');
    cardHeaderDiv.className = "card-header"

    //create title elements
    var titleH4 = document.createElement('h4');
    titleH4.className = "my-0 font-weight-normal";
    titleH4.style = "text-align: left;";
    titleH4.innerHTML = title;

    //create card body elements;
    var cardBodyDiv = document.createElement('div');
    cardBodyDiv.className = "card-body"
    var paragraph = document.createElement('p');
    paragraph.className = "card-text"
    paragraph.style = "text-align: left;";
    paragraph.innerHTML = text;
    cardBodyDiv.appendChild(paragraph);

    //adding all the components to the main rowDiv
    cardHeaderDiv.appendChild(titleH4);
    cardDiv.appendChild(cardHeaderDiv);
    cardDiv.appendChild(cardBodyDiv);
    cardDeckDiv.appendChild(cardDiv);
    rowDiv.appendChild(cardDeckDiv);



    hideBlogForm();
    var container = document.getElementById('blogContainer');

    
    container.prepend(rowDiv)

    return false;
}