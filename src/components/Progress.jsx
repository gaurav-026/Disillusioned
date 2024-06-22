import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';



const Progress = ({ currentQuestion, totalQuestions }) => {

  const [progress, setProgress] = React.useState((currentQuestion / totalQuestions) * 100);
  React.useEffect(() => {
    setProgress(((currentQuestion + 1) / totalQuestions) * 100);
  }, [currentQuestion, totalQuestions]);

  return (
    <Box sx={{ width: '100%', height: 10, borderRadius: 10 }}>
      <LinearProgress variant="determinate" value={progress} sx={{ height: 10, borderRadius: 10 }} />
    </Box>
  )
}

export default Progress;
