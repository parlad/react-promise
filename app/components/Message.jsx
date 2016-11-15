var React = require('react');

// var Message = React.createClass({
//   render : function() {
//     var {temp, loaction} = this.props;
//     return (
//       <div>
//           <h3>It's {temp} in {loaction}</h3>
//       </div>
//     );
//   }
// });

var Message = ({temp, loaction}) => {
    return (
      <div>
          <h3>It's {temp} in {loaction}</h3>
      </div>
    );
}

module.exports = Message;
