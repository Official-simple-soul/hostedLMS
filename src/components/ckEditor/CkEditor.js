// import React, { Component } from 'react';
// import React, { useState } from 'react';
// import Editor from 'ckeditor5-custom-build/build/ckeditor';
// import { CKEditor } from '@ckeditor/ckeditor5-react'

// const editorConfiguration = {
//     toolbar: [ 'bold', 'italic' ]
// };

// class CkEditor extends Component {
//     render() {
//         return (
//             <div className="CkEditor">
//                 <CKEditor
//                     editor={ Editor }
//                     config={ editorConfiguration }
//                     data="<p>Hello from CKEditor 5!</p>"
//                     onReady={ editor => {
//                         // You can store the "editor" and use when it is needed.
//                         console.log( 'Editor is ready to use!', editor );
//                     } }
//                     onChange={ ( event, editor ) => {
//                         const data = editor.getData();
//                         console.log( { event, editor, data } );
//                     } }
//                     onBlur={ ( event, editor ) => {
//                         console.log( 'Blur.', editor );
//                     } }
//                     onFocus={ ( event, editor ) => {
//                         console.log( 'Focus.', editor );
//                     } }
//                 />
//             </div>
//         );
//     }
// }

// export default CkEditor;

import React, { useState } from 'react'
import Editor from 'ckeditor5-custom-build/build/ckeditor';
import { CKEditor } from '@ckeditor/ckeditor5-react'
// import {Image, ImageToolbar, ImageCaption, ImageStyle, ImageResize } from '@ckeditor/ckeditor5-image/src';
// import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
// import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
// import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
// import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize';
// import LinkImage from '@ckeditor/ckeditor5-link/src/linkimage';

const CkEditor = (props) => {
    const [ on, seOn ] = useState()
    // const editorConfiguration = {
    //     plugins: [ Image, ImageToolbar, ImageCaption, ImageStyle, ImageResize ],
    //     toolbar: [ 'bold', 'italic', 'bulletedList', 'numberedList', 'blockQuote' , 'link', 'imageStyle:inline', 'imageStyle:block',    'imageStyle:side', '|', 'toggleImageCaption', 'imageTextAlternative', '|', 'linkImage' ]
    // };
  return (
    <div>
      <div className="CkEditor">
        <CKEditor
          editor={Editor}
        //   config={editorConfiguration}
          data={on}
          onReady={(editor) => {
            // You can store the "editor" and use when it is needed.
            console.log("Editor is ready to use!", editor);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            console.log({ event, editor, data });
          }}
          onBlur={(event, editor) => {
            console.log("Blur.", editor);
          }}
          onFocus={(event, editor) => {
            console.log("Focus.", editor);
          }}
        />
      </div>
    </div>
  );
}

export default CkEditor
