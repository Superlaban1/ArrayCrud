//#region model
let myDataArray = 
[
    { date: "2024-01-01", wish: "Toyota Supra" },
    { date: "2026-10-07", wish: "Being good at Tekken" }
];
//mit data
function createData(newWish) {
    let newEntry = { date: "2024-05-22", wish: newWish };
    myDataArray.push(newEntry);
    return "ok";
}
//skaber data
function readData(index) {
    let data = myDataArray[index];
    if (data === undefined) 
        {
            return "error: index out of bounds";
        }
    return data;
}
//læser data
function updateData(index, updatedWish) {
    if (myDataArray[index] !== undefined) 
        {
            myDataArray[index].wish = updatedWish;
            return "ok";
        }
    return "error: index not found";
}
//opdatere data
function deleteData(index) {
    if (myDataArray[index] !== undefined) 
        {
            myDataArray.splice(index, 1);
            return "ok";
        }
    return "error: index not found";
}
//sletter data
//#endregion

//#region view static
function readerStatic(appID){
    let appContainer = document.getElementById(appID)
    
    //H1 STUFF
    const myHeadLine=document.createElement("h1")
    myHeadLine.innerText="Ønske List"
    myHeadLine.id="header"
    appContainer.appendChild(myHeadLine);

    //INPUT SECTION STUFF
    const inputSection=document.createElement("section")
    const input=document.createElement("input")
    inputSection.id="ips"
    input.id="ip"
    appContainer.appendChild(inputSection)
    inputSection.appendChild(input)
    // BUTTON STUFF
    const addbutton=document.createElement("button")
    addbutton.innerText="add"
    addbutton.id="abtn"
    inputSection.appendChild(addbutton)

    addbutton.addEventListener("click", newWishCallBack);

    // WISH LIST STUFF
    const listsection=document.createElement("section")
    listsection.innerText=""
    listsection.id="list-s"
    appContainer.appendChild(listsection)
    

}
//#endregion

//#region view dynamic
function readerDynamic(){
    const listSection = document.getElementById("list-s");
    listSection.innerHTML = "";

    //updates the visual list
    myDataArray.forEach((entry, index) => {
        const wishItem = document.createElement("article");
        wishItem.className = "wish-item";

        const dateText = document.createElement("span");
        dateText.className = "date";
        dateText.innerText = entry.date;

        const wishText = document.createElement("span");
        wishText.className = "wish";
        wishText.innerText = entry.wish;

        const removeBTN = document.createElement("button");
        removeBTN.className = "trash";
        removeBTN.innerText = "Remove Wish";

        removeBTN.addEventListener("click", () => DeleteCallBack(index));

        wishItem.appendChild(dateText);
        wishItem.appendChild(wishText);
        wishItem.appendChild(removeBTN);
        listSection.appendChild(wishItem);
    });
}
//#endregion

//#region controller
function newWishCallBack(){
        const input = document.getElementById("ip");
        const newWish = input.value;

        if (newWish !== "") {
            createData(newWish);
            readerDynamic();
        }
}
//add and delete function
function DeleteCallBack(index){
        deleteData(index);
        readerDynamic();
}
//#endregion 
readerStatic("appID");
readerDynamic();