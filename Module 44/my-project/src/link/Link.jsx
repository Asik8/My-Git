/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';

const Link = ({route}) => {
    return (
        <div>
            <li className="mr-10"><a href={route.path}>{route.title}</a></li>
        </div>
    );
};

Link.PropTypes = {
    route: PropTypes.object
}

export default Link;