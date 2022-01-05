import {useState} from "react";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {selectors} from "../../state/selectors";

export const LoginPrompt = () => {
    return <>
        <p>Please login to create and manage events</p>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign up</Link>
    </>;
}

interface Event {
    id?: string;
    joinCode?: string;
    isCoHost?: boolean;
    name?: string;
    dateOpened?: Date;
    active?: boolean;
    description?: string;
}

export const Admin = () => {
    const user = useSelector(selectors.user.orNull);

    //const [events, setEvents] = useState<Event[]>(getEventsConnectedToUser(user));

    const events: Event[] = [{}];

    return <>
        <div className="top-text">
            <p>This is the admin portal</p>
            {user?.loggedIn && user.name ?
                <p>Welcome {user.name}, feel free to look around</p>
            : /* User not authenticated */
                <LoginPrompt/>
            }
            <br/>
            <p>Events:</p>
        </div>
        <ul className="list-group list-group-flush">
            <li className="list-group-item new-event">
                <Link role="button" className="btn btn-dark" to="/create-event">New event</Link>
            </li>
            {events.map(e => <li className="list-group-item {% if not e.active %}disabled{% endif %}">
                <div className="d-flex w-100 justify-content-between">
                    <p className="mb-1">{e?.name}<br/><small>{e?.description}</small>
                        <br/>
                        {e?.active && <>
                            <small>Join code: {e?.joinCode}</small>
                            <br/>
                        </>}
                        {e?.active ?
                            <>
                                <Link className="btn btn-dark" role="button" to={`${e?.id}/manage`}>Manage</Link>
                                <Link className="btn btn-dark" role="button" style={{marginLeft: 10}}
                                   to={`${e?.id}/presentation`}>Presentation</Link>
                            </>
                            :
                            <small>Event finished</small>
                        }
                    </p>
                    <small>{e?.dateOpened}</small>
                </div>
            </li>)}
        </ul>
    </>;
}