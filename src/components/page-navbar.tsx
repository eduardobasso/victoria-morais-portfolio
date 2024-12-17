import {
    AppBar,
    Box,
    Button,
    Container,
    IconButton,
    Link,
    Toolbar,
    Tooltip,
    Typography,
    Zoom,
    alpha,
    useTheme,
} from '@mui/material';
import { useRouter } from 'next/router';
import { GitHub, LinkedIn } from './custom-icons';

type PageNavbarProps = {
    lightMode?: boolean;
};

function PageNavbar({ lightMode }: PageNavbarProps) {
    const router = useRouter();
    const theme = useTheme();

    const bgcolor = lightMode ? theme.palette.background.default : theme.palette.primary.main;
    const color = lightMode ? theme.palette.text.primary : theme.palette.primary.contrastText;
    const hoverBgcolor = lightMode ? alpha(color, 0.04) : alpha(color, 0.12);

    return (
        <AppBar position="relative" elevation={0} sx={{ bgcolor, color }}>
            <Toolbar component={Container} sx={{ minHeight: 87 }}>
                <Box flexGrow={1}>
                    <Link href="/" variant="subtitle1" color="inherit" underline="hover" display="inline-block">
                        <Typography component="h1" fontWeight={700} textTransform="uppercase">
                            {`Portfolio`}
                        </Typography>
                    </Link>
                </Box>
                <Box component="nav" mr={-1.75}>
                    <Button
                        color="inherit"
                        sx={{
                            mr: 0.75,
                            ml: 0.75,
                            '&:hover': { bgcolor: hoverBgcolor },
                        }}
                        href="/documents/resume-victoria-morais-santos-20241217.pdf"
                        target="blank"
                    >
                        <Typography component="span" variant="subtitle2">
                            {`Resume`}
                        </Typography>
                    </Button>
                    <Button
                        color="inherit"
                        sx={{
                            mr: 0.75,
                            ml: 0.75,
                            '&:hover': { bgcolor: hoverBgcolor },
                        }}
                        onClick={() => {
                            router.push('/work');
                        }}
                    >
                        <Typography component="span" variant="subtitle2">
                            {`My work`}
                        </Typography>
                    </Button>
                    <Button
                        color="inherit"
                        sx={{
                            mr: 0.75,
                            ml: 0.75,
                            '&:hover': { bgcolor: hoverBgcolor },
                        }}
                        onClick={() => {
                            router.push('/contact');
                        }}
                    >
                        <Typography component="span" variant="subtitle2">
                            {`Contact`}
                        </Typography>
                    </Button>
                    <Tooltip title="LinkedIn" TransitionComponent={Zoom}>
                        <IconButton
                            color="inherit"
                            href="https://www.linkedin.com/in/victoria-morais/"
                            target="blank"
                            sx={{
                                mr: 0.75,
                                ml: 0.75,
                                '&:hover': { bgcolor: hoverBgcolor },
                            }}
                            aria-label="View profile on LinkedIn"
                            id="btnLinkedIn"
                        >
                            <LinkedIn />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="GitHub" TransitionComponent={Zoom}>
                        <IconButton
                            color="inherit"
                            href="https://github.com/victoriamorais"
                            target="blank"
                            sx={{
                                mr: 0.75,
                                ml: 0.75,
                                '&:hover': { bgcolor: hoverBgcolor },
                            }}
                            aria-label="View profile on GitHub"
                            id="btnGitHub"
                        >
                            <GitHub />
                        </IconButton>
                    </Tooltip>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default PageNavbar;
