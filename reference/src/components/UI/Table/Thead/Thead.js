import React from "react";

function thead(props) {
    const {data} = props;
    return (
        <thead>
            <tr className="header" role="rowgroup">
                {data.map((item, index) => <th key={index}>{item}</th>)}
            </tr>
        </thead>
    )
}

export default thead;