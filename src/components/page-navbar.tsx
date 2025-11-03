import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Link,
  Slide,
  Toolbar,
  Tooltip,
  Typography,
  useScrollTrigger,
  Zoom,
} from '@mui/material';
import { alpha } from '@mui/material/styles';
import globalStyles from '../styles/global.module.css';
import { GitHub, LinkedInCircle, MediumCircle } from './custom-icons';

type TPageNavbarProps = {
  hasH1: boolean;
};

function PageNavbar({ hasH1 }: TPageNavbarProps) {
  const scrolled = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!scrolled}>
      <AppBar
        position="sticky"
        elevation={scrolled ? 4 : 0}
        sx={({
          palette: {
            common: { black, white },
          },
        }) => ({
          bgcolor: black,
          color: white,
        })}
      >
        <Toolbar component={Container}>
          <Box flexGrow={1}>
            <Link display="inline-block" variant="body1" color="inherit" href="/" underline="hover">
              <Typography component={hasH1 ? 'h1' : 'span'} fontWeight={700} textTransform="uppercase">
                <span className={globalStyles.hidden}>{`Victoria Morais' `}</span>
                {`Portfolio`}
              </Typography>
            </Link>
          </Box>
          <Box component="nav" display="flex" alignItems="center" mr={-1.75}>
            <Box component="ul" display="flex" sx={{ m: 0, p: 0, listStyle: 'none' }}>
              <li>
                <Button
                  color="inherit"
                  sx={(theme) => ({
                    mr: 0.75,
                    ml: 0.75,
                    '&:hover': {
                      bgcolor: alpha(theme.palette.common.white, 0.3),
                    },
                  })}
                  href="/documents/resume-victoria-morais-santos-20241217-2.pdf"
                  target="_blank"
                >
                  {`Resume`}
                </Button>
              </li>
              <li>
                <Button
                  color="inherit"
                  sx={(theme) => ({
                    mr: 0.75,
                    ml: 0.75,
                    '&:hover': {
                      bgcolor: alpha(theme.palette.common.white, 0.3),
                    },
                  })}
                  href="/work"
                >
                  {`Work`}
                </Button>
              </li>
              <li>
                <Button
                  color="inherit"
                  sx={(theme) => ({
                    mr: 0.75,
                    ml: 0.75,
                    '&:hover': {
                      bgcolor: alpha(theme.palette.common.white, 0.3),
                    },
                  })}
                  href="/contact"
                >
                  {`Contact`}
                </Button>
              </li>
            </Box>
            <Box component="ul" display="flex" sx={{ m: 0, p: 0, listStyle: 'none' }} aria-label="Social networks">
              <li>
                <Tooltip title="Medium" TransitionComponent={Zoom}>
                  <IconButton
                    color="inherit"
                    href="https://medium.com/@moraes_victoria"
                    target="_blank"
                    sx={(theme) => ({
                      mr: 0.75,
                      ml: 0.75,
                      '&:hover': {
                        bgcolor: alpha(theme.palette.common.white, 0.3),
                      },
                    })}
                    aria-label="View profile on Medium"
                    id="btnMedium"
                  >
                    <MediumCircle />
                  </IconButton>
                </Tooltip>
              </li>
              <li>
                <Tooltip title="GitHub" TransitionComponent={Zoom}>
                  <IconButton
                    color="inherit"
                    href="https://github.com/victoriamorais"
                    target="_blank"
                    sx={(theme) => ({
                      mr: 0.75,
                      ml: 0.75,
                      '&:hover': {
                        bgcolor: alpha(theme.palette.common.white, 0.3),
                      },
                    })}
                    aria-label="View profile on GitHub"
                    id="btnGitHub"
                  >
                    <GitHub />
                  </IconButton>
                </Tooltip>
              </li>
              <li>
                <Tooltip title="LinkedIn" TransitionComponent={Zoom}>
                  <IconButton
                    color="inherit"
                    href="https://www.linkedin.com/in/victoria-morais/"
                    target="_blank"
                    sx={(theme) => ({
                      mr: 0.75,
                      ml: 0.75,
                      '&:hover': {
                        bgcolor: alpha(theme.palette.common.white, 0.3),
                      },
                    })}
                    aria-label="View profile on LinkedIn"
                    id="btnLinkedIn"
                  >
                    <LinkedInCircle />
                  </IconButton>
                </Tooltip>
              </li>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Slide>
  );
}

export default PageNavbar;
