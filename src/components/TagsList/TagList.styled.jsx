import styled from '@emotion/styled';

export const TagList = styled.ul`
display: flex;
flex-flow: column;
gap: 4px;
margin-bottom: 28px;

color: #708090;
font-size: 12px;`

export const CardTagsList = styled.ul`
display: flex;
flex-wrap: nowrap;`

export const TagsItem = styled.li`
&:not(:last-child) {
    display: flex;
  }

  &:not(:last-child)::after {
    content: '';
    height: 16px;
    margin: 0 6px;
    border: #708090;
  }`

  export const Tag = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;`

