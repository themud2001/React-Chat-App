import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { compose } from "redux";
import { connect } from "react-redux";

import requireAuth from "../../hoc/requireAuth";

import "./styles.scss";

const Chat = ({ username }) => {
    const [chatItems, setChatItems] = useState([]);
    const { handleSubmit, register, reset } = useForm();

    if (!window.__ws || window.__ws.readyState === 2 || window.__ws.readyState === 3) {
        window.__ws = new WebSocket("ws://localhost:3090/");
    }

    const onFormSubmit = ({ chatInput }) => {
        const timestamp = new Date(Date.now())
        window.__ws.send(timestamp.toLocaleDateString() + " " + username + ": " + chatInput);
        reset();
    };

    useEffect(() => {        
        window.__ws.onmessage = event => {
            const { data } = event;
            const item = <div key={event.timeStamp} className="chat-item">{data}</div>;

            setChatItems(oldArray => [...oldArray, item]);
        };

        return () => {
            window.__ws.close();
        }
    }, []);

    return (
        <div className="chat-container">
            <div className="chat-box">
                {chatItems}
            </div>

            <div className="chat-form">
                <form onSubmit={handleSubmit(onFormSubmit)}>
                    <input type="text" placeholder="Enter your message..." {...register("chatInput", { required: true })} />
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return { username: state.auth.user.username };
};

export default compose(
    requireAuth,
    connect(mapStateToProps)
)(Chat);