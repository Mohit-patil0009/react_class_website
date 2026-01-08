import "./Bodycss.css";


export function Body(props) {
    // console.log("🚀 ~ Body ~ props:", props.content.title)
    
  return (
    <div className="shop-section">
      {/* <div className="box-img1"></div> */}
      <img
        className="img_url" src={props.content.image} alt=""/>
      <div >
      <h4 className="content">{props.content.title}</h4>
      <p>Rs .{props.content.price}</p>


      </div>
    </div>
  );
}

// export default Body
