// 1. Add a coffee to local storage 
const addFavourite = (coffee) => {
    // get all previously saved coffee data
    const favourites = getAllFavourites()
    console.log(favourites);
     favourites.push (coffee)
     localStorage.setItem('favourites', JSON.stringify(favourites) )
}


// 2. Get all coffees from local storage
const getAllFavourites = () => {
    const all = localStorage.getItem('favourites')
    const favourites = JSON.parse(all)
    if (all) {
    const favourites = JSON.parse(all)
    console.log(favourites);
    
        return favourites
    } else {
        console.log([]);
        return []
    }
    
}



// 3. Remove a coffee from local storage





     


export { addFavourite, getAllFavourites }