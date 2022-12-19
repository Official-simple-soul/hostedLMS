import React, { Component } from 'react';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
// import draftToHtml from 'draftjs-to-html';
// import htmlToDraft from 'html-to-draftjs';


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
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
          onEditorStateChange={this.onEditorStateChange}
        />
      </div>
    );
  }
}

export default EditorConvertToHTML;