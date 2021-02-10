import React from 'react';

export const LeadHouse = ({leadHouse}) => {
    return (
        <div>
            <h1>{leadHouse[0][0][0]} is in the lead with {leadHouse[0][0][1]} points.</h1>
        </div>
    )
}