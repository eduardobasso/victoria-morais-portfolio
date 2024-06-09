import {
    Box,
    Container,
    Grid,
    Paper,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    Typography,
} from '@mui/material';
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import ContentNavbar from '../../components/content-navbar';
import PageWrapper from '../../components/page-wrapper';
import ProjectCover from '../../components/project-cover';
import theme from '../../theme/brastemp';

const BrastempExperience: NextPage = () => {
    const router = useRouter();

    useEffect(() => {
        if (sessionStorage.getItem('VicMSA-pwd') === null) {
            router.push('/work');
        }
    });

    const brastempTheme = responsiveFontSizes(createTheme(theme));

    return (
        <PageWrapper>
            <h2 hidden>{`Work`}</h2>
            <ThemeProvider theme={brastempTheme}>
                <ProjectCover
                    title={`Technical assistance location`}
                    description={`How we improved the service and made the searching process for technical assistance more efficient`}
                    image="/images/projects/brastemp-experience/cover.jpg"
                    presentationUrl="/documents/technical-assistance-location.pdf"
                />
                <Box bgcolor="background.default">
                    <ContentNavbar
                        items={[
                            {
                                label: 'Overview',
                                anchorId: 'overview',
                            },
                            {
                                label: 'Discovery',
                                anchorId: 'discovery',
                            },
                            {
                                label: 'Validation and ideation',
                                anchorId: 'validationAndIdeation',
                            },
                            {
                                label: 'Results and learnings',
                                anchorId: 'resultsAndLearnings',
                            },
                        ]}
                    />
                    <Container>
                        <Box component="section" mb={10} id="overview">
                            <Grid container spacing={6}>
                                <Grid item xs={12} md={6}>
                                    <Stack spacing={2}>
                                        <Typography component="h4" variant="h4" color="primary" fontWeight={600}>
                                            {`Overview`}
                                        </Typography>
                                        <Typography
                                            component="p"
                                            variant="body1"
                                            color="text.secondary"
                                            fontWeight={300}
                                        >
                                            {`I was responsible for the product discovery process and when it had been concluded, the team chose the next squad's mission: to improve the location service of the technical assistants. This service shows the closest assistance in the user's region. It helps users when they have a problem with their home appliance and need to repair it.`}
                                        </Typography>
                                    </Stack>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Paper
                                        elevation={0}
                                        sx={{
                                            borderRadius: 0,
                                            py: 6,
                                            px: 4,
                                            textAlign: 'center',
                                        }}
                                    >
                                        <Stack spacing={1}>
                                            <Typography
                                                component="p"
                                                variant="body1"
                                                color="text.secondary"
                                                fontWeight={300}
                                            >
                                                {`Estimated time: 4 months`}
                                            </Typography>
                                            <Typography
                                                component="p"
                                                variant="body1"
                                                color="text.secondary"
                                                fontWeight={300}
                                            >
                                                {`My role: Product Designer`}
                                            </Typography>
                                            <Typography component="p" variant="body1">
                                                <Typography component="span" color="text.secondary" fontWeight={300}>
                                                    {`KPI goal: `}
                                                </Typography>
                                                <Typography component="strong" color="primary" fontWeight={500}>
                                                    {`+5%`}
                                                </Typography>
                                                <Typography component="span" color="text.secondary" fontWeight={300}>
                                                    {` of the online schedule`}
                                                </Typography>
                                            </Typography>
                                        </Stack>
                                    </Paper>
                                </Grid>
                            </Grid>
                        </Box>
                        <Box component="section" mb={10} id="discovery">
                            <Grid container spacing={6}>
                                <Grid item xs={12} md={6}>
                                    <Stack spacing={2}>
                                        <Typography component="h4" variant="h4" color="primary" fontWeight={600}>
                                            {`Discovery`}
                                        </Typography>
                                        <Typography
                                            component="p"
                                            variant="body1"
                                            color="text.secondary"
                                            fontWeight={300}
                                        >
                                            {`Before beginning the mission, I needed to understand and collect all the information about the service. The CSD matrix was the perfect tool to discover our certainties, suppositions and doubts about this service and direct the research and improvements.`}
                                        </Typography>
                                        <Typography
                                            component="p"
                                            variant="body1"
                                            color="text.secondary"
                                            fontWeight={300}
                                        >
                                            {`After a critical analysis of the information, some questions were raised. It had been discovered during the project and in the end, we had to get the answers to it.`}
                                        </Typography>
                                    </Stack>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Paper
                                        elevation={0}
                                        sx={{
                                            borderRadius: 0,
                                            pt: 3,
                                            pb: 1,
                                            px: 1,
                                            textAlign: 'center',
                                        }}
                                    >
                                        <Box component="figure">
                                            <Box
                                                component="img"
                                                src="/images/projects/brastemp-experience/csd-matrix.png"
                                                alt="CSD matrix"
                                                sx={{
                                                    width: '100%',
                                                    maxWidth: 482,
                                                    height: 'auto',
                                                    maxHeight: 158,
                                                    mb: 1,
                                                }}
                                            />
                                            <Typography
                                                component="figcaption"
                                                variant="caption"
                                                color="text.secondary"
                                                fontWeight={300}
                                            >
                                                {`CSD matrix participants: Product Designers, CRO, PO, SEO, Developers, QA, Tech Lead and Stakeholders.`}
                                            </Typography>
                                        </Box>
                                    </Paper>
                                </Grid>
                            </Grid>
                            <Box my={6}>
                                <Grid container spacing={6} alignItems="stretch">
                                    <Grid item xs={12} md={6}>
                                        <Paper
                                            elevation={0}
                                            variant="outlined"
                                            sx={(theme) => ({
                                                height: '100%',
                                                borderRadius: 0,
                                                bgcolor: theme.palette.background.default,
                                                p: 6,
                                                color: 'text.secondary',
                                            })}
                                        >
                                            <Stack spacing={2}>
                                                <Typography component="h6" variant="body1" fontWeight={500}>
                                                    {`Suppositions`}
                                                </Typography>
                                                <Typography component="p" variant="body1" fontWeight={300}>
                                                    {`"Users don't know which services a technical visit attends"`}
                                                </Typography>
                                                <Typography component="p" variant="body1" fontWeight={300}>
                                                    {`"Users may schedule a visit to solve the problem using an online service"`}
                                                </Typography>
                                                <Typography component="p" variant="body1" fontWeight={300}>
                                                    {`"Users are searching for more information about the tecnhical assistant on this page"`}
                                                </Typography>
                                            </Stack>
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <Paper
                                            elevation={0}
                                            variant="outlined"
                                            sx={(theme) => ({
                                                height: '100%',
                                                borderRadius: 0,
                                                bgcolor: theme.palette.background.default,
                                                p: 6,
                                                color: 'text.secondary',
                                            })}
                                        >
                                            <Stack spacing={2}>
                                                <Typography component="h6" variant="body1" fontWeight={500}>
                                                    {`Questions and uncertainties`}
                                                </Typography>
                                                <Stack component="ol" spacing={2} pl={2.25}>
                                                    <Typography component="li" variant="body1" fontWeight={300}>
                                                        {`At which moment do users start using it (scenario)?`}
                                                    </Typography>
                                                    <Typography component="li" variant="body1" fontWeight={300}>
                                                        {`What do they need for this service?`}
                                                    </Typography>
                                                    <Typography component="li" variant="body1" fontWeight={300}>
                                                        {`What's the preferred channel for looking for information?`}
                                                    </Typography>
                                                </Stack>
                                            </Stack>
                                        </Paper>
                                    </Grid>
                                </Grid>
                            </Box>
                            <Box component="article" my={6}>
                                <Grid container spacing={6}>
                                    <Grid item xs={12} md={6}>
                                        <Stack spacing={2}>
                                            <Typography
                                                component="h5"
                                                variant="h5"
                                                color="text.primary"
                                                fontWeight={500}
                                            >
                                                {`Analytics`}
                                            </Typography>
                                            <Typography
                                                component="p"
                                                variant="body1"
                                                color="text.secondary"
                                                fontWeight={300}
                                            >
                                                {`At that moment, I searched for the information based on the CSD matrix to validate all the certainties presented. The challenge was to sort through the data and make meaningful information about the suppositions and doubts to do the survey.`}
                                            </Typography>
                                        </Stack>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <Paper
                                            elevation={0}
                                            sx={{
                                                borderRadius: 0,
                                                py: 6,
                                                px: 4,
                                                textAlign: 'center',
                                            }}
                                        >
                                            <Stack spacing={1}>
                                                <Typography
                                                    component="p"
                                                    variant="body1"
                                                    color="text.secondary"
                                                    fontWeight={300}
                                                >
                                                    {`+60% of organic access`}
                                                </Typography>
                                                <Typography
                                                    component="p"
                                                    variant="body1"
                                                    color="text.secondary"
                                                    fontWeight={300}
                                                >
                                                    {`3rd page with more visits per month`}
                                                </Typography>
                                                <Typography
                                                    component="p"
                                                    variant="body1"
                                                    color="text.secondary"
                                                    fontWeight={300}
                                                >
                                                    {`16% of all online services representation`}
                                                </Typography>
                                            </Stack>
                                        </Paper>
                                    </Grid>
                                </Grid>
                            </Box>
                            <Box component="article" my={6}>
                                <Grid container spacing={6}>
                                    <Grid item xs={12} md={6}>
                                        <Stack spacing={2}>
                                            <Typography
                                                component="h5"
                                                variant="h5"
                                                color="text.primary"
                                                fontWeight={500}
                                            >
                                                {`Hotjar surveys and clarity heatmaps`}
                                            </Typography>
                                            <Typography
                                                component="p"
                                                variant="body1"
                                                color="text.secondary"
                                                fontWeight={300}
                                            >
                                                {`I used heatmaps to understand the users' interaction on the site and their engagement and identified areas of opportunity in the web page.`}
                                            </Typography>
                                            <Typography
                                                component="p"
                                                variant="body1"
                                                color="text.secondary"
                                                fontWeight={300}
                                            >
                                                {`The survey was made to discover the principal questions about the user's interaction with the page.`}
                                            </Typography>
                                        </Stack>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <Paper
                                            elevation={0}
                                            sx={{
                                                borderRadius: 0,
                                                pt: 3,
                                                pb: 1,
                                                px: 1,
                                                textAlign: 'center',
                                            }}
                                        >
                                            <Box component="figure">
                                                <Box
                                                    component="img"
                                                    src="/images/projects/brastemp-experience/heatmap.png"
                                                    alt="Clarity heatmap"
                                                    sx={{
                                                        width: '100%',
                                                        maxWidth: 256,
                                                        height: 'auto',
                                                        maxHeight: 188,
                                                        mb: 1,
                                                    }}
                                                />
                                                <Typography
                                                    component="figcaption"
                                                    variant="caption"
                                                    color="text.secondary"
                                                    fontWeight={300}
                                                >
                                                    {`The Clarity heatmap.`}
                                                </Typography>
                                            </Box>
                                        </Paper>
                                    </Grid>
                                </Grid>
                            </Box>
                            <Box my={6}>
                                <Grid container spacing={6}>
                                    <Grid item xs={12} md={7}>
                                        <Paper
                                            elevation={0}
                                            sx={{
                                                borderRadius: 0,
                                                py: 4,
                                                px: 2,
                                                textAlign: 'center',
                                            }}
                                        >
                                            <Stack spacing={2}>
                                                <Typography
                                                    component="h6"
                                                    variant="body1"
                                                    color="text.secondary"
                                                    fontWeight={500}
                                                >
                                                    {`What's the channel preference for looking for information?`}
                                                </Typography>
                                                <Box display="flex" alignItems="center" justifyContent="center">
                                                    <TableContainer sx={{ width: 'auto' }}>
                                                        <Table sx={{ width: 'auto' }}>
                                                            <TableBody>
                                                                <TableRow>
                                                                    <TableCell
                                                                        sx={{
                                                                            maxWidth: 108,
                                                                            py: 1,
                                                                            px: 0.75,
                                                                            textAlign: 'center',
                                                                        }}
                                                                    >
                                                                        <Typography
                                                                            component="strong"
                                                                            variant="h4"
                                                                            color="primary"
                                                                            fontWeight={600}
                                                                        >
                                                                            {`58%`}
                                                                        </Typography>
                                                                    </TableCell>
                                                                    <TableCell sx={{ py: 1, px: 0.75 }}>
                                                                        <Typography
                                                                            component="span"
                                                                            variant="body1"
                                                                            color="text.secondary"
                                                                            fontWeight={300}
                                                                        >
                                                                            {`prefer chat or WhatsApp`}
                                                                        </Typography>
                                                                    </TableCell>
                                                                </TableRow>
                                                                <TableRow>
                                                                    <TableCell
                                                                        sx={{
                                                                            maxWidth: 108,
                                                                            py: 1,
                                                                            px: 0.75,
                                                                            textAlign: 'center',
                                                                        }}
                                                                    >
                                                                        <Typography
                                                                            component="strong"
                                                                            variant="h4"
                                                                            color="primary"
                                                                            fontWeight={600}
                                                                        >
                                                                            {`45-54`}
                                                                        </Typography>
                                                                    </TableCell>
                                                                    <TableCell sx={{ py: 1, px: 0.75 }}>
                                                                        <Typography
                                                                            component="span"
                                                                            variant="body1"
                                                                            color="text.secondary"
                                                                            fontWeight={300}
                                                                        >
                                                                            {`year olds use WhatsApp`}
                                                                        </Typography>
                                                                    </TableCell>
                                                                </TableRow>
                                                                <TableRow>
                                                                    <TableCell
                                                                        sx={{
                                                                            maxWidth: 108,
                                                                            py: 1,
                                                                            px: 0.75,
                                                                            textAlign: 'center',
                                                                        }}
                                                                    >
                                                                        <Typography
                                                                            component="strong"
                                                                            variant="h4"
                                                                            color="primary"
                                                                            fontWeight={600}
                                                                        >
                                                                            {`55+`}
                                                                        </Typography>
                                                                    </TableCell>
                                                                    <TableCell sx={{ py: 1, px: 0.75 }}>
                                                                        <Typography
                                                                            component="span"
                                                                            variant="body1"
                                                                            color="text.secondary"
                                                                            fontWeight={300}
                                                                        >
                                                                            {`only use the telephone`}
                                                                        </Typography>
                                                                    </TableCell>
                                                                </TableRow>
                                                            </TableBody>
                                                        </Table>
                                                    </TableContainer>
                                                </Box>
                                            </Stack>
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={12} md={5}>
                                        <Paper
                                            elevation={0}
                                            sx={{
                                                borderRadius: 0,
                                                py: 4,
                                                px: 2,
                                                textAlign: 'center',
                                            }}
                                        >
                                            <Stack spacing={2}>
                                                <Typography
                                                    component="h6"
                                                    variant="body1"
                                                    color="text.secondary"
                                                    fontWeight={500}
                                                >
                                                    {`What do they need for this service?`}
                                                </Typography>
                                                <Box display="flex" alignItems="center" justifyContent="center">
                                                    <TableContainer sx={{ width: 'auto' }}>
                                                        <Table sx={{ width: 'auto' }}>
                                                            <TableBody>
                                                                <TableRow>
                                                                    <TableCell
                                                                        sx={{
                                                                            maxWidth: 80,
                                                                            py: 1,
                                                                            px: 0.75,
                                                                            textAlign: 'center',
                                                                        }}
                                                                    >
                                                                        <Typography
                                                                            component="strong"
                                                                            variant="h4"
                                                                            color="primary"
                                                                            fontWeight={600}
                                                                        >
                                                                            {`28%`}
                                                                        </Typography>
                                                                    </TableCell>
                                                                    <TableCell sx={{ py: 1, px: 0.75 }}>
                                                                        <Typography
                                                                            component="span"
                                                                            variant="body1"
                                                                            color="text.secondary"
                                                                            fontWeight={300}
                                                                        >
                                                                            {`information about the service`}
                                                                        </Typography>
                                                                    </TableCell>
                                                                </TableRow>
                                                                <TableRow>
                                                                    <TableCell
                                                                        sx={{
                                                                            maxWidth: 80,
                                                                            py: 1,
                                                                            px: 0.75,
                                                                            textAlign: 'center',
                                                                        }}
                                                                    >
                                                                        <Typography
                                                                            component="strong"
                                                                            variant="h4"
                                                                            color="primary"
                                                                            fontWeight={600}
                                                                        >
                                                                            {`33%`}
                                                                        </Typography>
                                                                    </TableCell>
                                                                    <TableCell sx={{ py: 1, px: 0.75 }}>
                                                                        <Typography
                                                                            component="span"
                                                                            variant="body1"
                                                                            color="text.secondary"
                                                                            fontWeight={300}
                                                                        >
                                                                            {`want to schedule a visit`}
                                                                        </Typography>
                                                                    </TableCell>
                                                                </TableRow>
                                                                <TableRow>
                                                                    <TableCell
                                                                        sx={{
                                                                            maxWidth: 80,
                                                                            py: 1,
                                                                            px: 0.75,
                                                                            textAlign: 'center',
                                                                        }}
                                                                    >
                                                                        <Typography
                                                                            component="strong"
                                                                            variant="h4"
                                                                            color="primary"
                                                                            fontWeight={600}
                                                                        >
                                                                            {`32%`}
                                                                        </Typography>
                                                                    </TableCell>
                                                                    <TableCell sx={{ py: 1, px: 0.75 }}>
                                                                        <Typography
                                                                            component="span"
                                                                            variant="body1"
                                                                            color="text.secondary"
                                                                            fontWeight={300}
                                                                        >
                                                                            {`speak to a technician by phone`}
                                                                        </Typography>
                                                                    </TableCell>
                                                                </TableRow>
                                                            </TableBody>
                                                        </Table>
                                                    </TableContainer>
                                                </Box>
                                            </Stack>
                                        </Paper>
                                    </Grid>
                                </Grid>
                            </Box>
                            <Box component="article" my={6}>
                                <Grid container spacing={6}>
                                    <Grid item xs={12} md={6}>
                                        <Stack spacing={2}>
                                            <Typography
                                                component="h5"
                                                variant="h5"
                                                color="text.primary"
                                                fontWeight={500}
                                            >
                                                {`Benchmark: how is the competition?`}
                                            </Typography>
                                            <Stack spacing={2}>
                                                <Typography component="p" variant="body1" fontWeight={300}>
                                                    {`At this stage, I focused on analyzing four strategic topics:`}
                                                </Typography>
                                                <Stack component="ol" spacing={1} pl={2.25}>
                                                    <Typography component="li" variant="body1" fontWeight={300}>
                                                        {`Access (which ways do their users access the service?)`}
                                                    </Typography>
                                                    <Typography component="li" variant="body1" fontWeight={300}>
                                                        {`The service's features (what users can do in the service?)`}
                                                    </Typography>
                                                    <Typography component="li" variant="body1" fontWeight={300}>
                                                        {`Usability`}
                                                    </Typography>
                                                    <Typography component="li" variant="body1" fontWeight={300}>
                                                        {`Security (how much difficulty is it to use the service?)`}
                                                    </Typography>
                                                </Stack>
                                            </Stack>
                                        </Stack>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <Paper
                                            elevation={0}
                                            sx={{
                                                borderRadius: 0,
                                                pt: 3,
                                                pb: 1,
                                                px: 1,
                                                textAlign: 'center',
                                            }}
                                        >
                                            <Box component="figure">
                                                <Box
                                                    component="img"
                                                    src="/images/projects/brastemp-experience/benchmark.png"
                                                    alt="Benchmarking analysis"
                                                    sx={{
                                                        width: '100%',
                                                        maxWidth: 460,
                                                        height: 'auto',
                                                        maxHeight: 210,
                                                        mb: 1,
                                                    }}
                                                />
                                                <Typography
                                                    component="figcaption"
                                                    variant="caption"
                                                    color="text.secondary"
                                                    fontWeight={300}
                                                >
                                                    {`Benchmarking analysis.`}
                                                </Typography>
                                            </Box>
                                        </Paper>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                        <Box component="section" mb={10} id="validationAndIdeation">
                            <Grid container spacing={6}>
                                <Grid item xs={12} md={6}>
                                    <Stack spacing={2}>
                                        <Typography component="h4" variant="h4" color="primary" fontWeight={600}>
                                            {`Validation and ideation`}
                                        </Typography>
                                        <Typography component="h5" variant="h5" color="text.primary" fontWeight={500}>
                                            {`Heuristic analysis`}
                                        </Typography>
                                        <Typography
                                            component="p"
                                            variant="body1"
                                            color="text.secondary"
                                            fontWeight={300}
                                        >
                                            {`To bring better improvements to the page, I conducted an heuristic analysis to get insights and opportunities for improvements.`}
                                        </Typography>
                                    </Stack>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Paper
                                        elevation={0}
                                        sx={{
                                            borderRadius: 0,
                                            py: 2,
                                            px: 3,
                                        }}
                                    >
                                        <Typography component="dl" variant="body1">
                                            <Typography component="dt" color="text.primary" fontWeight={500}>
                                                {`Findability`}
                                            </Typography>
                                            <Typography component="dd" color="text.secondary" fontWeight={300} mb={2}>
                                                {`Organization and prioritization of the information.`}
                                            </Typography>
                                            <Typography component="dt" color="text.primary" fontWeight={500}>
                                                {`Accessibility`}
                                            </Typography>
                                            <Typography component="dd" color="text.secondary" fontWeight={300} mb={2}>
                                                {`This service page is not accessible at all.`}
                                            </Typography>
                                            <Typography component="dt" color="text.primary" fontWeight={500}>
                                                {`Desirability`}
                                            </Typography>
                                            <Typography component="dd" color="text.secondary" fontWeight={300} mb={2}>
                                                {`Is this service useful and helpful for user needs?`}
                                            </Typography>
                                            <Typography component="dt" color="text.primary" fontWeight={500}>
                                                {`Usability`}
                                            </Typography>
                                            <Typography component="dd" color="text.secondary" fontWeight={300} mb={2}>
                                                {`Bugs and absence of returning error messages.`}
                                            </Typography>
                                            <Typography component="dt" color="text.primary" fontWeight={500}>
                                                {`Storytelling`}
                                            </Typography>
                                            <Typography component="dd" color="text.secondary" fontWeight={300}>
                                                {`Does it explain or share thoughts on what users can do?`}
                                            </Typography>
                                        </Typography>
                                    </Paper>
                                </Grid>
                            </Grid>
                            <Box my={6}>
                                <Paper
                                    elevation={0}
                                    sx={{
                                        borderRadius: 0,
                                        pt: 3,
                                        pb: 1,
                                        px: 1,
                                        textAlign: 'center',
                                    }}
                                >
                                    <Box display="flex" alignItems="flex-end" justifyContent="space-around">
                                        <Box component="figure">
                                            <Box
                                                component="img"
                                                src="/images/projects/brastemp-experience/heuristic-radar.png"
                                                alt="Heuristic analysis"
                                                sx={{
                                                    width: '100%',
                                                    maxWidth: 376,
                                                    height: 'auto',
                                                    maxHeight: 256,
                                                    mb: 1,
                                                }}
                                            />
                                            <Typography
                                                component="figcaption"
                                                variant="caption"
                                                color="text.secondary"
                                                fontWeight={300}
                                            >
                                                {`Heuristic analysis. Participants: Product Designers.`}
                                            </Typography>
                                        </Box>
                                        <Box component="figure">
                                            <Box
                                                component="img"
                                                src="/images/projects/brastemp-experience/heuristic-bars.png"
                                                sx={{
                                                    width: '100%',
                                                    maxWidth: 412,
                                                    height: 'auto',
                                                    maxHeight: 256,
                                                    mb: 1,
                                                }}
                                            />
                                            <Typography
                                                component="figcaption"
                                                variant="caption"
                                                color="text.secondary"
                                                fontWeight={300}
                                            >
                                                {`Heuristic comparison with other service pages. Participants: Product Designers.`}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Paper>
                            </Box>
                            <Box component="article" my={6}>
                                <Grid container spacing={6}>
                                    <Grid item xs={12} md={6}>
                                        <Stack spacing={2}>
                                            <Typography
                                                component="h5"
                                                variant="h5"
                                                color="text.primary"
                                                fontWeight={500}
                                            >
                                                {`Brainstorm`}
                                            </Typography>
                                            <Typography component="p" variant="body1" color="text.secondary">
                                                <Typography component="span" fontWeight={300}>
                                                    {`I discovered that users access our service page because they are looking to schedule a visit to repair their home appliance. `}
                                                </Typography>
                                                <Typography component="strong" fontWeight={500}>
                                                    {`This was the opportunity we were looking for!`}
                                                </Typography>
                                            </Typography>
                                            <Typography
                                                component="p"
                                                variant="body1"
                                                color="text.secondary"
                                                fontWeight={300}
                                            >
                                                {`The next stage was to find solutions with the team. How can we explore this scenario and improve a better way to do it?`}
                                            </Typography>
                                        </Stack>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <Paper
                                            elevation={0}
                                            sx={{
                                                borderRadius: 0,
                                                pt: 3,
                                                pb: 1,
                                                px: 1,
                                                textAlign: 'center',
                                            }}
                                        >
                                            <Box component="figure">
                                                <Box
                                                    component="img"
                                                    src="/images/projects/brastemp-experience/brainstorm.png"
                                                    alt="Brainstorm"
                                                    sx={{
                                                        width: '100%',
                                                        maxWidth: 420,
                                                        height: 'auto',
                                                        maxHeight: 204,
                                                        mb: 1,
                                                    }}
                                                />
                                                <Typography
                                                    component="figcaption"
                                                    variant="caption"
                                                    color="text.secondary"
                                                    fontWeight={300}
                                                >
                                                    {`Brainstorming session. Participants: Product Designers, Developers, Product Owner, CRO and Tech Lead.`}
                                                </Typography>
                                            </Box>
                                        </Paper>
                                    </Grid>
                                </Grid>
                            </Box>
                            <Box component="article" my={6}>
                                <Grid container spacing={6}>
                                    <Grid item xs={12} md={6}>
                                        <Stack spacing={2}>
                                            <Typography
                                                component="h5"
                                                variant="h5"
                                                color="text.primary"
                                                fontWeight={500}
                                            >
                                                {`Prioritization matrix`}
                                            </Typography>
                                            <Typography
                                                component="p"
                                                variant="body1"
                                                color="text.secondary"
                                                fontWeight={300}
                                            >
                                                {`After the brainstorming, we got a lot of ideas, and we needed to filter and choose which one should be the best choice. The prioritization matrix assisted us in prioritizing ideas based on technology and business value (the user needs we addressed from the start), and we invested in ideas with low technological effort and high business value.`}
                                            </Typography>
                                            <Stack spacing={2} pt={1}>
                                                <Typography
                                                    component="h6"
                                                    variant="body1"
                                                    color="text.primary"
                                                    fontWeight={500}
                                                >
                                                    {`Solutions from brainstorming`}
                                                </Typography>
                                                <Stack component="ol" spacing={1} pl={2.25}>
                                                    <Typography component="li" variant="body1" fontWeight={300}>
                                                        {`Offer the types of service on the page (installation, conversion and repair)`}
                                                    </Typography>
                                                    <Typography component="li" variant="body1" fontWeight={300}>
                                                        {`Map improvements (color contrast and information)`}
                                                    </Typography>
                                                </Stack>
                                            </Stack>
                                        </Stack>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <Paper
                                            elevation={0}
                                            sx={{
                                                borderRadius: 0,
                                                pt: 3,
                                                pb: 1,
                                                px: 1,
                                                textAlign: 'center',
                                            }}
                                        >
                                            <Box component="figure">
                                                <Box
                                                    component="img"
                                                    src="/images/projects/brastemp-experience/prioritization-matrix.png"
                                                    alt="Prioritization matrix"
                                                    sx={{
                                                        width: '100%',
                                                        maxWidth: 390,
                                                        height: 'auto',
                                                        maxHeight: 376,
                                                        mb: 1,
                                                    }}
                                                />
                                                <Typography
                                                    component="figcaption"
                                                    variant="caption"
                                                    color="text.secondary"
                                                    fontWeight={300}
                                                >
                                                    {`Prioritizing the improvements. Participants: Product Designers, Product Owner and Tech Lead.`}
                                                </Typography>
                                            </Box>
                                        </Paper>
                                    </Grid>
                                </Grid>
                            </Box>
                            <Box component="article" my={6}>
                                <Grid container>
                                    <Grid item xs={12}>
                                        <Stack spacing={2}>
                                            <Typography
                                                component="h5"
                                                variant="h5"
                                                color="text.primary"
                                                fontWeight={500}
                                            >
                                                {`Ideation`}
                                            </Typography>
                                            <Typography
                                                component="p"
                                                variant="body1"
                                                color="text.secondary"
                                                fontWeight={300}
                                            >
                                                {`At this stage, we already had a page of the service. We made incremental improvements and added the solutions in a strategic way. The challenge at this moment was to deliver an assertive solution without making a lot of changes.`}
                                            </Typography>
                                        </Stack>
                                    </Grid>
                                </Grid>
                            </Box>
                            <Box my={6}>
                                <Box mb={2}>
                                    <Typography component="h6" variant="body1" color="text.primary" fontWeight={500}>
                                        {`1. Offer the types of service on the page (installation, conversion and repair)`}
                                    </Typography>
                                </Box>
                                <Grid container spacing={4}>
                                    <Grid item xs={12} md={6}>
                                        <Box
                                            component="img"
                                            src="/images/projects/brastemp-experience/ideation-1a.png"
                                            alt="Origin page"
                                            sx={{
                                                mb: 1,
                                                width: '100%',
                                                height: 'auto',
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <Box
                                            component="img"
                                            src="/images/projects/brastemp-experience/ideation-1b.png"
                                            alt="New page"
                                            sx={{
                                                mb: 1,
                                                width: '100%',
                                                height: 'auto',
                                            }}
                                        />
                                    </Grid>
                                </Grid>
                                <Typography
                                    component="p"
                                    variant="body2"
                                    color="text.secondary"
                                    fontWeight={300}
                                    textAlign="center"
                                >
                                    {`A comparison of the two pages before incremental improvements: on the left is the origin page and on the right is the new page.`}
                                </Typography>
                            </Box>
                            <Box my={6}>
                                <Box mb={2}>
                                    <Typography component="h6" variant="body1" color="text.primary" fontWeight={500}>
                                        {`2. Map improvements (color contrast and information)`}
                                    </Typography>
                                </Box>
                                <Grid container spacing={4}>
                                    <Grid item xs={12} md={6}>
                                        <Box
                                            component="img"
                                            src="/images/projects/brastemp-experience/ideation-2a.png"
                                            alt="Origin page"
                                            sx={{
                                                mb: 1,
                                                width: '100%',
                                                height: 'auto',
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <Box
                                            component="img"
                                            src="/images/projects/brastemp-experience/ideation-2b.png"
                                            alt="New page"
                                            sx={{
                                                mb: 1,
                                                width: '100%',
                                                height: 'auto',
                                            }}
                                        />
                                    </Grid>
                                </Grid>
                                <Typography
                                    component="p"
                                    variant="body2"
                                    color="text.secondary"
                                    fontWeight={300}
                                    textAlign="center"
                                >
                                    {`A comparison of the two pages before incremental improvements: on the left is the origin page and on the right is the new page.`}
                                </Typography>
                            </Box>
                        </Box>
                        <Box component="section" mb={10} id="resultsAndLearnings">
                            <Grid container spacing={6}>
                                <Grid item xs={12} md={6}>
                                    <Stack spacing={2}>
                                        <Typography component="h4" variant="h4" color="primary" fontWeight={600}>
                                            {`Results and learnings`}
                                        </Typography>
                                        <Typography
                                            component="p"
                                            variant="body1"
                                            color="text.secondary"
                                            fontWeight={300}
                                        >
                                            {`In this project, I had the opportunity to use design methods of learning about our users. The biggest challenge was to adapt the process to our deadline and the user's low engagement made it difficult to interview for more details of the user's needs. Perhaps it's because at the moment of the user journey, they come to us already with a problem and then try to use our services to solve it, making our contact more difficult to make (they just want their problem to be solved!).`}
                                        </Typography>
                                    </Stack>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Paper
                                        elevation={0}
                                        sx={{
                                            borderRadius: 0,
                                            pt: 4,
                                            px: 3,
                                            pb: 6,
                                            textAlign: 'center',
                                        }}
                                    >
                                        <Stack spacing={2}>
                                            <Box
                                                component="p"
                                                display="flex"
                                                alignItems="center"
                                                justifyContent="center"
                                                gap={1}
                                            >
                                                <Typography
                                                    component="strong"
                                                    variant="h4"
                                                    color="primary"
                                                    fontWeight={600}
                                                >
                                                    {`+25%`}
                                                </Typography>
                                                <Typography
                                                    component="span"
                                                    variant="body1"
                                                    color="primary"
                                                    fontWeight={500}
                                                >
                                                    {`of users scheduling their visit online!`}
                                                </Typography>
                                            </Box>
                                            <Typography
                                                component="p"
                                                variant="body1"
                                                color="text.secondary"
                                                fontWeight={300}
                                            >
                                                {`Strategic goal achieved! 🎉 🎉`}
                                            </Typography>
                                            <Typography
                                                component="p"
                                                variant="body1"
                                                color="text.secondary"
                                                fontWeight={300}
                                            >
                                                {`-11% on telephone calls!`}
                                            </Typography>
                                        </Stack>
                                    </Paper>
                                </Grid>
                            </Grid>
                        </Box>
                    </Container>
                </Box>
            </ThemeProvider>
        </PageWrapper>
    );
};

export default BrastempExperience;
