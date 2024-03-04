const words =  [
    "depinde", "Pol", "pacpac", "mindspark", "studgames", "smartart", "macaroane", "pizza", 
    "sesiune", "studpac", "fspac", "sediu", "dani cățaua", "tudorg", "botoșani", "sergiu", 
    "tavi", "financiar", "cenzor", "comunicare", "HR", "academic", "tocăniță", "bobi", "bingus", 
    "la ba", "stan", "flaviu", "mustrare", "tobi", "pet", "volei", "hamilton", "spartan", 
    "party", "greco", "breakroom", "karaoke", "burgundiu", "antibal", "furia roșie", "dilău", 
    "bunicul", "TB", "moartea albă", "respect", "alias", "baru", "tsaaaaai", "semaca", "ședințe", 
    "legume", "biliard", "smartart", "treasure hunt", "majorat", "căminul 6", "grătar", "șuncuiuș", 
    "dj pol", "buchet de trandafiri", "eduspot", "vamă", "măi ioane", "hp", "vivi", "viv", 
    "candelabru", "flip the cup", "beerpong", "poziție activă", "boop"
];
const emojis =   [
    "😃", "😄", "😆", "😅", "🤣", "🥲", "🥹", "😊", "😇", "🙃", "😉", "😌",
    "🥰", "😘", "😚", "😋", "😛", "😝", "😜", "🤪", "🤨", "🧐",
    "🤓", "😎", "🥳", "😏", "😒", "😔", "😟",
    "😕", "🙁", "☹️", "😣", "😖", "😫", "🥺", "😢", "😭",
    "😮‍💨", "😤", "😠", "😡", "🤬", "🤯", "😳", "🥵", "🥶", "😱",
    "😨", "😰", "😥", "😓", "🫣", "🤗", "🫡", "🤔", "🫢", "🤭",
    "🤫", "🤥", "😶", "😐", "😑", "😬", "🫨", "🫠", "🙄",
    "😯", "😦", "😧", "😮", "😲", "🥱", "😴", "🤤", "😪", "😵",
    "😵‍💫", "🫥", "🤐", "🥴", "🤢", "🤮", "🤧", "😷", "🤒", "🤕",
    "🤑", "🤠", "😈", "👿", "🤡", "💩", "👻", "💀",
    "☠️", "👽", "🤖", "🧑🏻‍🎄", "🎅🏻", "🧌", "🧙‍♀️", "🧙", "🧙‍♂️",
    "🧝‍♀️", "🧝", "🧝‍♂️", "🧛‍♀️", "🧛", "🧛‍♂️", "🧟‍♀️", "🧟",
    "🧟‍♂️", "👩‍🦳", "🧑‍🦳", "👨‍🦳", "👩‍🦲", "🧑‍🦲", "👨‍🦲", "🧔‍♀️",
    "🧔", "🧔‍♂️", "👵", "🧓", "👴"
];
const emoji_lengt = 6;
const words_lengt = 10;
let used_words = [];

function index(array){
    return Math.floor(Math.random() * array.length)
}

function includes(array, size, elem){
    for (let i = 0; i < size; ++i){
        if (array[i] == elem)
            return 1;
    }
    return 0;
}

function generate_emojis(){
    let solution = [];
    let size = 0;
    while (size != emoji_lengt){
        let ind = index(emojis);
        if (!solution.includes(emojis[ind]))
            {   
                solution.push(emojis[ind])
                ++size;
            }
    }
    let respons = "";
    for (let ind = 0; ind < emoji_lengt; ++ind)
        respons += solution[ind], respons +=" ";
    return respons;
}

function generate_word(){
    let word = words[index(words)];
    if (used_words.length < words_lengt)
        used_words.push(word);
    else {
        while (used_words.includes(word))
            word = words[index(words)];

        for (let ind = 0 ; ind < words_lengt - 1; ++ind)
            used_words[ind] = used_words[ind + 1];

        used_words[words_lengt-1] = word;
    }
    return word.toUpperCase();
}

document.addEventListener('keydown', function(event){
    console.log(event.key);
    if(event.key === "Enter"){
        document.getElementById("emojis").innerHTML = generate_emojis();
        document.getElementById("word").innerHTML = generate_word();

        document.getElementById("emojis").style.display = "block";
        document.getElementById("word").style.display = "block";    

        document.getElementById("hiddenImage").style.display = "none";
    }
});



document.addEventListener('click', function(event) {
        document.getElementById("emojis").innerHTML = generate_emojis();
        document.getElementById("word").innerHTML = generate_word();

        document.getElementById("emojis").style.display = "block";
        document.getElementById("word").style.display = "block";    

        document.getElementById("hiddenImage").style.display = "none";
});
