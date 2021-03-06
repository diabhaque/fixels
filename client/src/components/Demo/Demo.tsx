import React, { useState } from 'react';
import { Container } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { ImagePicker } from './ImagePicker';
import { ResultScreen } from './ResultScreen';
import { Result } from '../../types';
import placeholder from '../../assets/placeholder.jpg';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: `${theme.spacing(10)}px 0px`,
      width: '100%',
    },
  })
);

export const Demo: React.FC = () => {
  const [imageBase64, setImageBase64] = useState<string | ArrayBuffer | null>(
    placeholder
  );
  const [result, setResult] = useState<Result | null>(null);
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      {result ? (
        <ResultScreen result={result} />
      ) : (
        <ImagePicker
          imageBase64={imageBase64}
          setImageBase64={setImageBase64}
          setResult={setResult}
        />
      )}
    </Container>
  );
};
