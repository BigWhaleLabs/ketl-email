import { MjmlDivider, MjmlSpacer, MjmlText } from 'mjml-react'
import AttestationType from '../../models/AttestationType'
import VerificationType from '../../models/VerificationType'
import colors from '../../styles/colors'
import openKetlWaitlist from '../../helpers/openKetlWaitlist'
import values from '../../styles/values'

export default function TwitterBlock({
  attestationType,
  twitterHandle,
}: {
  attestationType: AttestationType
  twitterHandle: string
}) {
  const ketlAppTwitterVerification = openKetlWaitlist({
    attestationType,
    passed: true,
    value: twitterHandle,
    verificationType: VerificationType.twitter,
  })

  return (
    <>
      <MjmlSpacer height={values.px24} />
      <MjmlDivider borderColor={colors.tertiary} borderWidth={values.px} />
      <MjmlSpacer height={values.px24} />
      <MjmlText
        align="center"
        color={colors.tertiary}
        fontSize={values.px14}
        lineHeight={values.px16}
        mjClass="font-primary"
      >
        You may also activate your ketl account using the X (twitter) account @
        {twitterHandle}
      </MjmlText>
      <MjmlSpacer height={values.px16} />
      <MjmlText
        align="center"
        color={colors.tertiaryDark}
        fontSize={values.px14}
        lineHeight={values.px16}
        mjClass="font-primary"
        textDecoration="underline"
      >
        <a href={ketlAppTwitterVerification} target="_blank">
          Activate with X instead
        </a>
      </MjmlText>
    </>
  )
}
