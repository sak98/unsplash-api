import React, { Component, Fragment } from "react";
import Spinner from "./Spinner/Spinner"

export default function ImageList(props) {
    let { images,loading} = props.Images;
    
    let ImagesBlock = images.map((image)=>{
        return(
            <Fragment>
                <img src={image.urls.regular} alt = {image.name} />
        <h5>{image.name}</h5>
            </Fragment>
        )
    })

    let LoadingBlock = (
        <Fragment>
            <section>
                <article>
                    <p><Spinner/></p>
                </article>
            </section>
        </Fragment>
    )
  return (
     
    <div>
      <Fragment>
        <div>
            {loading ? <div class  = "card"> {ImagesBlock}</div>:LoadingBlock}
        </div>
      </Fragment>
    </div>
  );
}
