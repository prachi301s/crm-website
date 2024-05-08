import React from 'react'
import FormModal from '../Layout/Modal-Layout/Form-Modals/FormModal'
import BillingAuthorizeGift from '../Form/Billing-Client-Form/BillingAuthorizeGiftForm'
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
const AuthorizeGiftModal = ({ open,
    handleClose,
    heading,
    textOne,
    textTwo,
    Icon,}) => {
  return (
    <FormModal
      open={open}
        Icon={<CardGiftcardIcon fontSize="medium" />}        /*Not proper icon */
      heading={"Authorize gift"}
      handleClose={handleClose}
      height={36}
      width={36}
      maxWidth={"sm"}
    //   buttonNameOne={"Accept}
    >
    <BillingAuthorizeGift/>
    </FormModal>
  )
}

export default AuthorizeGiftModal
