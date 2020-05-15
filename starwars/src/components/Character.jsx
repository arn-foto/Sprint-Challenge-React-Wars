// Write your Character component here
import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background: lightblue;
  olor:white;
 text-shadow: 3px 3px 3px white;
 font-size:1rem;
  font-family: 'Indie Flower', cursive;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 20px;
  box-shadow: 2px 2px 2px black;
`;

const CharacterImg = styled.img`
	display:flex;
	
  width: 50%;
  height: 50%;
 `
 ;

const P = styled.p`
color:white;
text-shadow: 3px 3px 3px black;
font-size:1rem;
font-family: 'Indie Flower', cursive;
`;

const H = styled.h2`
color:white;
text-shadow: 3px 3px 3px black;
font-size:1rem;
font-family: 'Indie Flower', cursive;
`;

const Character = props =>{
    return (
             <Card>
             <H>{props.name}</H>
            <CharacterImg top width="10%" src={props.img} alt='Characters'/>
            <p>Gender: {props.gender}</p>
            <P>Status: {props.status}</P>
            <p>Species: {props.species}</p>
        </Card>
           
    )
}

export default Character;