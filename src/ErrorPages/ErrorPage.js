import { useRouteError } from "react-router-dom";
import image from '../Assets/Images/Error.jpg'
export default function ErrorPage() {
    const error = useRouteError();
    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
            <img src={image} alt="" />
        </div>
    );
}