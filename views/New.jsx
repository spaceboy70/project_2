const React = require('react');

class New extends React.Component {
  render() {
    return (
        <div>
            <h1>New Video </h1>
            {/* <h2>Welcome {this.props.currentUser.username}</h2> */}
            <form action="/videos" method="POST">
                Title: <input type="text" name="title" /><br/>
                Starring: <input type="text" name="starring" placeholder="seperate by commas e.g. Keanu Reeves, Lawrence Fishburne"/><br/>
                Director: <input type="string" name="director" /><br/>
                Image URL: <input type="string" name="img"/><br/>
                Description: <input type="textarea" name="description" /><br/>
                <h5>Formats</h5>
                DVD: <input type="checkbox" name="dvd" /><br/>
                GooglePlay: <input type="checkbox" name="googlePlay" /><br/>
                Amazon Prime: <input type="checkbox" name="amazonPrime" /><br/>
                <input type="submit" name="" value="Create Log"/>
             </form>
        </div>);
  }
}

module.exports = New;