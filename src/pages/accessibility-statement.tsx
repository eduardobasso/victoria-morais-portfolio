import { Box, Container, Stack, Typography } from '@mui/material';
import { NextPage } from 'next';

import PageWrapper from '../components/page-wrapper';

const AccessibilityStatement: NextPage = () => {
  return (
    <PageWrapper title="Accessibility Statement">
      <Box
        component="section"
        sx={{
          pt: 6,
          pb: 8,
        }}
      >
        <Container sx={{ maxWidth: '676px' }}>
          <Stack component="header" rowGap="12px" mb="52px">
            <Typography component="h1" variant="h1">{`Accessibility Statement`}</Typography>
            <Typography component="p" variant="subtitle2">{`Last update: November 3rd, 2025`}</Typography>
          </Stack>
          <Stack rowGap="44px">
            <Stack rowGap="24px">
              <Typography component="h2" variant="h2">{`My goal`}</Typography>
              <Typography
                component="p"
                variant="body1"
              >{`I'm committed to make this website accessible and conform with WCAG 2.2 AA and EN 301 549.`}</Typography>
            </Stack>
            <Stack rowGap="24px">
              <Typography component="h2" variant="h2">{`Accessibility issues`}</Typography>
              <Typography
                component="p"
                variant="body1"
              >{`If you find any accessibility problems on this site, please contact me via email or telephone. I will work to fix the issue as best as I can.`}</Typography>
            </Stack>
            <Stack rowGap="24px">
              <Typography component="h2" variant="h2">{`Known issues (will be fixed)`}</Typography>
              <Box component="ul" sx={{ m: 0, pl: 2.5 }}>
                <Typography
                  component="li"
                  variant="body1"
                >{`Focus: When a modal is closed, the focus appears in the card instead of the actionable element.`}</Typography>
                <Typography component="li" variant="body1">{`Link to skip content`}</Typography>
                <Typography component="li" variant="body1">
                  <Typography
                    component="span"
                    variant="inherit"
                  >{`Inacessible content format to present my work (pdf). `}</Typography>
                  <Typography component="strong" variant="inherit" fontWeight={700}>{`Will be fixed asap`}</Typography>
                  <br />
                  <Typography
                    component="span"
                    variant="inherit"
                  >{` (if you would like to see my work please reach me)`}</Typography>
                </Typography>
              </Box>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </PageWrapper>
  );
};

export default AccessibilityStatement;
