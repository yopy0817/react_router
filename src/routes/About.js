import React from 'react';

//this.props.match
const About = ({match}) => {
    return (
        <div>
            {match.params.username}
        </div>
    );
};

export default About;