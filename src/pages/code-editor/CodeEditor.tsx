import { styled } from '@mui/material/styles';
import Layout from 'components/common/layout/Layout';
// import FileViewer from 'components/code-editor/file-viewer/FileViewer';
// import CodeEditorContainer from 'components/code-editor/code-editor-container/CodeEditorContainer';

const CodeEditorDiv = styled('div')(({ theme }) => ({
  display: 'flex',
  height: '100%',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: theme.background,
}));

const FileViewerContainer = styled('div')({
  display: 'flex',
  flex: 1,
  height: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  maxWidth: '300px',
  overflow: 'auto',
  borderRight: '1px dashed black',
});

const CodeEditorContainerDiv = styled('div')({
  flex: 3,
  height: '100%',
});

const CodeEditor = () => {
  return (
    <Layout>
      <CodeEditorDiv>
        <FileViewerContainer>{/* <FileViewer /> */} I am the File Viewer</FileViewerContainer>
        <CodeEditorContainerDiv>{/* <CodeEditorContainer /> */}I am the Editor View</CodeEditorContainerDiv>
      </CodeEditorDiv>
    </Layout>
  );
};

export default CodeEditor;
