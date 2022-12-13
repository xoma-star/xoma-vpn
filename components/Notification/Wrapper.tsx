import {useState} from "react";
import Notification from "./index";

const NotificationsWrapper = () => {
    const [notifications, setNotifications] = useState<string[]>([])

    return <div>
        {notifications.map(x => <Notification message={x} key={x}/>)}
    </div>
}

export default NotificationsWrapper