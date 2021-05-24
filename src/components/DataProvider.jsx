import React, { createContext, useState } from 'react';

export const DataContext = createContext();

export const DataProvider = (props) =>{
    const [products, setProducts] = useState([
        {
            "_id":"1",
             "title": "Vegetable Food",
             "images": "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
             "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
             "price": 340.00,
        },
        {
            "_id":"1",
             "title": "Sea Food",
             "images": "https://images.pexels.com/photos/566345/pexels-photo-566345.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
             "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
             "price": 800.00,
        },
        {
            "_id":"1",
             "title": "Bakery Food",
             "images": "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
             "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
             "price": 150.00,
        },
        {
            "_id":"1",
             "title": "Indian Food",
             "images": "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
             "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
             "price": 250.00,
        },
        {
            "_id":"1",
             "title": "Chineas Food",
             "images": "https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
             "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
             "price": 550.00,
        },
        {
            "_id":"1",
             "title": "Ice Cream",
             "images": "https://images.pexels.com/photos/5060281/pexels-photo-5060281.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
             "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
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