import React, { createContext, useState } from 'react';

export const DataContext = createContext();

export const DataProvider = (props) =>{
    const [products, setProducts] = useState([
        {
            "_id":"1",
             "title": "Vegetable Food",
             "images": "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
             "description": "We have a lot of different collection of foods.Select the price range & come to our restuarent.It is very easy for you.",
             "price": 340.00,
        },
        {
            "_id":"1",
             "title": "Sea Food",
             "images": "https://images.pexels.com/photos/566345/pexels-photo-566345.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
             "description": "We have a lot of different collection of foods.Select the price range & come to our restuarent.It is very easy for you.",
             "price": 800.00 ,
        },
        {
            "_id":"1",
             "title": "Bakery Food",
             "images": "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
             "description": "We have a lot of different collection of foods.Select the price range & come to our restuarent.It is very easy for you.",
             "price": 150.00,
        },
        {
            "_id":"1",
             "title": "Indian Food",
             "images": "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
             "description": "We have a lot of different collection of foods.Select the price range & come to our restuarent.It is very easy for you.",
             "price": 250.00,
        },
        {
            "_id":"1",
             "title": "Chineas Food",
             "images": "https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
             "description": "We have a lot of different collection of foods.Select the price range & come to our restuarent.It is very easy for you.",
             "price": 550.00,
        },
        {
            "_id":"1",
             "title": "Ice Cream",
             "images": "https://images.pexels.com/photos/5060281/pexels-photo-5060281.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
             "description": "We have a lot of different collection of foods.Select the price range & come to our restuarent.It is very easy for you.",
             "price": 100.00,
        },
    ])

    const value = {
        products : [products, setProducts]
    }

    return(
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
    )
}