const React = require('react');
 
class Show extends React.Component {
  render() {
      const {video} = this.props;
    return (
        <div>
            <h1>{ video.title }</h1>
            {/* <h2>Welcome {this.props.currentUser.username}</h2> */}

            <form action="/sessions?_method=DELETE" method="POST">
                <input type="submit" value="Log Out"/>
            </form>
    
                        <h3><a href={`/videos/`}>Home</a></h3>
                        <h4>Starring: {video.starring.map((star)=>{return `${star}  `})} </h4>
                        <img src={video.img}/>
                        <p>{ video.description }</p>
                        <h5>Format: { video.dvd ? 'DVD   ' : ''}
                                    {video.googlePlay ? 'GooglePlay   ' : ''}
                                    {video.amazonPrime ? 'Amazon Prime' : ''}
                        </h5>
                        <a href={`/videos/${video._id}/edit`}>Edit This Item</a> 
                        <form action={`/videos/${video._id}?_method=DELETE`} method="post">
                            <input type="submit" value="delete"/>
                        </form>
        </div> );
  }
}

module.exports = Show;