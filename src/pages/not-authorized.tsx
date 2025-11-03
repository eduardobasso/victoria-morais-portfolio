import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import { NextPage } from 'next';

import PageWrapper from '../components/page-wrapper';

const NotAuthorized: NextPage = () => {
  return (
    <PageWrapper title="Not authorized">
      <Box
        component="section"
        sx={{
          pt: 6,
          pb: 8,
          backgroundImage: 'url("/images/panda-bg.png")',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'bottom right',
          backgroundSize: 'contain',
        }}
      >
        <Container>
          <Grid container spacing={3} alignItems="center" justifyContent="space-between" minHeight="60vh">
            <Grid item xs={12} md="auto">
              <Stack rowGap="24px">
                <Typography component="h1" variant="h1">{`Password is required`}</Typography>
                <Typography variant="subtitle1">{`To access the content, you must set a password.`}</Typography>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </PageWrapper>
  );
};

export default NotAuthorized;
