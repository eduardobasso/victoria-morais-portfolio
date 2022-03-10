import { useRouter } from 'next/router'
import { AppBar, Box, Button, Container, IconButton, Toolbar, Tooltip, Typography, useScrollTrigger, Zoom } from '@mui/material'
import { alpha } from '@mui/material/styles'

import { GitHubRounded, LinkedInRounded, MediumRounded } from './custom-icons'

function PageNavbar() {
  const router = useRouter()
  const scrolled = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  })

  return (
    <AppBar
      position="sticky"
      elevation={scrolled ? 4 : 0}
      sx={({ palette: { common: { black, white } } }) => ({
        bgcolor: black,
        color: white,
      })}>
      <Toolbar component={Container}>
        <Box component="header" flexGrow={1}>
          <Typography component="h1" variant="body1" fontWeight={700} textTransform="uppercase">Portfolio</Typography>
        </Box>
        <Box component="nav" mr={-1.75}>
          <Button color="inherit" sx={(theme) => ({
            mr: .75,
            ml: .75,
            '&:hover': {
              bgcolor: alpha(theme.palette.common.white, .3),
            },
          })} onClick={() => { router.push('/') }}>Home</Button>
          <Button color="inherit" sx={(theme) => ({
            mr: .75,
            ml: .75,
            '&:hover': {
              bgcolor: alpha(theme.palette.common.white, .3),
            },
          })} onClick={() => { router.push('/contact') }}>Contact</Button>
          <Tooltip title="LinkedIn" TransitionComponent={Zoom}>
            <IconButton color="inherit" href="https://www.linkedin.com/in/victoria-morais/" target="_blank" sx={(theme) => ({
              mr: .75,
              ml: .75,
              '&:hover': {
                bgcolor: alpha(theme.palette.common.white, .3),
              },
            })} aria-label="View profile on LinkedIn" id="btnLinkedIn">
              <LinkedInRounded />
            </IconButton>
          </Tooltip>
          <Tooltip title="Medium" TransitionComponent={Zoom}>
            <IconButton color="inherit" href="https://medium.com/@moraes_victoria" target="_blank" sx={(theme) => ({
              mr: .75,
              ml: .75,
              '&:hover': {
                bgcolor: alpha(theme.palette.common.white, .3),
              },
            })} aria-label="View profile on Medium" id="btnMedium">
              <MediumRounded />
            </IconButton>
          </Tooltip>
          <Tooltip title="GitHub" TransitionComponent={Zoom}>
            <IconButton color="inherit" href="https://github.com/victoriamorais" target="_blank" sx={(theme) => ({
              mr: .75,
              ml: .75,
              '&:hover': {
                bgcolor: alpha(theme.palette.common.white, .3),
              },
            })} aria-label="View profile on GitHub" id="btnGitHub">
              <GitHubRounded />
            </IconButton>
          </Tooltip>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default PageNavbar
