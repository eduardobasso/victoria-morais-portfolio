import { Avatar, Box, Container, Grid, Stack, Typography } from '@mui/material'

function ProfileSection() {
  return (
    <Box component="section" sx={({ palette: { common: { black, white } } }) => ({
      bgcolor: black,
      pt: 6,
      pb: 8,
      color: white,
    })}>
      <h2 hidden>Profile</h2>
      <Container>
        <Grid container spacing={3} alignItems="stretch" justifyContent="space-evenly" minHeight="60vh">
          <Grid item xs={12} sm={7} lg={6}>
            <Stack spacing={3} height="100%">
              <Stack flexGrow={1} justifyContent="center">
                <Typography variant="h3" fontWeight={700} mb={.75}>Hello! 🤘🏻</Typography>
                <Typography variant="h3" fontWeight={700} mb={3}>I&apos;m Victoria Morais</Typography>
                <Typography variant="body1" fontWeight={300} mb={2.25}>A designer with UX/UI and product skills with more than 3 years of experience in industry, education and e-commerce. I&apos;m currently working at Whirlpool and my objective is to contribute with my knowledge and skills to deliver the best solution for business and people needs.</Typography>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm="auto">
                    <Typography variant="body2" fontWeight={500}>❤️&nbsp;&nbsp;Product Discovery</Typography>
                  </Grid>
                  <Grid item xs={12} sm="auto">
                    <Typography variant="body2" fontWeight={500}>📚&nbsp;&nbsp;UX Research</Typography>
                  </Grid>
                  <Grid item xs={12} sm="auto">
                    <Typography variant="body2" fontWeight={500}>💪🏻&nbsp;&nbsp;UX/UI Design</Typography>
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
