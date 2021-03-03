import * as React from 'react';
import { ThemeProvider } from '@material-ui/styles';

/**
 * @ignore - internal component.
 */
export default function CCThemeProvider(props) {
  if (process.env.NODE_ENV !== 'production') {
    console.error(
      [
        'Material-UI: You have imported a private module.',
        '',
        "Please replace the '@material-ui/core/styles/CCThemeProvider' import with:",
        "`import { ThemeProvider as CCThemeProvider } from '@material-ui/core/styles';`",
        '',
        'See https://github.com/mui-org/material-ui/issues/17900 for more detail.',
      ].join('\n')
    );
  }

  return <ThemeProvider {...props} />;
}
