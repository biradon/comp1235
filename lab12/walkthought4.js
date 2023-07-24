
const input = prompt("Input here");
const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${input}`



fetch(url)
    .then(result => result.json())
    .then(data => {
        console.log("Word", data[0].word)
        console.log("Definition", data[0].meanings[0].definitions[0].definition)
        console.log("Noun: ", data[0].meanings[0].partOfSpeech)
    })
