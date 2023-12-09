import PropTypes from 'prop-types';
import { TagList, CardTagsList, TagsItem, Tag } from './TagList.styled';

const TagsList = ({ data }) => {
    const { carAddress, rentalCompany, type, model, mileage, accessories } = data;
  
    return (
      <TagList>
        <li>
          <CardTagsList >
            <TagsItem >
              <Tag>{carAddress[0]}</Tag>
            </TagsItem>
  
            <TagsItem >
              <Tag>{carAddress[1]}</Tag>
            </TagsItem>
  
            <TagsItem>
              <Tag>{rentalCompany}</Tag>
            </TagsItem>
          </CardTagsList>
        </li>
  
        <li>
          <CardTagsList>
            <TagsItem>
              <Tag>{type}</Tag>
            </TagsItem>
  
            <TagsItem>
              <Tag>{model}</Tag>
            </TagsItem>
  
            <TagsItem>
              <Tag>{mileage}</Tag>
            </TagsItem>
  
            <TagsItem>
              <Tag>{accessories[0]}</Tag>
            </TagsItem>
          </CardTagsList>
        </li>
      </TagList>
    );
  };
  
  export default TagsList;

  TagsList.propTypes = {
    data: PropTypes.shape({
      carAddress: PropTypes.array.isRequired,
      rentalCompany: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      model: PropTypes.string.isRequired,
      mileage: PropTypes.number.isRequired,
      accessories: PropTypes.array.isRequired,
    }).isRequired,
  };