import styled from 'styled-components'
import mediaqueries from './mediaQuries'

export const Container = styled.div`
${mediaqueries.desktop`padding: 0 20px;
      background-color: green;
        color: #fff;
      `}

  ${mediaqueries.tablet`padding: 0 10px;
  background-color: black;
  color: #fff;
  `}
  
  ${mediaqueries.mobile`padding: 0 5px;
  color: #fff;  
  background-color: yellow;
  `}
`
