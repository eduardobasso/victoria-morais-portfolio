import { Link, Toolbar, Typography } from '@mui/material';

function PageFooter() {
  return (
    <Toolbar component="footer">
      <Typography component="p" variant="caption" width="100%" textAlign="center">
        <span>{`Made by `}</span>
        <Link href="https://github.com/vicmsa" target="_blank">
          {`Victoria Morais`}
        </Link>
        <span>{` (design and acessibility) and `}</span>
        <Link href="https://github.com/eduardobasso" target="_blank">
          {`Eduardo Basso`}
        </Link>
        <span>{` (development) - `}</span>
        <Link href="/accessibility-statement">{`Accessibility Statement`}</Link>
      </Typography>
    </Toolbar>
  );
}

export default PageFooter;
