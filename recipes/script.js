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
    // { // Recipe template
    //     recipeName: "",      // Recipe name
    //     author: "",          // Author's name
    //     origin: "",          // Where the author is from
    //     recipeDesc: "",      // Short description of the recipe
    //     coverImg: "",        // The cover image of the recipe
    //     recipe: ``,          // The recipe
    //     imgs: {},            // All the images used in the recipe 
    //     formattingVars: {},  // All the variables in the recipe
    //     unitSystem: "",      // Default unit system
    // },

let whitelist = [];
let metricOrImperial = null;
let darkMode = false;
let numRecipesPerRow = 4;
const assetRoot = "assets/recipeImgs/";
const overlayAudioBJ = document.getElementById("OVERLAY-AUDIO-BJ");
const overlayAudioVolume = 100;
const secsOfOverlay = 2;
const overlaysDone = [];
const unitConnections = {
    "temp": {
        "C": ["F"],
        "F": ["C"],
    },
    "len": {
        "mm": ["cm", "in"],
        "cm": ["mm"],
        "in": ["mm"],
    },
    "vol": {
        "ml": ["L", "tsp", "tbsp", "foz", "cup", "qrt", "gal"],
        "L": ["ml"],
        "tsp": ["ml"],
        "tbsp": ["ml"],
        "foz": ["ml"],
        "cup": ["ml"],
        "qrt": ["ml"],
        "gal": ["ml"],
    },
    "wgt": {
        "g": ["kg", "lb", "oz"],
        "kg": ["g"],
        "oz": ["g"],
        "lb": ["g"],
    },
};

// What to run right after the site loads
function BOOT() {
    renderRecipeButtons(whitelist);

    // If the <form> tag is commented, use this
    const searchTextBox = document.getElementById("searchRecipe");
    searchTextBox.addEventListener("input", function(event) {
        handleSubmit(event);
    });


    window.addEventListener('resize', () => {
        renderRecipeButtons(whitelist);
    });

    setUnitSystem();

    overlayAudioBJ.valume = overlayAudioVolume/100;
}

// Check default unit system
function usesMetricSystem() {
  const userLocales = navigator.languages || [navigator.language];
  
  for (const locale of userLocales) {
    // Extract the country code (last part, after the hyphen, case-insensitive)
    const countryCode = locale.trim().split('-').pop().toLowerCase();
    
    // Check for known imperial countries
    if (countryCode === 'us' || countryCode === 'mm' || countryCode === 'lr') {
      return false; // Imperial
    }
  }

  // Default to metric for all other locales (most of the world)
  return true; // Metric
}

function setUnitSystem() {
    if (usesMetricSystem()) {
        metricOrImperial = "metric";
    } else {
        metricOrImperial = "imperial";
    }

    setUnitButtonText();
}

