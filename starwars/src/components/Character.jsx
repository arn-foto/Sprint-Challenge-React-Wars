// Write your Character component here
import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
display:flex;
justify-content:center;
	background: lightblue;
	text-shadow: 3px 3px 3px black;
	font-size:1rem;
	font-family: 'Indie Flower', cursive;
	width: 50%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin: 20px;
	padding:20px;
	box-shadow: 2px 2px 2px purple;
`;

const CharacterImg = styled.img`
display:flex;
justify-content:center;
	`
 ;

const P = styled.p`

	text-shadow: 3px 3px 3px purple;
	font-size:1rem;
	font-family: 'Indie Flower', cursive;
`;

const H = styled.h2`
	display:flex; 
	justify-content:center;
	text-shadow: 3px 3px 3px purple;
	font-size:1rem;
	
`;



const Character = props =>{
    return (
             <Card>
             <H>{props.name}</H>
            <CharacterImg src={props.img} alt='Characters'/>
            <p>Gender: {props.gender}</p>
            <P>Status: {props.status}</P>
            <p>Species: {props.species}</p>
        </Card>
           
    )
}

export default Character;