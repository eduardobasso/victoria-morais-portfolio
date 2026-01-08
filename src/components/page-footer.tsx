import { Container, Link, Toolbar, Typography } from '@mui/material';

function PageFooter() {
  return (
    <Toolbar component="footer">
      <Container>
        <Typography
          component="div"
          variant="caption"
          width="100%"
          sx={{ display: 'flex', justifyContent: 'center', gap: 1.25 }}
        >
          <span>{`© 2022-2026 Designed by Victoria Morais. All rights reserved.`}</span>
          <Link href="/accessibility-statement">{`Accessibility Statement`}</Link>
        </Typography>
      </Container>
    </Toolbar>
  );
}

export default PageFooter;
