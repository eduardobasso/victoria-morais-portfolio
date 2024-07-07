import { Box, Container, Grid, Typography } from '@mui/material';

function ProfileSection() {
    return (
        <Box
            component="section"
            sx={{
                bgcolor: 'primary.main',
                pt: 12.125,
                pb: 9.25,
                color: 'primary.contrastText',
            }}
        >
            <h2 hidden>{`Profile`}</h2>
            <Container>
                <Grid container alignItems="center" justifyContent="center">
                    <Grid item xs={12} sm={11} md={10} lg={9} xl={8}>
                        <Typography component="p" variant="h1" mb={5.5}>
                            <Typography component="span" variant="inherit">{`A designer with `}</Typography>
                            <Typography component="span" variant="inherit" color="secondary.light">
                                {`UX/UI`}
                            </Typography>
                            <Typography component="span" variant="inherit">{` and `}</Typography>
                            <Typography component="span" variant="inherit" color="secondary.light">
                                {`accessibility`}
                            </Typography>
                            <Typography
                                component="span"
                                variant="inherit"
                            >{` skills focused on delivering the best solutions for business and user needs`}</Typography>
                        </Typography>
                        <Typography component="p" variant="body1" mb={2.5}>
                            {`Hi, I'm Victoria Morais, a designer based in Portugal who started working with technology as a developer and through this 6 years of experience have learned about User Experience, Usability and Accessibility.`}
                        </Typography>
                        <Typography component="p" variant="body1">
                            {`I'm currently working at Tangível allocated at AMA as an auditor, ensuring websites and applications standards for the Portuguese Usability and Accessibility Seal.`}
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default ProfileSection;
