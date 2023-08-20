import React, { useRef } from 'react';
import Editor from '@monaco-editor/react';
import Button from '@mui/material/Button';
import { apiClient } from '../../../shared/services/api-client';
export const Ide = () =>{
  const editorRef = useRef(null);
  const getCode = async() => {
    try {
      
      const code = editorRef.current.getValue();
      console.log("code is ",code);
      const jsonObj = {"code":code};
      const response = await apiClient.post(process.env.REACT_APP_CODE_URL,jsonObj);
      console.log("response is ",response)
    } catch (error) {
      console.error("Error : ",error);    
    }
  }
  const mount = (editor) =>{
    editorRef.current = editor;
  }
    return (
      <>
        <Editor
          onMount = {mount}
          height="70vh"
          defaultLanguage="javascript"
          defaultValue="console.log('Hello World')"
        />
        <Button onClick = {getCode} variant="contained">Submit</Button>
      </>
    )
}