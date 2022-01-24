import React from 'react';
import ReactDOM from 'react-dom';

import desktop from '../NavbarCustomDesktop';


it("renders without crashing", ()=>{
    const div = document.createElement("div");
    ReactDOM.render(<desktop></desktop>, div)
})