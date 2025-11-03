import { Box, Card, CardContent, CardMedia, Link, Stack, Typography } from '@mui/material';
import type { Theme } from '@mui/material/styles';
import { useRouter } from 'next/router';
import { type MouseEventHandler, useState } from 'react';
import PasswordModal from './password-modal';
import WorkInProgressModal from './work-in-progress-modal';

type TProjectCardProps = {
  title: string;
  company: string;
  description: string;
  role: string;
  route: string;
  imgSrc: string;
  imgAlt: string;
  imgPos?: 'right' | 'left';
  confidential?: boolean;
  workInProgress?: boolean;
  hiddenAt?: boolean;
};

function ProjectCard({
  title,
  company,
  description,
  role,
  route,
  imgSrc,
  imgAlt,
  imgPos = 'right',
  confidential,
  workInProgress = false,
  hiddenAt = false,
}: TProjectCardProps) {
  const router = useRouter();

  const [wipModalIsOpen, setWipModalIsOpen] = useState<boolean>(false);
  const [passwordModalIsOpen, setPasswordModalIsOpen] = useState<boolean>(false);

  const openWipModal = (): void => {
    setWipModalIsOpen(true);
  };

  const closeWipModal = (): void => {
    setWipModalIsOpen(false);
  };

  const openPasswordModal = (): void => {
    setPasswordModalIsOpen(true);
  };

  const closePasswordModal = (): void => {
    setPasswordModalIsOpen(false);
  };

  const enterRoute = (): void => {
    if (route) {
      router.push(route);
    }
  };

  const verifyBeforeEnter: MouseEventHandler<HTMLDivElement | HTMLAnchorElement> = (event) => {
    event.preventDefault();
    event.stopPropagation();

    if (workInProgress) {
      openWipModal();

      return;
    }

    if (confidential) {
      const password = sessionStorage.getItem('VicMSA-pwd');

      if (password === null) {
        openPasswordModal();
      } else {
        enterRoute();
      }
    }
  };

  return (
    <>
      <Card
        elevation={0}
        sx={(theme: Theme) => ({
          borderRadius: 0,
          bgcolor: 'background.default',
          transition: theme.transitions.create(['box-shadow', 'background-color']),
          [theme.breakpoints.up('md')]: {
            p: 0,
          },
          [theme.breakpoints.only('sm')]: {
            mx: -3,
          },
          [theme.breakpoints.only('xs')]: {
            mx: -2,
          },
          '& > div': {
            '& > img': {
              opacity: 1,
              transition: theme.transitions.create('opacity'),
            },
            '& > div': {
              transition: theme.transitions.create('padding'),
            },
          },
          '&:hover, &:focus, &:focus-within': {
            bgColor: theme.palette.grey[50],
            cursor: 'pointer',
            '& > div': {
              '& > img': {
                opacity: 0.5,
              },
              [theme.breakpoints.up('md')]: {
                '& > div': {
                  pr: imgPos === 'right' ? 16.5 : 3,
                  pl: imgPos === 'left' ? 16.5 : 3,
                },
              },
            },
          },
          '&:focus, &:focus-within': {
            outline: 'none',
            boxShadow: `0 0 0 2px white, 0 0 0 4px ${theme.palette.primary.main}`,
          },
        })}
      >
        <Box
          component="div"
          sx={(theme: Theme) => ({
            [theme.breakpoints.up('md')]: {
              display: 'flex',
              flexDirection: imgPos === 'right' ? 'row' : 'row-reverse',
              alignItems: 'center',
            },
            textAlign: 'left',
          })}
          onClick={verifyBeforeEnter}
        >
          <CardContent
            sx={(theme: Theme) => ({
              flexGrow: 1,
              [theme.breakpoints.up('md')]: {
                pr: imgPos === 'right' ? 19.5 : 0,
                pl: imgPos === 'left' ? 19.5 : 0,
              },
            })}
          >
            <Link href={route} underline="none" onClick={verifyBeforeEnter} sx={{ '&:focus': { outline: 'none' } }}>
              <Stack component="h3" spacing={0}>
                <Typography component="span" variant="h4" fontWeight={500}>
                  {title}
                </Typography>
                <div>
                  {!hiddenAt && (
                    <Typography component="span" variant="overline" color="text.secondary">
                      {`at `}
                    </Typography>
                  )}
                  <Typography component="span" variant="overline" color="text.secondary">
                    {company}
                  </Typography>
                </div>
              </Stack>
            </Link>
            <Typography variant="body1" fontWeight={300} mb={1.5}>
              {description}
            </Typography>
            <Typography variant="body2" fontWeight={500}>
              {`My role: ${role}`}
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            sx={(theme: Theme) => ({
              width: '100%',
              height: 'auto',
              textAlign: 'center',
              [theme.breakpoints.up('md')]: {
                maxWidth: 518,
                maxHeight: 346,
              },
              [theme.breakpoints.down('md')]: {
                pt: 3,
              },
              [theme.breakpoints.only('sm')]: {
                // px: 2,
              },
              [theme.breakpoints.only('xs')]: {
                maxHeight: 274,
                // px: 2,
                objectFit: 'cover',
              },
            })}
            image={imgSrc}
            alt={imgAlt}
          />
        </Box>
      </Card>
      {confidential && passwordModalIsOpen && (
        <PasswordModal open={passwordModalIsOpen} onClose={closePasswordModal} onConfirm={enterRoute} />
      )}
      {workInProgress && wipModalIsOpen && <WorkInProgressModal open={wipModalIsOpen} onClose={closeWipModal} />}
    </>
  );
}

export default ProjectCard;
