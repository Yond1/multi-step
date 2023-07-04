import React from 'react'
import thankyouSVG from '../../../assets/images/icon-thank-you.svg'

const ThankYou = () => {
  return (
    <section className="thankyou">
        <img src={`${thankyouSVG}`} alt="" />
        <h1>Thank you!</h1>
        <p>Thanks for confriming your subscription! We hope you have fun using our platform. If you ever need suppor, please feel free to email us at support@loremgaming.com.</p>
    </section>
  )
}

export default ThankYou