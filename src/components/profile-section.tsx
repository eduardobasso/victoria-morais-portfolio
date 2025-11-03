import { Avatar, Box, Container, Grid, Stack, Typography } from '@mui/material';
import { Books, Hearts, ILoveYouHandSign, Muscle } from './custom-emojis';

function ProfileSection() {
    return (
        <Box
            component="section"
            sx={{
                bgcolor: 'primary.main',
                pt: 6,
                pb: 8,
                color: 'primary.contrastText',
            }}
        >
            <Container>
                <Grid container spacing={3} alignItems="stretch" justifyContent="space-between" minHeight="60vh">
                    <Grid item xs={12} sm={7} lg={6}>
                        <Stack height="100%">
                            <Stack component="h2" flexGrow={1} justifyContent="center" spacing={3}>
                                <Box display="flex" alignItems="center" gap={2} mb={0.75}>
                                    <Typography component="span" variant="h3" fontWeight={700}>
                                        {`Hello!`}
                                    </Typography>
                                    <ILoveYouHandSign sx={{ fontSize: 48 }} aria-hidden="true" />
                                </Box>
                                <Typography component="span" variant="h3" fontWeight={700} mb={3}>
                                    {`I'm Victoria Morais`}
                                </Typography>
                            </Stack>
                            <Stack flexGrow={1} spacing={3}>
                                <Typography variant="body1" fontWeight={300} mb={2}>
                                    {`I'm a designer based in Portugal who started working with technology as a Developer and through this 8 years of experience I've learned about User Experience, Usability and Accessibility.`}
                                </Typography>
                                <Typography variant="body1" fontWeight={300} mb={3}>
                                    {`I'm currently working at Tangível allocated at ARTE as an Auditor, ensuring websites and applications standards for the Portuguese Usability and Accessibility Seal.`}
                                </Typography>
                                <h3 hidden>{`My skills`}</h3>
                                <Grid container rowSpacing={1} columnSpacing={4}>
                                    <Grid item xs={12} sm="auto" sx={{ paddingLeft: '0 !important' }}>
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
                        <Avatar
                            variant="square"
                            src="/images/profile-picture.png"
                            alt="Victoria's profile picture"
                            sx={{
                                width: '100%',
                                maxWidth: 410,
                                height: 'auto',
                                maxHeight: 456,
                            }}
                        />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default ProfileSection;
