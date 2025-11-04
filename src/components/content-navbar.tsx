import { Box, Link } from '@mui/material';

type TContentNavbarProps = {
  name?: string;
  items: Array<{
    label: string;
    anchorId: string;
  }>;
};

function ContentNavbar({ name = 'Content navigation', items }: TContentNavbarProps) {
  const scrollToAnchor = (anchorId: string) => {
    const anchor = document.getElementById(anchorId);
    if (anchor) {
      anchor.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  return (
    <Box component="nav" aria-label={name}>
      <Box
        component="ol"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          pt: 8,
          pb: 9,
          listStyle: 'none',
        }}
      >
        {items.map((item) => (
          <Box
            key={item.anchorId}
            component="li"
            sx={{
              mr: 2,
              ml: 2,
            }}
          >
            <Link
              component="button"
              color="primary"
              typography="body1"
              sx={{ fontWeight: 500 }}
              underline="hover"
              onClick={() => scrollToAnchor(item.anchorId)}
            >
              {item.label}
            </Link>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default ContentNavbar;
