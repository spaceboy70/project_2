const React = require('react');
 
class Index extends React.Component {
  render() {
      const {videos} = this.props;
    return (
        <div>
            <h1>Video Collection</h1>
            {/* <h2>Welcome {this.props.currentUser.username}</h2> */}
             <nav>
                 <a href="/videos/new">Create a New Video Entry</a>
             </nav>
            <form action="/sessions?_method=DELETE" method="POST">
                <input type="submit" value="Log Out"/>
            </form>
            <ol>
                {
                   videos.map((video, i) => {
                    return (
                        <li key={i}>
                            <card>
                                    <h3><a href={`/videos/${video._id}`}>{ video.title }</a></h3>
                                <img src={video.img}/>
                                <h5>Format: { video.dvd ? 'DVD' : ''}
                                            {video.googlePlay ? 'GooglePlay' : ''}
                                            {video.amazonPrime ? 'Amazon Prime' : ''}
                                </h5>
                                <form action={`/videos/${video._id}?_method=DELETE`} method="post">
                                    <input type="submit" value="delete"/>
                                </form>
                                
                                <br></br>
                            </card>
                        </li>
                        )
                    })
                }
            </ol>
        </div> );
  }
}

module.exports = Index;