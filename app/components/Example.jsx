var React = require('react');
var {Link} = require('react-router');

var Example = (props) => {
    return (
        <div>
          <h2 className = "text-center">Example</h2>
          <p>Here are a few examples location to try out!!!</p>
          <ol>
              <li>
                  <Link to = '/?loaction=Lamjung'>Lamjung , L.A</Link>
              </li>
              <li>
                  <Link to = '/?loaction=Pokhara'>pokhara, P.A</Link>
              </li>
          </ol>
        </div>
    );
}

module.exports = Example;
