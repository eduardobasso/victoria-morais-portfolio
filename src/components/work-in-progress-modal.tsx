import {
    Box,
    Dialog,
    DialogContent,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography,
    useMediaQuery,
    useTheme,
} from '@mui/material';
import { Close, EmailOutlined, LinkedIn } from './custom-icons';

type TWorkInProgressModalProps = {
    open: boolean;
    onClose?: () => void;
};

function WorkInProgressModal({ open, onClose }: TWorkInProgressModalProps) {
    const close = () => {
        if (onClose) onClose();
    };

    const fullScreen = useMediaQuery(useTheme().breakpoints.down('sm'));

    return (
        <Dialog open={open} onClose={close} fullScreen={fullScreen}>
            <Box position="absolute" top={12} right={12}>
                <IconButton color="primary" id={`btnCloseWipModal`} onClick={close}>
                    <Close />
                </IconButton>
            </Box>
            <DialogContent sx={{ pt: 9.5, px: 6, pb: 11.5 }}>
                <Typography variant="h5" mb={4}>{`Work in progress`}</Typography>
                <Typography variant="body1" fontWeight={500} mb={3.75}>
                    {`This is a work in progress. But no need to worry, I'll be glad to meet you and show you a preview of my work.`}
                </Typography>
                <Typography variant="body1" fontWeight={500} mb={0.5}>
                    {`You can find me here:`}
                </Typography>
                <List>
                    <ListItem>
                        <ListItemIcon sx={{ color: 'inherit' }}>
                            <EmailOutlined />
                        </ListItemIcon>
                        <ListItemText
                            primaryTypographyProps={{
                                variant: 'button',
                            }}
                        >
                            {`victoria.morais.sa@gmail.com`}
                        </ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon sx={{ color: 'inherit' }}>
                            <LinkedIn />
                        </ListItemIcon>
                        <ListItemText
                            primaryTypographyProps={{
                                variant: 'button',
                            }}
                        >
                            {`linkedin.com/in/victoria-morais`}
                        </ListItemText>
                    </ListItem>
                </List>
            </DialogContent>
        </Dialog>
    );
}

export default WorkInProgressModal;