function setUnitButtonText() {
    if (metricOrImperial == "metric") {
        document.getElementById("unitToggle").textContent = "Change to imperial";
    } else {
        document.getElementById("unitToggle").textContent = "Change to metric";
    }
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
    const author = document.getElementById("recipeAuthor");
    const desc = document.getElementById("recipeDesc");
    const coverImg = document.getElementById("recipeCoverImg");

    title.textContent = recipe.recipeName || "Untitled recipe";
    author.textContent = recipe.author || "";
    desc.textContent = recipe.recipeDesc || "";

    let imgPath = (recipe.coverImg || "test/test.jpeg").toLowerCase();
    if (!imgPath.includes("assets/")) {
        imgPath = "assets/" + imgPath;
    }
    coverImg.src = imgPath;
    coverImg.alt = (recipe.recipeName || "Recipe") + " cover image";
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
    // Clear previous list
    const container = document.getElementById("recipeSelection");
    container.innerHTML = "";

    for (let recipe of recipes) {
        if (contains(renderList, recipe) && !contains(seen, recipe)) {
            addRecipeButton(recipe);
            seen.push(recipe);
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
    const recipeDiv = document.getElementById("recipeSelection");

    // Card wrapper
    const card = document.createElement("button");
    card.setAttribute("id", recipe.author + recipe.recipeName + "Button");
    card.setAttribute("onclick", "selectRecipe(this)");
    card.className = "recipe-card flex flex-col items-start text-left w-[160px] sm:w-[180px] bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-100 overflow-hidden";

    // Image
    const img = document.createElement("img");
    let imgPath = recipe.coverImg.toLowerCase();
    if (!imgPath.includes(assetRoot)) {
        imgPath = assetRoot + imgPath;
    }
    img.src = imgPath;
    img.alt = recipe.recipeName + " cover image";
    img.className = "w-full h-28 object-cover";
    card.appendChild(img);

    // Text container
    const textWrap = document.createElement("div");
    textWrap.className = "px-3 py-2 w-full";

    const nameEl = document.createElement("p");
    nameEl.className = "font-semibold text-sm text-slate-900 truncate";
    nameEl.textContent = recipe.recipeName;
    textWrap.appendChild(nameEl);

    const authorEl = document.createElement("p");
    authorEl.className = "text-[11px] text-slate-500 truncate";
    authorEl.textContent = recipe.author;
    textWrap.appendChild(authorEl);

    if (recipe.recipeDesc) {
        const descEl = document.createElement("p");
        descEl.className = "mt-1 text-[10px] text-slate-500 line-clamp-2";
        descEl.textContent = recipe.recipeDesc;
        textWrap.appendChild(descEl);
    }

    card.appendChild(textWrap);

    recipeDiv.appendChild(card);
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
    const units = document.getElementById("unitToggle");

    recipeSelection.classList.add("hidden");
    shuffle.classList.add("hidden");
    recipeShowing.classList.remove("hidden");
    goBack.classList.remove("hidden");
    units.classList.remove("hidden");
}

function goBack() {
    const recipeSelection = document.getElementById("recipeSelection");
    const recipeShowing = document.getElementById("recipeShowing");
    const shuffle = document.getElementById("shuffleButton");
    const goBack = document.getElementById("backButton");
    const units = document.getElementById("unitToggle");

    recipeSelection.classList.remove("hidden");
    shuffle.classList.remove("hidden");
    recipeShowing.classList.add("hidden");
    goBack.classList.add("hidden");
    units.classList.add("hidden");
}

// Search text input handling
function handleSubmit(event) {
    event.preventDefault();

    const searchQuery = document.getElementById("searchRecipe").value;

    if (searchQuery == "BOE JIDEN") {
        if (overlays.bjOverlay(searchQuery)) {
            document.getElementById("searchRecipe").value = "";
            whitelist = [];
        }
    } else if (searchQuery == "KIRBY") {
        if (overlays.kOverlay(searchQuery)) {
            document.getElementById("searchRecipe").value = "";
            whitelist = [];
        }
    } else if (searchQuery == "ROZIZZLE THE RIZZLER") {
        if (overlays.rOverlay(searchQuery)) {
            document.getElementById("searchRecipe").value = "";
            whitelist = [];
        }
    } else if (searchQuery == "BAYAK") {
        if (overlays.bOverlay(searchQuery)) {
            document.getElementById("searchRecipe").value = "";
            whitelist = [];
        }
    } else if (searchQuery == "JC JENSON") {
        if (overlays.jOverlay(searchQuery)) {
            document.getElementById("searchRecipe").value = "";
            whitelist = [];
        }
    } else if (searchQuery == "FREAK BOB") {
        if (overlays.daOverlay(searchQuery)) {
            document.getElementById("searchRecipe").value = "";
            whitelist = [];
        }
    } else if (searchQuery == "DUOLINGO?!") {
        if (overlays.duOverlay(searchQuery)) {
            document.getElementById("searchRecipe").value = "";
            whitelist = [];
        }
    } else {
        whitelist = search(searchQuery);
    }
    renderRecipeButtons(whitelist);
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


// Unit conversions:
function unitToggle() {
    if (metricOrImperial == "metric") {
        metricOrImperial = "imperial";
    } else if (metricOrImperial == "imperial") {
        metricOrImperial = "metric";
    } else {
        setUnitSystem();
    }

    setUnitButtonText();
}

function unitConversion(unitType, startingUnit, endingUnit, startingValue=0, placesToRound=-1) {
    // unitType = "temp", "len", "vol", "wgt"
    // startingUnit, endingUnit = "C", "F", "mm", "cm", "in", "ml", "L", "tsp", "tbsp", "foz", "cup", "qrt", "gal", "g", "kg", "oz", "lb"
    const steps = findConversionPath(unitType, startingUnit, endingUnit);
    let currValue = startingValue;
    let fromUnit = startingUnit;
    let toUnit = null;

    for (const step of steps) {
        toUnit = step;
        currValue = directUnitConversion(unitType, fromUnit, toUnit, currValue);
        fromUnit = toUnit;
    }

    return roundToNPlaces(currValue, placesToRound);
}

function directUnitConversion(unitType, startingUnit, endingUnit, startingValue=0) {
    if (unitType == "temp") {
        if (startingUnit == "C" && endingUnit == "F") {
            return unitConversions.cToF(startingValue);
        }
        if (startingUnit == "F" && endingUnit == "C") {
            return unitConversions.fToC(startingValue);
        }
    } else if (unitType == "len") {
        if (startingUnit == "mm" && endingUnit == "cm") {
            return unitConversions.mmToCm(startingValue);
        }
        if (startingUnit == "cm" && endingUnit == "mm") {
            return unitConversions.cmToMm(startingValue);
        }
        if (startingUnit == "mm" && endingUnit == "in") {
            return unitConversions.mmToIn(startingValue);
        }
        if (startingUnit == "in" && endingUnit == "mm") {
            return unitConversions.inToMm(startingValue);
        }
    } else if (unitType == "vol") {
        if (startingUnit == "ml" && endingUnit == "L") {
            return unitConversions.mlToL(startingValue);
        }
        if (startingUnit == "ml" && endingUnit == "tsp") {
            return unitConversions.mlToTeaspoon(startingValue);
        }
        if (startingUnit == "ml" && endingUnit == "tbsp") {
            return unitConversions.mlToTablespoon(startingValue);
        }
        if (startingUnit == "ml" && endingUnit == "foz") {
            return unitConversions.mlToFoz(startingValue);
        }
        if (startingUnit == "ml" && endingUnit == "cup") {
            return unitConversions.mlToCup(startingValue);
        }
        if (startingUnit == "ml" && endingUnit == "qrt") {
            return unitConversions.mlToQuart(startingValue);
        }
        if (startingUnit == "ml" && endingUnit == "gal") {
            return unitConversions.mlToGallon(startingValue);
        }
        if (startingUnit == "L" && endingUnit == "ml") {
            return unitConversions.LToMl(startingValue);
        }
        if (startingUnit == "tsp" && endingUnit == "ml") {
            return unitConversions.teaspoonToMl(startingValue);
        }
        if (startingUnit == "tbsp" && endingUnit == "ml") {
            return unitConversions.tablespoonToMl(startingValue);
        }
        if (startingUnit == "foz" && endingUnit == "ml") {
            return unitConversions.fozToMl(startingValue);
        }
        if (startingUnit == "cup" && endingUnit == "ml") {
            return unitConversions.cupToMl(startingValue);
        }
        if (startingUnit == "qrt" && endingUnit == "ml") {
            return unitConversions.quartToMl(startingValue);
        }
        if (startingUnit == "gal" && endingUnit == "ml") {
            return unitConversions.gallonToMl(startingValue);
        }
    } else if (unitType == "wgt") {
        if (startingUnit == "g" && endingUnit == "kg") {
            return unitConversions.gToKg(startingValue);
        }
        if (startingUnit == "g" && endingUnit == "oz") {
            return unitConversions.gToOz(startingValue);
        }
        if (startingUnit == "g" && endingUnit == "lb") {
            return unitConversions.gToLb(startingValue);
        }
        if (startingUnit == "kg" && endingUnit == "g") {
            return unitConversions.kgToG(startingValue);
        }
        if (startingUnit == "oz" && endingUnit == "g") {
            return unitConversions.ozToG(startingValue);
        }
        if (startingUnit == "lb" && endingUnit == "g") {
            return unitConversions.lbToG(startingValue);
        }
    }
    return 0;
}

function findConversionPath(unitType, startingUnit, endingUnit) {
    const queue = [];
    const seen = [];
    queue.push(new unitTree(null, startingUnit));

    while (queue.length != 0) {
        let currentItem = queue.shift();

        seen.push(currentItem.unit);

        if (currentItem.unit == endingUnit) {
            const steps = [];

            while (currentItem.parent != null) {
                steps.push(currentItem.unit);
                currentItem = currentItem.parent;
            }
            steps.reverse();

            return steps;
        }

        for (const unit of unitConnections[unitType][currentItem.unit]) {
            if (!seen.includes(unit)) {
                queue.push(new unitTree(currentItem, unit));
            }
        }
    }

    throw new TypeError(`Could not find a way to convert ${startingUnit} to ${endingUnit} under the ${unitType} unit type.`);
    
}

// Decimal to fraction approximation
function decimalToFraction(decimal=0) {
    const decimalPart = decimal%1;
    const commonFractionDenominators = [2, 3, 4, 8];
    const commonFractions = [];
    let smallestDiff = 1;
    let endFraction = null;

    for (const denom of commonFractionDenominators) {
        for (let numer = 1; numer < denom; numer++) {
            const newFraction = new fraction(numer, denom);
            if (!fractionIncludes(commonFractions, newFraction)) { commonFractions.push(newFraction); }
        }
    }

    for (const commonFraction of commonFractions) {
        const newDiff = Math.abs(commonFraction.value - decimalPart);
        if (newDiff < smallestDiff) {
            smallestDiff = newDiff;
            endFraction = commonFraction;
        }
    }

    return endFraction;
}

function gcd(a, b) {
    if (!b) { return a; }

    return gcd(b, a % b);
}

function fractionIncludes(fractionArray, fractionIn) {
    for (const fraction of fractionArray) {
        if (fraction.equals(fractionIn)) {
            return true;
        }
    }

    return false;
}

function roundToNPlaces(value, n) {
    if (n < 0) {
        return value;
    }
    return Math.round(value * 10**n) / 10**n;
}

// Classes
class unitTree {
    constructor(parent, unit) {
        this.parent = parent;
        this.unit = unit;
    }
}

class fraction {
    constructor(numerator, denominator) {
        this.numerator = numerator/gcd(numerator, denominator);
        this.denominator = denominator/gcd(numerator, denominator);
        this.value = numerator/denominator;
    }

    equals(otherFraction) {
        return this.numerator * otherFraction.denominator == this.denominator * otherFraction.numerator;
    }

    toDecimal(roundingN=-1) {
        return roundToNPlaces(this.value, roundingN);
    }

    multiply(factor) {
        const newGcd = gcd(this.numerator * factor, this.denominator);
        this.numerator = Math.trunc(this.numerator * factor / newGcd);
        this.denominator = Math.trunc(this.denominator / newGcd);
        this.value = this.numerator / this.denominator;
    }
}

class unitConversions {
    // Temperature unit conversion
    static cToF(celsius=0) {
        return celsius * 9 / 5 + 32;
    }

    static fToC(fahrenheit=0) {
        return (fahrenheit - 32) * 5 / 9;
    }

    // Length unit conversion (mm, cm) vs (in)
    static mmToCm(mm=0) {
        return mm/10;
    }

    static cmToMm(cm=0) {
        return cm*10;
    }

    static mmToIn(mm=0) {
        return mm*5/127;
    }

    static inToMm(inch=0) {
        return inch*2540;
    }

    // Volume unit conversion (ml, L) vs (teaspoon, tablespoon, foz, cup, quart, gallon)
    static mlToL(ml=0) {
        return ml/1000;
    }

    static mlToTeaspoon(ml=0) {
        return ml*1000/4929;
    }

    static mlToTablespoon(ml=0) {
        return ml*1000/14787;
    }

    static mlToFoz(ml=0) {
        return ml*500/14787;
    }

    static mlToCup(ml=0) {
        return ml*5/1183;
    }

    static mlToQuart(ml=0) {
        return ml*5/4732;
    }

    static mlToGallon(ml=0) {
        return ml/3785;
    }

    static LToMl(L=0) {
        return L*1000;
    }

    static teaspoonToMl(teaspoon=0) {
        return teaspoon*4.929;
    }

    static tablespoonToMl(tablespoon=0) {
        return tablespoon*14.787;
    }

    static fozToMl(oz=0) {
        return oz*14787/500;
    }

    static cupToMl(cup=0) {
        return cup*1183/5;
    }

    static quartToMl(quart=0) {
        return quart*4732/5;
    }

    static gallonToMl(gallon=0) {
        return gallon*18927/5;
    }

    // Weight unit conversion (g, kg) vs (oz, lb)
    static gToKg(g=0) {
        return g/1000;
    }

    static gToOz(g=0) {
        return g*20/567;
    }

    static gToLb(g=0) {
        return g*5/2268;
    }

    static kgToG(kg=0) {
        return kg*1000;
    }

    static ozToG(oz=0) {
        return oz*28.35;
    }

    static lbToG(lb=0) {
        return lb*453.6;
    }
}

class overlays {
    static hideOverlays(imgID, textID){
        document.getElementById("overlays").classList.add("hidden");
        document.getElementById(imgID).classList.add("hidden");
        document.getElementById(textID).classList.add("hidden");
    }

    static showOverlays(imgID, textID){
        document.getElementById("overlays").classList.remove("hidden");
        document.getElementById(imgID).classList.remove("hidden");
        document.getElementById(textID).classList.remove("hidden");
    }

    static overlayLogic(imgID, textID, time = 2) {
        this.showOverlays(imgID, textID);
        setTimeout(this.hideOverlays, 1000*time, imgID, textID);
    }

    static playSound(audio) {
        const sound = audio.cloneNode();
        sound.volume = audio.volume;
        sound.play();
    }

    static bjOverlay(searchQuery="") {
        if (overlaysDone.includes(searchQuery)) { return false; }
        overlaysDone.push(searchQuery);
        this.overlayLogic("BJ", "overlayIdBJ", Math.max(overlayAudioBJ.duration, secsOfOverlay));
        this.playSound(overlayAudioBJ);
        return true;
    }

    static kOverlay(searchQuery="") {
        if (overlaysDone.includes(searchQuery)) { return false; }
        overlaysDone.push(searchQuery);
        this.overlayLogic("K", "overlayIdK", secsOfOverlay);
        return true;
    }

    static bOverlay(searchQuery="") {
        if (overlaysDone.includes(searchQuery)) { return false; }
        overlaysDone.push(searchQuery);
        this.overlayLogic("B", "overlayIdB", secsOfOverlay);
        return true;
    }

    static rOverlay(searchQuery="") {
        if (overlaysDone.includes(searchQuery)) { return false; }
        overlaysDone.push(searchQuery);
        this.overlayLogic("R", "overlayIdR", secsOfOverlay);
        return true;
    }

    static jOverlay(searchQuery="") {
        if (overlaysDone.includes(searchQuery)) { return false; }
        overlaysDone.push(searchQuery);
        this.overlayLogic("J", "overlayIdJ", secsOfOverlay);
        return true;
    }

    static daOverlay(searchQuery="") {
        if (overlaysDone.includes(searchQuery)) { return false; }
        overlaysDone.push(searchQuery);
        this.overlayLogic("D", "overlayIdD", secsOfOverlay);
        return true;
    }

    static duOverlay(searchQuery="") {
        if (overlaysDone.includes(searchQuery)) { return false; }
        overlaysDone.push(searchQuery);
        this.overlayLogic("DU", "overlayIdDU", secsOfOverlay);
        return true;
    }
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