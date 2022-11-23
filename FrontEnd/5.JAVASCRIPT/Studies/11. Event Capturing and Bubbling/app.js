//Event Bubbling

// document.querySelector(".container").addEventListener("click", function()
// {
//     console.log("Div Container");
// });

// document.querySelector(".card.row").addEventListener("click", function()
// {
//     console.log("Card Row");
// });

// document.querySelectorAll(".card-body")[1].addEventListener("click", function()
// {
//     console.log("Card Body");
// });

//Event Capturing & Delegetion

const cardbody=document.querySelectorAll(".card-body")[1];

cardbody.addEventListener("click", run);

function run(e) {
    if (e.target.className === "fa fa-remove") 
    {
        console.log("Delete");
    }

    if (e.target.id === "filter") 
    {
        console.log("Filter");
    }
    // console.log(e.target);
}