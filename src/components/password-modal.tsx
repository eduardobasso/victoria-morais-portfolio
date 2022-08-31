import { ChangeEvent, FormEvent, useRef, useState } from 'react'
import { Box, Button, Dialog, DialogContent, FilledInput, FormControl, FormHelperText, Grid, IconButton, InputAdornment, InputLabel, Typography, useMediaQuery, useTheme, Zoom } from '@mui/material'
// import { setCookie } from 'nookies'

import { ArrowForward, Close } from './custom-icons'

type TPasswordModalProps = {
  open: boolean
  onClose?: () => void
  onConfirm?: () => void
}

function PasswordModal({ open, onClose, onConfirm }: TPasswordModalProps) {
  const passwordInputRef = useRef<HTMLInputElement>()

  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [passwordIsEmpty, setPasswordIsEmpty] = useState<boolean>(true)
  const [passwordIsWrong, setPasswordIsWrong] = useState<boolean>(false)

  const togglePasswordVisibility = () => setShowPassword(prevState => !prevState)

  const showErrorHelper = () => setPasswordIsWrong(() => true)
  const hideErrorHelper = () => setPasswordIsWrong(() => false)

  const resetPasswordStatus = (event: ChangeEvent<HTMLInputElement>) => {
    setPasswordIsEmpty(() => event.target.value.length === 0)

    hideErrorHelper()
  }

  console.log('render');

  const close = () => {
    if (onClose) onClose()
  }

  const confirm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    console.log('password is', passwordInputRef.current?.value)

    if (passwordInputRef.current?.value === process.env.NEXT_PUBLIC_DEFAULT_PASSWORD_VALUE) {
      console.log('password is correct') // success

      // setCookie(null, `${process.env.NEXT_PUBLIC_DEFAULT_PASSWORD_KEY}`, `${process.env.NEXT_PUBLIC_DEFAULT_PASSWORD_VALUE}`), {
      //   maxAge: 1,
      //   path: '/',
      // }

      if (onConfirm) onConfirm()
    } else {
      console.log('password is wrong') // error

      showErrorHelper()

      passwordInputRef.current?.focus()
    }

    // if (onConfirm) onConfirm()
  }

  const fullScreen = useMediaQuery(useTheme().breakpoints.down('sm'))

  return (
    <Dialog open={open} onClose={close} fullScreen={fullScreen}>
      <Box position="absolute" top={12} right={12}>
        <IconButton color="primary" id={`btnModalClose`} onClick={close}>
          <Close />
        </IconButton>
      </Box>
      <DialogContent sx={{
        pt: 9.5,
        px: 6,
        pb: 14,
      }}>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography variant="h5" fontWeight={700}>
            {`Confidential information`}
          </Typography>
        </Box>
        <Typography variant="subtitle1" color="textPrimary" mt={4} mb={5}>
          {`This case contains private information. Don't worry if you don't have the password; I'll be glad to meet you and show you my work 😃`}
        </Typography>
        <form id={`formModalPassword`} noValidate autoComplete="off" onSubmit={confirm}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm>
              <FormControl variant="filled" color="secondary" fullWidth error={passwordIsWrong}>
                <InputLabel htmlFor={`inputModalPassword`}>
                  {`Password`}
                </InputLabel>
                <FilledInput id={`inputModalPassword`} type={showPassword ? 'text' : 'password'} inputRef={passwordInputRef} endAdornment={
                  <InputAdornment position="end">
                    <Button color="secondary" size="small" sx={{
                      fontSize: 12,
                    }} onClick={togglePasswordVisibility}>
                      {showPassword ? `Hide` : `Show`}
                    </Button>
                  </InputAdornment>
                } aria-describedby={`inputModalPasswordErrorText`} onChange={resetPasswordStatus} />
                <Zoom in={passwordIsWrong}>
                  <FormHelperText id={`inputModalPasswordErrorText`}>
                    {`Wrong password`}
                  </FormHelperText>
                </Zoom>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm="auto">
              <Button type="submit" variant="contained" fullWidth sx={{
                minHeight: 56,
                px: 4,
                py: 1,
                textTransform: 'none',
              }} endIcon={<ArrowForward />} id={`btnModalOpenCase`} disabled={passwordIsEmpty}>
                {`Open case`}
              </Button>
            </Grid>
          </Grid>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default PasswordModal
