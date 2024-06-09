import { Avatar, Grid, Link, Toolbar, Typography } from '@mui/material';
import { BlackHeart } from './custom-emojis';

function PageFooter() {
    return (
        <Toolbar component="footer">
            <Grid container spacing={0.75} alignItems="center" justifyContent="center">
                <Grid item xs="auto">
                    <Grid container spacing={0.5} alignItems="center">
                        <Grid item xs="auto">
                            <Typography component="span" variant="caption" fontWeight={400}>
                                {`Developed with`}
                            </Typography>
                        </Grid>
                        <Grid item xs="auto">
                            <BlackHeart sx={{ fontSize: 8 }} />
                        </Grid>
                        <Grid item xs="auto">
                            <Typography component="span" variant="caption" fontWeight={400}>
                                {`by`}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs="auto">
                    <Avatar
                        src="/images/dev-8bit.png"
                        alt="Eduardo Basso (AKA the developer)'s photo in 8-bit style"
                        sx={{
                            width: 28,
                            height: 28,
                            borderWidth: 1,
                            borderColor: 'divider',
                            borderStyle: 'solid',
                        }}
                    />
                </Grid>
                <Grid item xs="auto">
                    <Link
                        variant="caption"
                        fontWeight={500}
                        href="https://github.com/eduardobasso"
                        target="_blank"
                        underline="hover"
                    >
                        {`Eduardo Basso`}
                    </Link>
                </Grid>
            </Grid>
        </Toolbar>
    );
}

export default PageFooter;
