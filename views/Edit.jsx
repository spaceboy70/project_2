const React = require('react');

class Edit extends React.Component {
  render() {
      const {video} = this.props
      console.log(video.starring);
    return (
        <div>
            <h1>Edit Video </h1>
            {/* <h2>Welcome {this.props.currentUser.username}</h2> */}
            <form action={`/videos/${video._id}?_method=PUT`} method="POST">
                Title: <input type="text" name="title" value={video.title} /><br/>
                Starring: <input type="text" name="starring" value={video.starring} /><br/>
                Director: <input type="string" name="director" value={video.director} /><br/>
                Image URL: <input type="string" name="img" value={video.img} /><br/>
                Description: <input type="textarea" name="description" value={video.description} /><br/>
                <h5>Formats</h5>
                DVD: <input type="checkbox" checked={video.dvd ? "checked" : ""} name="dvd" /><br/>
                GooglePlay: <input type="checkbox" checked={video.googlePlay ? "checked" : ""} name="googlePlay" /><br/>
                Amazon Prime: <input type="checkbox" checked={video.amazonPrime ? "checked" : ""} name="amazonPrime" /><br/>
                <input type="submit" name="" value="Update"/>
             </form>
        </div>);
  }
}

module.exports = Edit;