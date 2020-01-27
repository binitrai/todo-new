import React from "react"; 
import Card from "../../../components/UI/Card/Card";
import i18 from "../../../services/i18.services"
import d from "../../../components/UI/index.module.css";
import {Link} from "react-router-dom";

function boards({data}) {
    if (!data) {
        return (
            <h2>
                {i18.noBoards}
            </h2>
        )
    }
    let boards = Object.keys(data).map(item => {
        let board = data[item];
        return (
            <Card key={board.id}>
                <h3>{board.title}</h3> 
                <p>{board.description}</p>
                <div className={d.LinkStyle}>
                    <Link to={`/board/${board.id}`}>{i18.viewBoard}</Link> 
                </div>
            </Card>
        )
    })
    return (
        <section>
            {boards}
        </section>
    )
}
export default boards;