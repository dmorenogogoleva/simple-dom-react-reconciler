import React from 'react'
import { InitialRender } from './initial-render/initial-render'

import { render } from './renderer'

import './styles.css'

// import PropChangeExample from './examples/PropChangeExample';
// import InsertExample from './examples/InsertExample';
// import RemoveExample from './examples/RemoveExample';
// import TextUpdateExample from './examples/TextUpdateExample';

const rootContainer = document.querySelector('#root')

render(<InitialRender />, rootContainer) 