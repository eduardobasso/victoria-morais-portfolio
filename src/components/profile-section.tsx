import { Avatar, Box, Container, Grid, Stack, Typography } from '@mui/material'

import { Books, Hearts, Muscle } from './custom-emojis'

function ProfileSection() {
  return (
    <Box component="section" sx={({ palette: { primary: { main, contrastText } } }) => ({
      bgcolor: main,
      pt: 6,
      pb: 8,
      color: contrastText,
    })}>
      <h2 hidden>
        {`Profile`}
      </h2>
      <Container>
        <Grid container spacing={3} alignItems="stretch" justifyContent="space-between" minHeight="60vh">
          <Grid item xs={12} sm={7} lg={6}>
            <Stack spacing={3} height="100%">
              <Stack flexGrow={1} justifyContent="center">
                <Typography variant="h3" fontWeight={700} mb={.75}>
                  {`Hello!`}
                </Typography>
                <Typography variant="h3" fontWeight={700} mb={3}>
                  {`I'm Victoria Morais`}
                </Typography>
                <Typography variant="body1" fontWeight={300} mb={2.25}>
                  {`A Designer with UX/UI and Product Design skills with more than 4 years of experience in industry, education and e-commerce. I'm currently working at Hyphen and my objective is to contribute with my knowledge and skills to deliver the best solution for business and people's needs.`}
                </Typography>
                <Grid container spacing={4}>
                  <Grid item xs={12} sm="auto">
                    <Box display="flex" alignItems="center" gap={1.5}>
                      <Hearts sx={{ fontSize: 18 }} />
                      <Typography variant="body2" fontWeight={500}>
                        {`Product Discovery`}
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm="auto">
                    <Box display="flex" alignItems="center" gap={1.5}>
                      <Books sx={{ fontSize: 18 }} />
                      <Typography variant="body2" fontWeight={500}>
                        {`UX Research`}
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm="auto">
                    <Box display="flex" alignItems="center" gap={1.25}>
                      <Muscle sx={{ fontSize: 18 }} />
                      <Typography variant="body2" fontWeight={500}>
                        {`UX/UI Design`}
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={4} lg="auto" alignSelf="center">
            <Avatar variant="square" src="/images/profile-picture.png" alt="Victoria's profile picture" sx={{
              width: '100%',
              maxWidth: 410,
              height: 'auto',
              maxHeight: 456
            }} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default ProfileSection
