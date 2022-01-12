function addId(suggestion) {
    let {name} = suggestion;
    const id = name.toLowerCase().split(" ").join("-");
    suggestion.id = id;
    return suggestion;
}

export {addId};