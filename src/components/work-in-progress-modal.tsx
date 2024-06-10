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
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
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
                <IconButton color="primary" id={`btnModalClose`} onClick={close}>
                    <Close />
                </IconButton>
            </Box>
            <DialogContent sx={{ pt: 9.5, px: 6, pb: 11.5 }}>
                <Box display="flex" alignItems="center" justifyContent="space-between">
                    <Typography variant="h5" fontWeight={700}>
                        {`Work in progress`}
                    </Typography>
                </Box>
                <Typography variant="subtitle1" color="textPrimary" mt={4} mb={3.75}>
                    {`This is a work in progress. But no need to worry, I'll be glad to meet you and show you a preview of my work 😃`}
                </Typography>
                <Typography variant="subtitle1" color="textPrimary" mb={0.5}>
                    {`You can find me here:`}
                </Typography>
                <List>
                    <ListItem>
                        <ListItemIcon sx={{ color: 'inherit' }}>
                            <EmailOutlined />
                        </ListItemIcon>
                        <ListItemText
                            primaryTypographyProps={{
                                variant: 'body2',
                                fontWeight: 500,
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
                                variant: 'body2',
                                fontWeight: 500,
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
