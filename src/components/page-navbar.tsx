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
import { useRouter } from 'next/router';
import { GitHub, LinkedInCircle, MediumCircle } from './custom-icons';

function PageNavbar() {
    const router = useRouter();
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
                            <Typography component="h1" fontWeight={700} textTransform="uppercase">
                                {`Portfolio`}
                            </Typography>
                        </Link>
                    </Box>
                    <Box component="nav" mr={-1.75}>
                        <Button
                            color="inherit"
                            sx={(theme) => ({
                                mr: 0.75,
                                ml: 0.75,
                                '&:hover': {
                                    bgcolor: alpha(theme.palette.common.white, 0.3),
                                },
                            })}
                            href="/documents/resume-victoria-morais-santos-20241217.pdf"
                            target="_blank"
                        >
                            {`Resume`}
                        </Button>
                        <Button
                            color="inherit"
                            sx={(theme) => ({
                                mr: 0.75,
                                ml: 0.75,
                                '&:hover': {
                                    bgcolor: alpha(theme.palette.common.white, 0.3),
                                },
                            })}
                            onClick={() => {
                                router.push('/work');
                            }}
                        >
                            {`Work`}
                        </Button>
                        <Button
                            color="inherit"
                            sx={(theme) => ({
                                mr: 0.75,
                                ml: 0.75,
                                '&:hover': {
                                    bgcolor: alpha(theme.palette.common.white, 0.3),
                                },
                            })}
                            onClick={() => {
                                router.push('/contact');
                            }}
                        >
                            {`Contact`}
                        </Button>
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
                    </Box>
                </Toolbar>
            </AppBar>
        </Slide>
    );
}

export default PageNavbar;
