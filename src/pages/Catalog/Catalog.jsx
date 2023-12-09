import { useGetAllAdvertsQuery } from "redux/api/advertsAPI";
import { useEffect, useState } from 'react';

import CatalogList from "components/CatalogList/CatalogList";

const Catalog = () =>{
    const [cars, setCars] = useState([]);

    const { data: allAdverts } = useGetAllAdvertsQuery();

    console.log('ляляля')
    useEffect(()=>{
        if(!allAdverts){
            return
        }
        setCars(allAdverts)
    }, [allAdverts])

    console.log(allAdverts)

    return(
        <main>
            <p>каталог ляляля</p>
            <CatalogList carsArr={cars}/>
        </main>
    )
};

export default Catalog;