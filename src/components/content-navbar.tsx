import { Box, Link } from '@mui/material'

type TContentNavbarProps = {
  items: Array<{
    label: string
    anchorId: string
  }>
}

function ContentNavbar({ items }: TContentNavbarProps) {
  const scrollToAnchor = (anchorId: string) => {
    const anchor = document.getElementById(anchorId)
    if (anchor) anchor.scrollIntoView({
      behavior: 'smooth',
    })
  }

  return (
    <Box component="nav" sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      pt: 8,
      pb: 9,
    }}>
      {items.map((item) => (
        <Link component="button" key={item.anchorId} color="primary" typography="body1" sx={{
          mr: 2,
          ml: 2,
          fontWeight: 500,
        }} underline="hover" onClick={() => scrollToAnchor(item.anchorId)}>{item.label}</Link>
      ))}
    </Box>
  )
}

export default ContentNavbar
