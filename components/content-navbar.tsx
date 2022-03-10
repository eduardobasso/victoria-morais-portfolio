import { Box, Link } from '@mui/material'

type Props = {
  items: Array<{
    label: string
    anchorId: string
  }>
}

function ContentNavbar({ items }: Props) {
  return (
    <Box component="nav" sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      pt: 8,
      pb: 9,
    }}>
      {items.map((item, index) => (
        <Link key={index} color="primary" typography="body1" sx={{
          mr: 2,
          ml: 2,
          fontWeight: 500,
        }} href={`#${item.anchorId}`}>{item.label}</Link>
      ))}
    </Box>
  )
}

export default ContentNavbar
