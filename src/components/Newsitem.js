import React from "react";

const Newsitem = (props) => {

    let { title, description, imageURL, newsURL, author, date, source } = props;
    return (
      <div className="my-3">
        <div className="card">
          <span
            className="badge rounded-pill bg-info text-dark"
            style={{ zIndex: 1, width: "150 px", marginLeft: "60%" }}
          >
            {source}
          </span>
          <img
            src={
              imageURL
                ? imageURL
                : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr6J-djC5ckcPF69XacUQj5XrPnUFPxgp1bQ&usqp=CAU.jpg"
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}..</p>
            <p className="card-text">
              <small className="text-muted">
                Written by {author ? author : "Unknown"} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={newsURL}
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    );
}
export default Newsitem;
