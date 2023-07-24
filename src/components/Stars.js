import React from 'react';
import styled from 'styled-components';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';
const Stars = ({ stars }) => {
    console.log(stars % 10);
    // return <h4>stars</h4>;

    return (
        <div>
            {Array(4)
                .fill(true)
                .map((item) => (
                    <BsStarFill />
                ))}
        </div>
    );
};

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    span {
        color: #ffb900;
        font-size: 1rem;
        margin-right: 0.25rem;
    }
    p {
        margin-left: 0.5rem;
        margin-bottom: 0;
    }
    margin-bottom: 0.5rem;
`;
export default Stars;
