import PropTypes from 'prop-types';
import CarCard from "components/CarCard/CarCard";

import { CarList, CarItem } from "./CatalogList.styled";

const CatalogList =({ carsArr })=>{
    return(
     <>
        <CarList>
            {carsArr.map(car=>(
                <CarItem key={car.id}>
                    <CarCard car={car} />
                </CarItem>
            ))}
        </CarList>
     </>
    )
 }
 
 export default CatalogList;

 CatalogList.propTypes = {
    carsArr: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        img: PropTypes.string,
        make: PropTypes.string.isRequired,
        model: PropTypes.string.isRequired,
        year: PropTypes.number.isRequired,
        type: PropTypes.string.isRequired,
        rentalPrice: PropTypes.string.isRequired,
        address: PropTypes.string.isRequired,
        rentalCompany: PropTypes.string.isRequired,
        mileage: PropTypes.number.isRequired,
        accessories: PropTypes.array.isRequired,
      }).isRequired
    ).isRequired,
};