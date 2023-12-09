import styled from '@emotion/styled';

export const CarList = styled.ul`
display: flex;
flex-wrap: wrap;
gap: 50px 29px;
margin-bottom: 50px;

@media screen and (min-width: 768px) {
      margin-bottom: 80px;
  }
  `

  export const CarItem = styled.li`
  flex-basis: calc(
    100% / 1 - (29px * 0 / 1)
  );
  
  @media screen and (min-width: 768px) {
    flex-basis: calc(
        100% / 2 - (29px * 1 / 2)
      );
    }

    @media screen and (min-width: 1440px) {
        flex-basis: calc(
            100% / 4 - (29px * 3 / 4)
          );
        }
    `
  