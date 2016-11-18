var React = require('react');

var About = (props) => {
    return (
    <div>
        <h2 className="text-center">About</h2>
        <p>
          This is the weather application built on react.
          I have built for the understanding react.
        </p>
        <p>
          Here are some of tool i have used so far.
        </p>
        <ul>
          <li>
            <a href= "https://facebook.github.io/react">React</a> -This was the js Feamework.
          </li>
          <li>
            <a href= "https://openweathermap.org">Open Weather</a> -This was the Free Api.
          </li>
        </ul>
    </div>
    );
}


module.exports = About;
