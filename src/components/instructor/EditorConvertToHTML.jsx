// import React from 'react';
// import {Editor, EditorState} from 'draft-js';
// import 'draft-js/dist/Draft.css';
// import '../../App.css'


// function EditorConvertToHTML() {
//   const [editorState, setEditorState] = React.useState(
//     () => EditorState.createEmpty(),
//   );

//   return (
//     <div>
//       <Editor
//         toolbarOnFocus
//         editorState={editorState} 
//         onChange={(e) => setEditorState(e.target.value)}
//         wrapperClassName="wrapperClassname"
//         editorClassName="border border-gray-200 h-[280px] rounded-lg px-2"
//         toolbarClassName="border border-red-500"
//       />
//       {console.log(editorState)}
//     </div>
    
//   )
// }

// export default EditorConvertToHTML; 






import React, { Component } from 'react';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";


class EditorConvertToHTML extends Component {
  state = {
    editorState: EditorState.createEmpty(),
  }

  onEditorStateChange: Function = (editorState) => {
    this.setState({
      editorState,
    });
  };

  render() {
    const { editorState } = this.state;
    return (
      <div>
        <Editor
          editorState={editorState}
          wrapperClassName="wrapperClassname"
          editorClassName="border border-gray-200 h-[280px] rounded-lg px-2"
          onEditorStateChange={this.onEditorStateChange}
        />
      </div>
    );
  }
}

export default EditorConvertToHTML;