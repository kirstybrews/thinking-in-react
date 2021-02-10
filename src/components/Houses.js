import React from 'react';

export const Houses = ({houses}) => {
    return (
        <div>
            <table>
                <tr>
                    {Object.keys(houses).map(key => <td>{key}</td>)}
                </tr>
                <tr>
                    {Object.values(houses).map(value => <td>{value}</td>)}
                </tr>
            </table>
        </div>
    )
}