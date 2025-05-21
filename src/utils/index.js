import toast from "react-hot-toast"

// 1. Add a coffee to local storage 
const addFavourite = (coffee) => {
    // get all previously saved coffee data
    const favourites = getAllFavourites()
    const isExist = favourites.find( item => item .id == coffee.id)
    if (isExist) return toast.error('Coffee already exist');
    
     favourites.push (coffee)
     localStorage.setItem('favourites', JSON.stringify(favourites) )
     toast.success('Successfully addeded!');
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