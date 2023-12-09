import { Img, Card } from "./CarCard.styled";
import TagsList from "components/TagsList/TagsList";
import extractCarAddress from "utils/extractCarAdress";

const CarCard =({car})=>{
    const {
        id,
        img,
        make,
        model,
        year,
        type,
        rentalPrice,
        address,
        rentalCompany,
        mileage,
        accessories,
      } = car;
   return(
    <Card>
        <div>
        <Img 
        src={img}
        alt={make}
        loading="lazy"/>
        </div>

        <div>
        <p><span>{model}</span>, {year}</p>
        <p>{rentalPrice}</p>
        </div>

        <TagsList 
        data={{
            carAddress: extractCarAddress(address),
            rentalCompany,
            type,
            model,
            mileage,
            accessories,
          }}/>

    </Card>
   )
}

export default CarCard;