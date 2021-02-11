import React, {useContext} from 'react';

import {ColorContext, UPDATE_COLOR} from './color'

function Buttons() {
  return (
    <div>
      <button>blue</button>
      <button>red</button>
    </div>
  )
}

export default Buttons