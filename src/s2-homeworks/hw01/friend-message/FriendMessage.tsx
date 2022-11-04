import React from 'react'
import s from './FriendMessage.module.css'
import {friendMessage0} from "../HW1";

// создать тип вместо any и отобразить приходящие данные
export type FriendMessageProps = {
    message: ObjectMessage
}

export type ObjectMessage = {
    id: number
    user: ObjectUser
    message: ObjectMessageMes
}

export type ObjectUser = {
    avatar: string
    name: string
}

export type ObjectMessageMes = {
    text: string
    time: string
}


const FriendMessage = (props: FriendMessageProps) => {
    return (
        <div
            id={'hw1-friend-message-' + props.message.id}
            className={s.friendMessage}
        >
            <div className={s.friendImageAndText}>
                <img
                    id={'hw1-friend-avatar-' + props.message.id}
                    // создаёт студент
                    src={props.message.user.avatar} width="30" height="30" alt="Avatar 2"
                    //
                />
                <div className={s.friendText}>
                    <div
                        id={'hw1-friend-name-' + props.message.id}
                        className={s.friendName}
                    >
                        {/*создаёт студент*/}
                        {props.message.user.name}
                        {/**/}
                    </div>
                    <pre
                        id={'hw1-friend-text-' + props.message.id}
                        className={s.friendMessageText}
                    >
                        {/*создаёт студент*/}
                        {props.message.message.text}
                        {/**/}
                    </pre>
                </div>
            </div>
            <div
                id={'hw1-friend-time-' + props.message.id}
                className={s.friendTime}
            >
                {/*создаёт студент*/}
                {props.message.message.time}
                {/**/}
            </div>
        </div>
    )
}

export default FriendMessage
