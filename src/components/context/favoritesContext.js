import React, {useContext, useState, useMemo, useCallback} from 'react';

const FavoritesContext = React.createContext(null);

export const useFavoritesContext = () => {
    const context = useContext(FavoritesContext);
    if (context === undefined || context === null) {
        throw new Error(
            'useFavoritesContext must be used within a FavoritesContextProvider',
        );
    }
    return context;
};

const FavoritesContextProvider =  ({children}) => {
    const [favorites, setFavorites] = useState([]);

    const addToFavoritesHandler = useCallback(item => {

        const oldFavorites = [...favorites];
        const newFavorites = oldFavorites.concat(item);
        setFavorites(newFavorites);
    }, [favorites]);
   
    const removeFromFavoritesHandler = useCallback(item => {

        const oldFavorites = [...favorites];
        const newFavorites = oldFavorites.filter(element => element.id !== item.id);
        setFavorites(newFavorites);
    }, [favorites]);
   

    const value = useMemo(() => ({
            favorites,
            addToFavoritesHandler,
            removeFromFavoritesHandler,
        }),
        [favorites, addToFavoritesHandler, removeFromFavoritesHandler]
    );

    return (
        <FavoritesContext.Provider value={value}>
            {children}
        </FavoritesContext.Provider>
    );

};



export default FavoritesContextProvider;