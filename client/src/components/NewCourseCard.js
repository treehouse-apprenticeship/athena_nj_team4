import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <div className="grid-33">
    <Link to="/courses/create" className="course--module course--add--module">
      <h3 className="course--add--title">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 13 13" className="add">
          <polygon points="7,6 7,0 6,0 6,6 0,6 0,7 6,7 6,13 7,13 7,7 13,7 13,6 "/>
        </svg>
        New Course
      </h3>
    </Link>
  </div>
);
