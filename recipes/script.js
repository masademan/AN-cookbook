const recipes = [
    {
        recipeName: "Test recipe",
        author: "Lorem Ipsum",
        recipeDesc: "dolor sit amet",
        coverImg: "test/test.jpeg",
        imgs: {},
        recipe: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut placerat magna. Sed lectus enim, egestas ut dui convallis, tempus eleifend ex. Proin varius velit vel turpis efficitur scelerisque. Quisque fringilla quis leo vel sollicitudin. Suspendisse varius neque pellentesque viverra euismod. Vestibulum ultricies et libero vel laoreet. Quisque vel molestie libero, efficitur vehicula dolor. Morbi eget consectetur nunc. Quisque finibus mauris ligula, non semper sem malesuada ut. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas dictum tempus massa vel aliquam.

Cras nisi metus, rutrum et est id, pellentesque pellentesque massa. Cras nec laoreet dui. Donec porta lectus quis est semper congue. Integer consectetur, nulla quis imperdiet viverra, arcu enim condimentum urna, et congue lacus urna sit amet diam. Morbi fermentum justo ac lacus sollicitudin, a bibendum quam aliquet. Nam ullamcorper ipsum ut mi elementum vehicula. Nulla lobortis non lacus nec facilisis. Duis vestibulum mollis risus nec consequat. Nullam id consectetur est. Duis id metus sit amet massa porttitor pretium eu sit amet purus. Vivamus molestie risus augue, nec tincidunt risus pretium ac. Proin eget orci id felis ultrices finibus non non risus.

Morbi cursus cursus lectus, ac mattis risus convallis quis. Vivamus lacinia ultricies magna, vitae placerat lorem commodo ut. Suspendisse ut elementum nibh, eu sagittis nisi. Sed molestie elit felis, nec tempus diam cursus et. Donec a pellentesque tellus, vitae consectetur urna. Mauris erat arcu, blandit non sapien sit amet, tincidunt euismod ipsum. Sed tincidunt porttitor nulla ut sagittis. Sed posuere porta commodo. Mauris convallis aliquam nisl auctor varius. Sed at lorem neque. Fusce convallis tellus arcu, vel pulvinar magna euismod imperdiet.`,
    },
    {
        recipeName: "Test recipe V2",
        author: "Lorem Ipsum V2",
        recipeDesc: "dolor sit amet V2",
        coverImg: "test/test.jpeg",
        imgs: {},
        recipe: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut placerat magna. Sed lectus enim, egestas ut dui convallis, tempus eleifend ex. Proin varius velit vel turpis efficitur scelerisque. Quisque fringilla quis leo vel sollicitudin. Suspendisse varius neque pellentesque viverra euismod. Vestibulum ultricies et libero vel laoreet. Quisque vel molestie libero, efficitur vehicula dolor. Morbi eget consectetur nunc. Quisque finibus mauris ligula, non semper sem malesuada ut. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas dictum tempus massa vel aliquam.

Cras nisi metus, rutrum et est id, pellentesque pellentesque massa. Cras nec laoreet dui. Donec porta lectus quis est semper congue. Integer consectetur, nulla quis imperdiet viverra, arcu enim condimentum urna, et congue lacus urna sit amet diam. Morbi fermentum justo ac lacus sollicitudin, a bibendum quam aliquet. Nam ullamcorper ipsum ut mi elementum vehicula. Nulla lobortis non lacus nec facilisis. Duis vestibulum mollis risus nec consequat. Nullam id consectetur est. Duis id metus sit amet massa porttitor pretium eu sit amet purus. Vivamus molestie risus augue, nec tincidunt risus pretium ac. Proin eget orci id felis ultrices finibus non non risus.

Morbi cursus cursus lectus, ac mattis risus convallis quis. Vivamus lacinia ultricies magna, vitae placerat lorem commodo ut. Suspendisse ut elementum nibh, eu sagittis nisi. Sed molestie elit felis, nec tempus diam cursus et. Donec a pellentesque tellus, vitae consectetur urna. Mauris erat arcu, blandit non sapien sit amet, tincidunt euismod ipsum. Sed tincidunt porttitor nulla ut sagittis. Sed posuere porta commodo. Mauris convallis aliquam nisl auctor varius. Sed at lorem neque. Fusce convallis tellus arcu, vel pulvinar magna euismod imperdiet.`,
    },
    {
        recipeName: "Test recipe V3",
        author: "Lorem Ipsum V3",
        recipeDesc: "dolor sit amet V3",
        coverImg: "test/test.jpeg",
        imgs: {},
        recipe: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut placerat magna. Sed lectus enim, egestas ut dui convallis, tempus eleifend ex. Proin varius velit vel turpis efficitur scelerisque. Quisque fringilla quis leo vel sollicitudin. Suspendisse varius neque pellentesque viverra euismod. Vestibulum ultricies et libero vel laoreet. Quisque vel molestie libero, efficitur vehicula dolor. Morbi eget consectetur nunc. Quisque finibus mauris ligula, non semper sem malesuada ut. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas dictum tempus massa vel aliquam.

Cras nisi metus, rutrum et est id, pellentesque pellentesque massa. Cras nec laoreet dui. Donec porta lectus quis est semper congue. Integer consectetur, nulla quis imperdiet viverra, arcu enim condimentum urna, et congue lacus urna sit amet diam. Morbi fermentum justo ac lacus sollicitudin, a bibendum quam aliquet. Nam ullamcorper ipsum ut mi elementum vehicula. Nulla lobortis non lacus nec facilisis. Duis vestibulum mollis risus nec consequat. Nullam id consectetur est. Duis id metus sit amet massa porttitor pretium eu sit amet purus. Vivamus molestie risus augue, nec tincidunt risus pretium ac. Proin eget orci id felis ultrices finibus non non risus.

Morbi cursus cursus lectus, ac mattis risus convallis quis. Vivamus lacinia ultricies magna, vitae placerat lorem commodo ut. Suspendisse ut elementum nibh, eu sagittis nisi. Sed molestie elit felis, nec tempus diam cursus et. Donec a pellentesque tellus, vitae consectetur urna. Mauris erat arcu, blandit non sapien sit amet, tincidunt euismod ipsum. Sed tincidunt porttitor nulla ut sagittis. Sed posuere porta commodo. Mauris convallis aliquam nisl auctor varius. Sed at lorem neque. Fusce convallis tellus arcu, vel pulvinar magna euismod imperdiet.`,
    },
    {
        recipeName: "Cool recipe",
        author: "Bob Smith",
        recipeDesc: "dolor sit amet V2",
        coverImg: "test/test.jpeg",
        imgs: {},
        recipe: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut placerat magna. Sed lectus enim, egestas ut dui convallis, tempus eleifend ex. Proin varius velit vel turpis efficitur scelerisque. Quisque fringilla quis leo vel sollicitudin. Suspendisse varius neque pellentesque viverra euismod. Vestibulum ultricies et libero vel laoreet. Quisque vel molestie libero, efficitur vehicula dolor. Morbi eget consectetur nunc. Quisque finibus mauris ligula, non semper sem malesuada ut. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas dictum tempus massa vel aliquam.

Cras nisi metus, rutrum et est id, pellentesque pellentesque massa. Cras nec laoreet dui. Donec porta lectus quis est semper congue. Integer consectetur, nulla quis imperdiet viverra, arcu enim condimentum urna, et congue lacus urna sit amet diam. Morbi fermentum justo ac lacus sollicitudin, a bibendum quam aliquet. Nam ullamcorper ipsum ut mi elementum vehicula. Nulla lobortis non lacus nec facilisis. Duis vestibulum mollis risus nec consequat. Nullam id consectetur est. Duis id metus sit amet massa porttitor pretium eu sit amet purus. Vivamus molestie risus augue, nec tincidunt risus pretium ac. Proin eget orci id felis ultrices finibus non non risus.

Morbi cursus cursus lectus, ac mattis risus convallis quis. Vivamus lacinia ultricies magna, vitae placerat lorem commodo ut. Suspendisse ut elementum nibh, eu sagittis nisi. Sed molestie elit felis, nec tempus diam cursus et. Donec a pellentesque tellus, vitae consectetur urna. Mauris erat arcu, blandit non sapien sit amet, tincidunt euismod ipsum. Sed tincidunt porttitor nulla ut sagittis. Sed posuere porta commodo. Mauris convallis aliquam nisl auctor varius. Sed at lorem neque. Fusce convallis tellus arcu, vel pulvinar magna euismod imperdiet.`,
    },
    {
        recipeName: "Cool recipe V2",
        author: "Bob Smith V2",
        recipeDesc: "dolor sit amet V2",
        coverImg: "test/test.jpeg",
        imgs: {},
        recipe: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut placerat magna. Sed lectus enim, egestas ut dui convallis, tempus eleifend ex. Proin varius velit vel turpis efficitur scelerisque. Quisque fringilla quis leo vel sollicitudin. Suspendisse varius neque pellentesque viverra euismod. Vestibulum ultricies et libero vel laoreet. Quisque vel molestie libero, efficitur vehicula dolor. Morbi eget consectetur nunc. Quisque finibus mauris ligula, non semper sem malesuada ut. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas dictum tempus massa vel aliquam.

Cras nisi metus, rutrum et est id, pellentesque pellentesque massa. Cras nec laoreet dui. Donec porta lectus quis est semper congue. Integer consectetur, nulla quis imperdiet viverra, arcu enim condimentum urna, et congue lacus urna sit amet diam. Morbi fermentum justo ac lacus sollicitudin, a bibendum quam aliquet. Nam ullamcorper ipsum ut mi elementum vehicula. Nulla lobortis non lacus nec facilisis. Duis vestibulum mollis risus nec consequat. Nullam id consectetur est. Duis id metus sit amet massa porttitor pretium eu sit amet purus. Vivamus molestie risus augue, nec tincidunt risus pretium ac. Proin eget orci id felis ultrices finibus non non risus.

Morbi cursus cursus lectus, ac mattis risus convallis quis. Vivamus lacinia ultricies magna, vitae placerat lorem commodo ut. Suspendisse ut elementum nibh, eu sagittis nisi. Sed molestie elit felis, nec tempus diam cursus et. Donec a pellentesque tellus, vitae consectetur urna. Mauris erat arcu, blandit non sapien sit amet, tincidunt euismod ipsum. Sed tincidunt porttitor nulla ut sagittis. Sed posuere porta commodo. Mauris convallis aliquam nisl auctor varius. Sed at lorem neque. Fusce convallis tellus arcu, vel pulvinar magna euismod imperdiet.`,
    },
    {
        recipeName: "Cool recipe V3",
        author: "Bob Smith V3",
        recipeDesc: "dolor sit amet V2",
        coverImg: "test/test.jpeg",
        imgs: {},
        recipe: ``
    },
    {
        recipeName: "Cool recipe V4",
        author: "Bob Smith V4",
        recipeDesc: "dolor sit amet V2",
        coverImg: "test/test.jpeg",
        imgs: {},
        recipe: ``
    },
    {
        recipeName: "Cool recipe V5",
        author: "Bob Smith V5",
        recipeDesc: "dolor sit amet V2",
        coverImg: "test/test.jpeg",
        imgs: {},
        recipe: ``
    },
    {
        recipeName: "Cool recipe V35",
        author: "Bob Smith V35",
        recipeDesc: "dolor sit amet V2",
        coverImg: "test/test.jpeg",
        imgs: {},
        recipe: ``
    },
    {
        recipeName: "Cool recipe V45",
        author: "Bob Smith V45",
        recipeDesc: "dolor sit amet V2",
        coverImg: "test/test.jpeg",
        imgs: {},
        recipe: ``
    },
    {
        recipeName: "Cool recipe V55",
        author: "Bob Smith V55",
        recipeDesc: "dolor sit amet V2",
        coverImg: "test/test.jpeg",
        imgs: {},
        recipe: ``
    },
    {
        recipeName: "Cool recipe V36",
        author: "Bob Smith V36",
        recipeDesc: "dolor sit amet V2",
        coverImg: "test/test.jpeg",
        imgs: {},
        recipe: ``
    },
    {
        recipeName: "Cool recipe V46",
        author: "Bob Smith V46",
        recipeDesc: "dolor sit amet V2",
        coverImg: "test/test.jpeg",
        imgs: {},
        recipe: ``
    },
    {
        recipeName: "Cool recipe V56",
        author: "Bob Smith V56",
        recipeDesc: "dolor sit amet V2",
        coverImg: "test/test.jpeg",
        imgs: {},
        recipe: ``
    },
    {
        recipeName: "Cool recipe V365",
        author: "Bob Smith V365",
        recipeDesc: "dolor sit amet V2",
        coverImg: "test/test.jpeg",
        imgs: {},
        recipe: ``
    },
    {
        recipeName: "Cool recipe V465",
        author: "Bob Smith V465",
        recipeDesc: "dolor sit amet V2",
        coverImg: "test/test.jpeg",
        imgs: {},
        recipe: ``
    },
    {
        recipeName: "Cool recipe V655",
        author: "Bob Smith V655",
        recipeDesc: "dolor sit amet V2",
        coverImg: "test/test.jpeg",
        imgs: {},
        recipe: ``
    },
    {
        recipeName: "Cool recipe V585",
        author: "Bob Smith V855",
        recipeDesc: "dolor sit amet V2",
        coverImg: "test/test.jpeg",
        imgs: {},
        recipe: ``
    },
    {
        recipeName: "Cool thing",
        author: "Boe Jiden",
        recipeDesc: "dolor sit amet V2",
        coverImg: "test/test.jpeg",
        imgs: {},
        recipe: ``
    },
    {
        recipeName: "Cool thing 2",
        author: "Boe Jiden",
        recipeDesc: "dolor sit amet V2",
        coverImg: "test/test.jpeg",
        imgs: {},
        recipe: ``
    },
    {
        recipeName: "Cool recipe V6855",
        author: "Bob Smith V655",
        recipeDesc: "dolor sit amet V2",
        coverImg: "test/test.jpeg",
        imgs: {},
        recipe: ``
    },
    {
        recipeName: "Cool recipe V5885",
        author: "Bob Smith V855",
        recipeDesc: "dolor sit amet V2",
        coverImg: "test/test.jpeg",
        imgs: {},
        recipe: ``
    },
    {
        recipeName: "Cool thing 5",
        author: "Boe Jiden",
        recipeDesc: "dolor sit amet V2",
        coverImg: "test/test.jpeg",
        imgs: {},
        recipe: ``
    },
    {
        recipeName: "Cool thing 25",
        author: "Boe Jiden",
        recipeDesc: "dolor sit amet V2",
        coverImg: "test/test.jpeg",
        imgs: {},
        recipe: ``
    },
    {
        recipeName: "Cool recipe 676767",
        author: "Bob Smith V655",
        recipeDesc: "dolor sit amet V2",
        coverImg: "test/test.jpeg",
        imgs: {},
        recipe: ``
    },
    {
        recipeName: "Cool recipe V58895",
        author: "Bob Smith V855",
        recipeDesc: "dolor sit amet V2",
        coverImg: "test/test.jpeg",
        imgs: {},
        recipe: ``
    },
    {
        recipeName: "Cool thing 59",
        author: "Boe Jiden",
        recipeDesc: "dolor sit amet V2",
        coverImg: "test/test.jpeg",
        imgs: {},
        recipe: ``
    },
    {
        recipeName: "Cool thing 295",
        author: "Boe Jiden",
        recipeDesc: "dolor sit amet V2",
        coverImg: "test/test.jpeg",
        imgs: {},
        recipe: ``
    },
];

let whitelist = [];
let darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
let numRecipesPerRow = 4;
const secsToJumpscare = 2;
const jumpscaresDone = [];

// What to run right after the site loads
function BOOT() {
    renderRecipeButtons(whitelist);

    // If the <form> tag is commented, use this
    const searchTextBox = document.getElementById("searchRecipe");
    searchTextBox.addEventListener("input", function(event) {
        handleSubmit(event);
    });

    // See if darkMode is true
    if (darkMode) {
        addDarkMode();
    }

    window.addEventListener('resize', () => {
        renderRecipeButtons(whitelist);
    });
}

// Shuffling the recipes
function shuffleRecipeButton() {
    shuffleRecipes();
    renderRecipeButtons(whitelist);
}

function shuffleRecipes() {
    for (let i = recipes.length - 1; i >= 1; i--) {
        const randomIndex = randInt(0, i);
        const temp = recipes[i];
        recipes[i] = recipes[randomIndex];
        recipes[randomIndex] = temp;
    }
}

function randInt(min, max) {
  min = Math.ceil(min); // Ensure min is an integer
  max = Math.floor(max); // Ensure max is an integer
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Rendering the recipe data
function renderRecipe(recipe) {
    const title = document.getElementById("recipeTitle");
    title.textContent = recipe.recipeName;
}

function renderRecipeImages(recipe, imgSrc) {
}

// Rendering the recipe selection data
function renderRecipeButtons(whitelist = []) {
    let renderList = whitelist;
    if (renderList.length === 0) {
        renderList = recipes;
    }

    const seen = [];
    let rowNum = 0;
    let recipeCount = 0;
    const imgWidth = getFinalImgWidth();
    for (let recipe of recipes) {
        removeElementByID(recipe.author + recipe.recipeName + "Div");
        if (contains(renderList, recipe)) {
            if (!contains(seen, recipe)) {
                addRecipeButton(recipe, rowNum, imgWidth);
                recipeCount++;
                if (recipeCount % numRecipesPerRow == 0) {
                    rowNum++;
                }
                seen.push(recipe);
            }
        }
    }
}

function getFinalImgWidth() {
    let imgWidth = getImgWidth(4);
    if (imgWidth < 50) {
        numRecipesPerRow = 1;
    } else if (imgWidth < 100) {
        numRecipesPerRow = 2;
    } else if (imgWidth < 200) {
        numRecipesPerRow = 3;
    } else {
        numRecipesPerRow = 4;
    }
    return getImgWidth(numRecipesPerRow);
}

function getImgWidth(numPerRow) {
    const viewportWidth = window.innerWidth;
    return Math.min(348, Math.trunc((viewportWidth - (numPerRow + 1) * 20)/numPerRow - 12));
}

function addRecipeButton(recipe, rowNum, imgWidth) {
    // Get the parent div and shuffle button
    const recipeDiv = document.getElementById("recipeSelection");
    // const shuffleButton = document.getElementById("shuffleButton");
    let parentDiv = document.getElementById("row"+rowNum.toString());

    // Create the div to hold the button
    const childDiv = document.createElement("div");
    childDiv.setAttribute("id", recipe.author + recipe.recipeName + "Div");
    childDiv.setAttribute("class", "recipeButtonDiv");

    // Add the recipe div to the document
    if (!parentDiv) {
        parentDiv = document.createElement("div");
        parentDiv.setAttribute("id", "row"+rowNum.toString());
        parentDiv.setAttribute("class", "recipeRow");

        // recipeDiv.insertBefore(parentDiv, shuffleButton);
        recipeDiv.appendChild(parentDiv);
    }
    parentDiv.appendChild(childDiv);

    // Create the button
    const childButton = document.createElement("button");
    childButton.setAttribute("id", recipe.author + recipe.recipeName + "Button");
    childButton.setAttribute("class", "recipeButton");
    childButton.setAttribute("onclick", "selectRecipe(this)");

    // Add the recipe button to the div
    childDiv.appendChild(childButton);

    // Create the img & text
    const recipeImg = document.createElement("img");
    let imgPath = recipe.coverImg.toLowerCase();
    if (!imgPath.includes("assets/")) {
        imgPath = "assets/" + imgPath;
    }
    recipeImg.setAttribute("src", imgPath);
    recipeImg.setAttribute("alt", recipe.recipeName + " cover image");
    recipeImg.setAttribute("width", imgWidth);

    const recipeName = document.createElement("p");
    recipeName.setAttribute("class", "recipeName");
    recipeName.textContent = recipe.recipeName;

    const recipeAuthor = document.createElement("p");
    recipeAuthor.setAttribute("class", "recipeAuthor");
    recipeAuthor.textContent = recipe.author;

    // Add the recipe elements to the recipe div    
    childButton.appendChild(recipeImg);
    childButton.appendChild(recipeName);
    childButton.appendChild(recipeAuthor);
}

function removeElementByID(id) {
    const elementToRemove = document.getElementById(id);

    if (!elementToRemove) {
        return;
    }

    elementToRemove.remove();
}

function getRecipeWithAuthorAndRecipe(recipeInfo) {
    for (let recipe of recipes) {
        if (recipe.author + recipe.recipeName == recipeInfo) {
            return recipe;
        }
    }

    return {
        recipeName: "None",
        author: "None",
        recipeDesc: "None",
        coverImg: "test/test.jpeg",
        imgs: {},
        recipe: `None`
    };
}

function contains(arrayOfObjects, object) {
    for (let objectCheck of arrayOfObjects) {
        if (compareObjects(objectCheck, object)) {
            return true;
        }
    }

    return false;
}

// To and from recipe selection
function selectRecipe(buttonElement) {
    const recipeInfo = buttonElement.id;
    const recipe = getRecipeWithAuthorAndRecipe(recipeInfo.slice(0, recipeInfo.length - 6));

    renderRecipe(recipe);

    const recipeSelection = document.getElementById("recipeSelection");
    const recipeShowing = document.getElementById("recipeShowing");
    const shuffle = document.getElementById("shuffleButton");
    const goBack = document.getElementById("backButton");

    recipeSelection.classList.add("hidden");
    shuffle.classList.add("hidden");
    recipeShowing.classList.remove("hidden");
    goBack.classList.remove("hidden");
}

function goBack() {
    const recipeSelection = document.getElementById("recipeSelection");
    const recipeShowing = document.getElementById("recipeShowing");
    const shuffle = document.getElementById("shuffleButton");
    const goBack = document.getElementById("backButton");

    recipeSelection.classList.remove("hidden");
    shuffle.classList.remove("hidden");
    recipeShowing.classList.add("hidden");
    goBack.classList.add("hidden");
}

// Search text input handling
function handleSubmit(event) {
    event.preventDefault();

    const searchQuery = document.getElementById("searchRecipe").value;

    if (searchQuery == "BOE JIDEN") {
        if (boeJidenJumpscare(searchQuery)) {
            document.getElementById("searchRecipe").value = "";
        }
    } else if (searchQuery == "KIRBY") {
        if (kirbyJumpscare(searchQuery)) {
            document.getElementById("searchRecipe").value = "";
        }
    } else if (searchQuery == "ROZIZZLE THE RIZZLER") {
        if (rozyJumpscare(searchQuery)) {
            document.getElementById("searchRecipe").value = "";
        }
    } else if (searchQuery == "BAYAK") {
        if (bayakJumpscare(searchQuery)) {
            document.getElementById("searchRecipe").value = "";
        }
    } else if (searchQuery == "JC JENSON") {
        if (jensonJumpscare(searchQuery)) {
            document.getElementById("searchRecipe").value = "";
        }
    } else if (searchQuery == "FREAK BOB") {
        if (danielJumpscare(searchQuery)) {
            document.getElementById("searchRecipe").value = "";
        }
    } else if (searchQuery == "DUOLINGO?!") {
        if (duoJumpscare(searchQuery)) {
            document.getElementById("searchRecipe").value = "";
        }
    } else {
        whitelist = search(searchQuery);
        renderRecipeButtons(whitelist);
    }
}

// Searching recipes (One of two search algorithms can be selected)
function search(query) {
    // // Search using letter count
    // const queryCount = charCount(query);
    // let whitelist = [];

    // for (let recipe of recipes) {
    //     const recipeNameCount = charCount(recipe.recipeName);
    //     const recipeAuthorCount = charCount(recipe.author);
    //     if (isSubset(queryCount, recipeNameCount) || isSubset(queryCount, recipeAuthorCount)) {
    //         whitelist.push(recipe);
    //     }
    // }

    // if (whitelist.length == 0 && query.length > 0) { whitelist.push(null); }

    // return whitelist;

    // Search using letter ordering
    let whitelist = [];
    
    for (let recipe of recipes){
        // Recipe name check
        let queryPointer = 0;
        let recipePointer = 0;

        while (queryPointer < query.length && recipePointer < recipe.recipeName.length) {
            if (query[queryPointer].toLowerCase() === recipe.recipeName[recipePointer].toLowerCase()) {
                queryPointer++;
            }
            recipePointer++;
        }

        if (queryPointer === query.length) {
            whitelist.push(recipe);
        }

        // Recipe author check
        queryPointer = 0;
        recipePointer = 0;

        while (queryPointer < query.length && recipePointer < recipe.author.length) {
            if (query[queryPointer].toLowerCase() === recipe.author[recipePointer].toLowerCase()) {
                queryPointer++;
            }
            recipePointer++;
        }

        if (queryPointer === query.length) {
            whitelist.push(recipe);
        }
    }

    if (whitelist.length == 0 && query.length > 0) { whitelist.push(null); }

    return whitelist;
}

function charCount(string) {
    const count = {};
    string = string.toLowerCase();

    for (let char of string) {
        if (!(char in count)) {
            count[char] = 0;
        }
        count[char]++;
    }

    return count;
}

function isSubset(a, b) {
    let contains = true;

    Object.keys(a).forEach(key => {
        if (!(key in b)) {
            contains = false;
            return;
        }
    });

    return contains;
}

function compareObjects(a, b) {
    return JSON.stringify(a) === JSON.stringify(b);
}

// Dark mode toggle
function toggleDarkMode() {
    darkMode = !darkMode;

    if (darkMode) {
        addDarkMode();
    } else {
        removeDarkMode();
    }
}

function removeDarkMode() {
    const darkModeButton = document.getElementById("darkModeToggle");
    const bodyElement = document.body;

    darkModeButton.textContent = "Dark Mode";
    bodyElement.classList.remove("darkMode");
}

function addDarkMode() {
    const darkModeButton = document.getElementById("darkModeToggle");
    const bodyElement = document.body;

    darkModeButton.textContent = "Light Mode";
    bodyElement.classList.add("darkMode");
}

// Temperature unit conversion
function cToF(celsius=0) {
    return Math.round((celsius * 9 / 5 + 32)*10)/10;
}

function fToC(fahrenheit=0) {
    return Math.round((fahrenheit - 32) * 50 / 9)/10;
}

// Easter egg stuff
function hideJumpscares(imgID, textID){
    document.getElementById("getJumpscared").classList.add("hidden");
    document.getElementById(imgID).classList.add("hidden");
    document.getElementById(textID).classList.add("hidden");
}

function showJumpscares(imgID, textID){
    document.getElementById("getJumpscared").classList.remove("hidden");
    document.getElementById(imgID).classList.remove("hidden");
    document.getElementById(textID).classList.remove("hidden");
}

function jumpscareLogic(imgID, textID, time = 2) {
    showJumpscares(imgID, textID);
    setTimeout(function() {
        hideJumpscares(imgID, textID);
    }, 1000*time);
}

function boeJidenJumpscare(searchQuery="") {
    if (jumpscaresDone.includes(searchQuery)) { return false; }
    jumpscaresDone.push(searchQuery);
    jumpscareLogic("BOE-JIDEN", "jumpscareIdBoeJiden", secsToJumpscare);
    return true;
}

function kirbyJumpscare(searchQuery="") {
    if (jumpscaresDone.includes(searchQuery)) { return false; }
    jumpscaresDone.push(searchQuery);
    jumpscareLogic("KIRBY", "jumpscareIdKirby", secsToJumpscare);
    return true;
}

function bayakJumpscare(searchQuery="") {
    if (jumpscaresDone.includes(searchQuery)) { return false; }
    jumpscaresDone.push(searchQuery);
    jumpscareLogic("BAYAK", "jumpscareIdBayak", secsToJumpscare);
    return true;
}

function rozyJumpscare(searchQuery="") {
    if (jumpscaresDone.includes(searchQuery)) { return false; }
    jumpscaresDone.push(searchQuery);
    jumpscareLogic("ROZY", "jumpscareIdRozy", secsToJumpscare);
    return true;
}

function jensonJumpscare(searchQuery="") {
    if (jumpscaresDone.includes(searchQuery)) { return false; }
    jumpscaresDone.push(searchQuery);
    jumpscareLogic("JENSON", "jumpscareIdJenson", secsToJumpscare);
    return true;
}

function danielJumpscare(searchQuery="") {
    if (jumpscaresDone.includes(searchQuery)) { return false; }
    jumpscaresDone.push(searchQuery);
    jumpscareLogic("DANIEL", "jumpscareIdDaniel", secsToJumpscare);
    return true;
}

function duoJumpscare(searchQuery="") {
    if (jumpscaresDone.includes(searchQuery)) { return false; }
    jumpscaresDone.push(searchQuery);
    jumpscareLogic("DUO", "jumpscareIdDuo", secsToJumpscare);
    return true;
}


// Recipe button organization:
// recipe divs: id="{authorName}{recipeName}Div", class="recipeButtonDiv"
// button types: id="{authorName}{recipeName}Button", class="recipeButton"

// Recipe listing organization:
//

// const test = document.getElementById("test");
// let recipeTest =
// `<h1>Hi there</h1>
// \u2022 item 1
// \u2022 item 2
// \u2022 item 3`;
// test.innerHTML = recipeTest;