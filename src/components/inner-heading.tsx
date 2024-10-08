import { Box, Container, Typography } from '@mui/material';
import { PandaFace } from './custom-emojis';

type TInnerHeadingProps = {
    text: string;
};

function InnerHeading({ text }: TInnerHeadingProps) {
    return (
        <Box position="relative" mt={-0.125}>
            <Box color="common.black">
                <Container>
                    <Box display="flex" alignItems="flex-end" gap={3}>
                        <Typography component="p" variant="h3" fontSize={34} fontWeight={400}>
                            {text}
                        </Typography>
                        <PandaFace sx={{ fontSize: 46 }} />
                    </Box>
                </Container>
            </Box>
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    bgcolor: 'common.black',
                    maxHeight: '81%',
                    overflow: 'hidden',
                    color: 'common.white',
                }}
                aria-hidden="true"
            >
                <Container>
                    <Box display="flex" alignItems="flex-end" gap={3}>
                        <Typography component="p" variant="h3" fontSize={34} fontWeight={400}>
                            {text}
                        </Typography>
                        <PandaFace sx={{ fontSize: 46 }} />
                    </Box>
                </Container>
            </Box>
        </Box>
    );
}

export default InnerHeading;
