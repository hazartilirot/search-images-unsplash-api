import React from "react";

class ImageCard extends React.Component {
  /*in order to retrieve an img fitted size into a grid in the DOM, we need to 
  create a reference */
  constructor(props) {
    super(props);

    this.state = { spans: 0 };
    /*IMPORTANT! Each time we want to interact with DOM we create a Reference 
    and wire up it to an element like <img>*/
    this.imageRef = React.createRef();
  }

  /*We might find ourselves confronted by the fact that an object property we 
  want to get hasn't been loaded yet. We query property before an image appears
  in the screen meaning it takes time to get a respond from a remote server
  EventListener attached to an object so that once it's loaded we retrieve an
  image height.*/
  componentDidMount() {
    let spans = 0;
    this.imageRef.current.addEventListener("load", () => {
      const height = this.imageRef.current.clientHeight;
      spans = Math.ceil(height / 10);
      this.setState({ spans });
    });
  }

  render() {
    const { urls, description } = this.props.image;
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img src={urls.regular} alt={description} ref={this.imageRef} />
      </div>
    );
  }
}

export default ImageCard;
