import React from 'react';

import { Input, Button, List } from 'antd'
import 'antd/dist/antd.css'


const TodoListUI = (props) => {
  return (
    <div>
      <div style={{ margin: '10px' }}>
        <Input
          placeholder={props.inputValue}
          style={{ width: '200px', marginRight: '10px' }}
          value={props.inputValue}
          onChange={props.changeInputValue}
        />
        <Button type="primary" onClick={props.handleAdd}>增加</Button>
      </div>
      <div style={{ width: '200px', margin: '10px' }}>
        <List
          bordered
          dataSource={props.list}
          renderItem={(item, index) => (
            <List.Item
              onClick={() => props.handleRemove(index)}>
              {item}
            </List.Item>
          )}
        />
      </div>
    </div>
  );
}

// class TodoListUI extends Component {
//   render() {
//     return (
//       <div>
//         <div style={{ margin: '10px' }}>
//           <Input
//             placeholder={this.props.inputValue}
//             style={{ width: '200px', marginRight: '10px' }}
//             value={this.props.inputValue}
//             onChange={this.props.changeInputValue}
//           />
//           <Button type="primary" onClick={this.props.handleAdd}>增加</Button>
//         </div>
//         <div style={{ width: '200px', margin: '10px' }}>
//           <List
//             bordered
//             dataSource={this.props.list}
//             renderItem={(item, index) => (
//               <List.Item
//                 onClick={() => this.props.handleRemove(index)}>
//                 {item}
//               </List.Item>
//             )}
//           />
//         </div>
//       </div>
//     );
//   }
// }

export default TodoListUI;