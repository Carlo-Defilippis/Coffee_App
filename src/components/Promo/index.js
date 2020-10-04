import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { prettyDOM } from '@testing-library/react'

function Promo() {

    
    const[prods, setProds] = useState([])

    useEffect(() => {
        axios.get('https://coffeeproducts.herokuapp.com/api/products/promo')
            .then(res => {
                console.log(res)
                setProds(res.data)
            })
            .catch()
    })

    return (
        <div>
            <ul>
            {
                prods.map(
                    prod => 

                        <li key={prod._id}>{prod.product}</li>

                )
            }
            </ul>
        </div>
    )
}

export default Promo