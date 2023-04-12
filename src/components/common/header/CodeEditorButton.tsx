import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import paths from 'routes/paths';

const CodeEditorStyledButton = styled(Button)(({ theme }) => ({
  color: theme.commonColors.white,
}));

const CodeEditorButton = () => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate(paths.codeEditor);
  };

  return <CodeEditorStyledButton onClick={onClick}>Editor</CodeEditorStyledButton>;
};
export default CodeEditorButton;
