import React from "react";  //the container is first created and this is that creation file but we cant use this context to store or wrap our data we need to provide the container
import {createContext} from 'react';

const UserContext = createContext();

export default UserContext;
