import { Box, Button, Container, Grid, Typography } from '@mui/material'
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax'

import { OpenInNew } from './custom-icons'

type ProjectCoverProps = {
  title: string
  description: string
  image: string
  presentationUrl?: string
}

function ProjectCover({ title, description, image, presentationUrl }: ProjectCoverProps) {
  return (
    <ParallaxProvider>
      <Box component="section" position="relative">
        <Box component={ParallaxBanner} layers={[{ image, speed: -10 }]} height="70vh" />
        <Box sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}>
          <Container>
            <Grid container alignItems="center" minHeight="70vh">
              <Grid item xs={12} sm={7} md={6} lg={5}>
                <Typography component="h3" variant="h3" color="text.primary" fontWeight={700} mb={2}>
                  {title}
                </Typography>
                <Typography component="p" variant="subtitle1" color="text.primary" fontWeight={300} mb={4}>
                  {description}
                </Typography>
                {presentationUrl && (
                  <Button variant="contained" color="secondary" endIcon={<OpenInNew />} sx={{
                    // borderRadius: 0,
                    py: 2,
                    px: 4,
                    textTransform: 'none',
                  }} href={presentationUrl} target="_blank">
                    {`View the visual concept`}
                  </Button>
                )}
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </ParallaxProvider>
  )
}

export default ProjectCover
